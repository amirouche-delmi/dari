import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../components/Utils';
import { useLocation } from 'react-router-dom'
import Map from '../components/Map.jsx';

const Annonce = () => {

    let location = useLocation();
    const annonce = location.state;

    const users = useSelector((state) => state.usersReducer);

    return (
        <>
            <div className="annonce">
                <img className="top-img" src={annonce.url_image_bien} alt="img-bien" />
                <div className="bottom">
                    <div className="left-info" style={{ width: '43vw' }}>
                        <h1>Prix : {annonce.prix_bien}</h1>

                        <b>Wilaya : </b><span>{annonce.wilaya_bien}</span><br />
                        <b>Ville : </b><span>{annonce.ville_bien}</span><br />

                        <b>Type Transaction : </b><span>{annonce.type_transaction}</span><br />
                        <b>Type Bien : </b><span>{annonce.type_bien}</span><br />
                        {annonce.type_bien === 'villa' && 
                            <>
                                <b>Numéro Villa : </b><span>{annonce.num_villa}</span><br />
                                <b>Nombre d'étages : </b><span>{annonce.nbr_etages}</span><br />
                            </>
                        }
                        {annonce.type_bien === 'appartement' && 
                            <>
                                <b>Numéro d'appartemnet : </b><span>{annonce.num_appartement}</span><br />
                            </>
                        }

                        <b>Nombre De Pièces : </b><span>{annonce.nbr_pieces_bien}</span><br />
                        <b>Superficie : </b><span>{annonce.superficie_bien}</span><br />

                        {!isEmpty(users[0]) && users.map((user) => {
                            if (user._id === annonce.id_particulier) {
                                return (
                                    user.role === "agence" ?
                                        <>
                                            <b>Email Agence : </b><a href={`mailto:${user.email}`}>{user.email}</a><br />
                                            <b>Téléphone Agence : </b><a href={`tel:${user.telephone}`}>{user.telephone}</a><br />
                                            <b>Email Propritaire : </b><a href={`mailto:${annonce.email_prop_bien}`}>{annonce.email_prop_bien}</a><br />
                                            <b>Téléphone Propritaire : </b><a href={`tel:${annonce.tel_prop_bien}`}>{annonce.tel_prop_bien}</a><br />
                                        </>
                                        :
                                        <>
                                            <b>Email Propritaire : </b><a href={`c${user.email}`}>{user.email}</a><br />
                                            <b>Téléphone Propritaire : </b><a href={`tel:${user.telephone}`}>{user.telephone}</a><br />
                                        </>

                                )
                            } else return null
                        })}
                    </div>
                    <div style={{ width: '40vw', height: '50vh' }} className="right-img">
                        <Map annonce={annonce} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Annonce;