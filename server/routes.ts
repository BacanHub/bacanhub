import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // Store contact in the database
      const savedContact = await storage.saveContact(contactData);
      
      return res.status(201).json({
        success: true,
        message: "Mensaje enviado correctamente",
        contact: savedContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Error de validación",
          errors: validationError.message
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Error al procesar la solicitud"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
