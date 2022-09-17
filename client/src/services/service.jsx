import axios from 'axios';
import { Connexion } from '../views/auth/Connexion';
import {Index} from '../views/home'


const url_All_Collab = "http://localhost:7000/api/collaborateurs";
const login_url = "http://localhost:7000/api/login";
const random_Collab = "http://localhost:7000/api/collaborateurs/random"
const accessToken = JSON.parse(localStorage.getItem('token'))



/***********AUTHENTIFICATION*************/


/********MIDDLEWARE *********/

export const withAuth = (Component) =>{
    const AuthRoute = () => {
      const isAuth = JSON.parse(localStorage.getItem("token"));
      if (isAuth) {
        return <Component />;
      } else {
        return <Connexion />;
      }
    };
  
    return AuthRoute;
    }
  
/********FIN MIDDLEWARE ********/
  

/*********LOGIN ***********/
  
  export const Login = async (getEmail, getPassword, props) => {
  
    try {
  
      const log_in = await axios
        .post(login_url, {
          email: getEmail,
          password: getPassword,
        })
        .then((res) => {
          if(res.status === 200){
  
              localStorage.setItem('token',JSON.stringify(res.data.token) );
              localStorage.setItem('user',JSON.stringify(res.data.user) );
          
           return <Index /> ;
          }
        })
        
  
        return log_in;
    } catch (error) {
      console.log("error", error.message);
    }
  };


/*********FIN LOGIN ***********/

  
/***********FIN AUTHENTIFICATION*************/


/*******RECUPERATION DE TOUT LES COLLABORATEUR********/

export const getAllCollaborateur =async()=>{
    try {
     const getAll = await axios.get(url_All_Collab,{
        headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
    
  )
   return getAll;
  
    } catch (error) {
      console.error('errorMgs', error.message);
    }
   
  }
  
  /*******FIN DE RECUPERATION DE TOUT LES COLLABORATEUR********/


  /*******RECUPERATION RANDOM D'UN COLLABORATEUR********/

export const getRandomCollaborateur = async() => {

    try {
      const getRandomCollab = await axios.get(random_Collab,{
         headers: {
         Authorization: `Bearer ${accessToken}`,
       },
     }
     
   );
    return getRandomCollab;
   
     } catch (error) {
       console.error('errorMgs', error.message);
     }
  
  }
  
  /*******FIN RECUPERATION RANDOM D'UN COLLABORATEUR********/