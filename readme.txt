Introducción

Esta actividad práctica construirás un app de React de Filtrado de listas o elementos, la app tendrá una lista de cualquier tipo de elementos,
 por ejemplo: películas, tareas, nombres, canciones, etc. Y tendrá un input para que al escribir alguna palabra se filtren solo los elementos 
 que coincidan con el texto ingresado.

La app tiene que contar con las siguientes características:

Crear el proyecto con create-react-app
Usar componentes funcionales y hooks
Usar los conceptos aprendidos en las clases de forms, listas y keys
Los componentes tendrán que ser estilizados y los conceptos de CSS aplicados correctamente
Contemplar los conceptos de HTML semántico
Crear un repositorio de GitHub con los archivos del app, recuerda que NO debemos de subir la carpeta de node_modules


Antes de comenzar

Asegúrate de tener instalado Node.js en tu sistema, asimismo, crea un nuevo proyecto de React para esta práctica, no uses el mismo que se trabajó en clase.



Paso a paso

A continuación se mencionan los pasos a seguir para el desarrollo de la app:

Crear el componente de App.js: Este será el componente principal que contendrá y organizará otros componentes. Debería tener un estado para almacenar la lista
 de elementos y el texto de búsqueda.

Crear el componente de FilteredList.js: Este componente será responsable de mostrar la lista filtrada de elementos. Aceptará la lista de elementos y el texto de
 búsqueda como props y luego filtrará los elementos que coincidan con el texto de búsqueda.

Crear el componente de SearchBox.js: Este componente será responsable de manejar la entrada del usuario. Aceptaría una función de actualización como prop, que se
 llamará cuando el texto del cuadro de búsqueda cambie.

Implementar la lógica de filtrado: En el componente FilteredList, filtra la lista de elementos proporcionada comparando el texto de búsqueda con cada elemento. 
Puedes usar el método

Renderizar la lista filtrada: En el componente FilteredList, itera sobre la lista filtrada de elementos y crea una lista ordenada (usando etiquetas <ul> y <li> 
o similar) para mostrar los elementos

Manejar el input o entrada del usuario: En el componente SearchBox, crea un cuadro de entrada (usando la etiqueta <input> o similar) y maneja el evento onChange 
para actualizar el texto de búsqueda en el componente App

Integrar los componentes: En el componente App, importa e integra los componentes FilteredList y SearchBox. Pasa la lista de elementos y el texto de búsqueda como
 props al componente FilteredList y la función de actualización al componente SearchBox