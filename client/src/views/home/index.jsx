import React, { useEffect, useState } from "react";

import './style/style.scss'

import { Card } from "../../components/card/Card";

import { getRandomCollaborateur } from "../../services/service";

export const Index = () => {


const [getRandom, setGetRandom] = useState(null);


const randoms = () =>{
    getRandomCollaborateur().then((data)=>{
      setGetRandom(data.data);
  })
}

useEffect(() => {
  randoms();
}, []);


  return (

    <div className="homepage">
      <div className="homepage__container">
        <h2>Bienvenue chez CONGO <em>consulting</em></h2>
        <p>
          La plate-forme de l'entreprise qui vous permet de retrouver tous vos
          collaborateur.
        </p>
        <p>avez-vous dit bonjour à:</p>

        <div className="card">
          <Card item={getRandom}/>
        </div>

        <button onClick={()=>randoms()} className="btn">Dire bonjour à quelqu'un d'autre</button>
      </div>
    </div>
  );
};
