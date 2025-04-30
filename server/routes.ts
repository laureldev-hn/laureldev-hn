import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Log the form submission
      console.log("Formulario de contacto recibido:", contactData);
      
      // Enviar correo de notificación
      const emailSent = await sendContactNotification(contactData);
      
      if (emailSent) {
        res.status(200).json({ 
          message: "¡Mensaje recibido! Nos pondremos en contacto contigo pronto." 
        });
      } else {
        // Si el correo no se envía correctamente, aún así aceptamos el formulario
        // pero registramos el error
        console.warn("El formulario se recibió pero el correo no pudo enviarse");
        res.status(200).json({ 
          message: "¡Mensaje recibido! Nos pondremos en contacto contigo pronto.",
          warning: "No se pudo enviar la notificación por correo electrónico."
        });
      }
    } catch (error) {
      console.error("Error en formulario de contacto:", error);
      res.status(400).json({ 
        message: "Datos del formulario inválidos. Por favor, verifica tus entradas e intenta nuevamente." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
