import nodemailer from 'nodemailer'
import mailConfig from '../config/mail'
export default {
    async connect() {
        return nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
    }
}
