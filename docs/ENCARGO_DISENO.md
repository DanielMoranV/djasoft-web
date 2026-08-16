# Encargo de dirección visual — djasoft.net.pe

> Documento para entregar a quien haga el diseño. Se pasa entero, tal cual.

Necesito una dirección visual para un sitio comercial de una sola página. El texto
funciona; los estilos son genéricos y quiero que dejen de serlo. Está en producción:
<https://djasoft.net.pe> — ábrelo antes de proponer nada.

## Qué es y a quién le habla

Djasoft es la marca con la que Daniel Morán Vílchez vende software de gestión desde
Ignacio Escudero (Sullana, Piura, Perú). El lector es **el dueño o gerente de una empresa
peruana de provincia** —un instituto, una clínica, una distribuidora, un restaurante, una
empresa de energía solar—, no un desarrollador y no un inversor. Compra que su problema
desaparezca, y desconfía por defecto de quien parece una agencia. Tiene entre 35 y 60 años y
a menudo llega desde el móvil.

El sitio debe transmitir **oficio y solvencia, no modernidad**. Nada de estética de startup:
sin degradados de moda, sin glassmorphism, sin ilustraciones 3D, sin "AI-powered" visual. Si
tuviera que parecerse a algo, que sea a un taller que lleva veinte años abierto y al que la
gente vuelve.

## La voz que ya tiene el texto, y que el diseño debe respetar

El copy es sobrio, concreto y antipublicitario. Presume de prueba, no de adjetivos. Ejemplos
reales del sitio:

- «Cada enlace abre el producto real, no una captura.»
- «Ninguno pidió "un sistema": pedían dejar de anotar la caja en papel, aparecer cuando
  alguien busca su rubro, vender fuera del mostrador.»
- «FoxPro fue y sigue siendo un referente [...] El proceso que funciona se queda; se
  automatiza lo que pasa alrededor.»

El diseño tiene que sonar así: afirmativo, sin decoración gratuita, con la evidencia por
delante. Si un elemento no sostiene una afirmación, sobra.

## Qué tiene ahora, sección por sección

1. **Cabecera fija** — marca "Djasoft" + 4 enlaces de ancla + botón Contacto.
2. **Hero** — titular, párrafo de presentación, una línea de refuerzo en color acento, y
   **tres métricas** (8 sistemas en producción · 6 sectores distintos · 500 000+ registros
   migrados).
3. **Qué resuelvo** — 3 bloques largos numerados 01/02/03 (sistemas heredados que no hay que
   apagar, normativa peruana, IA dentro del producto).
4. **Por qué contratarme** — 4 servicios en tarjetas, más una llamada al contacto.
5. **Casos de éxito** — 4 tarjetas de trabajo por encargo, con logotipo del cliente.
6. **Proyectos propios** — 4 tarjetas de producto, con logotipo y enlace vivo.
7. **Contacto** — botón de WhatsApp, teléfono, correo, ubicación.
8. **Pie** — copyright, enlace al perfil técnico, GitHub, LinkedIn.

## Qué es "genérico" aquí, para que no me lo devuelvas

El problema no es la paleta, es que **todo tiene la misma forma**. Ahora mismo:

- Toda sección es: título + subtítulo + rejilla de tarjetas.
- Toda tarjeta es `rounded-xl border p-6` con fondo alterno. Hay tres bloques seguidos de
  tarjetas casi idénticas y el ojo no distingue jerarquía.
- Un solo tamaño de cuerpo para casi todo; la tipografía no tiene voz (system-ui).
- Todo va dentro del mismo `max-w-5xl`, sin importar si es prosa o rejilla.
- El ritmo vertical es uniforme: `py-16` en todas partes, así que nada destaca.
- El único recurso de énfasis es el color de acento.

Quiero **jerarquía y ritmo**: que las secciones no se parezcan entre sí, que la identidad
salga de la tipografía y la composición antes que del color, y que exista al menos un
momento visual que ancle el recuerdo de la página.

## Restricción dura: no debe parecerse al otro sitio

El perfil técnico del mismo autor, <https://danielmoranv.github.io/es/>, ya tiene dirección
propia y **debe seguir siendo obviamente otra cosa** (público distinto: reclutadores y gente
técnica). Esa usa: serif de texto Newsreader en titulares, Martian Mono a caja alta para
metadatos, Public Sans de cuerpo, verde `#2f6b58` sobre blanco frío, y una unidad de "ficha"
con columna de metadatos a la izquierda y cabeceras de sección numeradas con regla. **No
repitas nada de eso.** Djasoft es la marca cálida y vendedora; aquella es fría y de
herramienta.

## Restricciones técnicas

- **Astro estático + Tailwind v4** con tokens en `@theme` y variables CSS. Sin framework de
  UI, sin librerías de animación. Hoy el sitio envía **cero JavaScript** y quiero que siga
  así (un menú móvil sin JS es aceptable si hace falta).
- **Claro y oscuro**, definidos ambos por completo; ningún color puede existir solo dentro de
  una media query.
- **Accesibilidad real**: contraste AA como mínimo, dime los ratios medidos;
  `:focus-visible` visible; respetar `prefers-reduced-motion`.
- **Tipografía**: puedo autoalojar fuentes con subconjunto latino. Máximo dos familias, y
  justifica el coste de cada una en bytes.
- **Imágenes**: los logotipos de producto y de cliente son WebP de 96 px servidos desde
  `/productos`, **a todo color** —escudos, degradados, ilustraciones— y de estilos muy
  dispares entre sí. Necesito una solución que los contenga para que no destrocen la
  coherencia de la página. No uso el componente `<Image>` de Astro.
- Paleta actual, por si algo merece conservarse: marca `#1b4965`, acento `#c8873a`, papel
  `#fbfaf7`, tinta `#0d1b2a`. El favicon y la tarjeta OG usan azul de marca con la D en
  ámbar; puedes proponer evolucionarlos, pero dime el coste.

## Qué quiero que me entregues

1. **Dos o tres direcciones visuales distintas**, no variaciones de la misma. De cada una: un
   nombre, un párrafo explicando la idea y **por qué le encaja a este lector en concreto**, la
   pareja tipográfica y la paleta.
2. Recomiéndame una, con el motivo. Discrepa de mí si crees que me equivoco en algo del
   planteamiento.
3. Para la elegida: el juego completo de tokens (escala tipográfica, colores en claro y
   oscuro con sus ratios, espaciado, medidas de línea), las piezas reutilizables, y **qué
   cambia en cada una de las ocho secciones** respecto a lo que hay hoy.
4. CSS y marcado Astro reales, listos para pegar. No descripciones.

Antes de proponer, dime qué has entendido del lector y qué te chirría del sitio actual. Si
algo de este encargo te parece contradictorio, pregúntamelo primero.
