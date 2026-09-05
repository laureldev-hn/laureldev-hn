export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Diagnóstico",
    description:
      "Nos sentamos con tus áreas de negocio y de sistemas para entender la operación real. Salimos con el problema priorizado y su costo actual.",
    duration: "1 a 2 semanas",
  },
  {
    step: "2",
    title: "Arquitectura y alcance",
    description:
      "Definimos la solución técnica, las integraciones con tu core, los controles de seguridad y el alcance cerrado con entregables y fechas.",
    duration: "2 a 3 semanas",
  },
  {
    step: "3",
    title: "Construcción por entregas",
    description:
      "Desarrollamos en ciclos cortos con demostraciones periódicas. Ves el avance funcionando en cada entrega.",
    duration: "Ciclos de 2 semanas",
  },
  {
    step: "4",
    title: "Certificación y salida a producción",
    description:
      "Pruebas de seguridad, carga y aceptación con tus usuarios. Plan de salida con retorno controlado y acompañamiento en la puesta en marcha.",
    duration: "2 a 4 semanas",
  },
  {
    step: "5",
    title: "Soporte y evolución",
    description:
      "Monitoreo, tiempos de respuesta acordados y un plan trimestral de mejoras. La plataforma sigue creciendo con la institución.",
    duration: "Continuo",
  },
];
