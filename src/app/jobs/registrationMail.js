import transport from "../lib/mail";


export default {
    key: 'RegistrationMail',
    options: {
        delay: 3000,
        priority: 3
    },
    async handle({ data }){
        const { user } = data;

        const mail = await transport.connect()
        mail.sendMail({
            from: 'Ola <contato@thais.com.br',
            to: `${user.name} <${user.email}`,
            subject: `Cadastro de usuario`,
            html: `Ola, ${user.name}, bem vindo`
        })
    }
}
