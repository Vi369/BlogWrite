import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);


const SendEmail = async(email,subject,emailType)=>{
try {
    const response = await resend.emails.send({
        from: process.env.RESEND_ADMIN_EMAIL,
        to: email,
        subject: subject,
        react: emailType,
    });
    return response;

} catch (emailError) {
    console.log("Error during sending email:", emailError);
    return null;
}
}

export default SendEmail;