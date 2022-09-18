import React, { useState } from 'react';
import { Login } from '../../services/service';

import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style/style.scss';


 

export const Connexion = () => {

  
    const [getEmail, setGetEmail] = useState('');
    const [getPassword, setGetPassword] = useState('');



    const handleSubmit = (e) => {
      e.preventDefault();
      toast.success('🤝 Bienvenu', {
        position: "top-right",
        theme:'colored',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        setTimeout(() => {
          logout();
        }, 2000);
        

        setTimeout(() => {
          Login(getEmail,getPassword);

        }, 3000);

      
     

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
        <ToastContainer/>
    </div>
  )
}
