import "./featuredInfo.css";
import React from "react";
import { useEffect, useState } from "react";
import { ArrowUpward } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { isEmpty } from "../../../../components/Utils";

const FeaturedInfo = () => {
  const agence = useSelector((state) => state.particulierReducer);
  const [clients] = useState([]);
  const annonces = useSelector((state) => state.annoncePReducer);
  const [louad, setLouad] = useState(true);

  useEffect(() => {
    if (louad && !isEmpty(agence)) {
      Array.from(annonces).forEach((annonce) => {
        if (annonce.id_particulier === agence._id) {
          if (clients.indexOf(annonce.email_prop_bien) === -1) {
            clients.push(annonce.email_prop_bien)
          }
        }
      });
      setLouad(false);
    }
  }, [louad, annonces, clients, agence]);

  return (
    !isEmpty(agence) &&
    <div className="featured-agence">
      <div className="featuredItem">
        <span className="featuredTitle">Nb d'Annonces Créées</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{agence.annonces_ajoutees.length} </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nb Clients</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{clients.length}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nb Annonces</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{annonces.length}</span>
          <span className="featuredMoneyRate">
            +10 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
