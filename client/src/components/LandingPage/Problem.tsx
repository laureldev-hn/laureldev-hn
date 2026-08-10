import { Clock, Layers, FileWarning, TrendingDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const painPoints = [
  {
    icon: Layers,
    title: "Sistemas que no se hablan entre sí",
    body: "El core por un lado, la cartera por otro y los convenios en hojas de cálculo. Cada reporte gerencial termina dependiendo de una conciliación manual.",
  },
  {
    icon: Clock,
    title: "Proyectos que se alargan",
    body: "Alcances que cambian, fechas que se mueven y una salida a producción que se corre trimestre a trimestre mientras los asociados esperan mejores canales digitales.",
  },
  {
    icon: FileWarning,
    title: "Riesgo regulatorio acumulado",
    body: "Observaciones pendientes, bitácoras incompletas y documentación técnica por completar. El día de la auditoría llega siempre antes de lo previsto.",
  },
  {
    icon: TrendingDown,
    title: "Expectativas digitales más altas",
    body: "El asociado de hoy espera resolver desde el teléfono lo que antes hacía en ventanilla. Si la experiencia digital no acompaña, la relación se debilita.",
  },
];

const Problem = () => (
  <Section id="problema" tone="surface">
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <Reveal>
        <SectionHeading
          eyebrow="El problema"
          title="La tecnología dejó de ser un área de soporte y se volvió parte del crecimiento"
          description="Las cooperativas, los bancos y las instituciones avanzan cuando su operación diaria está respaldada por sistemas confiables, integrados y listos para el nivel de servicio que sus usuarios ya esperan."
        />
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
        {painPoints.map(({ icon: Icon, title, body }, index) => (
          <Reveal key={title} delay={index * 0.08} className="bg-background p-7">
            <Icon className="h-6 w-6 text-gold" aria-hidden />
            <h3 className="mt-5 font-montserrat text-lg font-bold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default Problem;
