import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre es demasiado corto" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().min(2, { message: "Ingrese el nombre de su empresa" }),
  message: z.string().min(10, { message: "El mensaje es demasiado corto" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Comienza Tu Transformación
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Contáctanos para iniciar el camino hacia la modernización de tu
            empresa con soluciones adaptadas a tus necesidades.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-primary">
                  Envíanos un mensaje
                </h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-montserrat font-medium">
                            Nombre completo
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              {...field}
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
                          <FormLabel className="font-montserrat font-medium">
                            Correo electrónico
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="tu@email.com"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-montserrat font-medium">
                            Empresa
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre de tu empresa"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              {...field}
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
                        <FormItem>
                          <FormLabel className="font-montserrat font-medium">
                            Mensaje
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="¿Cómo podemos ayudarte?"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary text-white font-montserrat font-semibold py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="font-montserrat font-semibold text-2xl mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">
                      Dirección
                    </h4>
                    <p>Av. Corrientes 1234, CABA, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">Email</h4>
                    <p>contacto@bacan.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium mb-1">
                      Teléfono
                    </h4>
                    <p>+54 11 5555-7890</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-montserrat font-medium mb-4">
                  Síguenos en redes sociales
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-30 transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-30 transition duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-30 transition duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-30 transition duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="mt-10 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Skyline de Buenos Aires, Argentina"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
