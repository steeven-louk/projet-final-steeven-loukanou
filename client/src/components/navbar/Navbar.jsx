import React from 'react'
import './style/styles.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useState } from 'react'


export const Navbar = (props) => {


  const [byCategory, setByCategory] = useState('');

  
  return (
    
    <div className="navbar_component">
       <div className="nav">
        <span className="nav-brand">intra-net </span>
            <div className="input-box">
            <FontAwesomeIcon className='icon'  icon="fa-solid fa-magnifying-glass" /><input type="text" placeholder='Recherchez un colaborateur' value={props?.search} onChange={(e)=>props?.setSearch(e.target.value)}/>
            </div>

            <div className="filtre-container">
              <div className="parNom">
                <span>Rechercher par :</span>
                <select name="byname" id="byname">
                  <option value="Nom">Nom</option>
                  <option value="Prenom">Prenom</option>
                </select>
              </div>

              <div className="category">
                <span>Categorie :</span>
                <select value={byCategory} onChange={(e)=>setByCategory(e.target.value)} name="categories" id="cat">
                  <option className='option-item'>- Aucun -</option>
                  <option className='option-item' value="technique">technique</option>
                  <option className='option-item' value="marketing">marketing</option>
                </select>
              </div>
            </div>
       </div>
    </div>
  )
}
