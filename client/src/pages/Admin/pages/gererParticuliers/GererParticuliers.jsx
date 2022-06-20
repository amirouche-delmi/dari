import React from 'react';
import "./gererParticuliers.css";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../../components/Utils";
import DeleteUserButton from '../../../../components/DeleteUserButton';

const GererParticuliers = () => {

  const users = useSelector((state) => state.usersReducer.reverse());
  var l = 0;

  return (
    <div className="widgetLg-gerer-particuliers">
      <h3 className="widgetLgTitle">Tous les Particuliers</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Image</th>
            <th className="widgetLgTh">Nom</th>
            <th className="widgetLgTh">Email</th>
            <th className="widgetLgTh">Téléphone</th>
            <th className="widgetLgTh">Nb Annonces</th>
            <th className="widgetLgTh">Date d'inscription</th>
          </tr>
          {!isEmpty(users[0]) && users.map((particulier) => {
            if (particulier.role === "particulier") {
              l < 5 ? l++ : l = 1
              return (
                <tr className="widgetLgTr" key={particulier._id}>
                  <td className="widgetLgUser">
                    <img
                      src={`./img/user${l}.png`}
                      alt="img-user"
                      className="widgetLgImg"
                    />
                  </td>
                  <td className="widgetLgDate">{particulier.nom}</td>
                  <td className="widgetLgDate">{particulier.email}</td>
                  <td className="widgetLgDate">{particulier.telephone}</td>
                  <td className="widgetLgDate nb">{particulier.annonces_ajoutees.length}</td>
                  <td className="widgetLgDate">{dateParser(particulier.createdAt)}</td>
                  <td className="widgetLgDate delete">
                    <DeleteUserButton user={particulier} />
                  </td>
                </tr>
              )
            } else return null
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GererParticuliers;