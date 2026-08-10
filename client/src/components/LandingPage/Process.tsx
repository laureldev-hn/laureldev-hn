import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/process";

const Process = () => (
  <Section id="proceso" tone="surface">
    <SectionHeading
      eyebrow="Cómo trabajamos"
      title="Un proceso que tu comité puede seguir con claridad"
      description="Sabes qué se está construyendo, cuánto falta y qué se entrega en cada etapa. Alcance, fechas y entregables quedan definidos desde el inicio."
    />

    <ol className="mt-16 grid gap-px overflow-hidden rounded-xl bg-border md:grid-cols-3 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.step} className="bg-background">
          <Reveal delay={index * 0.07} className="flex h-full flex-col p-7">
            <span className="font-montserrat text-3xl font-bold tracking-tightest text-gold">
              {step.step}
            </span>
            <h3 className="mt-4 font-montserrat text-lg font-bold text-navy">{step.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
            <span className="mt-6 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
              {step.duration}
            </span>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Process;
