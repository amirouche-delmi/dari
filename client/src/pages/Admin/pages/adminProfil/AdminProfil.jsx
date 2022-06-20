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

import "./adminProfil.css";

export default function AdminProfil() {
  const particulierData = useSelector((state) => state.particulierReducer);
  const dispatch = useDispatch()

  const [nom, setNom] = useState(particulierData.nom);
  const [telephone, setTelephone] = useState(particulierData.telephone);
  const [adresse, setAdresse] = useState(particulierData.adresse);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if ((nom !== "") && (telephone !== "") && (adresse !== "")) {
      dispatch(updateProfil(particulierData._id, { nom, telephone, adresse }));
      alert('Successfully Updated')
    }
    else {
      setNom(particulierData.nom)
      setTelephone(particulierData.telephone)
      setAdresse(particulierData.adresse)
    }
  }

  return (

    <div className="admin-profil">
      <h1 className="title">Profil de {particulierData.nom}</h1>
      <div className="adminContainer">
        <div className="left">
          <div className="top">
            <img
              src="./img/admin.png"
              alt="admin-img"
              className="img"
            />
            <div className="top-title">
              <span className="admin-name">{particulierData.nom}</span>
              <span className="admin-title">Administrateur de Site</span>
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
        <div className="adminUpdate">
          <span className="admin-update-title">Éditer</span>
          <form action="" onSubmit={handleUpdate} className="adminUpdateForm">
            <div className="adminUpdateLeft">
              <div className="adminUpdateItem">
                <label>Nom de l'admin</label>
                <input
                  type="text"
                  name="nom"
                  className="adminUpdateInput"
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                />
              </div>
              <div className="adminUpdateItem">
                <label>Téléphone</label>
                <input
                  type="text"
                  name="telephone"
                  className="adminUpdateInput"
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                />
              </div>
              <div className="adminUpdateItem">
                <label>Adresse</label>
                <input
                  type="text"
                  name="adresse"
                  className="adminUpdateInput"
                  onChange={(e) => setAdresse(e.target.value)}
                  value={adresse}
                />
              </div>
            </div>
            <div className="adminUpdateRight">
              <div className="adminUpdateUpload">
                <img
                  className="adminUpdateImg"
                  src="./img/admin.png"
                  alt="admin-img"
                />
                <label htmlFor="file">
                  <Publish className="adminUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <input type="submit" className="adminUpdateButton" value="Éditer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
