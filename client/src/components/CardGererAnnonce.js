import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { NavLink } from "react-router-dom";
import { dateParser } from "./Utils";

const CardGererAnnonce = ({ annonceP }) => {
  return (

    <div className="blog-post">
      <div className="blog-post-img">
        <img src={annonceP.url_image_bien} alt="img" />
      </div>
      <div className="blog-post-info">
        <div className="blog-post-title">
          <h2>
            {dateParser(annonceP.createdAt)} 
            {annonceP.valide ? (
              <span className="valide" >Valide</span>
            ) : (
              <span className="no-valide">Non Valide</span>
            )}
          </h2>
        </div>
        <div className="blog-post-desc">
          <p>
          Votre annonce 
          {annonceP.valide ? (
            <>
              a été validée par l'admin, elle est suivie par {annonceP.list_particulier_suivie.length} personnes
            </>
          ) : (
            <>
              n'a pas encore été validée
            </>
          )}
          , vous pouvez toutefois la modifier ou la supprimer  et pour bien s'assurer de vos informations cliquez sur Voir plus
          </p>
        </div>
        <div className="blog-post-read-more">
        <NavLink exact to={{pathname: "/annonce", state: annonceP}}>
          <button>Voir plus <span>&rarr;</span></button>
        </NavLink>
          <div className="edit-trash">
            <DeleteButton annonce={annonceP} />
            <EditButton annonce={annonceP} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGererAnnonce;
