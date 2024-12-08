import React, { useState, useEffect } from "react";
import Sponsor from "./Sponsor";
import ambam from '../assets/ambam.jpg';
import cnrs from '../assets/cnrs.jpeg';
import ENSPY from '../assets/ENSPY.jpg';
import uy1 from '../assets/uy1_logo.jpg';
import grenoble from '../assets/grenobleINP.jpg';
import inria from '../assets/inria.jpg';
import krakos from '../assets/logo_Krakos.jpeg';
import irisa from '../assets/logo-irisa-main.png';
import lig from '../assets/logo-lig_0.svg';
import udo from '../assets/logo_udo.jpg';
import lia from '../assets/lia.jpeg';
import estlc from '../assets/estlc.jpeg';


const sponsors = [
  {
    name: "Université de Yaoundé 1",
    image: uy1,
    link: "https://inscriptions-uy1.uninet.cm/",
  },
  {
    name: "Université d'Ebolowa",
    image: ambam, // Utilisation des imports locaux
    link: "https://unv-ebolowa.cm/",
  },
  {
    name: "Université Grenoble Alpes",
    image: grenoble,
    link: "https://www.univ-grenoble-alpes.fr/",
  },
  
  {
    name: "Ecole Nationale Supérieure Polytechnique de Yaoundé",
    image: ENSPY, // Utilisation des imports locaux
    link: "https://polytechnique.cm/",
  },
  {
    name: "Université de Douala",
    image: udo,
    link: "https://univ-douala.cm/",
  },
  {
    name: "KraKos",
    image: krakos,
    link: "https://www.inria.fr/fr/krakos-nouvelle-equipe-systemes",
  },

  {
    name: "Institut national de recherche en sciences et technologies du numérique",
    image: inria,
    link: "https://www.inria.fr/",
  }, {
    name: "Institut de Recherche en Informatique et Systèmes Aléatoires",
    image: irisa,
    link: "https://www.irisa.fr/",
  }, {
    name: "Centre national de la recherche scientifique",
    image: cnrs,
    link: "https://www.cnrs.fr/fr",
  }, 
  {
    name: "Laboratoire d'Informatique de Grenoble",
    image: lig,
    link: "https://www.inria.fr/fr/krakos-nouvelle-equipe-systemes",
  },

  {
    name: "LEb Ambam",
    image: estlc,
    link: "https://www.inria.fr/fr/krakos-nouvelle-equipe-systemes",
  },
  {
    name: "Laboratoire d'Informatique et Applications D'AMBAM",
    image: lia,
    link: "https://www.inria.fr/fr/krakos-nouvelle-equipe-systemes",
  },
];


const SponsorsList = () => {
  return (
    <div className="sponsors-list">
      {sponsors.map((sponsor, index) => (
        <Sponsor
          key={index}
          name={sponsor.name}
          image={sponsor.image}
          link={sponsor.link}
        />
      ))}
    </div>
  );
};

export default SponsorsList;
