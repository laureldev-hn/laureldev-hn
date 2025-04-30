import { MailService } from '@sendgrid/mail';

// Verificar que exista la clave API de SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.warn("⚠️ SENDGRID_API_KEY no está configurada. El envío de correos no funcionará.");
}

// Configurar el servicio de correo
const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Función para enviar correos electrónicos utilizando SendGrid
 * 
 * @param params Parámetros del correo electrónico
 * @returns Promise<boolean> Indica si el correo se envió correctamente
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('Error: SENDGRID_API_KEY no está configurada');
      return false;
    }

    const message = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };

    await mailService.send(message);
    
    console.log(`✅ Correo enviado a ${params.to}`);
    return true;
  } catch (error) {
    console.error('❌ Error al enviar correo electrónico:', error);
    return false;
  }
}

/**
 * Función para enviar notificaciones del formulario de contacto
 * 
 * @param contactData Datos del formulario de contacto
 * @returns Promise<boolean> Indica si la notificación se envió correctamente
 */
export async function sendContactNotification(contactData: {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  // Correo destinatario (administrador del sitio)
  const adminEmail = 'contact@laureldev.hn';
  
  // Correo que aparecerá como remitente
  const fromEmail = 'noreply@laureldev.hn';
  
  // Asunto del correo
  const emailSubject = `Nuevo mensaje de contacto: ${contactData.subject}`;
  
  // Contenido del correo en formato texto plano
  const textContent = `
    Nuevo mensaje de contacto:
    
    Nombre: ${contactData.name}
    Correo: ${contactData.email}
    Empresa: ${contactData.company}
    Asunto: ${contactData.subject}
    
    Mensaje:
    ${contactData.message}
  `;
  
  // Contenido del correo en formato HTML
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #11385b;">Nuevo mensaje de contacto</h2>
      <div style="border-left: 4px solid #fec53a; padding-left: 15px; margin: 20px 0;">
        <p><strong>Nombre:</strong> ${contactData.name}</p>
        <p><strong>Correo:</strong> ${contactData.email}</p>
        <p><strong>Empresa:</strong> ${contactData.company}</p>
        <p><strong>Asunto:</strong> ${contactData.subject}</p>
      </div>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        <h3 style="margin-top: 0; color: #333;">Mensaje:</h3>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
      </div>
      <div style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">
        <p>Este es un mensaje automático enviado desde el formulario de contacto de LaurelDev.</p>
      </div>
    </div>
  `;
  
  return sendEmail({
    to: adminEmail,
    from: fromEmail,
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
  });
}