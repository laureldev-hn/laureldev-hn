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
      "Según el tipo de iniciativa: implementación de nuestras plataformas, desarrollo a la medida pagado por fases, o un equipo con bolsa de horas para un proyecto puntual. El contrato fija un alcance determinado —ampliable si hace falta—, entregables por hito en ambientes de pruebas y producción, y un acuerdo de confidencialidad. En el trabajo a la medida el código es de la institución; en una implementación podemos dejarlo en tu custodia para continuidad del servicio. Arrancamos con tu requerimiento o términos de referencia, un diagnóstico para despejar dudas y una propuesta concreta; el esquema habitual es un anticipo y pagos al completar cada hito.",
  },
  {
    question: "¿Qué pasa después de que el sistema entra en producción?",
    answer:
      "El pase a producción no es el final del acompañamiento. En cada propuesta incluimos soporte posterior, garantía sobre nuestro trabajo —con una duración que se acuerda según la criticidad del sistema— y presencia en los pilotajes, para que la institución no quede sola cuando los asociados empiezan a usar el canal.",
  },
  {
    question: "¿Trabajan con instituciones fuera de Honduras?",
    answer:
      "Sí. Operamos con cooperativas, bancos e instituciones de Honduras y del resto de Centroamérica, de forma remota y con visitas presenciales en las etapas de descubrimiento e implementación.",
  },
];
