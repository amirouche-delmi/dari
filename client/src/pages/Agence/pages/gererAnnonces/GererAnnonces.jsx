import "./gererAnnonces.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DeleteButton from "../../../../components/DeleteButton";
import EditButton from "../../../../components/EditButton";
import { dateParser, isEmpty } from "../../../../components/Utils";
import { UidContext } from "../../../../components/AppContext";
import { useContext, useState } from "react";

const GererAnnonces = () => {

  const annonces = useSelector((state) => state.annoncePReducer);
  const uid = useContext(UidContext);
  const [email, setEmail] = useState("");

  return (
    <div className="gerer-nnonces">
      <span className="title">Toutes les Annonces </span>
      <input
        className="email-prop"
        type="email"
        id="email"
        placeholder="Email prop ici"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      /><i className="fa fa-search"></i>

      <table className="table">
        <tbody>
          <tr className="tr">
            <th className="th">Image</th>
            <th className="th">Date d'Ajout</th>
            <th className="th">Prix</th>
            <th className="th">Email</th>
            <th className="th">Téléphone</th>
            <th className="th">Statut</th>
          </tr>
          {!isEmpty(annonces[0]) &&
            annonces.map((annonce) => {
              if ((annonce.id_particulier === uid) && (email === "" || email === annonce.email_prop_bien)) {
                return (
                  <tr className="tr" key={annonce._id}>
                    <td className="user">
                      <NavLink exact to={{ pathname: "/annonce", state: annonce }}>
                        <img
                          src={annonce.url_image_bien}
                          alt="img-bien"
                          className="img"
                        />
                      </NavLink>
                      <span>{`${annonce.ville_bien} ${annonce.wilaya_bien}`}</span>
                    </td>
                    <td className="data">{dateParser(annonce.createdAt)}</td>
                    <td className="data">{annonce.prix_bien}</td>
                    <td className="data">{annonce.email_prop_bien}</td>
                    <td className="data">{annonce.tel_prop_bien}</td>
                    <td>
                      {annonce.valide ? (
                        <span className="annonceV">Valide </span>
                      ) : (
                        <span className="annonceNonV">No-Valide </span>
                      )}
                    </td>
                    <td><div className="trash"><DeleteButton annonce={annonce} /></div></td>
                    <td><div className="edit"><EditButton annonce={annonce} /></div></td>
                  </tr>
                )
              } else return null;
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default GererAnnonces;
