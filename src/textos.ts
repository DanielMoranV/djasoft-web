/**
 * Textos del sitio comercial. Los datos de producto viven en src/data.
 *
 * Este sitio es SOLO espanol y SOLO vendedor: habla a un dueno de empresa,
 * no a un reclutador. El perfil tecnico —stacks, arquitectura, open source,
 * commits— vive aparte, en PERFIL_TECNICO, y a proposito no se mezcla aqui.
 */

/** Portafolio de desarrollador. Publico distinto, dominio distinto. */
export const PERFIL_TECNICO = 'https://danielmoranv.github.io';

export const s = {
  titulo: 'Djasoft — Software de gestión para empresas en Sullana y Piura',
  descripcion:
    'Desarrollo de software de gestión desde Sullana, para empresas de Piura e Ignacio ' +
    'Escudero: ' +
    'ERP, planillas, facturación electrónica ante SUNAT y automatización sobre los sistemas ' +
    'que ya usan. Ocho sistemas en producción, abribles ahora mismo.',

  tarjetaAlt:
    'Djasoft — Software de gestión que ya está funcionando. ERPs, planillas, facturación ' +
    'electrónica SUNAT y automatización. Daniel Morán Vílchez, Piura, Perú.',

  /* Repetido por todo el sitio: el gesto de abrir algo real. */
  abrir: 'Abrir',

  menuAbrir: 'Abrir el menú',
  temaLeyenda: 'Tema de la página',
  temaClaro: 'Claro',
  temaOscuro: 'Oscuro',
  temaSistema: 'Sistema',

  indiceEtiqueta: 'sistemas en producción',
  indiceTitulo: 'Cada enlace abre el producto real, no una captura.',
  bandaClientes: 'Empresas que lo pagaron y lo siguen usando',
  bandaProductos: 'Productos propios',

  navQueResuelvo: 'Qué resuelvo',
  /* Mas corta que el titulo de la seccion a proposito: «Por qué contratarme»
     en caja alta con este espaciado rompia la barra. */
  navServicios: 'Servicios',
  navClientes: 'Casos',
  navProductos: 'Proyectos',
  navContacto: 'Contacto',

  heroTitulo: 'Software de gestión que ya está funcionando.',
  heroEntrada:
    'Soy Daniel Morán Vílchez y desarrollo desde Ignacio Escudero, en Sullana, bajo la marca ' +
    'Djasoft. He puesto a ' +
    'funcionar sistemas en institutos, clínicas, distribuidoras, restaurantes y empresas de ' +
    'energía solar: ERPs, planillas, facturación electrónica ante SUNAT, y automatización ' +
    'alrededor de lo que ya usan, sin apagarlo.',
  heroPrueba: 'Todo lo que hay debajo se puede abrir y probar ahora mismo.',

  metricaProductos: 'sistemas en producción, abribles ahora mismo',
  metricaSectores: 'sectores distintos, de un instituto a una clínica',
  metricaRegistros: 'registros migrados sin parar la operación',

  productosTitulo: 'Proyectos propios',
  productosEntrada:
    'Cada uno nació de un problema real y lo resuelve de forma eficiente. Detrás hay un ' +
    'estudio a fondo de la normativa peruana y del mercado al que sirve, y eso se nota en lo ' +
    'que ahorra: horas administrativas que dejan de gastarse cada mes, y control real sobre ' +
    'las ventas y los movimientos, al día y sin tener que pedírselo a nadie. Se contratan ' +
    'por uso o se adquieren en propiedad. Cada enlace abre el producto real, no una captura.',

  clientesTitulo: 'Casos de éxito',
  clientesEntrada:
    'Ninguno pidió “un sistema”: pedían dejar de anotar la caja en papel, aparecer cuando ' +
    'alguien busca su rubro, vender fuera del mostrador. Eso es lo que entregué, y todo ' +
    'sigue en producción.',

  resuelvoTitulo: 'Qué resuelvo',
  resuelvoEntrada: 'Tres cosas que no encontrarás en un software importado.',

  r1Titulo: 'Sistemas que funcionan y no hay que apagar',
  r1Texto:
    'FoxPro fue y sigue siendo un referente: hay operaciones que llevan años sostenidas ' +
    'sobre él, y eso no es deuda técnica, es la prueba de que funciona. No vengo a ' +
    'apagarlo. Escribí un motor propio que lee y escribe sobre esas tablas mientras el ' +
    'personal trabaja, bloqueando solo los bytes de cada registro: así se llevaron más de ' +
    '500.000 registros históricos a reportes, web y análisis sin cerrar un día ni ' +
    'cambiarle la rutina a nadie. El proceso que funciona se queda; se automatiza lo que ' +
    'pasa alrededor.',

  r2Titulo: 'Las reglas peruanas, que nadie más implementa',
  r2Texto:
    'Facturación electrónica ante SUNAT, SIAGIE y MINEDU en educación, normativa de ' +
    'SUSALUD en salud, RENIEC y ubigeo. Es la parte que un SaaS importado nunca resuelve ' +
    'bien, y la que decide si el software sirve de verdad aquí.',

  serviciosTitulo: 'Por qué contratarme',
  serviciosEntrada:
    'Porque no llego con un producto debajo del brazo a ver dónde encaja. Estas son las ' +
    'cuatro maneras en que puedo entrar en su operación, y ninguna empieza por apagar lo ' +
    'que ya le funciona.',

  sv1Titulo: 'Poner en marcha uno de mis productos',
  sv1Texto:
    'AlmaZen, Mozaico o EasyPay funcionando con sus datos, sus productos y su manera de ' +
    'trabajar. No es instalarlo y desearle suerte: es cargar lo que ya tiene, ajustar lo que ' +
    'haga falta y acompañar las primeras semanas, que son las que deciden si un sistema se ' +
    'usa o se abandona.',

  sv2Titulo: 'Automatizar e integrar lo que ya tiene',
  sv2Texto:
    'Su sistema actual —FoxPro, hojas de cálculo, o el que sea— se queda donde está y ' +
    'funcionando. Lo que construyo alrededor hace que los datos lleguen a donde hacen falta: ' +
    'reportes, web, otro sistema, análisis. Así se movieron más de 500.000 registros sin ' +
    'cerrar un día.',

  sv3Titulo: 'Inteligencia artificial dentro de su operación',
  sv3Texto:
    'No un chatbot pegado por fuera. Un asistente que consulta sus datos reales con permisos ' +
    'por usuario, o uno público que solo ve lo que usted decida enseñar. Los dos están ' +
    'funcionando hoy en empresas, y se pueden probar antes de contratar nada.',

  serviciosLlamada: 'Cuénteme qué necesita y le digo cuál de las cuatro es',

  sv4Titulo: 'Consultoría y desarrollo a medida',
  sv4Texto:
    'Cuando lo que necesita no existe todavía. O cuando lo que necesita es que alguien mire ' +
    'su operación con criterio y le diga qué automatizar primero, qué puede esperar y qué ' +
    'conviene no tocar.',

  r3Titulo: 'Inteligencia artificial dentro del producto',
  r3Texto:
    'No como asistente de programación: como parte del sistema. En AlmaZen, un agente ' +
    'conversacional consulta stock, ventas, márgenes y deuda con 29 herramientas, cada ' +
    'una con su propio permiso. En Master Color, un chatbot de ventas atiende al público ' +
    'sin ninguna herramienta, viendo solo el catálogo. Dos problemas distintos, dos ' +
    'diseños opuestos a propósito.',

  contactoTitulo: 'Hablemos',
  contactoEntrada:
    'Si su operación se sostiene con hojas de cálculo, si tiene un sistema que funciona ' +
    'pero nadie se atreve a tocar, o si su empresa no aparece cuando la buscan, escríbame. ' +
    'Le diré con franqueza si le sirve uno de estos productos, si hay que construirlo, o si ' +
    'lo que necesita no es algo que yo venda.',
  contactoCorreo: 'Correo',
  contactoUbicacion: 'Ignacio Escudero · Sullana — Piura, Perú',
  contactoTelefono: '948 860 381',
  contactoWhatsapp: 'WhatsApp',
  /*
    El ambito va en texto visible, no solo en los datos estructurados: Google
    ignora un lugar que solo aparece en el marcado, y para una busqueda local
    -"sistema de facturacion en Sullana"- esta frase es la que compite.
  */
  contactoAmbito:
    'Estoy en Ignacio Escudero, provincia de Sullana, y trabajo con empresas de toda la ' +
    'región —Sullana, Piura y alrededores— y con el resto del Perú en remoto. Cuando hay ' +
    'que estar delante del sistema, se está.',

  /* Etiquetado asi a proposito: deja claro que es otro publico y otro sitio. */
  piePerfil: 'Perfil técnico (para reclutadores)',
  pieDerechos: 'Djasoft — Daniel Morán Vílchez',

  /* Paginas de SEO local, enlazadas desde el pie para que no queden huerfanas. */
  pieSullana: 'Software en Sullana',
  piePiura: 'Software en Piura',
  piePeru: 'Software a medida en Perú',
  pieBlog: 'Blog',

  /* Ficha individual de producto (/productos/{id}). */
  migaInicio: 'Inicio',
  migaProyectos: 'Proyectos',
  paginaParaQuien: 'Para quién es',
  paginaIncluye: 'Qué incluye',
  paginaOtros: 'Otros proyectos',
  paginaVolver: 'Volver a proyectos',

  /* Pagina 404. */
  error404Titulo: 'Esto no existe.',
  error404Texto:
    'El enlace que seguiste no lleva a ninguna página de Djasoft. Puede que se haya movido, ' +
    'o que nunca haya existido —dímelo por WhatsApp si crees que es un error mío.',
  error404Inicio: 'Volver al inicio',
  error404Proyectos: 'Ver los sistemas en producción',
} as const;
