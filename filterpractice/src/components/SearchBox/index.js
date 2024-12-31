import React from "react";
import "./styles.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <header>
      <input type="text" placeholder="Buscar..." onChange={onSearchChange} />
    </header>
  );
};

export default SearchBox;

/*Crear el componente de SearchBox.js: Este componente será responsable de manejar la entrada del usuario. Aceptaría una función de actualización como prop, que se
 llamará cuando el texto del cuadro de búsqueda cambie.*/
