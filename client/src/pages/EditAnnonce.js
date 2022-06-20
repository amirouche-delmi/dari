import {
    CalendarToday,
    Equalizer,
    MailOutline,
    PhoneAndroid,
    Publish,
    LocationOnOutlined,
    InfoOutlined,
    MonetizationOnOutlined,
    FavoriteBorderOutlined,
    DescriptionOutlined,
    HouseOutlined,
    InsertEmoticonOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import {  updateAnnonce } from "../actions/annonceP.actions";
import { dateParser, isEmpty } from "../components/Utils";

const EditAnnonce = () => {
    const location = useLocation();
    const annonce = location.state;

    const [classN, setClassN] = useState("edit-annonce")

    const annonces = useSelector((state) => state.annoncePReducer);

    const [louad, setLouad] = useState(true);

    const [prix_bien, setPrix_bien] = useState("");
    const [ville_bien, setVille_bien] = useState("");
    const [wilaya_bien, setWilaya_bien] = useState("");
    const [latitude_bien, setLatitude_bien] = useState("");
    const [longitude_bien, setLongitude_bien] = useState("");
    const [type_transaction, setType_transaction] = useState("");
    const [type_bien, setType_bien] = useState("");
    const [superficie_bien, setSuperficie_bien] = useState("");
    const [nbr_pieces_bien, setNbr_pieces_bien] = useState("");
    const [description_bien, setDescription_bien] = useState("");
    const [nom_prop_bien, setNom_prop_bien] = useState("");
    const [email_prop_bien, setEmail_prop_bien] = useState();
    const [tel_prop_bien, setTel_prop_bien] = useState("");
    const [file, setFile] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        if (louad) {
            Array.from(annonces).forEach(a => {
                if (a._id === annonce._id) {
                    annonce.prix_bien = a.prix_bien
                    annonce.ville_bien = a.ville_bien
                    annonce.wilaya_bien = a.wilaya_bien
                    annonce.latitude_bien = a.latitude_bien
                    annonce.longitude_bien = a.longitude_bien
                    annonce.type_transaction = a.type_transaction
                    annonce.type_bien = a.type_bien
                    annonce.superficie_bien = a.superficie_bien
                    annonce.nbr_pieces_bien = a.nbr_pieces_bien
                    annonce.description_bien = a.description_bien
                    annonce.nom_prop_bien = a.nom_prop_bien
                    annonce.email_prop_bien = a.email_prop_bien
                    annonce.tel_prop_bien = a.tel_prop_bien
                    setPrix_bien(annonce.prix_bien)
                    setVille_bien(annonce.ville_bien)
                    setWilaya_bien(annonce.wilaya_bien)
                    setLatitude_bien(annonce.latitude_bien)
                    setLongitude_bien(annonce.longitude_bien)
                    setType_transaction(annonce.type_transaction)
                    setType_bien(annonce.type_bien)
                    setSuperficie_bien(annonce.superficie_bien)
                    setNbr_pieces_bien(annonce.nbr_pieces_bien)
                    setDescription_bien(annonce.description_bien)
                    setNom_prop_bien(annonce.nom_prop_bien)
                    setEmail_prop_bien(annonce.email_prop_bien)
                    setTel_prop_bien(annonce.tel_prop_bien)
                }
            });
            ((annonce.email_prop_bien !== "null") && annonce.email_prop_bien) ? setClassN("edit-annonce-agence") : setClassN("edit-annonce")
            setLouad(false);
        }
    }, [louad, annonce, annonces]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if ((prix_bien !== "")
            && (ville_bien !== "")
            && (wilaya_bien !== "")
            && (latitude_bien !== "")
            && (longitude_bien !== "")
            && (type_transaction !== "")
            && (type_bien !== "")
            && (superficie_bien !== "")
            && (nbr_pieces_bien !== "")
            && (description_bien !== "")
            && (nom_prop_bien !== "")
            && (email_prop_bien !== "")
            && (tel_prop_bien !== "")
        ) {
            const data = new FormData();
            data.append('valide', false);
            data.append('prix_bien', prix_bien);
            data.append('ville_bien', ville_bien);
            data.append('wilaya_bien', wilaya_bien);
            data.append('latitude_bien', latitude_bien);
            data.append('longitude_bien', longitude_bien);
            data.append('type_transaction', type_transaction);
            data.append('type_bien', type_bien);
            data.append('superficie_bien', superficie_bien);
            data.append('nbr_pieces_bien', nbr_pieces_bien);
            data.append('description_bien', description_bien);
            data.append('nom_prop_bien', nom_prop_bien);
            data.append('email_prop_bien', email_prop_bien);
            data.append('tel_prop_bien', tel_prop_bien);
            data.append('file', file);

            dispatch(updateAnnonce(annonce._id, data))
            alert('Successfully Updated')

            annonce.prix_bien = prix_bien
            annonce.ville_bien = ville_bien
            annonce.wilaya_bien = wilaya_bien
            annonce.latitude_bien = latitude_bien
            annonce.longitude_bien = longitude_bien
            annonce.type_transaction = type_transaction
            annonce.type_bien = type_bien
            annonce.superficie_bien = superficie_bien
            annonce.nbr_pieces_bien = nbr_pieces_bien
            annonce.description_bien = description_bien
            annonce.nom_prop_bien = nom_prop_bien
            annonce.email_prop_bien = email_prop_bien
            annonce.tel_prop_bien = tel_prop_bien

        } else {
            setPrix_bien(annonce.prix_bien)
            setVille_bien(annonce.ville_bien)
            setWilaya_bien(annonce.wilaya_bien)
            setLatitude_bien(annonce.latitude_bien)
            setLongitude_bien(annonce.longitude_bien)
            setType_transaction(annonce.type_transaction)
            setType_bien(annonce.type_bien)
            setSuperficie_bien(annonce.superficie_bien)
            setNbr_pieces_bien(annonce.nbr_pieces_bien)
            setDescription_bien(annonce.description_bien)
            setNom_prop_bien(annonce.nom_prop_bien)
            setEmail_prop_bien(annonce.email_prop_bien)
            setTel_prop_bien(annonce.tel_prop_bien)
            alert("No Udate")
        }
    }

    return (
        !isEmpty(annonces) &&
        <div  className={`edit-annonce  ${classN}`}>
            <h1 className="title">Éditer Annonce</h1>
            <div className="edit-annonceContainer">
                <div className="left">
                    <div className="top">
                        <img
                            src={annonce.url_image_bien}
                            alt="img-bien"
                            className="img"
                        />
                        <div className="top-title">
                            <span className="edit-annonce-name">{location.state.ville_bien}</span>
                            <span className="edit-annonce-title">{annonce.wilaya_bien}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="bottom-title">Annonce Détails</span>
                        <div className="info">
                            <MonetizationOnOutlined className="icon" />
                            <span className="info-title">Prix : {annonce.prix_bien}</span>
                        </div>
                        <div className="info">
                            <LocationOnOutlined className="icon" />
                            <span className="info-title">Ville : {annonce.ville_bien}, {annonce.wilaya_bien}</span>
                        </div>
                        <div className="info">
                            <LocationOnOutlined className="icon" />
                            <span className="info-title"> latitude : {annonce.latitude_bien}</span>
                        </div>
                        <div className="info">
                            <LocationOnOutlined className="icon" />
                            <span className="info-title"> longitude : {annonce.longitude_bien}</span>
                        </div>
                        <div className="info">
                            <InfoOutlined className="icon" />
                            <span className="info-title"> Type transaction : {annonce.type_transaction}</span>
                        </div>
                        <div className="info">
                            <HouseOutlined className="icon" />
                            <span className="info-title"> Type bien : {annonce.type_bien}</span>
                        </div>
                        <div className="info">
                            <InfoOutlined className="icon" />
                            <span className="info-title"> Superficie : {annonce.superficie_bien}</span>
                        </div>
                        <div className="info">
                            <Equalizer className="icon" />
                            <span className="info-title"> Nb pièces : {annonce.nbr_pieces_bien}</span>
                        </div>
                        <div className="info">
                            <DescriptionOutlined className="icon" />
                            <span className="info-title"> Description : {annonce.description_bien}</span>
                        </div>
                        <div className="info">
                            <FavoriteBorderOutlined className="icon" />
                            <span className="info-title"> Nb particulier suivie : {annonce.list_particulier_suivie.length}</span>
                        </div>
                        <div className="info">
                            <CalendarToday className="icon" />
                            <span className="info-title">{dateParser(annonce.createdAt)}</span>
                        </div>
                        {(annonce.email_prop_bien !== "null") && annonce.email_prop_bien && (
                            <>
                                <span className="bottom-title">Propriétaire Details</span>
                                <div className="info">
                                    <InsertEmoticonOutlined className="icon" />
                                    <span className="info-title">{annonce.nom_prop_bien}</span>
                                </div>
                                <div className="info">
                                    <MailOutline className="icon" />
                                    <span className="info-title">{annonce.email_prop_bien}</span>
                                </div>
                                <div className="info">
                                    <PhoneAndroid className="icon" />
                                    <span className="info-title">{annonce.tel_prop_bien}</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="edit-annonce-Update">
                    <span className="edit-annonce-update-title">Éditer</span>
                    <form action="" onSubmit={handleUpdate} className="edit-annonce-UpdateForm">
                        <div className="edit-annonce-UpdateLeft">
                            <div className="edit-annonce-UpdateItem">
                                <label>Prix bien</label>
                                <input
                                    type="text"
                                    name="prix_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setPrix_bien(e.target.value)}
                                    value={prix_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Ville bien</label>
                                <input
                                    type="text"
                                    name="ville_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setVille_bien(e.target.value)}
                                    value={ville_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Wilaya bien</label>
                                <input
                                    type="text"
                                    name="wilaya_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setWilaya_bien(e.target.value)}
                                    value={wilaya_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>latitude bien</label>
                                <input
                                    type="text"
                                    name="latitude_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setLatitude_bien(e.target.value)}
                                    value={latitude_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>longitude bien</label>
                                <input
                                    type="text"
                                    name="longitude_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setLongitude_bien(e.target.value)}
                                    value={longitude_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Type transaction</label>
                                <input
                                    type="text"
                                    name="type_transaction"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setType_transaction(e.target.value)}
                                    value={type_transaction}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Type bien</label>
                                <input
                                    type="text"
                                    name="type_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setType_bien(e.target.value)}
                                    value={type_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Superficie bien</label>
                                <input
                                    type="text"
                                    name="superficie_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setSuperficie_bien(e.target.value)}
                                    value={superficie_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Nb pièces bien</label>
                                <input
                                    type="text"
                                    name="nbr_pieces_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setNbr_pieces_bien(e.target.value)}
                                    value={nbr_pieces_bien}
                                />
                            </div>
                            <div className="edit-annonce-UpdateItem">
                                <label>Description bien</label>
                                <input
                                    type="text"
                                    name="description_bien"
                                    className="edit-annonce-UpdateInput"
                                    onChange={(e) => setDescription_bien(e.target.value)}
                                    value={description_bien}
                                />
                            </div>
                            {(annonce.email_prop_bien !== "null") && annonce.email_prop_bien && (
                                <>
                                    <div className="edit-annonce-UpdateItem">
                                        <label>Nom propriétaire bien</label>
                                        <input
                                            type="text"
                                            name="nom_prop_bien"
                                            className="edit-annonce-UpdateInput"
                                            onChange={(e) => setNom_prop_bien(e.target.value)}
                                            value={nom_prop_bien}
                                        />
                                    </div>
                                    <div className="edit-annonce-UpdateItem">
                                        <label>Email propriétaire bien</label>
                                        <input
                                            type="text"
                                            name="email_prop_bien"
                                            className="edit-annonce-UpdateInput"
                                            onChange={(e) => setEmail_prop_bien(e.target.value)}
                                            value={email_prop_bien}
                                        />
                                    </div>
                                    <div className="edit-annonce-UpdateItem">
                                        <label>Téléphone propriétaire bien</label>
                                        <input
                                            type="text"
                                            name="tel_prop_bien"
                                            className="edit-annonce-UpdateInput"
                                            onChange={(e) => setTel_prop_bien(e.target.value)}
                                            value={tel_prop_bien}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="edit-annonce-UpdateRight">
                            <div className="edit-annonce-UpdateUpload">
                                <img
                                    className="edit-annonce-UpdateImg"
                                    src={annonce.url_image_bien}
                                    alt="particulier-img"
                                />
                                <label htmlFor="file">
                                    <Publish className="edit-annonce-UpdateIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(e) => { setFile(e.target.files[0]) }}
                                    style={{ display: "none" }}
                                />
                            </div>
                            <input type="submit" className="edit-annonce-UpdateButton" value="Éditer" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}
export default EditAnnonce;