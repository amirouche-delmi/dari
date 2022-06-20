import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnnoncesP } from "../actions/annonceP.actions";
import { isEmpty } from "../components/Utils";
import CardFavoris from "../components/CardFavoris";

const Favoris = () => {

  const [loadAnnonceP, setLoadAnnonceP] = useState(true);
  const dispatch = useDispatch();
  const annoncesP = useSelector((state) => state.annoncePReducer);
  const particulierData = useSelector((state) => state.particulierReducer);

  useEffect(() => {
    if (loadAnnonceP) {
      dispatch(getAnnoncesP());
      setLoadAnnonceP(false);
    }
  }, [loadAnnonceP, dispatch]);

  return (
    <div className='favoris'>
    {!isEmpty(annoncesP[0]) &&
      annoncesP.map((annonceP) => {
        if (annonceP.list_particulier_suivie.includes(particulierData._id))
          return <CardFavoris annonceP={annonceP} key={annonceP._id} />;
        else return null;
      })}
  </div>
  );
};

export default Favoris;



