/** Cadenas de las dos versiones del sitio. Los datos viven en src/data. */

export const idiomas = { es: 'Español', en: 'English' } as const;
export type Idioma = keyof typeof idiomas;

export const t = {
  es: {
    htmlLang: 'es',
    titulo: 'Djasoft — Daniel Morán Vílchez',
    descripcion:
      'Software de gestión para empresas peruanas: ERP, planillas, facturación electrónica ' +
      'SUNAT y modernización de sistemas legacy. Seis productos en producción.',

    navProductos: 'Productos',
    navClientes: 'Clientes',
    navQueResuelvo: 'Qué resuelvo',
    navCodigo: 'Código abierto',
    navContacto: 'Contacto',
    otroIdioma: 'English',

    heroTitulo: 'Software de gestión que ya está funcionando.',
    heroEntrada:
      'Soy Daniel Morán Vílchez y desarrollo desde Piura, bajo la marca Djasoft. Construyo ' +
      'ERPs, planillas y facturación electrónica para empresas peruanas, y traigo al ' +
      'presente los sistemas antiguos sin apagarlos.',
    heroPrueba: 'Todo lo que hay debajo se puede abrir y probar ahora mismo.',

    metricaProductos: 'productos en producción',
    metricaClientes: 'clientes que pagaron',
    metricaRegistros: 'registros migrados sin parar la operación',

    productosTitulo: 'Productos propios',
    productosEntrada:
      'Se venden por suscripción y están en uso hoy. Cada enlace abre el producto real, no ' +
      'una captura.',

    clientesTitulo: 'Trabajo por encargo',
    clientesEntrada:
      'Proyectos de clientes que pagaron por ellos y siguen en producción.',

    resuelvoTitulo: 'Qué resuelvo',
    resuelvoEntrada: 'Tres cosas que no encontrarás en un software importado.',

    r1Titulo: 'Sistemas antiguos que no se pueden apagar',
    r1Texto:
      'Empresas que funcionan sobre FoxPro y no pueden “migrar a la nube” porque el sistema ' +
      'viejo sigue abierto en cada escritorio. Escribí un motor propio que inserta y edita ' +
      'sobre esas tablas mientras el personal trabaja, bloqueando solo los bytes de cada ' +
      'registro. Así se migraron más de 500.000 registros históricos sin cerrar un día.',

    r2Titulo: 'Las reglas peruanas, que nadie más implementa',
    r2Texto:
      'Facturación electrónica ante SUNAT, SIAGIE y MINEDU en educación, normativa de ' +
      'SUSALUD en salud, RENIEC y ubigeo. Es la parte que un SaaS importado nunca resuelve ' +
      'bien, y la que decide si el software sirve de verdad aquí.',

    r3Titulo: 'Inteligencia artificial dentro del producto',
    r3Texto:
      'No como asistente de programación: como parte del sistema. En AlmaZen, un agente ' +
      'conversacional consulta stock, ventas, márgenes y deuda con 29 herramientas, cada ' +
      'una con su propio permiso. En Master Color, un chatbot de ventas atiende al público ' +
      'sin ninguna herramienta, viendo solo el catálogo. Dos problemas distintos, dos ' +
      'diseños opuestos a propósito.',

    codigoTitulo: 'Código abierto',
    codigoEntrada:
      'Piezas extraídas de los productos, publicadas enteras y sin reglas de negocio.',

    contactoTitulo: 'Hablemos',
    contactoEntrada:
      '¿Tiene una operación que se sostiene con hojas de cálculo, o un sistema antiguo que ' +
      'nadie se atreve a tocar? Escríbame y lo vemos.',
    contactoCorreo: 'Correo',
    contactoUbicacion: 'Piura, Perú',

    piePerfil: 'Perfil técnico',
    pieDerechos: 'Djasoft — Daniel Morán Vílchez',
  },

  en: {
    htmlLang: 'en',
    titulo: 'Daniel Morán Vílchez — Full Stack Developer & Data Engineer',
    descripcion:
      'I build business software that ships: multi-tenant ERPs, electronic invoicing and ' +
      'the data pipelines that move companies off legacy systems.',

    navProductos: 'Products',
    navClientes: 'Client work',
    navQueResuelvo: 'What I solve',
    navCodigo: 'Open source',
    navContacto: 'Contact',
    otroIdioma: 'Español',

    heroTitulo: 'Business software that ships.',
    heroEntrada:
      'I’m Daniel Morán Vílchez, a full stack developer and data engineer based in Piura, ' +
      'Peru. I build multi-tenant ERPs, payroll and electronic invoicing, and I move ' +
      'companies off legacy systems without switching them off.',
    heroPrueba: 'Everything below is live and can be opened right now.',

    metricaProductos: 'products in production',
    metricaClientes: 'paying clients',
    metricaRegistros: 'records migrated without stopping the operation',

    productosTitulo: 'My own products',
    productosEntrada:
      'Sold by subscription and in daily use. Every link opens the real product, not a screenshot.',

    clientesTitulo: 'Client work',
    clientesEntrada: 'Projects clients paid for, still in production.',

    resuelvoTitulo: 'What I solve',
    resuelvoEntrada: 'Three things you won’t get from imported software.',

    r1Titulo: 'Legacy systems that can’t be switched off',
    r1Texto:
      'Companies running on FoxPro that cannot simply “move to the cloud”, because the old ' +
      'system is still open on every desk. I wrote an engine that appends and edits those ' +
      'tables while staff keep working, locking only each record’s bytes. That is how ' +
      '500,000+ historical records were migrated without closing for a day.',

    r2Titulo: 'Peruvian regulation, which nobody else implements',
    r2Texto:
      'SUNAT electronic invoicing, SIAGIE and MINEDU for education, SUSALUD for healthcare, ' +
      'RENIEC and ubigeo data. It is the part an imported SaaS never gets right, and the ' +
      'part that decides whether the software is actually usable here.',

    r3Titulo: 'AI inside the product',
    r3Texto:
      'Not as a coding assistant — as part of the system. In AlmaZen, a conversational ' +
      'agent answers on stock, sales, margins and customer debt through 29 tools, each ' +
      'gated by its own permission. In Master Color, a public sales chatbot runs with no ' +
      'tools at all, seeing nothing but the catalog. Two problems, two deliberately ' +
      'opposite designs.',

    codigoTitulo: 'Open source',
    codigoEntrada:
      'Pieces extracted from the products, published in full and stripped of business rules.',

    contactoTitulo: 'Let’s talk',
    contactoEntrada:
      'Running an operation held together by spreadsheets, or a legacy system nobody dares ' +
      'to touch? Get in touch.',
    contactoCorreo: 'Email',
    contactoUbicacion: 'Piura, Peru',

    piePerfil: 'Technical profile',
    pieDerechos: 'Djasoft — Daniel Morán Vílchez',
  },
} as const;
