import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // In a production environment, we'd store this in a database
      // For this demo, we'll just log it
      console.log("Contact form submission:", contactData);
      
      res.status(200).json({ 
        message: "Message received! We will contact you shortly." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        message: "Invalid form data. Please check your inputs and try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
