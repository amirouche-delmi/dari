import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Logout from "../../../../components/Log/Logout";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar-admin">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <NavLink exact to="/">DariAdmin</NavLink>
          </span>
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
          <NavLink exact to="/admin-profil">
            <img src="./img/admin.png" alt="img-admin" className="topAvatar" />
          </NavLink>
          <div className="logout"><Logout /></div>
        </div>
      </div>
    </div>
  );
}
