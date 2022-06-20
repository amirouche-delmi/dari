import React from 'react';
import "./gererAgences.css";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../../components/Utils";
import DeleteUserButton from '../../../../components/DeleteUserButton';

const GererAgences = () => {

  const users = useSelector((state) => state.usersReducer.reverse());
  var l = 0;

  return (
    <div className="widgetLg-gerer-agences">
      <h3 className="widgetLgTitle">Toutes les Agences</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Image</th>
            <th className="widgetLgTh">Nom</th>
            <th className="widgetLgTh">Email</th>
            <th className="widgetLgTh">Téléphone</th>
            <th className="widgetLgTh">NbAnnonces</th>
            <th className="widgetLgTh">Adresse</th>
            <th className="widgetLgTh">Date d'inscr</th>
          </tr>
          {!isEmpty(users[0]) &&
            users.map((agence) => {
              if (agence.role === "agence") {
                l < 5 ? l++ : l = 1
                return (
                  <tr className="widgetLgTr" key={agence._id}>
                    <td className="widgetLgUser">
                      <img
                        src={`./img/agence${l}.png`}
                        alt="img-user"
                        className="widgetLgImg"
                      />
                    </td>
                    <td className="widgetLgDate">{agence.nom}</td>
                    <td className="widgetLgDate">{agence.email}</td>
                    <td className="widgetLgDate">{agence.telephone}</td>
                    <td className="widgetLgDate nb">{agence.annonces_ajoutees.length}</td>
                    <td className="widgetLgDate">{agence.adresse}</td>
                    <td className="widgetLgDate">{dateParser(agence.createdAt)}</td>
                    <td className="widgetLgDate delete">
                      <DeleteUserButton user={agence} />
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

export default GererAgences;