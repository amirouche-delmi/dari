import "./widgetLg.css";
import { useSelector } from "react-redux";
import { isEmpty, dateParser } from "../../../../components/Utils";
import DeleteButton from "../../../../components/DeleteButton";
import { NavLink } from 'react-router-dom';
import { UidContext } from "../../../../components/AppContext";
import { useContext } from "react";

export default function WidgetLg() {
    const annonces = useSelector((state) => state.annoncePReducer);
    const uid = useContext(UidContext);
    var l = 0;

  return (
    <div className="widgetLg-agence">
      <h3 className="widgetLgTitle">Dernières Annonces</h3>
      <table className="widgetLgTable">
      <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Image</th>
          <th className="widgetLgTh">Date d'Ajout</th>
          <th className="widgetLgTh">Prix</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Téléphone</th>
          <th className="widgetLgTh">Statut</th>
        </tr>
        {!isEmpty(annonces[0]) &&
            annonces.map((annonce) => {
              if(l<4 && (annonce.id_particulier === uid)){
                l++;
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
                      
                      <span className="widgetLgName">{`${annonce.ville_bien} ${annonce.wilaya_bien}`}</span>
                    </td>
                    <td className="widgetLgDate">{dateParser(annonce.createdAt)}</td>
                    <td className="widgetLgAmount">{annonce.prix_bien}</td>
                    <td className="widgetLgAmount">{annonce.email_prop_bien}</td>
                    <td className="widgetLgAmount">{annonce.tel_prop_bien}</td>
                    <td className="widgetLgStatus">
                      {annonce.valide ? (
                        <span className="annonceV">Valide </span>
                      ) : (
                        <span className="annonceNonV">No-Valide </span>
                      )}
                     </td>
                     <td><div className="trash"><DeleteButton annonce={annonce}/></div></td>
                   </tr>
                )
              }else return null;
            })
          }
        </tbody>
      </table>
    </div>
  );
}
