import Style from "../../dashboard/styles/Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/Logo.png";
import { useTranslation } from "react-i18next";
import Indoneshia from "../../assets/indoneshia.png";
import English from "../../assets/english.png";

const DashboardHeader = () => {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const getAdmin = localStorage.getItem("admin");
  const adminAuth = JSON.parse(getAdmin);
  const { admin } = adminAuth || {};
  const menuref = useRef();
  useEffect(() => {
    let handeler = (e) => {
      if (menuref.current !== null) {
        if (!menuref.current.contains(e.target)) {
          setMenu(false);
        }
      } else {
        return null;
      }
    };
    document.addEventListener("mousedown", handeler);
  }, []);
  const warehouselogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const changeLanguage = async (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n.changeLanguage(lng));
  };
  return (
    <header>
      <div className={Style.headerContainer}>
        <div className={Style.logo}>
          <Link to="/dashboard/profile">{admin?.email}</Link>
        </div>
        <div className={Style.headerLogo}>
          <span>
            <Link to="/" className="flex gap-3 items-center">
              <img
                src={Logo}
                alt=""
                className="w-full lg:w-14 h-14 object-cover bg-white rounded-sm lg:rounded-full p-3"
              />
              <h3 className="text-2xl font-bold text-[#5D4B41] hidden lg:block">
                Nexus
              </h3>
            </Link>
          </span>
        </div>
        <div className={Style.menu}>
          <ul className={Style.mainMenu}>
            <li className="flex gap-5 items-center">
              <img
                src={English}
                alt=""
                className="w-6 h-4 border border-gray-300 cursor-pointer"
                onClick={() => changeLanguage("en")}
              />
              <img
                src={Indoneshia}
                alt=""
                className="w-6 h-4 border border-gray-300 cursor-pointer"
                onClick={() => changeLanguage("ind")}
              />
            </li>

            <li onClick={warehouselogout}>
              <Link to="">{t("logout")}</Link>
            </li>
          </ul>
          <p className={Style.hamBurger} onClick={() => setMenu(!menu)}>
            {menu ? <RxCross2 /> : <RxHamburgerMenu />}
          </p>
          <MobileMenu menuref={menuref} menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
