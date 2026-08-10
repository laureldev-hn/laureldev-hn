import { Landmark, Users, HandCoins, Globe2, type LucideIcon } from "lucide-react";

export interface Industry {
  code: string;
  name: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export const industries: Industry[] = [
  {
    code: "01",
    name: "Cooperativas de ahorro y crédito",
    description:
      "Nuestro mercado principal. Modernizamos la operación de cooperativas sin obligarlas a reemplazar su core ni a perder el trato cercano que las distingue.",
    icon: Users,
    highlights: ["Autoservicio para asociados", "Onboarding digital", "Control de mora"],
  },
  {
    code: "02",
    name: "Banca comercial",
    description:
      "Construimos canales digitales y capas de integración de grado bancario sobre infraestructura existente y regulada.",
    icon: Landmark,
    highlights: ["Banca en línea", "APIs sobre el core", "Cumplimiento CNBS"],
  },
  {
    code: "03",
    name: "Microfinanzas y OPDF",
    description:
      "Llevamos la colocación y el seguimiento de cartera al campo, con herramientas que funcionan incluso con conectividad intermitente.",
    icon: HandCoins,
    highlights: ["Originación en campo", "Scoring de crédito", "Operación fuera de línea"],
  },
  {
    code: "04",
    name: "Cooperación e instituciones",
    description:
      "Diseñamos plataformas para organismos de cooperación, programas de desarrollo y entidades institucionales que necesitan procesos digitales confiables, trazables y con validez legal.",
    icon: Globe2,
    highlights: [
      "Onboarding digital",
      "Firma electrónica avanzada",
      "Portales de programas",
    ],
  },
];
