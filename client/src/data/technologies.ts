import { FaPython, FaAws, FaDocker, FaGithub, FaReact } from "react-icons/fa";
import { SiKubernetes, SiTypescript, SiApachekafka, SiPostgresql, SiExpo } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
}

export const technologies: Technology[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: FaPython },
  { name: "React", icon: FaReact },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: FaAws },
  { name: "Expo", icon: SiExpo },
  { name: "GitHub", icon: FaGithub },
];

// TODO(contenido): confirmar con qué cores e integraciones tienes experiencia acreditable.
export const integrations: string[] = [
  "Cores bancarios y cooperativos",
  "Firma electrónica avanzada (UANATACA y equivalentes)",
  "Switches y redes de pago",
  "Servicios de identidad y biometría",
  "Buróes de crédito",
  "Plataformas de mensajería y notificación",
];
