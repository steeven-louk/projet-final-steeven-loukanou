import React, { useEffect,useState } from 'react'
import { Card } from "../../components/card/Card";
import './style/style.scss';
import {getAllCollaborateur} from '../../services/service';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const Liste = (props) => {

  const [Collaborateurs, setAllCollaborateurs] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
   getAllCollaborateur(setLoading).then((data)=>{
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

      {loading ? (
        <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={90} height={90}/>
      <Skeleton variant="rectangular" width={220} height={210} />
    </Stack>
      ):(
        Collaborateurs?.filter((item) =>{
          if (props?.search == ""){
            return item;
          } else if(item?.firstname.toLowerCase().includes(props.search.toLowerCase())){
            return item;
          }
        }).map((item) =>(
            <Card  key={item?.id} item={item} Hdelete={handleDelete}/>
        )) 
      )}
      </section>
    </div>
  )
}

export default Liste