import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "./AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likeAnnonceP, unlikeAnnonceP } from "../actions/annonceP.actions";

const LikeButton = ({ annonceP }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (annonceP.list_particulier_suivie.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, annonceP.list_particulier_suivie, liked]);

  const like = () => {
    dispatch(likeAnnonceP(annonceP._id, uid));
    setLiked(true);
  };
  const unlike = () => {
    dispatch(unlikeAnnonceP(annonceP._id, uid));
    setLiked(false);
  };

  return (
    <>
      {uid === null && (
        <>
          <Popup
            trigger={<img src="./img/heart.svg" alt="like" align="center" />}
            position={["bottom center", "bottom right", "bottom left"]}
            closeOnDocumentClick
          >
            <div style={{color: "red"}}>Connectez-vous pour ajouter un bien à vos favoris !</div>
          </Popup>
          <span>{annonceP.list_particulier_suivie.length}</span>
        </>
      )}
      {uid && liked === false && (
        <>
          <img src="./img/heart.svg" alt="like" align="center" onClick={like} />
          <span>{annonceP.list_particulier_suivie.length}</span>
        </>
      )}
      {uid && liked && (
        <>
          <img
            src="./img/heart-filled.svg"
            alt="unlike"
            align="center"
            onClick={unlike}
          />
          <span>{annonceP.list_particulier_suivie.length}</span>
        </>
      )}
    </>
  );
};

export default LikeButton;
