import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './style/style.scss';
import { useSelector } from 'react-redux'
import { deleteCollaborateur } from '../../services/service';


export const Card = (props) => {

    const {userInfo} = useSelector(state => state.user);
    // const event = new Date(props.item?.birthdate);

    
   
  return (
        <div className="card">
            <div className="card-header">
                <span className='service'>{props.item?.service}</span>
                <h2>{props.item?.firstname}</h2>
            </div>
            
            <div className="card-body">
                <div className="card-img-top">
                    <img src={props.item?.photo} alt="profil_pic" />
                </div>
                <div className="card-desc">
                    <span className="localisation">{props.item?.city}</span>
                     <span><FontAwesomeIcon icon="fa-solid fa-envelope" /><a href="mailto:">{props.item?.email}</a></span>
                     <span><FontAwesomeIcon icon="fa-solid fa-phone" /><a href="tel:+">{props.item?.phone}</a> </span>
                     <span><FontAwesomeIcon icon="fa-solid fa-cake-candles" /><em >{props.item?.birthdate}</em> </span>
                </div>
            </div>
            {userInfo.isAdmin == true && 
            <div className="card-footer">
                <button>editer</button>
                <button onClick={()=>props.Hdelete(props.item?.id)}>supprimer</button>
            </div>
            }
        </div>
  )
}
