export const siteConfig = {
  name: "LaurelDev",
  domain: "laureldev.hn",
  url: "https://laureldev.hn",
  tagline: "Infraestructura digital con confianza para instituciones",
  description:
    "Construimos banca digital, onboarding con firma electrónica avanzada y plataformas a la medida para cooperativas, bancos e instituciones de Honduras y Centroamérica.",
  email: "contact@laureldev.hn",
  phone: "+504 3160-3102",
  phoneHref: "+50431603102",
  location: "Goascorán, Valle, Honduras",
  whatsapp: "https://wa.me/50431603102",
  calendarUrl: "https://calendar.app.google/TvGksbgcYsnLJFRY9",
  social: {
    linkedin: "https://www.linkedin.com/company/laurel-dev/",
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Industrias", href: "/#industrias" },
  { label: "Casos de éxito", href: "/#casos" },
  { label: "Seguridad", href: "/#seguridad" },
  { label: "Alianza", href: "/#alianza" },
  { label: "Nosotros", href: "/#nosotros" },
];

export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { name: "Cooperativa Chorotega", logo: "/assets/clients/chorotega_azul.png" },
  { name: "Cooperativa Sagrada Familia", logo: "/assets/clients/safa.png" },
];
