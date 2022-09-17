import React, { useState } from 'react';
import { Login } from '../../services/service';

import './style/style.scss';

//import {useNavigate} from "react-router-dom"

 

export const Connexion = () => {

  
    const [getEmail, setGetEmail] = useState('');
    const [getPassword, setGetPassword] = useState('');

   // const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      Login(getEmail,getPassword);

      setGetEmail('');
      setGetPassword('');
    }


  
  return (
     <div className="connexion_page">
            <h1>connexion</h1>

          <p>Pour vous connecter à l'intranet, entrez votre identifiant et mot de passe.</p>
        <div className="connexion_container">
            <form onSubmit={handleSubmit} method="POST" className="form-group">
                <input type="email" value={getEmail} onChange={(e)=> setGetEmail(e.target.value)} name='email' placeholder="Email" required/>
                <input type="password" value={getPassword} name='password' onChange={(e)=> setGetPassword(e.target.value)} placeholder='Password' required/>

                <button type='submit'>connexion</button>
            </form>
        </div>
    </div>
  )
}
