import React from "react";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/style.scss";


import { useSelector } from "react-redux";
import { logout } from "../../services/service";

const Sidebar = () => {
  
  /***recuperation des information du user se trouvant dans le store */
  const { userInfo } = useSelector((state) => state.user);


const log_out=()=>{
  
  toast.success('👋 A tres bientôt '+userInfo.firstname, {
    position: "top-right",
    theme:'colored',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    setTimeout(() => {
      logout();
    }, 2000);
    

}

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__userProfilPic">
          <img src={userInfo.photo} alt="profil_pic" />
        </div>
        <h2 className="name">{userInfo.firstname}</h2>
        <br />
        <button className="voirProfile">
          <Link to={`/voir/${userInfo.id}`}>voir profile</Link>{" "}
        </button>
        <hr /> <br />
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-items">
              <Link to="/home" className="nav-link">
                <FontAwesomeIcon className="icon" icon="fa-solid fa-house" />
                home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/liste" className="nav-link">
                <FontAwesomeIcon className="icon" icon="fa-solid fa-list" />
                liste
              </Link>
            </li>

            <li className="nav-items">
              <a href="#" className="nav-link">
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-circle-info"
                />
                about
              </a>
            </li>
            <li className="nav-items">
              <button onClick={() => log_out()} className="nav-link">
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-right-from-bracket"
                />
                deconnection
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
