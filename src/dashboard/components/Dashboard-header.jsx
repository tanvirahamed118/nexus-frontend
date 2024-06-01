import Style from "../../dashboard/styles/Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const DashboardHeader = () => {
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

  return (
    <header>
      <div className={Style.headerContainer}>
        <div className={Style.logo}>
          <Link to="/dashboard/profile">{admin?.email}</Link>
        </div>
        <div className={Style.headerLogo}>
          <span>
            <p>WH</p>
            <Link to="/dashboard" className={Style.mainLogo}>
              Warehouse
            </Link>
          </span>
        </div>
        <div className={Style.menu}>
          <ul className={Style.mainMenu}>
            <li onClick={warehouselogout}>
              <Link to="">Logout</Link>
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
