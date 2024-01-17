import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, user_email, subject, message } = await request.json();

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Example using Gmail; replace with your email service details
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASSWORD  // Your email password
        }
    });
    console.log( process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)
    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address (your email)
        to: 'ojadia@gmail.com',   // Where you want to receive the messages
        subject: `New message from ${name}: ${subject}`,
        text: `Message from ${user_email}: \n\n${message}`
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ status: 'OK', message: 'Email sent successfully' }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Failed to send email', error);
        return new Response(JSON.stringify({ status: 'Error', message: 'Email sending failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
