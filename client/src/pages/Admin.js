import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./Admin/admin.css";

import Sidebar from "./Admin/components/sidebar/Sidebar";
import Topbar from "./Admin/components/topbar/Topbar";

import Home from "./Admin/pages/home/Home";
import AdminProfil from "./Admin/pages/adminProfil/AdminProfil";
import GererParticuliers from "./Admin/pages/gererParticuliers/GererParticuliers";
import GererAnnonces from "./Admin/pages/gererAnnonces/GererAnnonces";
import GererAgences from "./Admin/pages/gererAgences/GererAgences";
import AjouterAgence from "./Admin/pages/ajouterAgence/AjouterAgence";

import Annonce from "./Annonce";

function Admin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin-profil" component={AdminProfil} />
          <Route exact path="/gerer-particuliers" component={GererParticuliers} />
          <Route exact path="/gerer-agences" component={GererAgences} />
          <Route exact path="/gerer-annonces" component={GererAnnonces} />
          <Route exact path="/ajouter-agence" component={AjouterAgence} />
          <Route exact path="/annonce"  component={Annonce} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default Admin;
