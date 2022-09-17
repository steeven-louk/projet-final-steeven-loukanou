import axios from 'axios';
import { Connexion } from '../views/auth/Connexion';
import {Index} from '../views/home'


const url_All_Collab = "http://localhost:7000/api/collaborateurs";
const login_url = "http://localhost:7000/api/login";
const random_Collab = "http://localhost:7000/api/collaborateurs/random"
const accessToken = JSON.parse(localStorage.getItem('token'))



/******LOGIN DEBUT ********/

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

  
  /********LOGIN FIN ******/