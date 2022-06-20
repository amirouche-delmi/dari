import "./gererAnnonces.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dateParser, isEmpty } from "../../../../components/Utils";
import { getAnnoncesP } from "../../../../actions/annonceP.actions";
import DeleteButton from "../../../../components/DeleteButton";
import { NavLink } from "react-router-dom";

const GererAnnonces = () => {

  const annonces = useSelector((state) => state.annoncePReducer);
  const dispatch = useDispatch();

const valide = async (id_annonce) => {
  await axios({
    method: "put",
    url: `${process.env.REACT_APP_API_URL}/api/annonce_particulier/${id_annonce}`,
    data: {
      valide: false,
    },
  })
    .then((res) => {
      dispatch(getAnnoncesP())
    })
    .catch((err) => console.log(err));
}
const nonValide = async (id_annonce) => {
  await axios({
    method: "put",
    url: `${process.env.REACT_APP_API_URL}/api/annonce_particulier/${id_annonce}`,
    data: {
      valide: true,
    },
  })
    .then((res) => {
      dispatch(getAnnoncesP())
    })
    .catch((err) => console.log(err));
}

  return(
    <div className="widgetLg-gerer-annonces">
      <h3 className="widgetLgTitle">Toutes les Annonces</h3>
      <table className="widgetLgTable">
      <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Image</th>
          <th className="widgetLgTh">Type-Bien</th>
          <th className="widgetLgTh">Type-Trans</th>
          <th className="widgetLgTh">Date d'Ajout</th>
          <th className="widgetLgTh">Prix</th>
          <th className="widgetLgTh status">Statut</th>
        </tr>
        {!isEmpty(annonces[0]) &&
            annonces.map((annonce) => {
                return(
                  <tr className="widgetLgTr" key={annonce._id}>
                    <td className="widgetLgUser">
                    <NavLink exact to={{pathname: "/annonce", state: annonce}}>
                    <img
                        src={annonce.url_image_bien}
                        alt="img-bien"
                        className="widgetLgImg"
                      />
                    </NavLink>
                      
                      <span className="widgetLgName">{annonce.ville_bien} <br /> {annonce.wilaya_bien}</span>
                    </td>
                    <td className="widgetLgData">{annonce.type_bien}</td>
                    <td className="widgetLgData">{annonce.type_transaction}</td>
                    <td className="widgetLgData">{dateParser(annonce.createdAt)}</td>
                    <td className="widgetLgData">{annonce.prix_bien}</td>
                    <td className="widgetLgData">
                      {annonce.valide ? (
                        <button className="annonceValide" onClick={() => valide(annonce._id)}>Valide </button>
                      ) : (
                        <button className="annonceNonValide" onClick={() => nonValide(annonce._id)}>No-Valide </button>
                      )}
                     </td>
                     <td className="widgetLgData"><div className="trash"><DeleteButton annonce={annonce}/></div></td>
                   </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default GererAnnonces;