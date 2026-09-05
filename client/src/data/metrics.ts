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
    value: "+10",
    label: "Instituciones atendidas",
    detail:
      "Cooperativas, banca y organismos con los que hemos construido o sostenido sistemas en producción.",
  },
  {
    value: "99.9%",
    label: "Disponibilidad de plataformas",
    detail:
      "Canales digitales en producción, con monitoreo continuo para que el afiliado/cliente encuentre el servicio cuando lo necesita.",
  },
  {
    value: "+500k",
    label: "Personas impactadas",
    detail:
      "Asociados de cooperativas y beneficiarios de programas institucionales a los que llegan las plataformas que construimos.",
  },
];
