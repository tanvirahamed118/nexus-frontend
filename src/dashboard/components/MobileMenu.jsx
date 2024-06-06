import { Link } from "react-router-dom";
import Style from "../styles/Mobilemenu.module.css";
import PropTypes from "prop-types";
import {
  FaThLarge,
  FaUserCircle,
  FaCog,
  FaRegCalendarPlus,
  FaUserFriends,
  FaEnvelope,
  FaCloudUploadAlt,
  FaClipboardList,
} from "react-icons/fa";
function MobileMenu(props) {
  return (
    <div
      className={`${Style.Mobilemenu} ${
        props.menu ? `${Style.active}` : `${Style.inactive}`
      }`}
      ref={props.menuref}
    >
      <div className={Style.menuNav}>
        <ul>
          <li>
            <FaThLarge />
            <Link to="/dashboard/events">Events</Link>
          </li>

          <li>
            <FaRegCalendarPlus />
            <Link to="/dashboard/create">Create Event</Link>
          </li>
          <li>
            <FaCloudUploadAlt />
            <Link to="/dashboard/submissions">Submissions</Link>
          </li>
          <li>
            <FaClipboardList />
            <Link to="/dashboard/brands">Brands</Link>
          </li>
          <li>
            <FaUserFriends />
            <Link to="/dashboard/users">Users</Link>
          </li>
          <li>
            <FaEnvelope />
            <Link to="/dashboard/emails">Emails</Link>
          </li>

          <li>
            <FaUserCircle />
            <Link to="/dashboard/profile">Profile</Link>
          </li>

          <li>
            <FaCog />
            <Link to="/dashboard/setting">Setting</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  menu: PropTypes.any,
  menuref: PropTypes.any,
  setMenu: PropTypes.any,
};

export default MobileMenu;
