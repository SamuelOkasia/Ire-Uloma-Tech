import nodemailer from 'nodemailer';


export async function POST(request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: email,
        to: 'ojadia@gmail.com',
        subject: 'New contact form submission',
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ status: 'OK' }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ status: 'Error', message: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}