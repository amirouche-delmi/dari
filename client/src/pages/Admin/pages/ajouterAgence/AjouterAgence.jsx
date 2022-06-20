import { useState } from "react";
import "./ajouterAgence.css";
import axios from "axios";
import { getUsers } from "../../../../actions/users.actions";
import { useDispatch } from "react-redux";

export default function AjouterAgence() {

  const [nom, setNom] = useState("");
  const [numR, setNumR] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/particulier/register`,
      data: {
        role: "agence",
        nom,
        numR,
        email,
        password,
        telephone,
        adresse,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          alert(`Error ! \n ${res.data.errors.nom} \n ${res.data.errors.telephone} \n ${res.data.errors.email} \n ${res.data.errors.password} \n ${res.data.errors.numR}`);
        } else {
          alert("L'agence a été bien ajoutée"); 
          dispatch(getUsers())
          setNom("")
          setNumR("")
          setEmail("")
          setPassword("");
          setTelephone("");
          setAdresse("");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
      <div className="ajouter-agence">
        <h1 className="ajouter-agence-title">Ajouter Une Agence</h1>

        <form action="" onSubmit={handleRegister} className="ajouter-agence-form">
          <div className="ajouter-agence-item">
            <label htmlFor="">Nom agence</label>
            <input type="text" placeholder="Agence madar" id="nom" name="nom" required
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </div>
          <div className="ajouter-agence-item">
            <label htmlFor="numR">Numero registre de commerce</label>
            <input type="text" placeholder="RCS PARIS B 517 403 572" id="numR" name="numR" required
              onChange={(e) => setNumR(e.target.value)}
              value={numR}
            />
          </div>
          <div className="ajouter-agence-item">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="john@gmail.com" id="email" name="email" required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="ajouter-agence-item">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" id="password" name="password" required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="ajouter-agence-item">
            <label htmlFor="telephone">Téléphone</label>
            <input type="text" placeholder="+213 5 70 40" id="telephone" name="telephone" required
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
            />
          </div>
          <div className="ajouter-agence-item">
            <label htmlFor="adresse">Adresse</label>
            <input type="text" placeholder="Kouba | Alger" id="adresse" name="adresse" required
              onChange={(e) => setAdresse(e.target.value)}
              value={adresse}
            />
          </div>
          <input type="submit" className="ajouter-agence-button" value="Envoyer" />
        </form>
      </div>
  );
}
