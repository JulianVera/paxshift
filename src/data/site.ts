/**
 * Configuración del sitio Pax Shift.
 * Centraliza textos de identidad, navegación y datos de contacto pendientes.
 */

export interface NavItem {
  label: string;
  /** Ancla o URL. Si falta, el enlace se renderiza como pendiente (sin href). */
  href?: string;
  /** Muestra la flecha ↗ (acciones de contacto). */
  arrow?: boolean;
  /** Tratamiento coral (acción principal). */
  accent?: boolean;
}

export const site = {
  name: 'Pax Shift',

  /**
   * TODO: reemplazar por el SVG oficial del logo (isotipo + wordmark).
   * Mientras no exista, header y footer usan este lockup tipográfico.
   */
  wordmark: 'pax shift',

  title: 'Pax Shift — Hacemos más simple viajar',
  description:
    'Consultora de UX, diseño de productos digitales y tecnología para la industria de viajes. Diseñamos experiencias digitales para aerolíneas y agencias de viajes.',
  locale: 'es_AR',
  lang: 'es',

  /**
   * Datos de contacto pendientes de definir. No inventar valores.
   * Cuando existan, los enlaces "Hablemos" pueden apuntar a `mailto:` o a una página de contacto.
   */
  contact: {
    email: '',
    url: '',
  },

  /** Anclas de secciones existentes en la homepage. */
  anchors: {
    experience: '#experiencia',
    contact: '#hablemos',
  },
} as const;

export const headerNav: NavItem[] = [
  { label: 'Experiencia', href: site.anchors.experience },
  { label: 'Conversemos', href: site.anchors.contact, arrow: true },
];

export const footerNav: NavItem[] = [
  { label: 'Servicios' }, // pendiente: página futura
  { label: 'Experiencia', href: site.anchors.experience },
  { label: 'Nosotros' }, // pendiente: página futura
  { label: 'Hablemos', href: site.anchors.contact, arrow: true, accent: true },
];

export const footerClaim = 'Transformando la experiencia de viajar.';
