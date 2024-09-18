import axios from 'axios';
import nodemailer from 'nodemailer'; // For sending email notifications

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, item_name, phone, status, vinNumber, invoice_number } = req.body;

    try {
      // Step 1: Get PayPal Access Token
      const tokenResponse = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        new URLSearchParams({ grant_type: 'client_credentials' }),
        {
          auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;

      // Step 2: Create the invoice with a custom invoice number
      const invoiceResponse = await axios.post(
        'https://api-m.sandbox.paypal.com/v2/invoicing/invoices',
        {
          detail: {
            invoice_number: invoice_number,  // Custom invoice number
            currency_code: 'USD',
            note: 'Invoice for your purchase',
            payment_term: {
              term_type: 'DUE_ON_RECEIPT',
            },
          },
          invoicer: {
            name: {
              given_name: 'Auto Audit',
            },
            email_address: 'bilalidrees.bi700@gmail.com',
          },
          primary_recipients: [
            {
              billing_info: {
                email_address: email,
              },
            },
          ],
          items: [
            {
              name: item_name,
              quantity: 1,
              unit_amount: {
                currency_code: 'USD',
                value: 10,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const invoiceId = invoiceResponse.data.id;

      // Step 3: Send the invoice
      await axios.post(
        `https://api-m.sandbox.paypal.com/v2/invoicing/invoices/${invoiceId}/send`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Step 4: Send confirmation email to the recipient
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "bilalidrees.bi700@gmail.com", // Your email address
          pass: process.env.EMAIL_PASSWORD, // Your email password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: `Invoice #${invoice_number} Sent`,
        text: `Dear Customer, Your invoice #${invoice_number} has been sent. You can pay it using the PayPal invoice link. Thank you!`,
      };

      await transporter.sendMail(mailOptions);

      // Send success response
      res.status(200).json({ message: `Invoice #${invoice_number} sent successfully!` });
    } catch (error) {
      console.error('Error sending PayPal invoice:', error);
      res.status(500).json({ message: 'Failed to send invoice', error: error.response?.data });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
