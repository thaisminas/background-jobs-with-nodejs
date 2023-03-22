import generatePassword from "password-generator";
import transport from "../lib/mail";
import nodemailer from "nodemailer";
import mailConfig from "../config/mail";
import Queue from "../lib/queue";
export default {
    async store(req, res){
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: generatePassword(15, false)
        }

        await Queue.add('RegistrationMail', { user })

        const mail = await transport.connect()

          mail.sendMail({
             from: 'Ola <contato@thais.com.br',
             to: `${name} <${email}`,
             subject: `Cadastro de usuario`,
             html: `Ola, ${name}, bem vindo`
         })

        return res.json(user)
    }
}
