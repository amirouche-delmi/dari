import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const particulierData = useSelector((state) => state.particulierReducer);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      {uid ? (
        particulierData.role === "particulier" ? (
          <nav className="navbar">
            <div className="nav-container">
              <NavLink exact to="/" className="nav-logo">
                Dari
                <i className="fas fa-code"></i>
              </NavLink>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/ajouter-annonce"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Ajouter-Annonce
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/gerer-annonces"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Gére-Annonces
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/mes-favoris"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Mes-Favoris
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    À-propos
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    to="/profil"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    {particulierData.nom}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/logout"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Logout />
                  </NavLink>
                </li>
              </ul>

              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
            </div>
          </nav>
        ) : (
          <>
          </>
        )
      ) : (
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              Dari
              <i className="fas fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  À-propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/profil"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Se-connecter
                </NavLink>
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
