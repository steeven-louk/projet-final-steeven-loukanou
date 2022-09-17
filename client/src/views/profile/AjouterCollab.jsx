import React, { useState } from 'react';
import { useEffect } from 'react';
import { addCollaborateur, getAllCollaborateur } from '../../services/service';
import './style/style.scss';

const AjouterCollab = () => {

  const [state, setState] = useState({
    gender:'',
    service:'',
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    C_mdp:'',
    phone:'',
    birthdate:'',
    country:'',
    city:'',
    photo:'',

  });

  // const AjouterCollab = (e) => {
  //   e.preventDefault();
  //   addCollaborateur(state);
  // }

  const updateInput = (e) => {
    setState({...state,[e.target.name]: e.target.value})
  }

 const [Collaborateurs, setAllCollaborateurs] = useState(null);

const add =(e)=>{
  e.preventDefault();
  setState(...Collaborateurs, state);
  console.log('reussi', state);
}


  useEffect(() => {
   getAllCollaborateur().then((data)=>{
    setAllCollaborateurs(data.data);
   } )
  }, []);



  return (
    <>

      <section className="profile_page">
      <img src={state.photo}/>

          <div className="profile_container">
          
  

              <form onSubmit={(e)=>add(e)} method='post' encType='multipart/form'>
                <div className="form-left">
                <div className="form-group">
                  <label htmlFor="gender">*Civilité</label>
                  <select name="gender" value={state.gender} onChange={updateInput} id="genre" required>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service">*Catégorie</label>
                  <select name="service" value={state.service} onChange={updateInput} id="categorie" required>
                    <option value="client">Client</option>
                    <option value="marketing">Marketing</option>
                    <option value="technique">Technique</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="firstname">*Nom</label>
                  <input type="text" name='firstname' value={state.firstname} onChange={updateInput} placeholder='Admin' required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">*lastname</label>
                  <input type="text" name='lastname' value={state.lastname} onChange={updateInput} placeholder='User' required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">*Email</label>
                  <input type="email" name='email' value={state.email} onChange={updateInput} placeholder='admin@admin.com' required />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" name='password' value={state.password} min="8" onChange={updateInput}  placeholder='min 8 caracters' />
                </div>
                </div>


                <div className="form-right">


                <div className="form-group">
                  <label htmlFor="C_mdp">Confirmation</label>
                  <input type="password" name='C_mdp' value={state.C_mdp} onChange={updateInput} placeholder='min 8 caracters'/>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">*Telephone</label>
                  <input type="tel" name='phone' value={state.telephone} onChange={updateInput} required placeholder='01-23-45-67-89'/>
                </div>

                <div className="form-group">
                  <label htmlFor="birthdate">*Date de naissance</label>
                  <input type="date" name='birthdate' value={state.birthdate} onChange={updateInput}  placeholder='04/11/1985' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="city">*Ville</label>
                  <input type="text" name='city' value={state.city} onChange={updateInput} placeholder='Paris' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="country">*Pays</label>
                  <input type="text" name='country' value={state.country} onChange={updateInput} placeholder='France' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="photo">URL de la photo :</label>
                  <input type="text" name='photo' value={state.photo} onChange={updateInput} placeholder='https://randomuser.me/api/portraits/men/4' required/>
                </div>

                </div>

                <button type="submit">Ajouter</button>

              </form>
          </div>
      </section>
    </>
    
  )
}

export default AjouterCollab