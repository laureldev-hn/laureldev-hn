import { Link, useRoute } from "wouter";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactCta from "@/components/ContactCta";
import NotFound from "@/pages/not-found";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { services, getServiceBySlug } from "@/data/services";
import { getCaseBySlug, type CaseStudy } from "@/data/cases";
import { siteConfig } from "@/data/site";

const ServicePage = () => {
  const [, params] = useRoute("/servicios/:slug");
  const service = params?.slug ? getServiceBySlug(params.slug) : undefined;

  useDocumentMeta({
    title: service
      ? `${service.title} | ${siteConfig.name}`
      : `Servicio no encontrado | ${siteConfig.name}`,
    description: service?.solution,
  });

  if (!service) return <NotFound />;

  const relatedCases = service.relatedCases
    .map((slug) => getCaseBySlug(slug))
    .filter((item): item is CaseStudy => Boolean(item));

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title={service.title}
        description={service.solution}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/#servicios" },
          { label: service.title },
        ]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-montserrat text-2xl font-bold text-navy">El problema</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                {service.problem}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-montserrat text-2xl font-bold text-navy">Qué entregamos</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span className="text-sm leading-relaxed text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {relatedCases.length > 0 ? (
              <Reveal>
                <h2 className="font-montserrat text-2xl font-bold text-navy">
                  Casos relacionados
                </h2>
                <div className="mt-6 space-y-4">
                  {relatedCases.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/casos/${item.slug}`}
                      className="group flex items-center justify-between gap-6 rounded-xl border border-border p-6 transition-colors hover:border-navy/30"
                    >
                      <div>
                        <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {item.sector}
                        </span>
                        <p className="mt-2 font-montserrat font-bold text-navy">{item.headline}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="rounded-2xl bg-navy p-8 text-white">
              <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Tecnología que usamos
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  Otros servicios
                </p>
                <ul className="mt-5 space-y-3">
                  {otherServices.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/servicios/${item.slug}`}
                        className="text-sm text-white/70 transition-colors hover:text-gold"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <ContactCta />
    </>
  );
};

export default ServicePage;
