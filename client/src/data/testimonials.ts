// TODO(contenido): reemplazar por testimonios reales con autorización del cliente.
// Un testimonio con nombre, cargo e institución vale más que tres anónimos.

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Entendieron nuestra operación antes de proponer una sola línea de código.",
    author: "Nombre del vocero",
    role: "Gerente de Tecnología",
    organization: "Cooperativa Chorotega",
    logo: "/assets/clients/chorotega_azul.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum, sed posuere consectetur est at lobortis.",
    author: "Nombre del vocero",
    role: "Gerente General",
    organization: "Cooperativa Sagrada Familia",
    logo: "/assets/clients/safa.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    author: "Nombre del vocero",
    role: "Director de Operaciones",
    organization: "Institución financiera",
  },
];
