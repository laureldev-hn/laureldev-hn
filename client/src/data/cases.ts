// TODO(contenido): reemplazar el texto lorem ipsum y las cifras por los datos reales
// de cada proyecto, y confirmar con el cliente qué se puede publicar.

export interface CaseResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  logo?: string;
  sector: string;
  year: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string[];
  results: CaseResult[];
  stack: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cooperativa-chorotega",
    client: "Cooperativa Chorotega",
    logo: "/assets/clients/chorotega_azul.png",
    sector: "Cooperativa de ahorro y crédito",
    year: "2024",
    headline: "Autoservicio digital para una base de asociados en crecimiento",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet, en un proyecto que llevó la operación de ventanilla al canal digital.",
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla, sed posuere consectetur est at lobortis.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.",
    architecture: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Integer posuere erat a ante venenatis dapibus posuere",
      "Nullam quis risus eget urna mollis ornare vel eu leo",
      "Vestibulum id ligula porta felis euismod semper",
    ],
    results: [
      { value: "00%", label: "Lorem ipsum dolor sit" },
      { value: "00%", label: "Consectetur adipiscing" },
      { value: "00x", label: "Integer posuere erat" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    quote: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.",
      author: "Nombre del vocero",
      role: "Cargo, Cooperativa Chorotega",
    },
    featured: true,
  },
  {
    slug: "cooperativa-sagrada-familia",
    client: "Cooperativa Sagrada Familia",
    logo: "/assets/clients/safa.png",
    sector: "Cooperativa de ahorro y crédito",
    year: "2023",
    headline: "Integración de pagos y conciliación automática",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor, con una capa de integración que eliminó la conciliación manual.",
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    architecture: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Curabitur blandit tempus porttitor sem malesuada",
      "Donec ullamcorper nulla non metus auctor fringilla",
    ],
    results: [
      { value: "00%", label: "Lorem ipsum dolor sit" },
      { value: "00h", label: "Consectetur adipiscing" },
      { value: "00%", label: "Integer posuere erat" },
    ],
    stack: ["Java", "Apache Kafka", "Docker", "Kubernetes"],
  },
];

export const featuredCase = caseStudies.find((c) => c.featured) ?? caseStudies[0];

export const getCaseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
