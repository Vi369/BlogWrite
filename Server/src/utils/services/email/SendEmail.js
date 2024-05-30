import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: TO send any kind of email modify 
const SendEmail = async()=>{
try {
    await resend.emails.send({
        from: process.env.RESEND_ADMIN_EMAIL,
        to: email,
        subject: subject,
        react: <EmailTemplate firstName="John" product="MyApp" />,
    });

} catch (emailError) {
    
}
}

export default SendEmail;