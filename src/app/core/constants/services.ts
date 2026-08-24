import type { IconName } from '../components/icon/icon.component';

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    icon: 'code',
    title: 'Desarrollo Web a Medida',
    description:
      'Sitios y landing pages rápidos, responsivos y optimizados para convertir visitantes en clientes.',
    features: ['Diseño 100% a medida', 'Optimización de velocidad', 'SEO técnico incluido'],
  },
  {
    icon: 'layers',
    title: 'Aplicaciones Web (SPA/PWA)',
    description:
      'Dashboards, portales y sistemas internos construidos con Angular para escalar sin dolores de cabeza.',
    features: ['Arquitectura escalable', 'Autenticación y roles', 'Actualizaciones en tiempo real'],
  },
  {
    icon: 'grid',
    title: 'Sistemas de Gestión',
    description:
      'Automatiza inventarios, procesos y reportes con software hecho a la medida de tu operación.',
    features: ['Control de inventario', 'Reportes en tiempo real', 'Gestión de usuarios y permisos'],
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description:
      'Bases de datos, autenticación y APIs REST robustas con Firebase y Node.js.',
    features: ['Bases de datos en tiempo real', 'Integraciones con terceros', 'Seguridad y respaldo de datos'],
  },
  {
    icon: 'figma',
    title: 'UI/UX & Diseño de Interfaces',
    description:
      'Interfaces cuidadas al detalle, con animaciones y microinteracciones que se sienten premium.',
    features: ['Prototipos interactivos', 'Diseño responsivo', 'Animaciones y microinteracciones'],
  },
  {
    icon: 'shield',
    title: 'Mantenimiento & Soporte',
    description:
      'Monitoreo, actualizaciones y mejoras continuas para que tu producto nunca se quede atrás.',
    features: ['Monitoreo proactivo', 'Actualizaciones de seguridad', 'Soporte directo por WhatsApp'],
  },
];
