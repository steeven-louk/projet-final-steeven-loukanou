import React, { useState } from 'react';
import './style/style.scss';

const ModifierProfile = () => {

  const [state, setState] = useState({
    genre:'',
    categorie:'',
    nom:'',
    prenom:'',
    email:'',
    password:'',
    C_mdp:'',
    telephone:'',
    date:'',
    ville:'',
    pays:'',
    photo:''

  });

  const updateInput = (e) => {
    setState({...state,[e.target.name]: e.target.value})
  }

  console.log('====================================');
  console.log(state);
  console.log('====================================');

  return (
    <>
    <pre>{JSON.stringify(state)}</pre>
      <section className="profile_page">
      <img src={state.photo} alt={state.nom} />

          <div className="profile_container">
              <form action="" encType='multipart/form'>
                <div className="form-left">
                <div className="form-group">
                  <label htmlFor="genre">*Civilité</label>
                  <select name="genre" id="genre" required>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="categorie">*Catégorie</label>
                  <select name="categorie" id="categorie" required>
                    <option value="client">Client</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="nom">*Nom</label>
                  <input type="text" name='nom' value={state.nom} onChange={updateInput} placeholder='Admin' required />
                </div>

                <div className="form-group">
                  <label htmlFor="prenom">*Prenom</label>
                  <input type="text" name='prenom' value={state.prenom} onChange={updateInput} placeholder='User' required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">*Email</label>
                  <input type="email" name='email' value={state.email} onChange={updateInput} placeholder='admin@admin.com' required />
                </div>

                <div className="form-group">
                  <label htmlFor="mdp">Mot de passe</label>
                  <input type="password" name='mdp' value={state.password} onChange={updateInput} min="8" placeholder='min 8 caracters' />
                </div>
                </div>


                <div className="form-right">


                <div className="form-group">
                  <label htmlFor="C_mdp">Confirmation</label>
                  <input type="password" name='C_mdp' value={state.C_mdp} onChange={updateInput} placeholder='min 8 caracters'/>
                </div>

                <div className="form-group">
                  <label htmlFor="telephone">*Telephone</label>
                  <input type="tel" name='telephone' value={state.telephone} onChange={updateInput} required placeholder='01-23-45-67-89'/>
                </div>

                <div className="form-group">
                  <label htmlFor="date">*Date de naissance</label>
                  <input type="date" name='date' value={state.date} onChange={updateInput}  placeholder='04/11/1985' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="ville">*Ville</label>
                  <input type="text" name='ville' value={state.ville} onChange={updateInput} placeholder='Paris' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="pays">*Pays</label>
                  <input type="text" name='pays' value={state.pays} onChange={updateInput} placeholder='France' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="photo">URL de la photo :</label>
                  <input type="text" name='photo' value={state.photo} onChange={updateInput} placeholder='https://randomuser.me/api/portraits/men/4' required/>
                </div>

                </div>

                <button type="submit">Modifier</button>

              </form>
          </div>
      </section>
    </>
    
  )
}

export default ModifierProfile