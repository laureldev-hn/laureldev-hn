import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

const Services = () => (
  <Section id="servicios">
    <SectionHeading
      eyebrow="Qué hacemos"
      title="Seis frentes para cerrar la brecha entre tu operación y tu tecnología"
      description="Resolvemos problemas concretos de cooperativas, bancos e instituciones, empezando por el que más te está costando hoy."
    />

    <div className="mt-16 grid gap-px overflow-hidden rounded-xl bg-border md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal
            key={service.slug}
            delay={(index % 3) * 0.08}
            className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-surface"
          >
            <div className="flex items-start justify-between">
              <Icon className="h-7 w-7 text-navy" aria-hidden />
              <span className="font-montserrat text-xs font-semibold tracking-[0.18em] text-muted-foreground/60">
                {service.code}
              </span>
            </div>

            <h3 className="mt-6 font-montserrat text-xl font-bold text-navy">{service.title}</h3>

            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              <span className="font-semibold text-navy">¿El problema? </span>
              {service.problem}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.solution}</p>

            <Link
              href={`/servicios/${service.slug}`}
              className="mt-auto inline-flex items-center gap-2 pt-8 font-montserrat text-sm font-semibold text-navy"
            >
              <span className="border-b-2 border-gold pb-0.5">Saber más</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Services;
