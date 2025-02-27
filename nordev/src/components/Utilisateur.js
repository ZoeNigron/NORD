import React, { useEffect, useState } from "react";
import { obtenirUtilisateurs } from "../api";

function Utilisateur() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      const data = await obtenirUtilisateurs();
      console.log("Données récupérées :", data);
      setUtilisateurs(data);
    };
    
    fetchUtilisateurs();
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      {utilisateurs.length > 0 ? (
        <ul>
          {utilisateurs.map((utilisateur) => (
            <li key={utilisateur.id}>
              {utilisateur.nom} {utilisateur.prenom} - {utilisateur.email} {utilisateur.motdepasse}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun utilisateur trouvé.</p>
      )}
    </div>
  );
}

export default Utilisateur;
