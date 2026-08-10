// TODO(contenido): agregar fotos en client/public/assets/team/ (recorte cuadrado)
// y biografías breves cuando las tengas listas.

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Juan Carlos Hernández Reyes",
    role: "Fundador y Director Ejecutivo",
    bio: "Lidera la visión comercial y estratégica de LaurelDev, con foco en cooperativas, banca e instituciones de Honduras y la región.",
  },
  {
    name: "Carlos Orlando Solórzano",
    role: "Co-Fundador y Director de Tecnología",
    bio: "Define la arquitectura y la dirección técnica de las plataformas que construimos para operación financiera e institucional.",
  },
  {
    name: "Rider Javier Posadas",
    role: "Senior Full Stack",
    bio: "Desarrolla y sostiene productos digitales de punta a punta, desde la experiencia de usuario hasta la infraestructura.",
  },
];

export const teamStory = {
  eyebrow: "Quiénes somos",
  title: "Ingenieros que entienden de banca, cooperativas e instituciones",
  paragraphs: [
    "LaurelDev nació en Honduras con una idea simple: las instituciones de la región merecen tecnología del mismo nivel que la de los bancos globales, construida por gente que entiende cómo opera una cooperativa un día de pago.",
    "Nuestro negocio principal es con cooperativas y bancos. También acompañamos a organismos de cooperación e instituciones que necesitan procesos digitales confiables: onboarding remoto, firma electrónica avanzada y plataformas con trazabilidad de punta a punta. Combinamos arquitectura sólida, seguridad alineada a los entes reguladores y entrega continua.",
  ],
};
