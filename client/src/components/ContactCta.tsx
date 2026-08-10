import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionLink } from "@/components/SectionLink";

interface ContactCtaProps {
  title?: string;
  description?: string;
}

const ContactCta = ({
  title = "¿Tienes un reto parecido en tu institución?",
      description = "Agenda una conversación con un arquitecto. Revisamos tu situación y te proponemos un camino claro, con alcance y tiempos estimados.",
}: ContactCtaProps) => (
  <Section tone="surface" className="py-16 md:py-20">
    <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
      <SectionHeading title={title} description={description} className="max-w-2xl" as="h2" />
      <Button asChild size="xl" className="shrink-0">
        <SectionLink href="/#contacto">
          Agendar diagnóstico
          <ArrowRight className="ml-1" />
        </SectionLink>
      </Button>
    </Reveal>
  </Section>
);

export default ContactCta;
