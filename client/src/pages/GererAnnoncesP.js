import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnnoncesP } from "../actions/annonceP.actions";
import CardGererAnnonce from "../components/CardGererAnnonce";
import { isEmpty } from "../components/Utils";

const GererAnnoncesP = () => {
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
    <div className="gerer-annonce">
      {!isEmpty(annoncesP[0]) &&
        annoncesP.map((annonceP) => {
          if (annonceP.id_particulier === particulierData._id)
            return <CardGererAnnonce annonceP={annonceP} key={annonceP._id} />;
          else return null;
        })}
    </div>
  );
};

export default GererAnnoncesP;
