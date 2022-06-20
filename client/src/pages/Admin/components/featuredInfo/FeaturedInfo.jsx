import "./featuredInfo.css";
import React from "react";
import { useEffect, useState } from "react";
import { ArrowUpward } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { isEmpty } from "../../../../components/Utils";

const FeaturedInfo = () => {
  const [nbAgence] = useState([]);
  const [nbParticulier] = useState([]);
  const users = useSelector((state) => state.usersReducer);
  const annonces = useSelector((state) => state.annoncePReducer);
  const [louad, setLouad] = useState(true);

  useEffect(() => {
    if (louad) {
      Array.from(users).forEach((user) => {
        if (user.role === "particulier") {
          nbParticulier.push(user);
        } else if (user.role === "agence") {
          nbAgence.push(user);
        }
      });;
      setLouad(!louad);
    }
  }, [louad, nbAgence, nbParticulier, users]);

  return (
    !isEmpty(users[0]) &&
    <div className="featured-admin">
      <div className="featuredItem">
        <span className="featuredTitle">Nb Agences</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{nbAgence.length} </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nb Particuliers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{nbParticulier.length}</span>
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
