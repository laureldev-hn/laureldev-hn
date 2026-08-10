export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿A quién le pertenece el código que desarrollan?",
    answer:
      "A tu institución. Entregamos el repositorio, la documentación técnica y la infraestructura a tu nombre, para que mantengas el control completo de tu operación.",
  },
  {
    question: "¿Tienen que reemplazar nuestro core bancario?",
    answer:
      "No. La mayoría de nuestros proyectos construyen una capa de integración sobre el core existente. Cambiar el core es una decisión de años; modernizar los canales y los procesos alrededor de él se puede hacer en meses.",
  },
  {
    question: "¿Cómo manejan la seguridad y el cumplimiento normativo?",
    answer:
      "Trabajamos con controles desde el diseño: cifrado en tránsito y en reposo, gestión de accesos por rol, bitácoras de auditoría y pruebas de seguridad antes de cada liberación. Entregamos la documentación técnica que tu área de riesgos y el ente regulador necesitan.",
  },
  {
    question: "¿Cómo cobran y cómo son los contratos?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trabajamos por proyecto cerrado o por equipo dedicado mensual, según el tipo de iniciativa. Definimos alcance y entregables antes de firmar.",
  },
  {
    question: "¿Qué pasa después de que el sistema entra en producción?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ofrecemos acuerdos de soporte con tiempos de respuesta definidos, monitoreo de disponibilidad y un plan de evolución trimestral.",
  },
  {
    question: "¿Trabajan con instituciones fuera de Honduras?",
    answer:
      "Sí. Operamos con cooperativas, bancos e instituciones de Honduras y del resto de Centroamérica, de forma remota y con visitas presenciales en las etapas de descubrimiento e implementación.",
  },
];
