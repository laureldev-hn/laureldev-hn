import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { securityPractices, complianceBadges } from "@/data/security";

const Security = () => (
  <Section id="seguridad">
    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Reveal>
          <SectionHeading
            eyebrow="Seguridad y cumplimiento"
            title="El riesgo forma parte de la agenda desde el primer día"
            description="Trabajamos con instituciones supervisadas. Por eso la seguridad, la trazabilidad y la evidencia para auditoría se diseñan desde el inicio del proyecto."
          />

          <ul className="mt-10 flex flex-wrap gap-2">
            {complianceBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-navy/15 bg-surface px-4 py-2 font-montserrat text-xs font-semibold text-navy"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {securityPractices.map((practice, index) => {
          const Icon = practice.icon;
          return (
            <Reveal key={practice.title} delay={(index % 2) * 0.08}>
              <div className="flex h-full flex-col border-t border-border pt-6">
                <Icon className="h-5 w-5 text-gold" aria-hidden />
                <h3 className="mt-4 font-montserrat text-base font-bold text-navy">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {practice.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </Section>
);

export default Security;
