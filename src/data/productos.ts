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
  /**
   * Contenido propio de la ficha individual (/productos/{id}), mas largo que
   * la tarjeta de la home. `caracteristicas` son afirmaciones verificables,
   * no adjetivos: cada una tiene que poder confirmarse abriendo el producto.
   */
  pagina: {
    paraQuien: string;
    caracteristicas: string[];
  };
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
    pagina: {
      paraQuien:
        'Empresas con más de un local o más de un rubro que hoy llevan el inventario en ' +
        'hojas de cálculo o en un sistema que ya no alcanza: distribuidoras, tiendas con ' +
        'varias sucursales, negocios que venden al por mayor y al detalle.',
      caracteristicas: [
        'Inventario en tiempo real por almacén y por empresa, sin hojas de cálculo paralelas.',
        'Compras y ventas con control de stock automático, kardex y valorización.',
        'Punto de venta con boleta y factura electrónica ante SUNAT, integrado al inventario.',
        'Multiempresa: varias razones sociales o locales desde una sola instalación, con datos separados.',
        'Asistente de IA con 29 herramientas de solo lectura sobre datos reales —stock, ventas, márgenes, deuda— con permisos por usuario.',
      ],
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
    pagina: {
      paraQuien:
        'Restaurantes y negocios de comida que todavía cruzan la comanda en papel entre el ' +
        'salón y la cocina, o que pierden pedidos y tiempo en ese cruce.',
      caracteristicas: [
        'Toma de pedidos en mesa desde tablet o celular.',
        'Pantalla de cocina que recibe el pedido al instante, sin recargar.',
        'Sincronización salón-cocina por WebSockets: cada cambio de estado —en preparación, listo, servido— vuelve solo.',
        'Gestión de mesas, turnos y cierre de caja.',
      ],
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
    pagina: {
      paraQuien:
        'Empresas que calculan planillas a mano o en hojas de cálculo cada mes, y pierden ' +
        'horas conciliando asistencia, horarios y descuentos.',
      caracteristicas: [
        'Registro de personal y control de asistencia.',
        'Horarios y turnos configurables por empleado o por área.',
        'Cálculo automático de planillas: sueldos, descuentos y aportes.',
        'Reportes listos para presentar o auditar.',
      ],
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
    pagina: {
      paraQuien:
        'Institutos y centros educativos que llevan la caja y el padrón de alumnos en papel ' +
        'o en cuadernos separados.',
      caracteristicas: [
        'Caja y emisión de comprobantes por cada cobro.',
        'Padrón de alumnos con historial de pagos.',
        'Control de acceso por roles: caja, dirección y matrícula ven solo lo que les corresponde.',
        'Inventario transaccional y auditoría de cada operación registrada.',
      ],
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
    pagina: {
      paraQuien:
        'Empresas de energía solar u otro rubro técnico que necesitan mostrar catálogo, ' +
        'recibir cotizaciones y administrar contenido sin depender de un desarrollador para ' +
        'cada cambio.',
      caracteristicas: [
        'Sitio institucional con catálogo de productos.',
        'Carrito de cotización: el visitante arma su pedido y lo envía sin pasar por WhatsApp manual.',
        'Panel de administración para el catálogo y el contenido del sitio.',
        'Limpieza automática de imágenes huérfanas cuando cambia el catálogo, con Cloud Functions.',
      ],
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
    pagina: {
      paraQuien:
        'Comercios con tienda física y en línea que necesitan que ambas compartan el mismo ' +
        'catálogo, stock y pedidos, y que además vendan por app.',
      caracteristicas: [
        'Tienda en línea con gestión de pedidos.',
        'App móvil en Flutter para clientes o para el equipo de campo.',
        'Chatbot de ventas que responde disponibilidad y precios, limitado al catálogo público.',
        'Soporte técnico de campo integrado al mismo sistema.',
      ],
    },
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
    pagina: {
      paraQuien:
        'Profesionales y equipos pequeños que organizan su semana con la Matriz de ' +
        'Eisenhower y necesitan que eso viva sincronizado con Google Calendar, no en una ' +
        'hoja aparte.',
      caracteristicas: [
        'Matriz de Eisenhower —urgente/importante— para priorizar tareas.',
        'Sincronización bidireccional con Google Calendar: un cambio en cualquiera de los dos se refleja en el otro.',
        'Vista Gantt para proyectos con varias tareas y fechas.',
        'Inicio de sesión con la cuenta de Google mediante OAuth 2.0.',
      ],
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
    pagina: {
      paraQuien:
        'Empresas importadoras o distribuidoras que necesitan presencia institucional seria ' +
        '—catálogo, certificaciones, contacto— sin mantenerla a mano cada vez que cambia algo.',
      caracteristicas: [
        'Sitio institucional con catálogo de material de osteosíntesis y equipamiento quirúrgico.',
        'Despliegue continuo desde el repositorio: cada cambio se publica solo, sin subir archivos a mano.',
        'Automatización de la publicación con GitHub Actions.',
        'Hosting en Firebase.',
      ],
    },
  },
];

export const sectores = new Set(productos.map((p) => p.sector)).size;

export const propios = productos.filter((p) => p.modelo === 'propio');
export const paraClientes = productos.filter((p) => p.modelo === 'cliente');
