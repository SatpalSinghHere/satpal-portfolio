import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('Request:', request);

  // Extract data from the request body
  const { name, email, message } = await request.json();

  // Simple validation
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'All fields are required.' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // e.g., 'smtp.gmail.com'
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    // Send an email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: process.env.RECIPIENT_EMAIL, // recipient address
      subject: `${name}(${email}) sent an email`, // Subject line
      text: message, // Plain text body
    });

    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
