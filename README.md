# Pokedex
La enciclopedia digital creada por el profesor Oak es una herramienta invaluable para los Entrenadores en el mundo Pokémon.

### Demo

`<link>` : <https://pokedex.co.pe/>

### Desarrollo
Comencé el proyecto haciendo un pequeño esquema para ver la interacción de las vistas. Después comencé en función a ello a deducir las tareas para visualizarlas mejor las registré en un tablero Kanban.

[![](https://pokedex.co.pe/esquema.jpg)

#### Tablero

`<Trello>` : <https://trello.com/b/jn1p6i1k/pokedex>

### Tecnologías utilizadas

Vue: Requerido
Vuex: Para mantener la data en el store, los pokemones favoritos que han sido seleccionados y guardar el estado del loader.
Vue-router: Para generar las rutas a las vistas.
Sass: Permite ordenar mejor las variables y reutilizar los estilos.
BEM: Se utilizó esta sintaxis para mantener una estructura más legible en las clases.
Bootstrap 5: Se utilizó el grid system para ahorrar tiempo.
Dgsnackbar: Librería utilizada para mensaje de alerta al copiar al clipboard.

### Detalles finales
Se agregaron varias animaciones y hovers para mejorar el proyecto.
La petición al api cargaba muy rápido por lo que no se apreciaba el loader, se le añadió 3 segundos manualmente para que se apreciara la animación.
