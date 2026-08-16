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

import almazenIcono from '../assets/productos/almazen.png';
import mozaicoIcono from '../assets/productos/mozaicopro.png';
import easypayIcono from '../assets/productos/easypay.png';
import ottoIcono from '../assets/productos/otto-tonsmann.png';
import coneriIcono from '../assets/productos/coneri.png';
import masterColorIcono from '../assets/productos/master-color.png';
import surgimedIcono from '../assets/productos/surgimed.png';

export type Modelo = 'propio' | 'cliente';

export interface Producto {
  id: string;
  nombre: string;
  url: string | null;
  modelo: Modelo;
  /**
   * Logotipo del producto. Los PNG los optimiza Astro y salen en WebP; el SVG
   * de Agenda EH se sirve tal cual desde /productos, que ya pesa 1 KB.
   */
  icono?: ImageMetadata;
  iconoSvg?: string;
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
    sector: 'retail',
    icono: almazenIcono,
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
    sector: 'restauración',
    icono: mozaicoIcono,
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
    sector: 'servicios',
    icono: easypayIcono,
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
    sector: 'educación',
    icono: ottoIcono,
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
    sector: 'energía',
    icono: coneriIcono,
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
    sector: 'retail',
    icono: masterColorIcono,
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
    sector: 'servicios',
    iconoSvg: '/productos/agenda-eh.svg',
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
    sector: 'salud',
    icono: surgimedIcono,
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
