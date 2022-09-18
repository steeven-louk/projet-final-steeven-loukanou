import React, { useState } from 'react';
import { getCollaborateur } from '../../services/service';
import {useParams} from 'react-router-dom';
import './style/style.scss';
import { useEffect } from 'react';

const ModifierProfile = () => {

  const {id} = useParams(); 

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

  const updateInput = (e) => {
    setState({...state,[e.target.name]: e.target.value});
  }

  useEffect(() => {
    const data = async () =>{
     const response = await getCollaborateur(id);
     setState(response.data);
    }
    data();
   }, [id]);


  return (
    <>

      <section className="profile_page">

          <div className="profile_container">
          <form>
                <div className="form-left">
                <div className="form-group">
                  <label htmlFor="gender">Civilité</label>
                  <select name="gender" value={state.gender} onChange={updateInput} id="genre" required>
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Catégorie</label>
                  <select name="service" value={state.service} onChange={updateInput} id="categorie" required>
                    <option value="Client">Client</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Technique">Technique</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="firstname">Nom</label>
                  <input type="text" name='firstname' value={state.firstname} onChange={updateInput} placeholder='Admin' required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">lastname</label>
                  <input type="text" name='lastname' value={state.lastname} onChange={updateInput} placeholder='User' required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name='email' value={state.email} onChange={updateInput} placeholder='admin@admin.com' required />
                </div>

               
                </div>


                <div className="form-right">


                

                <div className="form-group">
                  <label htmlFor="phone">Telephone</label>
                  <input type="tel" name='phone' value={state.phone} onChange={updateInput} required placeholder='01-23-45-67-89'/>
                </div>

                <div className="form-group">
                  <label htmlFor="birthdate">Date de naissance</label>
                  <input type="date" name='birthdate' value={state.birthdate} onChange={updateInput}  placeholder='04/11/1985' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="city">Ville</label>
                  <input type="text" name='city' value={state.city} onChange={updateInput} placeholder='Paris' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="country">Pays</label>
                  <input type="text" name='country' value={state.country} onChange={updateInput} placeholder='France' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="photo">URL de la photo :</label>
                  <input type="text" name='photo' value={state.photo} onChange={updateInput} placeholder='https://randomuser.me/api/portraits/men/4' required/>
                </div>

                </div>

          </form>
          <img src={state.photo} alt={state.nom} />

          </div>
      </section>
    </>
    
  )
}

export default ModifierProfile