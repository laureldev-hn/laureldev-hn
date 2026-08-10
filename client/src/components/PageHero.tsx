import * as React from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  meta?: string[];
  children?: React.ReactNode;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  meta,
  children,
}: PageHeroProps) => (
  <section className="relative overflow-hidden bg-navy pb-16 pt-32 text-white md:pb-24 md:pt-40">
    <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-70" />

    <div className="container relative mx-auto px-4 md:px-6">
      <nav aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight className="h-3 w-3" aria-hidden /> : null}
              {crumb.href ? (
                <Link href={crumb.href} className="transition-colors hover:text-gold">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 max-w-3xl">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-montserrat text-4xl font-bold leading-[1.08] tracking-tightest text-balance md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty">{description}</p>
        ) : null}

        {meta && meta.length > 0 ? (
          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            {meta.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 ? (
                  <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {children}
      </div>
    </div>
  </section>
);

export default PageHero;
