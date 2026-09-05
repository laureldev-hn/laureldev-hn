import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/data/industries";

const Industries = () => (
  <Section id="industrias" tone="navy">
    <SectionHeading
      onDark
      eyebrow="Dónde trabajamos"
      title="Conocemos el sector financiero — y acompañamos a instituciones que necesitan la misma rigurosidad"
      description="Nuestro foco principal son cooperativas y bancos. También trabajamos con organismos de cooperación e instituciones que requieren procesos digitales con validez legal y trazabilidad."
    />

    <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        return (
          <Reveal
            key={industry.code}
            delay={(index % 2) * 0.1}
            className="border-t border-white/15 pt-8"
          >
            <Icon className="h-5 w-5 text-white/50" aria-hidden />

            <h3 className="mt-5 font-montserrat text-2xl font-bold text-white">{industry.name}</h3>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">{industry.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {industry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Industries;
