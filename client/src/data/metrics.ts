// TODO(contenido): sustituir por cifras verificables. Un número que no puedas
// sustentar frente a un comité de tecnología resta credibilidad en lugar de sumarla.

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export const metrics: Metric[] = [
  {
    value: "+10",
    label: "Años en tecnología financiera",
    detail: "Construyendo y sosteniendo sistemas críticos para instituciones reguladas.",
  },
  {
    value: "00",
    label: "Instituciones atendidas",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    value: "00%",
    label: "Disponibilidad de plataformas",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    value: "00k",
    label: "Asociados impactados",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
