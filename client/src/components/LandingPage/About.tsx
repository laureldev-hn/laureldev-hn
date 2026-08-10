import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { team, teamStory } from "@/data/team";

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const About = () => (
  <Section id="nosotros" tone="navy">
    <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <Reveal>
        <SectionHeading onDark eyebrow={teamStory.eyebrow} title={teamStory.title} />
        <div className="mt-8 space-y-5">
          {teamStory.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-white/70 text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {team.map((member, index) => (
          <Reveal
            key={`${member.name}-${member.role}`}
            delay={(index % 2) * 0.08}
            className="rounded-xl border border-white/12 bg-white/[0.04] p-6"
          >
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div
                aria-hidden
                className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-montserrat text-lg font-bold text-gold"
              >
                {initials(member.name)}
              </div>
            )}

            <h3 className="mt-5 font-montserrat text-base font-bold text-white">{member.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{member.bio}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
