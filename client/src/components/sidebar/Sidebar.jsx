import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/style.scss";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    let getData = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : [];

    if (getData) {
      localStorage.clear();
      navigate("/");
    }
  };

  /***recuperation des information du user se trouvant dans le store */
  const { userInfo } = useSelector((state) => state.user);

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
              <button onClick={() => logout()} className="nav-link">
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
