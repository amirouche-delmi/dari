import React from "react";
import LikeButton from "./LikeButton";
import { NavLink } from "react-router-dom";

const CardFavoris = ({ annonceP }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-img">
        <img src={annonceP.url_image_bien} alt="img" />
      </div>
      <div className="blog-post-info">
        <div className="blog-post-title">
          <h2>{annonceP.prix_bien}</h2>
        </div>
        <div className="blog-post-desc">
          <p>
            {annonceP.type_bien === "villa" ? (
              <>
                Une belle villa à {annonceP.type_transaction === "vente" ? <>vendre</> : <>louer</>} avec un espace de vie aéré et lumineux,
                à voir absolument! Elle offre un milieu de vie tout à fait exceptionnel
                vous tomberez à l'instant sous son charme. Pour plus d'informations
                cliquez sur Voir plus.
              </>
            ) : (annonceP.type_bien === "appartement" ? (
              <>
                Un bel appartement à {annonceP.type_transaction === "vente" ? <>vendre</> : <>louer</>} avec un espace de vie aéré et lumineux,
                à voir absolument! Il offre un milieu de vie tout à fait exceptionnel
                vous tomberez à l'instant sous son charme. Pour plus d'informations
                cliquez sur Voir plus.
              </>
            ) : (annonceP.type_bien === "studio" ? (
              <>
                Un beau studio à {annonceP.type_transaction === "vente" ? <>vendre</> : <>louer</>} avec un espace de vie aéré et lumineux,
                à voir absolument! Il offre un milieu de vie tout à fait exceptionnel
                vous tomberez à l'instant sous son charme. Pour plus d'informations
                cliquez sur Voir plus.
              </>
            ) : (
              <>

                Un local spacieux à {annonceP.type_transaction === "vente" ? <>vendre</> : <>louer</>} situé dans une zone commerciale. 
                Pour plus d'informations cliquez sur Voir plus.
              </>
            )))}

          </p>
        </div>
        <div className="blog-post-read-more">
          <NavLink exact to={{ pathname: "/annonce", state: annonceP }}>
            <button>Voir plus <span>&rarr;</span></button>
          </NavLink>
          <div className="like">
            <LikeButton annonceP={annonceP} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFavoris;
