const questionsQuiz = [
    {
      id: 1,
      question: "Pourquoi est-il important d'apprendre à évaluer les distances ?",
      options: [
        { id: 1, texte: "Pour améliorer le sens de l'orientation" },
        { id: 2, texte: "Pour savoir mesurer précisément au mètre près" },
        { id: 3, texte: "Pour calculer le temps de trajet exact" },
      ],
      bonneReponse: 1,
      explication: "Apprendre à évaluer les distances améliore la capacité à se repérer dans l'espace, ce qui est essentiel pour l'orientation.",
    },
    {
      id: 2,
      question: "Quelle marge de précision est-elle pertinente de savoir estimer ?",
      options: [
        { id: 1, texte: "+/- 1 mètre" },
        { id: 2, texte: "+/- 10 mètres" },
        { id: 3, texte: "+/- 1000 mètres" },
      ],
      bonneReponse: 2,
      explication: "Une estimation précise à +/- 10 mètres est généralement suffisante pour la plupart des activités de navigation.",
    },
    {
      id: 3,
      question: "Qu'est-ce qu'une bonne estimation des distances permet de faire ?",
      options: [
        { id: 1, texte: "Choisir le meilleur chemin" },
        { id: 2, texte: "Éviter de se perdre en estimant les intersections" },
        { id: 3, texte: "Faire des calculs complexes de distance" },
      ],
      bonneReponse: 2,
      explication: "Une bonne estimation des distances permet de mieux s'orienter et d'éviter de se perdre en estimant les intersections.",
    },
  ];
  
  export default questionsQuiz;
  