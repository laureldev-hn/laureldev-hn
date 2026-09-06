// Los casos se publican sin identificar a la institución. No agregues nombre ni
// logo del cliente sin autorización escrita para hablar de su sistema.

export interface CaseResult {
  value: string;
  label: string;
}

export interface ArchitectureLayer {
  label: string;
  nodes: string[];
}

export interface CaseStudy {
  slug: string;
  clientProfile: string;
  sector: string;
  year: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string[];
  architectureLayers?: ArchitectureLayer[];
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
    slug: "plataforma-de-integracion-microservicios",
    clientProfile: "Más de 250 mil afiliados, Honduras",
    sector: "Cooperativa de ahorro y crédito",
    year: "2025",
    headline: "De quince servidores de integración a un solo clúster de microservicios",
    summary:
      "Cada proveedor externo vivía en su propia máquina virtual con una VPN dedicada. Consolidamos todas esas integraciones en un clúster de Kubernetes con microservicios desacoplados, que hoy sostiene banca móvil, banca web, agentes corresponsales y los sistemas internos de la cooperativa.",
    challenge:
      "Cada vez que la institución firmaba con un proveedor nuevo, el equipo levantaba un servidor y una VPN dedicada solo para esa integración. Así se acumularon alrededor de quince máquinas virtuales, cada una con su propio mantenimiento y su propia forma de fallar. El esquema ya no escalaba: sumar un servicio significaba sumar infraestructura. A eso se agregaban dos problemas de fondo: varios proveedores se conectaban directamente a la base de datos Oracle del core, y cada canal —banca móvil, banca web, sistemas internos— reconstruía por su cuenta servicios que hacían lo mismo.",
    solution:
      "Diseñamos e implementamos una plataforma de integración sobre un clúster de Kubernetes, con una arquitectura de microservicios desacoplados por capacidad de negocio. Un API Gateway en la DMZ concentra el tráfico externo y la conexión hacia el clúster viaja cifrada con certificados propios, de modo que ningún proveedor vuelve a tocar la base de datos del core. Cada operación —transferencias ACH, movimientos entre cuentas propias, acreditaciones, débitos, pignoraciones, transacciones con proveedores— existe una sola vez y la consumen todos los canales. Integrar la nueva app móvil dejó de ser un proyecto de infraestructura y pasó a ser conectarse a un servicio que ya estaba en producción.",
    architecture: [
      "Clúster de Kubernetes que reemplaza las máquinas virtuales dedicadas por integración",
      "Kong como API Gateway en la DMZ, con entidad certificadora propia para cifrar el tráfico hacia el clúster",
      "Microservicios desacoplados por operación, reutilizables por banca móvil, banca web, agentes corresponsales y sistemas internos",
      "Apache Kafka como columna de mensajería entre servicios",
      "Acceso al core Oracle únicamente a través de la capa de microservicios",
      "Baúl de secretos para la custodia de llaves asimétricas y configuración sensible",
      "Servicios internos de bajo volumen desplegados como pods dentro del mismo clúster",
      "Observabilidad con Prometheus, Loki y Grafana sobre el clúster y las transacciones que lo atraviesan",
    ],
    architectureLayers: [
      { label: "Canales", nodes: ["App móvil", "Banca web", "Agentes"] },
      { label: "DMZ", nodes: ["Kong API Gateway"] },
      { label: "Clúster Kubernetes", nodes: ["Microservicios", "Apache Kafka", "Secretos", "Pods internos"] },
      { label: "Core", nodes: ["Oracle — solo vía microservicios"] },
      { label: "Observabilidad", nodes: ["Prometheus", "Grafana", "Loki"] },
    ],
    results: [
      { value: "15 → 1", label: "Servidores de integración consolidados en un solo clúster" },
      { value: "1", label: "Punto de entrada controlado para todas las integraciones externas" },
      { value: "99.9%", label: "Disponibilidad de los servicios de integración" },
    ],
    stack: [
      "Python",
      "Kubernetes",
      "Kong",
      "Apache Kafka",
      "Docker",
      "Oracle",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    featured: true,
  },
  {
    slug: "canales-digitales-unificados",
    clientProfile: "Cerca de 200 mil afiliados, Honduras",
    sector: "Cooperativa de ahorro y crédito",
    year: "2025",
    headline: "Una sola identidad para la app móvil y la web transaccional",
    summary:
      "La institución tenía una app de un proveedor y una web transaccional hecha internamente, cada una con su propio usuario. Reescribimos ambos canales para que el asociado entre una sola vez y encuentre las mismas operaciones —incluyendo transferencias ACH— en el teléfono y en el navegador.",
    challenge:
      "El asociado vivía en dos mundos. Para la app usaba un usuario; para la web, otro. La web sí permitía transferencias ACH; la app no. La experiencia digital no era un canal, eran dos productos que no se hablaban, y cada operación nueva se convertía en una conversación distinta con cada frente.",
    solution:
      "Desarrollamos la app móvil y la web transaccional como una sola experiencia, con las mismas credenciales en ambos. En una primera fase cubrimos lo que un asociado espera el día uno: pago de servicios públicos, pago de préstamos, transferencias ACH, transferencias a terceros de la cooperativa y entre cuentas propias, consulta de saldo, y consulta y pago de tarjeta de crédito. El proyecto salió a producción entre enero y mayo de 2025.",
    architecture: [
      "Un solo usuario y las mismas credenciales para app móvil y web transaccional",
      "Mismas operaciones en ambos canales: no hay capacidades que existan solo en uno",
      "Transferencias ACH, a terceros de la cooperativa y entre cuentas propias",
      "Pago de servicios públicos, pago de préstamos, consulta de saldo y operación de tarjeta de crédito",
    ],
    results: [
      { value: "1", label: "Usuario para entrar a la app y a la web" },
      { value: "2", label: "Canales reconstruidos con las mismas operaciones" },
      { value: "4", label: "Meses de enero a mayo para la primera fase en producción" },
    ],
    stack: ["Python", "Expo", "TypeScript", "React"],
  },
  {
    slug: "banca-movil-con-soft-token",
    clientProfile: "Más de 250 mil afiliados, Honduras",
    sector: "Cooperativa de ahorro y crédito",
    year: "2026",
    headline: "De OTP por correo a soft token y biométrico en el dispositivo",
    summary:
      "La cooperativa tenía web transaccional, pero no app. El ingreso y cada transacción dependían de un código enviado al correo. Construimos la app móvil y una web nueva: el asociado entra con las mismas credenciales el día del pase a producción, registra el dispositivo con un intercambio seguro de llaves y genera sus propios tokens. En la web, autoriza con huella o Face ID desde el teléfono.",
    challenge:
      "Sin app móvil, todo pasaba por una web con doble autenticación: un OTP al correo para entrar y otro para transaccionar. El correo no es un segundo factor robusto, y el asociado no tenía un canal en el bolsillo. El día del corte la web anterior dejaría de servir, así que el asociado tenía que poder entrar a lo nuevo con las mismas credenciales, sin un enrolamiento aparte que frenara el pase a producción. La institución ya tenía clúster, llaves y baúl de secretos; faltaba llevar esa base hasta el dispositivo.",
    solution:
      "Implementamos un soft token en la app. En el primer ingreso el sistema hace un intercambio seguro de llaves y deja la clave en el dispositivo; a partir de ahí la app genera el token. El login admite Face ID o huella. Cuando el asociado transacciona en la web nueva, abre la app, se autentica con biometría y usa el token que se está generando en ese momento. El volumen y la profundidad de este canal superan a una primera fase de autoservicio: no solo hay app, hay un segundo factor que vive en el teléfono y una web que lo consume.",
    architecture: [
      "Soft token generado en la app, con la llave registrada en el dispositivo seguro",
      "Intercambio seguro de llaves el día del alta, usando el baúl de secretos y las llaves ya existentes en el clúster",
      "Login biométrico con Face ID o huella dactilar",
      "Nueva web transaccional que autoriza operaciones con el token de la app, sin OTP al correo",
      "Las credenciales de la web anterior siguen vigentes el día del pase a producción",
    ],
    results: [
      { value: "App", label: "Genera el token; la web ya no depende del correo" },
      { value: "1", label: "Dispositivo que autoriza app y web transaccional" },
      { value: "1", label: "Pase a producción sin cambiar las credenciales del asociado" },
    ],
    stack: ["Python", "Expo", "TypeScript", "React", "Kubernetes"],
  },
];

export const featuredCase = caseStudies.find((c) => c.featured) ?? caseStudies[0];

export const getCaseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
