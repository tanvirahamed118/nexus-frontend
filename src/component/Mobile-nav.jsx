import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Indoneshia from "../assets/indoneshia.png";
import English from "../assets/english.png";

function MobileNav({ handleLogout, menu, menuref, userAuth, setMenu }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = async (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n.changeLanguage(lng));
  };
  const handleLogOut = () => {
    handleLogout();
    setMenu(false);
  };
  return (
    <div
      className={
        menu
          ? "lg:hidden absolute top-24 right-0 bg-white h-auto w-full p-5 rounded-b-xl border-b border-gray-300 z-10 active"
          : "lg:hidden absolute top-24 right-0 bg-white h-auto w-full p-5 rounded-b-xl border-b border-gray-300 z-10 inactive"
      }
      ref={menuref}
    >
      <ul className="flex flex-col gap-5 w-full">
        <li>
          <Link
            to="/"
            className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
            onClick={() => setMenu(false)}
          >
            {t("home")}
          </Link>
        </li>
        {userAuth?.userToken ? null : (
          <li>
            <Link
              to="/brand"
              onClick={() => setMenu(false)}
              className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
            >
              {t("brand")}
            </Link>
          </li>
        )}
        {userAuth?.userToken && (
          <>
            <li>
              <Link
                to="/event"
                onClick={() => setMenu(false)}
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                {t("findEvent")}
              </Link>
            </li>
            <li>
              <Link
                to="/my-event"
                onClick={() => setMenu(false)}
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                {t("myEventRequest")}
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            to="/contact"
            onClick={() => setMenu(false)}
            className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
          >
            {t("contact")}
          </Link>
        </li>
        {userAuth?.userToken ? null : (
          <>
            <li>
              <Link
                to="/login"
                onClick={() => setMenu(false)}
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                {t("login")}
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                onClick={() => setMenu(false)}
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                {t("register")}
              </Link>
            </li>
          </>
        )}

        {userAuth?.userToken && (
          <>
            <li>
              <Link
                to="/account/change-password"
                onClick={() => setMenu(false)}
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                {t("changePassword")}
              </Link>
            </li>
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
            {userAuth?.userToken && (
              <li>
                <Link
                  to=""
                  onClick={() => handleLogOut}
                  className="bg-red-500 text-base md:text-lg font-normal text-white block text-center py-3 rounded-md hover:bg-red-600"
                >
                  {t("logout")}
                </Link>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
}
MobileNav.propTypes = {
  handleLogout: PropTypes.any,
  menuref: PropTypes.any,
  menu: PropTypes.any,
  userAuth: PropTypes.any,
  setMenu: PropTypes.any,
};
export default MobileNav;
