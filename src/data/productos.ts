/**
 * Fuente unica de verdad de los productos.
 *
 * REGLA: `url` debe apuntar al producto ACTUAL. Ya paso una vez que un enlace
 * respondia 200 pero servia la version anterior, y ningun check automatico lo
 * detecta. Al tocar esta lista, abrir cada enlace y mirar QUE sirve.
 *
 * OJO: el perfil tecnico (danielmoranv.github.io) mantiene su propia copia de
 * estos datos, contada para desarrolladores. Al cambiar un `url` aqui, hay que
 * cambiarlo alli tambien — es el unico dato que no puede divergir.
 */


export type Modelo = 'propio' | 'cliente';

export interface Producto {
  id: string;
  nombre: string;
  url: string | null;
  modelo: Modelo;
  /**
   * Logotipo, servido tal cual desde /public/productos.
   *
   * NO usar el componente <Image> de Astro aqui. El build de Cloudflare no
   * optimizaba y emitia URLs al endpoint /_image, que en un sitio estatico no
   * existe: todas las imagenes daban 404 en produccion. Los WebP de 96 px ya
   * estan generados y versionados, asi que no dependen del entorno que compile.
   */
  iconoSrc: string;
  /** Cliente, cuando el producto se hizo por encargo. */
  cliente?: string;
  /** Sector al que sirve. La portada cuenta los distintos, no los repite. */
  sector: string;
  stack: string[];
  es: { que: string; detalle: string };
  /** Nota al pie, cuando el estado necesita explicacion. */
  nota?: string;
}

export const productos: Producto[] = [
  {
    id: 'almazen',
    iconoSrc: '/productos/almazen.webp',
    sector: 'retail',
    nombre: 'AlmaZen',
    url: 'https://almazenapp.djasoft.net.pe/',
    modelo: 'propio',
    stack: ['Laravel', 'Livewire', 'PostgreSQL', 'Gemini'],
    es: {
      que: 'ERP multiempresa',
      detalle:
        'Inventario, compras, ventas, punto de venta y facturación electrónica ante SUNAT. ' +
        'Incluye un asistente conversacional con 29 herramientas de solo lectura sobre los ' +
        'datos de la empresa, con permisos por usuario.',
    },
  },
  {
    id: 'mozaicopro',
    iconoSrc: '/productos/mozaicopro.webp',
    sector: 'restauración',
    nombre: 'Mozaico',
    url: 'https://mozaicopro.djasoft.net.pe/',
    modelo: 'propio',
    stack: ['Go', 'Gin', 'React 19', 'PostgreSQL'],
    es: {
      que: 'Gestión de restaurantes',
      detalle:
        'La comanda deja de cruzar el salón en papel: se toma en la mesa y aparece al ' +
        'instante en la pantalla de cocina, y cada cambio de estado vuelve al salón por ' +
        'WebSockets. Nadie recarga, nadie pregunta si ya salió el plato.',
    },
  },
  {
    id: 'easypay',
    iconoSrc: '/productos/easypay.webp',
    sector: 'servicios',
    nombre: 'EasyPay',
    url: 'https://easypay.djasoft.net.pe/',
    modelo: 'propio',
    stack: ['TypeScript', 'NestJS'],
    es: {
      que: 'Planillas y asistencia',
      detalle:
        'Personal, control de asistencia, horarios y cálculo de planillas. Automatiza el ' +
        'proceso que más horas administrativas consume cada mes.',
    },
  },
  {
    id: 'otto-tonsmann',
    iconoSrc: '/productos/otto-tonsmann.webp',
    sector: 'educación',
    nombre: 'Otto Tonsmann',
    url: 'https://otto-tonsmann.web.app/',
    modelo: 'cliente',
    cliente: 'Instituto Otto Tonsmann',
    stack: ['Vue 3', 'Firebase'],
    es: {
      que: 'Ventas y padrón de alumnos',
      detalle:
        'Sustituye el registro en papel de un instituto: caja, comprobantes y padrón de ' +
        'alumnos, con control de acceso por roles, inventario transaccional y auditoría de ' +
        'cada operación.',
    },
  },
  {
    id: 'coneri',
    iconoSrc: '/productos/coneri.webp',
    sector: 'energía',
    nombre: 'CONERI',
    url: 'https://coneri.pe/',
    modelo: 'cliente',
    cliente: 'CONERI — Energía Solar',
    stack: ['Firebase', 'Cloud Functions', 'Cloudflare Pages'],
    es: {
      que: 'Web corporativa y panel',
      detalle:
        'Sitio, catálogo de productos con carrito de cotización y panel de administración ' +
        'para una empresa de energía solar en Piura. Las imágenes huérfanas se limpian solas ' +
        'con funciones que reaccionan a los cambios del catálogo.',
    },
  },
  {
    id: 'master-color',
    iconoSrc: '/productos/master-color.webp',
    sector: 'retail',
    nombre: 'Master Color',
    url: 'https://www.mastercolor.net.pe/',
    modelo: 'cliente',
    cliente: 'Master Color',
    stack: ['Laravel', 'Vue 3', 'Flutter', 'AWS S3'],
    es: {
      que: 'Comercio electrónico',
      detalle:
        'Tienda, gestión de pedidos y soporte técnico de campo, con app móvil en Flutter. ' +
        'Un chatbot de ventas responde por disponibilidad y precios sin exponer nada más ' +
        'que el catálogo público.',
    },
    nota: 'En desarrollo activo',
  },
  {
    id: 'agenda-eh',
    iconoSrc: '/productos/agenda-eh.svg',
    sector: 'servicios',
    nombre: 'Agenda EH',
    url: 'https://agenda-eh.web.app/',
    modelo: 'propio',
    stack: ['Vue 3', 'Firestore', 'OAuth 2.0'],
    es: {
      que: 'Gestión del tiempo',
      detalle:
        'Matriz de Eisenhower con sincronización bidireccional con Google Calendar, vista ' +
        'Gantt y proyectos. Diseñado con especificación técnica antes de escribir código.',
    },
  },
  {
    id: 'surgimed',
    iconoSrc: '/productos/surgimed.webp',
    sector: 'salud',
    nombre: 'SURGIMED',
    url: 'https://surgimed-pe.web.app/',
    modelo: 'cliente',
    cliente: 'Surgical Medical Equipment E.I.R.L.',
    stack: ['HTML', 'Firebase Hosting', 'GitHub Actions'],
    es: {
      que: 'Web corporativa',
      detalle:
        'Sitio institucional de un importador de material de osteosíntesis y equipamiento ' +
        'quirúrgico, con despliegue continuo desde el repositorio.',
    },
  },
];

export const sectores = new Set(productos.map((p) => p.sector)).size;

export const propios = productos.filter((p) => p.modelo === 'propio');
export const paraClientes = productos.filter((p) => p.modelo === 'cliente');
