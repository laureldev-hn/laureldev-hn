import { Link, useRoute } from "wouter";
import { ArrowUpRight, Check, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import NotFound from "@/pages/not-found";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { caseStudies, getCaseBySlug } from "@/data/cases";
import { siteConfig } from "@/data/site";

const CaseStudyPage = () => {
  const [, params] = useRoute("/casos/:slug");
  const study = params?.slug ? getCaseBySlug(params.slug) : undefined;

  useDocumentMeta({
    title: study
      ? `${study.headline} — Caso de éxito | ${siteConfig.name}`
      : `Caso no encontrado | ${siteConfig.name}`,
    description: study?.summary,
  });

  if (!study) return <NotFound />;

  const relatedCases = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <>
      <PageHero
        eyebrow="Caso de éxito"
        title={study.headline}
        description={study.summary}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Casos de éxito", href: "/#casos" },
          { label: study.sector },
        ]}
        meta={[study.clientProfile, study.sector, study.year]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-14">
            <Reveal>
              <h2 className="font-montserrat text-2xl font-bold text-navy">El reto</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                {study.challenge}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-montserrat text-2xl font-bold text-navy">La solución</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                {study.solution}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-montserrat text-2xl font-bold text-navy">Arquitectura</h2>
              {study.architectureLayers ? (
                <div className="mt-6">
                  <ArchitectureDiagram layers={study.architectureLayers} heading={false} />
                </div>
              ) : null}
              <ul className={study.architectureLayers ? "mt-8 space-y-4" : "mt-6 space-y-4"}>
                {study.architecture.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span className="text-sm leading-relaxed text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {study.quote ? (
              <Reveal>
                <figure className="rounded-2xl border border-border border-l-4 border-l-gold bg-surface p-8">
                  <Quote className="h-6 w-6 text-gold" aria-hidden />
                  <blockquote className="mt-5 font-montserrat text-lg leading-relaxed text-navy">
                    {study.quote.text}
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-muted-foreground">
                    {study.quote.author} — {study.quote.role}
                  </figcaption>
                </figure>
              </Reveal>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="rounded-2xl bg-navy p-8 text-white">
              <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Resultados
              </p>
              <ul className="mt-8 space-y-8">
                {study.results.map((result) => (
                  <li key={result.label}>
                    <p className="font-montserrat text-4xl font-bold tracking-tightest text-gold">
                      {result.value}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{result.label}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  Tecnología
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      {relatedCases.length > 0 ? (
        <Section tone="surface" className="py-16 md:py-20">
          <h2 className="font-montserrat text-2xl font-bold text-navy">Otros casos</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {relatedCases.map((item) => (
              <Link
                key={item.slug}
                href={`/casos/${item.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-background p-8 transition-colors hover:border-navy/30"
              >
                <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.sector}
                </span>
                <h3 className="mt-4 font-montserrat text-xl font-bold text-navy">{item.headline}</h3>
                <span className="mt-6 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-navy">
                  <span className="border-b-2 border-gold pb-0.5">Ver el caso</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <ContactCta />
    </>
  );
};

export default CaseStudyPage;
