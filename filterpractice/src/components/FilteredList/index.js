import React from "react";
import "./styles.css";

const FilteredList = ({ elementsList, searchText }) => {
  // Filtrar la lista de elementos usando searchText
  const filteredList = elementsList.filter(
    (item) =>
      item.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
      item.autor.toLowerCase().includes(searchText.toLowerCase()) ||
      item.genero.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <section>
        <ul>
          {filteredList.map((item) => (
            <li key={item.id}>
              <div class="gener">*{item.genero}</div>
              <div class="title">{item.titulo}</div>
              <div class="author">{item.autor}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default FilteredList;

/*Crear el componente de FilteredList.js: Este componente será responsable de mostrar la lista filtrada de elementos. Aceptará la lista de elementos y el texto de
 búsqueda como props y luego filtrará los elementos que coincidan con el texto de búsqueda.*/
