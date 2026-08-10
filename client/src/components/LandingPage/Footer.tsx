import { Link } from "wouter";
import { Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { SectionLink } from "@/components/SectionLink";
import { services } from "@/data/services";
import { siteConfig, navItems } from "@/data/site";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: Github, label: "GitHub", href: siteConfig.social.github },
];

const Footer = () => (
  <footer className="bg-ink text-white">
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="LaurelDev, ir al inicio">
            {/* El logo institucional es azul marino, lo pasamos a blanco para el fondo oscuro */}
            <img
              src="/logo-header.png"
              alt="LaurelDev"
              loading="lazy"
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>

          <ul className="mt-8 flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Servicios">
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Servicios
          </h2>
          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Compañía">
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Compañía
          </h2>
          <ul className="mt-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <SectionLink
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </SectionLink>
              </li>
            ))}
            <li>
              <SectionLink
                href="/#faq"
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                Preguntas frecuentes
              </SectionLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Contacto
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              {siteConfig.location}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors hover:text-gold">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Copyright {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p>Hecho en Honduras para cooperativas, banca e instituciones de la región.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
