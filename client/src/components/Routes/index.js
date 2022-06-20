import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import About from "../../pages/About";
import AjouterAnnonceP from "../../pages/AjouterAnnonceP";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import GererAnnoncesP from "../../pages/GererAnnoncesP";
import Navbar from "../Navbar";
import Favoris from "../../pages/Favoris";
import Admin from "../../pages/Admin";
import { useSelector } from "react-redux";
import { UidContext } from "../AppContext";
import Annonce from "../../pages/Annonce";
import Agence from "../../pages/Agence";
import EditAnnonce from "../../pages/EditAnnonce";


const Index = () => {
  const particulierData = useSelector((state) => state.particulierReducer);
  const uid = useContext(UidContext);

  return (
    <Router>
      <Navbar/>
      <Switch>
        { uid === null ? (
          <>
            <Route path="/" exact component={Home} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/about" exact component={About} />
            <Route path="/annonce" exact component={Annonce} />
            <Redirect to="/" />
          </>
        ) : ( particulierData.role === "particulier" ? (
          <>
            <Route path="/" exact component={Home} />
            <Route path="/ajouter-annonce" exact component={AjouterAnnonceP} />
            <Route path="/gerer-annonces" exact component={GererAnnoncesP} />                  
            <Route path="/mes-favoris" exact component={Favoris} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/about" exact component={About} />
            <Route path="/annonce" exact component={Annonce} />
            <Route path="/edit-annonce" exact component={EditAnnonce} />
            <Redirect to="/" />
          </>
        ) : ( particulierData.role === "admin" ? (
          <>
            <Admin />  
            <Redirect to="/" />
          </>
        ) : (
          <>
            <Agence />
            <Redirect to="/" />
          </>
        )))
      }      
      </Switch>
    </Router>
  );
};

export default Index;
