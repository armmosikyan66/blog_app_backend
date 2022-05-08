import { SentMessageInfo } from 'nodemailer/lib/sendmail-transport';

import mailTransporter from '../core/mailer';

interface SendEmailProps {
    emailFrom: string;
    emailTo: string;
    subject: string;
    html: string;
}

class EmailService {
    async sendMail({emailFrom, emailTo, subject, html}: SendEmailProps) {
        return mailTransporter.sendMail(
            {
                from: emailFrom,
                to: emailTo,
                subject: subject,
                html: html,
            },
            function (err: Error | null, info: SentMessageInfo) {
                if (err) {
                    console.log(err);
                    return err;
                } else {
                    console.log(info);
                    return info;
                }
            },
        );
    };
}

export default new EmailService();