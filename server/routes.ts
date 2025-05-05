import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import fs from "fs";
import path from "path";

// Ruta al archivo donde se guardarán los mensajes de contacto
const contactMessagesFile = path.join(process.cwd(), "contact_messages.json");

// Función para guardar un mensaje de contacto en el archivo JSON
async function saveContactMessage(message: any): Promise<boolean> {
  try {
    let messages = [];
    
    // Verificar si el archivo ya existe
    if (fs.existsSync(contactMessagesFile)) {
      const fileContent = fs.readFileSync(contactMessagesFile, "utf8");
      messages = JSON.parse(fileContent);
    }
    
    // Añadir fecha y hora al mensaje
    const messageWithTimestamp = {
      ...message,
      timestamp: new Date().toISOString()
    };
    
    // Añadir el nuevo mensaje a la lista
    messages.push(messageWithTimestamp);
    
    // Guardar la lista actualizada en el archivo
    fs.writeFileSync(contactMessagesFile, JSON.stringify(messages, null, 2), "utf8");
    
    console.log(`✅ Mensaje de contacto guardado en ${contactMessagesFile}`);
    return true;
  } catch (error) {
    console.error("❌ Error al guardar el mensaje de contacto:", error);
    return false;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Log the form submission
      console.log("Formulario de contacto recibido:", contactData);
      
      // Guardar el mensaje en el archivo JSON
      const messageSaved = await saveContactMessage(contactData);
      
      if (messageSaved) {
        res.status(200).json({ 
          message: "¡Mensaje recibido! Nos pondremos en contacto contigo pronto." 
        });
      } else {
        console.warn("Error al guardar el mensaje de contacto");
        res.status(500).json({ 
          message: "Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde." 
        });
      }
    } catch (error) {
      console.error("Error en formulario de contacto:", error);
      res.status(400).json({ 
        message: "Datos del formulario inválidos. Por favor, verifica tus entradas e intenta nuevamente." 
      });
    }
  });

  // Endpoint para ver los mensajes de contacto (solo para propósitos de desarrollo)
  app.get("/api/admin/contact-messages", (req, res) => {
    try {
      if (!fs.existsSync(contactMessagesFile)) {
        return res.status(200).json({ messages: [] });
      }
      
      const fileContent = fs.readFileSync(contactMessagesFile, "utf8");
      const messages = JSON.parse(fileContent);
      
      res.status(200).json({ messages });
    } catch (error) {
      console.error("Error al leer los mensajes de contacto:", error);
      res.status(500).json({ 
        message: "Error al obtener los mensajes de contacto" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
