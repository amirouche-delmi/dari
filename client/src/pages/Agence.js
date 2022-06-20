import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./Agence/components/sidebar/Sidebar";
import Topbar from "./Agence/components/topbar/Topbar";

import Home from "./Agence/pages/home/Home";
import AgenceProfil from "./Agence/pages/agenceProfil/AgenceProfil";
import GererAnnonces from "./Agence/pages/gererAnnonces/GererAnnonces";
import AjouterAnnonce from "./Agence/pages/ajouterAnnonce/AjouterAnnonce";
import Annonce from "./Annonce";
import EditAnnonce from "./EditAnnonce"

import "./Agence/agence.css";

function Agence() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/agence-profil" component={AgenceProfil} />
          <Route exact path="/gerer-annonces" component={GererAnnonces} />
          <Route exact path="/ajouter-annonce" component={AjouterAnnonce} />
          <Route exact path="/annonce"  component={Annonce} />
          <Route exact path="/edit-annonce"  component={EditAnnonce} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default Agence;
