import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor ingresa un correo electrónico válido." }),
  company: z.string().min(2, { message: "Ingrese el nombre de su empresa" }),
  subject: z.string().min(2, { message: "Por favor ingresa un asunto." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error al enviar el mensaje",
        description: error.message || "Por favor intenta nuevamente más tarde.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Contáctanos</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-foreground max-w-3xl mx-auto text-lg">
            Estamos listos para escuchar tus necesidades y brindarte las soluciones que tu empresa necesita.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          <div className="lg:w-2/5">
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-6">Información de contacto</h3>
              
              <div className="mb-6">
                <p className="font-medium text-neutral-dark mb-1">Dirección:</p>
                <p className="text-neutral-medium">Rosario, Argentina</p>
              </div>
              
              <div className="mb-6">
                <p className="font-medium text-neutral-dark mb-1">Teléfono:</p>
                <p className="text-neutral-medium">+54 11 5555-1234</p>
              </div>
              
              <div className="mb-6">
                <p className="font-medium text-neutral-dark mb-1">Email:</p>
                <p className="text-neutral-medium">bacaningenieria@gmail.com</p>
              </div>
              
              <div className="mb-8">
                <p className="font-medium text-neutral-dark mb-1">Agenda una reunión:</p>
                <a 
                  href="https://calendly.com/bacaningenieria/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block text-primary hover:text-accent transition-colors font-medium"
                >
                  Reunión gratuita de 30 minutos
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary hover:bg-accent rounded-full flex items-center justify-center transition duration-300">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary hover:bg-accent rounded-full flex items-center justify-center transition duration-300">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary hover:bg-accent rounded-full flex items-center justify-center transition duration-300">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
                <h3 className="font-montserrat font-semibold text-2xl text-primary mb-6">Envíanos un mensaje</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-medium">Nombre</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Tu nombre" 
                            {...field} 
                            className="w-full p-3 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="tu@email.com" 
                            type="email" 
                            {...field} 
                            className="w-full p-3 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-neutral-medium">Empresa</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Nombre de tu empresa" 
                          {...field} 
                          className="w-full p-3 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-neutral-medium">Asunto</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="¿En qué podemos ayudarte?" 
                          {...field} 
                          className="w-full p-3 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-neutral-medium">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos sobre tu proyecto o necesidades..." 
                          {...field} 
                          className="w-full p-3 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          rows={5} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-foreground font-medium py-3 px-6"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
