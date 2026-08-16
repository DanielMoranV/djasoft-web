/**
 * Fuente unica de verdad de los productos.
 *
 * Las dos versiones del sitio (es / en) y las futuras paginas de case study
 * leen de aqui. Anadir un producto es editar este fichero, nada mas.
 *
 * REGLA: `url` debe apuntar al producto ACTUAL. Ya paso una vez que un enlace
 * respondia 200 pero servia la version anterior, y ningun check automatico lo
 * detecta. Al tocar esta lista, abrir cada enlace y mirar QUE sirve.
 */

export type Modelo = 'propio' | 'cliente';

export interface Producto {
  id: string;
  nombre: string;
  url: string | null;
  modelo: Modelo;
  /** Cliente, cuando el producto se hizo por encargo. */
  cliente?: string;
  stack: string[];
  es: { que: string; detalle: string };
  en: { que: string; detalle: string };
  /** Nota al pie, cuando el estado necesita explicacion. */
  nota?: { es: string; en: string };
}

export const productos: Producto[] = [
  {
    id: 'almazen',
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
    en: {
      que: 'Multi-tenant ERP',
      detalle:
        'Inventory, purchasing, sales, POS and Peruvian electronic invoicing. Ships with a ' +
        'conversational assistant over 29 read-only tools, each gated by its own permission.',
    },
  },
  {
    id: 'mozaicopro',
    nombre: 'MozaicoPro',
    url: 'https://mozaicopro.djasoft.net.pe/',
    modelo: 'propio',
    stack: ['Go', 'Gin', 'React 19', 'PostgreSQL'],
    es: {
      que: 'Gestión de restaurantes',
      detalle:
        'Pedidos, salón y cocina sincronizados en tiempo real por WebSockets: el estado de ' +
        'cada comanda llega a la pantalla que le toca sin recargar.',
    },
    en: {
      que: 'Restaurant management',
      detalle:
        'Orders, floor and kitchen kept in sync over WebSockets — order state reaches the ' +
        'right screen without a reload.',
    },
  },
  {
    id: 'easypay',
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
    en: {
      que: 'HR, attendance and payroll',
      detalle:
        'Staff, attendance tracking, scheduling and payroll runs — automating the process ' +
        'that eats the most administrative hours every month.',
    },
  },
  {
    id: 'otto-tonsmann',
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
    en: {
      que: 'Sales, cash desk and student registry',
      detalle:
        'Replaced a technical institute’s paper records: cash desk, receipts and student ' +
        'registry, with role-based access, transactional inventory and a per-operation audit trail.',
    },
  },
  {
    id: 'coneri',
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
    en: {
      que: 'Corporate site and admin panel',
      detalle:
        'Site, product catalog with a quote cart, and an admin panel for a solar energy ' +
        'company. Orphaned images are cleaned up automatically by triggers on the catalog.',
    },
  },
  {
    id: 'master-color',
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
    en: {
      que: 'E-commerce platform',
      detalle:
        'Storefront, order management and field support, with a Flutter mobile app. A sales ' +
        'chatbot answers on stock and pricing while seeing nothing but the public catalog.',
    },
    nota: { es: 'En desarrollo activo', en: 'In active development' },
  },
  {
    id: 'agenda-eh',
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
    en: {
      que: 'Time management',
      detalle:
        'Eisenhower matrix with two-way Google Calendar sync, Gantt view and projects. ' +
        'Specified in writing before a line of code was written.',
    },
  },
  {
    id: 'surgimed',
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
    en: {
      que: 'Corporate site',
      detalle:
        'Institutional site for an importer of osteosynthesis material and surgical ' +
        'equipment, with continuous deployment from the repository.',
    },
  },
];

export const propios = productos.filter((p) => p.modelo === 'propio');
export const paraClientes = productos.filter((p) => p.modelo === 'cliente');
