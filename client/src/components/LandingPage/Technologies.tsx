import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { technologies, integrations } from "@/data/technologies";

const Technologies = () => (
  <Section id="tecnologia">
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <div>
        <SectionHeading
          eyebrow="Tecnología"
          title="Herramientas maduras, elegidas por lo que sostienen a largo plazo"
          description="Trabajamos con tecnología probada en producción y con soporte de largo plazo, porque el sistema que construimos hoy tiene que seguir funcionando dentro de diez años."
        />

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <li key={tech.name} className="bg-background">
                <Reveal
                  delay={(index % 5) * 0.05}
                  className="flex h-full flex-col items-center justify-center gap-3 px-3 py-7 text-center"
                >
                  <Icon className="h-7 w-7 text-navy" aria-hidden />
                  <span className="text-xs font-semibold text-ink/70">{tech.name}</span>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      <Reveal className="rounded-2xl border border-border bg-surface p-8 md:p-10">
        <h3 className="font-montserrat text-xl font-bold text-navy">
          Integramos con lo que ya tienes
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          No te pedimos que reemplaces tu core para poder trabajar contigo. Construimos sobre la
          infraestructura que tu institución ya opera y ya conoce.
        </p>

        <ul className="mt-8 space-y-4">
          {integrations.map((integration) => (
            <li key={integration} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span className="text-sm text-ink/80">{integration}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Section>
);

export default Technologies;
