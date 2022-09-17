import React, { useState } from 'react';
import './style/style.scss';

const ModifierProfile = () => {

  const [input, setInput] = useState({
    
  });

  return (
    <>
      <section className="profile_page">
          <div className="profile_container">
              <form action="">
                <div className="form-left">
                <div className="form-group">
                  <label htmlFor="genre">*Civilité</label>
                  <select name="genre" id="genre">
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="categorie">*Catégorie</label>
                  <select name="categorie" id="categorie">
                    <option value="client">Client</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="nom">*Nom</label>
                  <input type="text" name='nom' placeholder='Admin' required />
                </div>

                <div className="form-group">
                  <label htmlFor="prenom">*Prenom</label>
                  <input type="text" name='prenom' placeholder='User' required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">*Email</label>
                  <input type="email" name='email' placeholder='admin@admin.com' required />
                </div>

                <div className="form-group">
                  <label htmlFor="mdp">Mot de passe</label>
                  <input type="password" name='mdp' placeholder='min 8 caracters' />
                </div>
                </div>


                {/* ted */}

                <div className="form-right">


                <div className="form-group">
                  <label htmlFor="C_mdp">Confirmation</label>
                  <input type="password" name='C_mdp'  placeholder='min 8 caracters'/>
                </div>

                <div className="form-group">
                  <label htmlFor="telephone">*Telephone</label>
                  <input type="tel" name='telephone' required placeholder='01-23-45-67-89'/>
                </div>

                <div className="form-group">
                  <label htmlFor="date">*Date de naissance</label>
                  <input type="date" name='date'  placeholder='04/11/1985' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="ville">*Ville</label>
                  <input type="text" name='ville'  placeholder='Paris' required/>
                </div>

                
                <div className="form-group">
                  <label htmlFor="pays">*Pays</label>
                  <input type="text" name='pays'  placeholder='France' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="photo">URL de la photo :</label>
                  <input type="text" name='photo'  placeholder='https://randomuser.me/api/portraits/men/4' required/>
                </div>

                </div>

              </form>
          </div>
      </section>
    </>
    
  )
}

export default ModifierProfile