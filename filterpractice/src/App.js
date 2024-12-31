import React, { useState, Fragment } from "react";
import FilteredList from "./components/FilteredList";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  //Lista de elementos
  const [list, setList] = useState([
    {
      id: 1,
      genero: "Ficción",
      titulo: "Matar a un ruiseñor",
      autor: "Harper Lee",
    },
    {
      id: 2,
      genero: "Ficción",
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
    },
    {
      id: 3,
      genero: "Fantasía",
      titulo: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
    },
    { id: 4, genero: "Fantasía", titulo: "El hobbit", autor: "J.R.R. Tolkien" },
    {
      id: 5,
      genero: "Ciencia Ficción",
      titulo: "Dune",
      autor: "Frank Herbert",
    },
    {
      id: 6,
      genero: "Ciencia Ficción",
      titulo: "Neuromante",
      autor: "William Gibson",
    },
    {
      id: 7,
      genero: "Misterio",
      titulo: "La chica del dragón tatuado",
      autor: "Stieg Larsson",
    },
    {
      id: 8,
      genero: "Misterio",
      titulo: "El nombre de la rosa",
      autor: "Umberto Eco",
    },
    {
      id: 9,
      genero: "Romance",
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
    },
    {
      id: 10,
      genero: "Romance",
      titulo: "Jane Eyre",
      autor: "Charlotte Brontë",
    },
    {
      id: 11,
      genero: "Terror",
      titulo: "El resplandor",
      autor: "Stephen King",
    },
    { id: 12, genero: "Terror", titulo: "Drácula", autor: "Bram Stoker" },
    {
      id: 13,
      genero: "No Ficción",
      titulo: "Sapiens: De animales a dioses",
      autor: "Yuval Noah Harari",
    },
    {
      id: 14,
      genero: "No Ficción",
      titulo: "Educated",
      autor: "Tara Westover",
    },
    {
      id: 15,
      genero: "Biografía",
      titulo: "El diario de Ana Frank",
      autor: "Ana Frank",
    },
    {
      id: 16,
      genero: "Biografía",
      titulo: "Steve Jobs",
      autor: "Walter Isaacson",
    },
    {
      id: 17,
      genero: "Ficción Histórica",
      titulo: "La ladrona de libros",
      autor: "Markus Zusak",
    },
    {
      id: 18,
      genero: "Ficción Histórica",
      titulo: "Los pilares de la tierra",
      autor: "Ken Follett",
    },
    {
      id: 19,
      genero: "Suspenso",
      titulo: "El código Da Vinci",
      autor: "Dan Brown",
    },
    {
      id: 20,
      genero: "Suspenso",
      titulo: "La chica del tren",
      autor: "Paula Hawkins",
    },
  ]);

  //Estado para el texto de búsqueda
  const [searchText, setSearchText] = useState("");

  //Función para actualizar el texto de búsqueda
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Fragment>
      <SearchBox onSearchChange={handleSearchChange} />
      <FilteredList searchText={searchText} elementsList={list} />
    </Fragment>
  );
}

export default App;

/*Crear el componente de App.js: Este será el componente principal que contendrá y organizará otros componentes. Debería tener un estado para almacenar la lista
 de elementos y el texto de búsqueda.*/
