import axios from "axios";
import { Connexion } from "../views/auth/Connexion";

const url_All_Collab = "http://localhost:7000/api/collaborateurs";
const login_url = "http://localhost:7000/api/login";
const random_Collab = "http://localhost:7000/api/collaborateurs/random";
const accessToken = JSON.parse(localStorage.getItem("token"));

axios.interceptors.request.use(function (config) {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

/***********AUTHENTIFICATION*************/

/********MIDDLEWARE *********/

export const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = JSON.parse(localStorage.getItem("token"));
    if (isAuth) {
      return <Component />;
    } else {
      return <Connexion />;
    }
  };

  return AuthRoute;
};

/********FIN MIDDLEWARE ********/

/*********LOGIN ***********/

export const Login = async (getEmail, getPassword) => {
  try {
    const log_in = await axios
      .post(login_url, {
        email: getEmail,
        password: getPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user", JSON.stringify(res.data.user));

          //return <Index /> ;
          window.location.replace("http://127.0.0.1:5173/home");
        }
      });

    return log_in;
  } catch (error) {
    console.log("error", error.message);
  }
};

/*********FIN LOGIN ***********/

/***********FIN AUTHENTIFICATION*************/

/*******RECUPERATION DE TOUT LES COLLABORATEUR********/

export const getAllCollaborateur = async (setLoading) => {
  try {
    setLoading(true);
    const getAll = await axios.get(url_All_Collab, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setLoading(false);
    return getAll;
  } catch (error) {
    console.error("errorMgs", error.message);
  }
};

/*******FIN DE RECUPERATION DE TOUT LES COLLABORATEUR********/

/*******RECUPERATION RANDOM D'UN COLLABORATEUR********/

export const getRandomCollaborateur = async () => {
  try {
    const getRandomCollab = await axios.get(random_Collab, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return getRandomCollab;
  } catch (error) {
    console.error("errorMgs", error.message);
  }
};

/*******FIN RECUPERATION RANDOM D'UN COLLABORATEUR********/

/*********  ADMIN ***************/

/********** OBTENIR UN COLLABORATEUR */

export const getCollaborateur = async (id) => {
  try {
    const getUser = await axios.get(`${url_All_Collab}/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return getUser;
  } catch (error) {
    console.log("errorMsg", error.message);
  }
};

/**********OBTENIR UN COLLABORATEUR */

/**********AJOUT DU COLLABORATEUR */

export const addCollaborateur = async (state) => {
  try {
    const addUser = await axios.post(url_All_Collab, state, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return addUser;
  } catch (error) {
    console.log("errorMsg", error.message);
  }
};

/**********AJOUT DU COLLABORATEUR */

/**********EDITION DU COLLABORATEUR */

export const EditCollaborateur = async (id, state) => {
  try {
    const editUser = await axios.put(`${url_All_Collab}/${id}`, state, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return editUser;
  } catch (error) {
    console.log("errorMsg", error.message);
  }
};

/**********EDITION DU COLLABORATEUR */

/********* FIN ADMIN ***************/
