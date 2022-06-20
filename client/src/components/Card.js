import React from 'react';
import LikeButton from './LikeButton';
import { NavLink } from 'react-router-dom';

const Card = ({annonceP}) => {
    return (
        
            <div className="grid-item">
                <div className="card">
                    <NavLink exact to={{pathname: "/annonce", state: annonceP}}>
                        <img className="card-img" src={annonceP.url_image_bien} alt="img-annonce" />
                    </NavLink>
                    <div className="like-btn"><LikeButton annonceP={annonceP}/></div>
                    <div className="card-content">
                        <h1 className="card-header">
                            <span className="left-title-card" style={{textTransform: "uppercase"}}>{annonceP.prix_bien}</span>
                            <span className="right-title-card">{annonceP.superficie_bien}</span> 
                            
                        </h1>
                        <p className="card-text">
                            <span className="left-info-card">{annonceP.ville_bien}{", "}</span>
                            <span className="right-info-card">{annonceP.wilaya_bien}</span>
                            <span className="left-info-card">{annonceP.type_transaction}</span>
                            <span className="right-info-card">{annonceP.type_bien}</span>
                        </p>
                        
                    </div>
                    <NavLink exact to={{pathname: "/annonce", state: annonceP}}>
                            <button>Voir plus <span>&rarr;</span></button>
                    </NavLink>
                </div>
            </div>
        
            
    );
};

export default Card;