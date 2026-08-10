// TODO(contenido): confirmar cuáles de estas prácticas y certificaciones puedes
// acreditar formalmente hoy. Declarar un estándar que no cumples es un riesgo
// reputacional frente a un área de riesgos.

import { Lock, FileCheck, KeyRound, Activity, ServerCog, ScrollText, type LucideIcon } from "lucide-react";

export interface SecurityPractice {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const securityPractices: SecurityPractice[] = [
  {
    title: "Cifrado extremo a extremo",
    description:
      "Datos cifrados en tránsito y en reposo, con gestión de llaves separada de la aplicación.",
    icon: Lock,
  },
  {
    title: "Control de accesos por rol",
    description:
      "Principio de mínimo privilegio, autenticación de múltiples factores y revisión periódica de permisos.",
    icon: KeyRound,
  },
  {
    title: "Bitácoras de auditoría",
    description:
      "Trazabilidad completa de cada transacción y cada cambio, con evidencia exportable para auditoría.",
    icon: ScrollText,
  },
  {
    title: "Pruebas de seguridad continuas",
    description:
      "Análisis estático, revisión de dependencias y pruebas contra el estándar OWASP antes de cada liberación.",
    icon: FileCheck,
  },
  {
    title: "Monitoreo y respuesta",
    description:
      "Alertas de disponibilidad y comportamiento anómalo, con protocolo de respuesta a incidentes documentado.",
    icon: Activity,
  },
  {
    title: "Continuidad operativa",
    description:
      "Respaldos verificados, planes de recuperación y pruebas de restauración programadas.",
    icon: ServerCog,
  },
];

export const complianceBadges: string[] = [
  "Lineamientos CNBS",
  "Lineamientos CONSUCOOP",
  "OWASP ASVS",
  "ISO 27001 (en proceso)",
];
