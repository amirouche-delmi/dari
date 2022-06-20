import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Logout from "../../../../components/Log/Logout";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar-agence">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><NavLink exact to="/">DariAgence</NavLink></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <NavLink exact to="/agence-profil">
            <img src="./img/agence.png" alt="img-admin" className="topAvatar" />
          </NavLink>
          <div className="logout"><Logout /></div>
        </div>
      </div>
    </div>
  );
}
