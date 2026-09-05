import { Link } from "wouter";
import { ArrowUpRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { caseStudies, featuredCase } from "@/data/cases";

const otherCases = caseStudies.filter((item) => item.slug !== featuredCase.slug);

const CaseStudies = () => (
  <Section id="casos" tone="surface">
    <SectionHeading
      eyebrow="Casos de éxito"
      title="Resultados que se pueden auditar"
      description="Cada proyecto se mide contra el problema que vino a resolver. Estos son algunos de los que podemos contar públicamente."
    />

    <Reveal className="mt-16">
      <article className="overflow-hidden rounded-2xl border border-border border-t-4 border-t-gold bg-background">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <span>{featuredCase.sector}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
              <span>{featuredCase.year}</span>
            </div>

            <h3 className="mt-6 font-montserrat text-2xl font-bold tracking-tightest text-navy md:text-4xl">
              {featuredCase.headline}
            </h3>
            <p className="mt-2 font-montserrat text-sm font-semibold text-ink/60">
              {featuredCase.clientProfile}
            </p>

            <dl className="mt-10 space-y-7">
              <div>
                <dt className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  El reto
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {featuredCase.challenge}
                </dd>
              </div>
              <div>
                <dt className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  La solución
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {featuredCase.solution}
                </dd>
              </div>
            </dl>

            <Button asChild className="mt-10">
              <Link href={`/casos/${featuredCase.slug}`}>
                Leer el caso completo
                <ArrowUpRight />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col justify-between gap-8 border-t border-border bg-navy p-8 text-white md:p-12 lg:border-l lg:border-t-0">
            <div>
              <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                El impacto
              </p>
              <ul className="mt-8 space-y-8">
                {featuredCase.results.map((result) => (
                  <li key={result.label}>
                    <p className="font-montserrat text-4xl font-bold tracking-tightest text-gold">
                      {result.value}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{result.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            {featuredCase.quote ? (
              <figure className="border-t border-white/15 pt-8">
                <Quote className="h-5 w-5 text-gold" aria-hidden />
                <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                  {featuredCase.quote.text}
                </blockquote>
                <figcaption className="mt-4 text-xs text-white/50">
                  {featuredCase.quote.author} — {featuredCase.quote.role}
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>

    {otherCases.length > 0 ? (
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {otherCases.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.08}>
            <Link
              href={`/casos/${item.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-background p-8 transition-colors hover:border-navy/30"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <span>{item.sector}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
                <span>{item.year}</span>
              </div>
              <h3 className="mt-5 font-montserrat text-xl font-bold text-navy">{item.headline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 font-montserrat text-sm font-semibold text-navy">
                <span className="border-b-2 border-gold pb-0.5">Ver el caso</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    ) : null}
  </Section>
);

export default CaseStudies;
