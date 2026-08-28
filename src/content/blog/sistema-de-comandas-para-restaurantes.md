---
titulo: 'Cómo implementar un sistema de comandas para restaurantes'
pregunta: '¿Cómo implementar un sistema de comandas para un restaurante?'
descripcion: 'Comanda digital de verdad significa que cocina recibe el pedido al instante por WebSockets, sin que nadie pregunte si ya salió el plato.'
fecha: 2026-08-28
---

## Respuesta directa

Un sistema de comandas de verdad no es una tablet donde el mesero anota lo mismo que antes
anotaba en papel. Es que ese pedido llegue a la pantalla de cocina al instante, sin que
nadie recargue nada, y que cada cambio de estado —en preparación, listo, servido— vuelva al
salón solo. Si alguien tiene que preguntar "¿ya salió el plato de la mesa 4?", el sistema no
está resolviendo el problema que debería.

## Lo que tiene que pasar en tiempo real, no cada tanto

La diferencia entre un sistema de comandas que sirve y uno que no es una palabra técnica:
WebSockets, o cualquier mecanismo que empuje los cambios al instante, en vez de que cada
pantalla pregunte "¿hay algo nuevo?" cada cierto tiempo. Con esa segunda forma —la más común
en soluciones baratas— hay un retraso entre lo que pasa en cocina y lo que ve el salón, y ese
retraso es exactamente donde se pierden los pedidos y se enfría la comida.

## Lo que un sistema de comandas necesita, además de la comanda

- Gestión de mesas y turnos, para que abrir y cerrar una mesa no dependa de recordar de
  memoria qué se pidió.
- Cierre de caja integrado, para no reconciliar a mano lo que el sistema ya sabe.
- Toma de pedidos desde cualquier tablet o celular en el salón, no una sola estación fija.

## El caso: Mozaico

En Mozaico, el pedido se toma en la mesa y aparece al instante en la pantalla de cocina, y
cada cambio de estado vuelve al salón por WebSockets. Nadie recarga, nadie pregunta si ya
salió el plato —la pregunta deja de tener sentido porque la respuesta ya está en la pantalla
correcta, actualizada sola.

## Conclusión

Si su restaurante ya tiene "comandas digitales" pero alguien sigue cruzando el salón para
preguntar en cocina, el problema no está resuelto —solo cambió de papel a pantalla. La
comanda digital de verdad elimina esa pregunta, no la traslada.

[Abra Mozaico](https://mozaicopro.djasoft.net.pe/) o
[escríbame por WhatsApp](https://wa.me/51948860381).
