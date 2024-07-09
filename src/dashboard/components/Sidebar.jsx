import Style from "../../dashboard/styles/Dashboard.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-white.png";
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
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className={Style.dashboardNav}>
      <div className={Style.dashboardLogo}>
        <Link to="/" className={Style.mainLogo}>
          <img src={Logo} alt="" className="w-40" />
        </Link>
      </div>
      <ul>
        <li>
          <FaThLarge />
          <Link to="/dashboard/events">{t("events")}</Link>
        </li>

        <li>
          <FaRegCalendarPlus />
          <Link to="/dashboard/create">{t("createEvent")}</Link>
        </li>
        <li>
          <FaCloudUploadAlt />
          <Link to="/dashboard/submissions">{t("submissions")}</Link>
        </li>
        <li>
          <FaClipboardList />
          <Link to="/dashboard/brands">{t("brands")}</Link>
        </li>
        <li>
          <FaUserFriends />
          <Link to="/dashboard/users">{t("users")}</Link>
        </li>
        <li>
          <FaEnvelope />
          <Link to="/dashboard/emails">{t("emails")}</Link>
        </li>

        <li>
          <FaUserCircle />
          <Link to="/dashboard/profile">{t("profile")}</Link>
        </li>

        <li>
          <FaCog />
          <Link to="/dashboard/setting">{t("setting")}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
