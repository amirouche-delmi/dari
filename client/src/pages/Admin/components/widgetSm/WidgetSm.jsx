import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { isEmpty } from "../../../../components/Utils";
import { NavLink } from "react-router-dom";

export default function WidgetSm() {
  const users = useSelector((state) => state.usersReducer);
  var l = 0;

  return (
    <div className="widgetSm-admin">
      <span className="widgetSmTitle">Nouveaux Particuliers</span>
      <ul className="widgetSmList">
      {!isEmpty(users[0]) &&
            users.map((particulier) => {
              if(l<5 && particulier.role === "particulier"){
                l++;
                return(
                  <li className="widgetSmListItem" key={particulier._id}>
                    <img
                      src={`./img/user${l}.png`}
                      alt="ing-user"
                      className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                      <span className="widgetSmUsername">{particulier.nom}</span>
                      <span className="widgetSmUserTitle">{particulier.email}</span>
                    </div>
                    <NavLink exact to="/gerer-particuliers">
                    <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon" />
                      Display
                    </button></NavLink>
                  </li>
                )
              }else return null;
            })
          }
      </ul>
    </div>
  );
}
