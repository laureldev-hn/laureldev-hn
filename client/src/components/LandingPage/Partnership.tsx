import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  partnership,
  partnershipBadges,
  partnershipCapabilities,
  partnershipReinforcements,
  partnershipTracks,
} from "@/data/partnership";

const Partnership = () => (
  <Section id="alianza" tone="navy">
    <Reveal>
      <SectionHeading
        onDark
        eyebrow={partnership.eyebrow}
        title={partnership.title}
        description={partnership.description}
      />

      <ul className="mt-10 flex flex-wrap gap-2">
        {partnershipBadges.map((badge) => (
          <li
            key={badge}
            className="rounded-full border border-white/20 px-4 py-2 font-montserrat text-xs font-semibold text-white/80"
          >
            {badge}
          </li>
        ))}
      </ul>
    </Reveal>

    <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
      {partnershipCapabilities.map((capability, index) => {
        const Icon = capability.icon;
        return (
          <Reveal
            key={capability.title}
            delay={(index % 2) * 0.08}
            className="border-t border-white/15 pt-8"
          >
            <Icon className="h-5 w-5 text-gold" aria-hidden />
            <h3 className="mt-5 font-montserrat text-xl font-bold text-white">
              {capability.title}
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-white/70">
              {capability.description}
            </p>
          </Reveal>
        );
      })}
    </div>

    <Reveal className="mt-16 rounded-2xl border border-white/15 bg-white/[0.04] p-8 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h3 className="font-montserrat text-xl font-bold text-white">
            {partnership.reinforcementTitle}
          </h3>
          <ul className="mt-6 space-y-4">
            {partnershipReinforcements.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="text-sm leading-relaxed text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          {partnershipTracks.map((track) => (
            <div key={track.title}>
              <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {track.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </Section>
);

export default Partnership;
