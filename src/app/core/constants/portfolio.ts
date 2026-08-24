export interface PortfolioProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  logo?: string;
  logoOnDark?: boolean;
  accentFrom: string;
  accentTo: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'gestion-integral-almacen',
    name: 'Sistema de Gestión Integral de Almacén',
    category: 'Sistema de Gestión',
    description:
      'Plataforma para el control de inventario, movimientos de almacén y reportes en tiempo real, con roles de usuario y panel administrativo.',
    tags: ['Angular', 'Firebase', 'Sistema de Inventario'],
    logo: '/images/portfolio/almacen-logo.svg',
    accentFrom: '#16305F',
    accentTo: '#6FC9D9',
  },
  {
    slug: 'simon-quimica',
    name: 'Simón Química',
    category: 'Sitio Corporativo',
    description:
      'Sitio corporativo enfocado en presentar los productos y servicios de la empresa con una identidad visual sólida.',
    tags: ['Diseño Web', 'Identidad de Marca'],
    logo: '/images/portfolio/simon-quimica-logo.svg',
    accentFrom: '#E2232A',
    accentTo: '#7a1216',
  },
];
