import {
  CalendarToday,
  LocationOnOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../../../../actions/particulier.actions";
import { dateParser } from "../../../../components/Utils";

import "./agenceProfil.css";

export default function AgenceProfil() {
  const particulierData = useSelector((state) => state.particulierReducer);
  const dispatch = useDispatch()

  const [nom, setNom] = useState(particulierData.nom);
  const [telephone, setTelephone] = useState(particulierData.telephone);
  const [numR, setNumR] = useState(particulierData.numR);
  const [adresse, setAdresse] = useState(particulierData.adresse);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if ((nom !== "") && (telephone !== "") && (numR !== "") && (adresse !== "")) {
      dispatch(updateProfil(particulierData._id, { nom, telephone, numR, adresse }));
      alert('Successfully Updated')
    }
    else {
      setNom(particulierData.nom)
      setTelephone(particulierData.telephone)
      setNumR(particulierData.numR)
      setAdresse(particulierData.adresse)
    }
  }

  return (

    <div className="agence-profil">
      <h1 className="title">Profil de {particulierData.nom}</h1>
      <div className="agenceContainer">
        <div className="left">
          <div className="top">
            <img
              src="./img/agence.png"
              alt="agence-img"
              className="img"
            />
            <div className="top-title">
              <span className="agence-name">{particulierData.nom}</span>
              <span className="agence-title">Agence Immobilière</span>
            </div>
          </div>
          <div className="bottom">
            <span className="bottom-title">Détails du compte</span>
            <div className="info">
              <PermIdentity className="icon" />
              <span className="info-title">{particulierData.nom}</span>
            </div>
            <div className="info">
              <CalendarToday className="icon" />
              <span className="info-title">{dateParser(particulierData.createdAt)}</span>
            </div>
            <span className="bottom-title">Contact Détails</span>
            <div className="info">
              <PhoneAndroid className="icon" />
              <span className="info-title">{particulierData.telephone}</span>
            </div>
            <div className="info">
              <MailOutline className="icon" />
              <span className="info-title">{particulierData.email}</span>
            </div>
            <div className="info">
              <LocationOnOutlined className="icon" />
              <span className="info-title">{particulierData.adresse}</span>
            </div>
          </div>
        </div>
        <div className="agenceUpdate">
          <span className="agence-update-title">Éditer</span>
          <form action="" onSubmit={handleUpdate} className="agenceUpdateForm">
            <div className="agenceUpdateLeft">
              <div className="agenceUpdateItem">
                <label>Nom de l'agence</label>
                <input
                  type="text"
                  name="nom"
                  className="agenceUpdateInput"
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                />
              </div>
              <div className="agenceUpdateItem">
                <label>Téléphone</label>
                <input
                  type="text"
                  name="telephone"
                  className="agenceUpdateInput"
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                />
              </div>
              <div className="agenceUpdateItem">
                <label>Num registre de commerce</label>
                <input
                  type="text"
                  name="numR"
                  className="agenceUpdateInput"
                  onChange={(e) => setNumR(e.target.value)}
                  value={numR}
                />
              </div>
              <div className="agenceUpdateItem">
                <label>Adresse</label>
                <input
                  type="text"
                  name="adresse"
                  className="agenceUpdateInput"
                  onChange={(e) => setAdresse(e.target.value)}
                  value={adresse}
                />
              </div>
            </div>
            <div className="agenceUpdateRight">
              <div className="agenceUpdateUpload">
                <img
                  className="agenceUpdateImg"
                  src="./img/agence.png"
                  alt="agence-img"
                />
                <label htmlFor="file">
                  <Publish className="agenceUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <input type="submit" className="agenceUpdateButton" value="Éditer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
