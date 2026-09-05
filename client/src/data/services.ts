import {
  Smartphone,
  ShieldCheck,
  BarChart3,
  CreditCard,
  PenLine,
  Code2,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  code: string;
  title: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
  deliverables: string[];
  stack: string[];
  relatedCases: string[];
}

export const services: Service[] = [
  {
    slug: "banca-digital",
    code: "SRV_01",
    title: "Banca digital y autoservicio",
    problem:
      "Tus asociados siguen yendo a la ventanilla para operaciones que deberían resolverse en treinta segundos desde el teléfono.",
    solution:
      "Construimos canales digitales propios —app móvil y banca en línea— conectados a tu core, con onboarding remoto, transferencias y consultas en tiempo real.",
    icon: Smartphone,
    deliverables: [
      "App móvil iOS y Android",
      "Portal de banca en línea responsivo",
      "Onboarding digital con validación de identidad",
      "Panel administrativo para tu equipo de operaciones",
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    relatedCases: ["banca-movil-con-soft-token", "canales-digitales-unificados"],
  },
  {
    slug: "seguridad-y-cumplimiento",
    code: "SRV_02",
    title: "Seguridad y cumplimiento normativo",
    problem:
      "Una observación de la CNBS o un incidente de seguridad puede costar más que años de inversión en tecnología.",
    solution:
      "Diseñamos con controles desde el primer commit: cifrado, trazabilidad, gestión de accesos y evidencia lista para auditoría interna y del ente regulador.",
    icon: ShieldCheck,
    deliverables: [
      "Auditoría de seguridad de aplicaciones",
      "Cifrado en tránsito y en reposo",
      "Bitácoras de auditoría y trazabilidad de transacciones",
      "Documentación técnica para el ente regulador",
    ],
    stack: ["OWASP ASVS", "Keycloak", "HashiCorp Vault", "SIEM"],
    relatedCases: ["banca-movil-con-soft-token", "plataforma-de-integracion-microservicios"],
  },
  {
    slug: "datos-y-analitica",
    code: "SRV_03",
    title: "Datos y analítica de negocio",
    problem:
      "La información existe, pero vive en reportes de Excel que llegan tarde y nadie concilia entre sí.",
    solution:
      "Centralizamos tus fuentes en un modelo de datos único y entregamos tableros de mora, captación y colocación que la gerencia consulta sin pedirle nada a sistemas.",
    icon: BarChart3,
    deliverables: [
      "Modelo de datos centralizado",
      "Tableros de indicadores por área",
      "Alertas automáticas de mora y liquidez",
      "Reportería regulatoria automatizada",
    ],
    stack: ["Python", "Apache Kafka", "PostgreSQL", "Metabase"],
    relatedCases: ["plataforma-de-integracion-microservicios"],
  },
  {
    slug: "pagos-e-integraciones",
    code: "SRV_04",
    title: "Pagos e integraciones",
    problem:
      "Cada nuevo convenio de recaudación o red de pagos se convierte en un proyecto de meses y un integrador distinto.",
    solution:
      "Levantamos una capa de integración estándar sobre tu core para que conectar una red de pagos, un switch o un convenio deje de ser una obra de ingeniería a la medida.",
    icon: CreditCard,
    deliverables: [
      "Capa de APIs sobre el core bancario",
      "Integración con redes de pago y switches",
      "Conciliación automática de transacciones",
      "Monitoreo de disponibilidad de servicios",
    ],
    stack: ["REST / ISO 8583", "Apache Kafka", "Docker", "Kubernetes"],
    relatedCases: [
      "plataforma-de-integracion-microservicios",
      "canales-digitales-unificados",
      "banca-movil-con-soft-token",
    ],
  },
  {
    slug: "onboarding-y-firma-electronica",
    code: "SRV_05",
    title: "Onboarding digital y firma electrónica",
    problem:
      "Aún dependes de papeles, firmas presenciales y expedientes físicos para dar de alta clientes, asociados o beneficiarios de un programa.",
    solution:
      "Diseñamos flujos de onboarding digital con validación de identidad y firma electrónica avanzada —incluyendo integración con proveedores como UANATACA— para que el proceso tenga validez legal, trazabilidad y una experiencia remota completa.",
    icon: PenLine,
    deliverables: [
      "Flujos de onboarding digital de punta a punta",
      "Integración con firma electrónica avanzada (UANATACA y equivalentes)",
      "Validación de identidad y evidencias de auditoría",
      "Expediente digital listo para operaciones y cumplimiento",
    ],
    stack: ["TypeScript", "React", "UANATACA", "AWS"],
    relatedCases: ["banca-movil-con-soft-token"],
  },
  {
    slug: "desarrollo-a-la-medida",
    code: "SRV_06",
    title: "Desarrollo a la medida",
    problem:
      "Las herramientas estándar no siempre se ajustan a tu operación, y el sistema actual ya necesita crecer con más flexibilidad.",
    solution:
      "Construimos plataformas que se adaptan a cómo trabaja tu institución, con la documentación y el código en tus manos desde el primer día.",
    icon: Code2,
    deliverables: [
      "Plataformas internas y portales institucionales",
      "Modernización de sistemas heredados",
      "Documentación técnica y transferencia de conocimiento",
      "Soporte y evolución continua",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    relatedCases: [
      "plataforma-de-integracion-microservicios",
      "canales-digitales-unificados",
      "banca-movil-con-soft-token",
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
