import {
    CalendarToday,
    Equalizer,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../actions/particulier.actions";
import { dateParser } from "./Utils";
import { NavLink } from "react-router-dom";

export default function UpdateProfil() {
    const particulierData = useSelector((state) => state.particulierReducer);
    const dispatch = useDispatch()

    const [nom, setNom] = useState(particulierData.nom);
    const [telephone, setTelephone] = useState(particulierData.telephone);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if ((nom !== "") && (telephone !== "")) {
            dispatch(updateProfil(particulierData._id, { nom, telephone }));
            alert('Successfully Updated')
        }
        else {
            setNom(particulierData.nom)
            setTelephone(particulierData.telephone)
        }
    }

    return (

        <div className="particulier-profil">
            <h1 className="title">Profil de {particulierData.nom}</h1>
            <div className="particulierContainer">
                <div className="left">
                    <div className="top">
                        <img
                            src="./img/profil.png"
                            alt="particulier-img"
                            className="img"
                        />
                        <div className="top-title">
                            <span className="particulier-name">{particulierData.nom}</span>
                            <span className="particulier-title">Particulier</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="bottom-title">Détails du compte</span>
                        <div className="info">
                            <PermIdentity className="icon" />
                            <span className="info-title">{particulierData.nom}</span>
                        </div>
                        <div className="info">
                            <Equalizer className="icon" />
                            <span className="info-title">Annonces ajoutées {particulierData.annonces_ajoutees.length}</span>
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
                    </div>
                </div>
                <div className="particulierUpdate">
                    <span className="particulier-update-title">Éditer</span>
                    <form action="" onSubmit={handleUpdate} className="particulierUpdateForm">
                        <div className="particulierUpdateLeft">
                            <div className="particulierUpdateItem">
                                <label>Particulier Name</label>
                                <input
                                    type="text"
                                    name="nom"
                                    className="particulierUpdateInput"
                                    onChange={(e) => setNom(e.target.value)}
                                    value={nom}
                                />
                            </div>
                            <div className="particulierUpdateItem">
                                <label>Téléphone</label>
                                <input
                                    type="text"
                                    name="telephone"
                                    className="particulierUpdateInput"
                                    onChange={(e) => setTelephone(e.target.value)}
                                    value={telephone}
                                />
                            </div>
                        </div>
                        <div className="particulierUpdateRight">
                            <div className="particulierUpdateUpload">
                                <img
                                    className="particulierUpdateImg"
                                    src="./img/profil.png"
                                    alt="particulier-img"
                                />
                                <label htmlFor="file">
                                    <Publish className="particulierUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <input type="submit" className="particulierUpdateButton" value="Éditer" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="nav">
                <NavLink ecact to="ajouter-annonce">
                    <button className="btn">Ajouter-Annonces</button>
                </NavLink>
                <NavLink ecact to="mes-favoris">
                    <button className="btn">Mes-Favoris</button>
                </NavLink>
                <NavLink exact to="gerer-annonces">
                    <button className="btn">Mes-Annonces</button>
                </NavLink>
            </div>

        </div >
    );
}
