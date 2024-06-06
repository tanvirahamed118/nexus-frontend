import Style from "../../dashboard/styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
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
const Sidebar = () => {
  return (
    <div className={Style.dashboardNav}>
      <div className={Style.dashboardLogo}>
        <Link to="/" className={Style.mainLogo}>
          <img
            src={Logo}
            alt=""
            className="w-14 h-14 object-cover bg-white rounded-full p-3"
          />
          Nexus
        </Link>
      </div>
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
  );
};

export default Sidebar;
