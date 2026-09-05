// El prestador acreditado es UANATACA, no LaurelDev. Somos partner de canal:
// integramos y revendemos. No cambies ese encuadre sin revisar el contrato.

import {
  FileSignature,
  ScanFace,
  Smartphone,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export interface PartnershipCapability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PartnershipTrack {
  title: string;
  description: string;
}

export const partnership = {
  eyebrow: "Alianzas",
  title: "Firma electrónica con validez legal en Honduras, respaldada por un prestador acreditado",
  description:
    "Somos partner de canal de UANATACA, del grupo europeo Namirial: prestador de servicios de confianza acreditado ante el Instituto de la Propiedad en Honduras y cualificado bajo el reglamento eIDAS. Lo integramos en las plataformas que construimos y también lo habilitamos para instituciones que solo necesitan el producto.",
  reinforcementTitle: "Qué cambia en lo que entregamos",
};

export const partnershipCapabilities: PartnershipCapability[] = [
  {
    title: "Firma electrónica avanzada",
    description:
      "Certificados emitidos por un prestador acreditado ante el Instituto de la Propiedad. La firma tiene el valor legal que define el Decreto 149-2013, no es una imagen pegada en un PDF.",
    icon: FileSignature,
  },
  {
    title: "Identidad verificada en el onboarding",
    description:
      "Biometría con prueba de vida, videoidentificación y lectura del chip del documento, con validación automática sobre más de 350 tipos de documento en segundos.",
    icon: ScanFace,
  },
  {
    title: "Alta remota de usuarios",
    description:
      "El afiliado crea su usuario desde la app sin ir a la agencia, y tu institución conserva la evidencia de quién es.",
    icon: Smartphone,
  },
  {
    title: "Respaldo internacional",
    description:
      "Detrás hay un prestador cualificado europeo: eIDAS, ISO 27001 y los estándares ETSI que una revisión de riesgos va a pedir.",
    icon: BadgeCheck,
  },
];

export const partnershipReinforcements: string[] = [
  "La firma y el onboarding no llegan como un módulo aparte: viven dentro de la arquitectura que ya operamos, con bitácoras, custodia de llaves y trazabilidad de punta a punta.",
  "Un solo responsable frente a tu institución: nosotros integramos y sostenemos, el prestador acreditado certifica.",
  "Evidencia lista para auditoría interna y para el ente regulador desde el primer día.",
];

export const partnershipTracks: PartnershipTrack[] = [
  {
    title: "Dentro de un proyecto",
    description:
      "Banca digital, alta de afiliados o plataformas institucionales que construimos contigo.",
  },
  {
    title: "Solo el producto",
    description:
      "Si ya tienes tus sistemas y únicamente necesitas firma electrónica u onboarding, lo habilitamos e integramos por API.",
  },
];

export const partnershipBadges: string[] = [
  "eIDAS (UE 910/2014)",
  "Acreditado ante el IP (DIGEPIH)",
  "Decreto 149-2013",
  "ISO 27001",
  "ETSI TS 119 461",
];
