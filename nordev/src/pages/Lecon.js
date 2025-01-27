// src/pages/Lecon.js
import React from "react";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import { useParams, Link } from "react-router-dom";

const Lecon = () => {
  const { id } = useParams(); // Récupérer l'ID de la leçon
  return (
    <div>
      <BarreNavig title={`Leçon ${id}`} backLink="/menu-lecons" homeLink="/" />
      <h1>Leçon {id}</h1>
      <p>Contenu de la leçon {id}...</p>
      <Link to={`/faire-lecon/${id}`}>
        <button>C'est parti</button>
      </Link>
    </div>
  );
};

export default Lecon;
