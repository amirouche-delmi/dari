import "./sidebar.css";
import {
  HomeOutlined,
  PermIdentity,
  AddCircleOutlineOutlined,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-agence">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeOutlined className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/agence-profil" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Mon Profil
              </li>
            </Link>
            <Link to="/gerer-annonces" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Gérer Annonces
              </li>
            </Link>
            <Link to="/ajouter-annonce" className="link">
              <li className="sidebarListItem">
                <AddCircleOutlineOutlined className="sidebarIcon" />
                Ajouter Annonce
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
