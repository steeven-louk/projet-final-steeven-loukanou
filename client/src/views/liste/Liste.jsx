import React, { useEffect,useState } from 'react'
import { Card } from "../../components/card/Card";
import './style/style.scss';
import {getAllCollaborateur} from '../../services/service';


const Liste = (props) => {

  const [Collaborateurs, setAllCollaborateurs] = useState(null);


  useEffect(() => {
   getAllCollaborateur().then((data)=>{
    setAllCollaborateurs(data.data);
   } )
  }, []);
  
const handleDelete =(id) =>{
  setAllCollaborateurs(Collaborateurs.filter((collab)=> collab.id !== id))
}
  
  return (
    <div className="liste_page">
    <h2>Liste des collaborateurs</h2>
     
      <section className="card-list-container">
        {Collaborateurs?.filter((item) =>{
          if (props?.search == ""){
            return item;
          } else if(item?.firstname.toLowerCase().includes(props.search.toLowerCase())){
            return item;
          }
        }).map((item) =>(
            <Card  key={item?.id} item={item} Hdelete={handleDelete}/>
        ))} 
      </section>
    </div>
  )
}

export default Liste