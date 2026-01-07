/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Configure o transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "server18.mailgrid.com.br",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });

  try {
    await transporter.sendMail({
      from: `"DESENVOLVIMENTO - Fale Conosco" <${process.env.SMTP_USER}>`,
      to: process.env.DESTINATION_EMAIL as string,
      subject: "DESENVOLVIMENTO - Nova mensagem",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Nova Mensagem - DESENVOLVIMENTO</title>
        <style type="text/css">
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #FDC300;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 0 0 5px 5px;
            border: 1px solid #e1e1e1;
            border-top: none;
          }
          .info-box {
            background-color: white;
            border: 1px solid #e1e1e1;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
          }
          .info-title {
            color: #224276;
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 16px;
          }
          .info-value {
            color: #555;
            font-size: 14px;
            padding-left: 10px;
            border-left: 3px solid #FDC300;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2 style="color: #224276; margin: 0;">DESENVOLVIMENTO - Nova mensagem recebida</h2>
        </div>
        
        <div class="content">
          <div class="info-box">
            <div class="info-title">Nome:</div>
            <div class="info-value">${name}</div>
          </div>
          
          <div class="info-box">
            <div class="info-title">Email:</div>
            <div class="info-value">${email}</div>
          </div>
          
          <div class="info-box">
            <div class="info-title">Mensagem:</div>
            <div class="info-value">${message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Esta mensagem foi enviada através do formulário de contato do site DESENVOLVIMENTO.</p>
          <p>© ${new Date().getFullYear()} DESENVOLVIMENTO - Todos os direitos reservados</p>
        </div>
      </body>
      </html>
      `,
    });
    
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ message: `Erro SMTP: ${error.message}` });
  }
}
