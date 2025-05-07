import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  message: z.string().min(1, 'El mensaje es requerido'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
