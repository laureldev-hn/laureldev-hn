import { useState } from "react";
import { MapPin, Mail, Phone, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/data/site";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
  company: z.string().min(2, { message: "Indica el nombre de tu institución" }),
  subject: z.string().min(3, { message: "El asunto debe tener al menos 3 caracteres" }),
  message: z.string().min(10, { message: "Cuéntanos un poco más, al menos 10 caracteres" }),
  website: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbwxYPHi5GQGIdTRkqlI7VW1T6NOAXzDomDreRZ0Yf0mBlZxdAvcrqCvqZ4AFS4896Oy/exec";

const expectations = [
  "Respondemos en menos de un día hábil.",
  "La primera conversación es un diagnóstico para entender tu situación.",
  "Firmamos acuerdo de confidencialidad antes de revisar información sensible.",
];

const contactItems = [
  { icon: MapPin, label: "Ubicación", value: siteConfig.location, href: undefined },
  { icon: Mail, label: "Correo", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Teléfono", value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      website: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Campo trampa: si viene lleno, es un bot. Simulamos éxito y descartamos.
    if (data.website) {
      form.reset();
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.name,
          email: data.email,
          asunto: data.subject,
          empresa: data.company,
          mensaje: data.message,
        }),
        // Google Apps Script no expone cabeceras CORS, así que la respuesta no es legible.
        mode: "no-cors",
      });

      toast({
        title: "Mensaje enviado",
        description: "Gracias por escribirnos. Te respondemos en menos de un día hábil.",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast({
        title: "No pudimos enviar tu mensaje",
        description: `Intenta de nuevo o escríbenos directamente a ${siteConfig.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contacto" tone="surface">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Hablemos"
            title="Agenda un diagnóstico sin costo para tu institución"
            description="Cuéntanos qué te está frenando hoy. Revisamos tu situación con un arquitecto y te proponemos el mejor camino para avanzar."
          />

          <ul className="mt-10 space-y-4">
            {expectations.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="text-sm text-ink/80">{item}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-1">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-background">
                  <Icon className="h-4 w-4 text-navy" aria-hidden />
                </span>
                <div>
                  <dt className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">
                    {href ? (
                      <a href={href} className="transition-colors hover:text-navy">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="name" className="h-12" />
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
                      <FormLabel>Institución</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="organization" className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo corporativo</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" autoComplete="email" className="h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-12"
                        placeholder="Ej. Canal digital para asociados"
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
                    <FormLabel>¿Qué necesitas resolver?</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="hidden" aria-hidden>
                    <FormControl>
                      <Input {...field} tabIndex={-1} autoComplete="off" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" size="xl" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Enviando..." : "Solicitar diagnóstico"}
              </Button>

              <p className="text-xs text-muted-foreground">
                Al enviar aceptas que te contactemos para dar seguimiento a tu solicitud. No
                compartimos tus datos con terceros.
              </p>
            </form>
          </Form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
