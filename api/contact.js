import * as Sentry from "@sentry/node";
import nodemailer from 'nodemailer';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.PROJECT_ID
    }
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'الرجاء تعبئة جميع الحقول المطلوبة' });
  }

  try {
    // Configure your email transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM, // sender address
      to: process.env.EMAIL_TO, // list of receivers
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'تم إرسال رسالتك بنجاح' });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء إرسال رسالتك. حاول مرة أخرى لاحقًا.' });
  }
}