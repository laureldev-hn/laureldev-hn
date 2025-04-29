import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically save to a database or send an email
      // For now we'll just log it and return success
      console.log("Contact form submission:", validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Your message has been received. We'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
