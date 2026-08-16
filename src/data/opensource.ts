/**
 * Piezas open source. La capa 3 de la estrategia: codigo con valor tecnico
 * pero sin valor comercial propio, extraido de los productos.
 */

export interface Pieza {
  nombre: string;
  url: string;
  /** Distintivo corto: donde esta publicado, o el lenguaje. */
  sello: string;
  es: string;
  en: string;
}

export const piezas: Pieza[] = [
  {
    nombre: 'py-foxpro-engine',
    url: 'https://github.com/DanielMoranV/py-foxpro-engine',
    sello: 'Python · MIT',
    es:
      'Lee y escribe tablas FoxPro (.dbf) a nivel de byte, con bloqueo por rangos: inserta ' +
      'registros mientras la aplicación de los noventa sigue abierta en cada escritorio. ' +
      'Sin dependencias.',
    en:
      'Reads and writes FoxPro (.dbf) tables at the byte level with byte-range locking — ' +
      'appends records while the 1990s application is still open on every desk. No dependencies.',
  },
  {
    nombre: 'sunat-comprobantes',
    url: 'https://github.com/DanielMoranV/sunat-comprobantes',
    sello: 'Packagist · MIT',
    es:
      'Utilidades de facturación electrónica para SUNAT, publicadas en Packagist como ' +
      'djasoft/sunat-comprobantes.',
    en:
      'Peruvian electronic invoicing (SUNAT) utilities, published on Packagist as ' +
      'djasoft/sunat-comprobantes.',
  },
  {
    nombre: 'nomenclador',
    url: 'https://github.com/DanielMoranV/nomenclador',
    sello: 'Python · MIT',
    es:
      'Renombra facturas PDF en masa. Lee el texto nativo y, si el PDF viene escaneado, ' +
      'recurre a OCR. Aplica las nomenclaturas que exige cada aseguradora.',
    en:
      'Bulk-renames PDF invoices — reading native text, falling back to OCR when the PDF is ' +
      'a scan, and applying each insurer’s required naming scheme.',
  },
  {
    nombre: 'almazen-api · almazen_frontend',
    url: 'https://github.com/DanielMoranV/almazen-api',
    sello: 'Laravel · Vue 3',
    es:
      'La versión desacoplada de AlmaZen, publicada entera: API en Laravel y cliente en ' +
      'Vue 3, con licencia PolyForm Noncommercial.',
    en:
      'The decoupled version of AlmaZen, published in full: a Laravel API and a Vue 3 ' +
      'client, under PolyForm Noncommercial.',
  },
];
