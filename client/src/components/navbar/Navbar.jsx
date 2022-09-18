import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style/styles.scss";

export const Navbar = (props) => {
  return (
    <div className="navbar_component">
      <div className="nav">
        <div className="nav-brand">
          <span>congo</span>
          <small>consulting</small>
        </div>
        <div className="input-box">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-magnifying-glass"
          />
          <input
            type="text"
            placeholder="Recherchez un colaborateur"
            value={props?.search}
            onChange={(e) => props?.setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
