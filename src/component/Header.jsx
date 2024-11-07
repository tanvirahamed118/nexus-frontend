import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Avater from "../assets/default_avatar.jpg";
import MobileNav from "./Mobile-nav";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Indoneshia from "../assets/indoneshia.png";
import English from "../assets/english.png";
import { useGetOneUserQuery } from "../redux/rtk/features/auth/user/authApi";

function Header() {
  const { t, i18n } = useTranslation();

  const user = localStorage.getItem("user");
  const userAuth = JSON.parse(user);
  const id = userAuth?.user?._id;
  const { data } = useGetOneUserQuery(id, {
    skip: !id,
  });

  const [menu, setMenu] = useState(false);
  const menuref = useRef();
  const navigate = useNavigate();
  const handleLogout = () => {
    if (userAuth?.userToken) {
      localStorage.clear();
      navigate("/");
    }
  };
  const changeLanguage = async (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n.changeLanguage(lng));
  };
  return (
    <header className="shadow-[0px_0px_14px_-0px_rgba(0,0,0,0.1)] relative">
      <div className="container flex justify-between items-center">
        <div className="flex justify-between items-center h-24 md:w-full">
          <div className="pl-3 lg:pl-0">
            <Link to="/">
              <img src={Logo} alt="" className="w-40 rounded-md" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-10 items-center">
              <li>
                <Link
                  to="/"
                  className="text-lg font-normal text-black hover:text-[#cfa361]"
                >
                  {t("home")}
                </Link>
              </li>
              {userAuth?.userToken ? null : (
                <li>
                  <Link
                    to="/brand"
                    className="text-lg font-normal text-black hover:text-[#cfa361]"
                  >
                    {t("brand")}
                  </Link>
                </li>
              )}
              {userAuth?.userToken && (
                <li className="relative hover-menu">
                  <Link
                    to=""
                    className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
                  >
                    {t("events")}{" "}
                    <i className="fa-solid fa-angle-down text-xs"></i>
                  </Link>
                  <ul className="hoverd flex flex-col gap-2 w-60 pl-2 pt-3 absolute bg-white z-10 shadow-2xl top-10 py-5 rounded-md opacity-0 invisible transition-all duration-300">
                    <li className="border-b border-gray-200 pb-3">
                      <Link
                        to="/event"
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                      >
                        {t("findEvent")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-event"
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                      >
                        {t("myEventRequest")}
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              <li>
                <Link
                  to="/contact"
                  className="text-lg font-normal text-black hover:text-[#cfa361]"
                >
                  {t("contact")}
                </Link>
              </li>
              {userAuth?.userToken ? null : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-lg font-normal text-black hover:text-[#cfa361]"
                    >
                      {t("login")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-lg font-normal text-black hover:text-[#cfa361]"
                    >
                      {t("register")}
                    </Link>
                  </li>
                </>
              )}
              {userAuth?.userToken && (
                <li className="relative hover-menu">
                  <Link
                    to=""
                    className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
                  >
                    {t("account")}{" "}
                    <i className="fa-solid fa-angle-down text-xs"></i>
                  </Link>
                  <ul className="hoverd flex flex-col gap-2 w-60 pl-2 pt-3 absolute bg-white z-10 shadow-2xl top-10 right-0 py-5 rounded-md opacity-0 invisible transition-all duration-300">
                    <li className="border-b border-gray-200 pb-3">
                      <Link
                        to="/account/change-password"
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                      >
                        {t("changePassword")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                        onClick={() => handleLogout()}
                      >
                        {t("logout")}
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {userAuth?.userToken && (
                <li>
                  <Link to="/user-profile">
                    <img
                      src={data?.profile ? data?.profile : Avater}
                      alt=""
                      className="w-10 rounded-full h-10 object-cover"
                    />
                  </Link>
                </li>
              )}
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
            </ul>
          </div>
        </div>
        <div className="flex gap-5 lg:hidden">
          <button>
            <i
              onClick={() => setMenu(!menu)}
              className={
                menu
                  ? "lg:hidden fa-solid fa-xmark text-[#cfa361] text-2xl bg-white py-2 px-3 border-gray-200 border rounded-md"
                  : "lg:hidden fa-solid fa-bars text-[#cfa361] text-2xl bg-white py-2 px-3 border-gray-200 border rounded-md"
              }
            ></i>
          </button>
          {userAuth?.userToken && (
            <Link to="/user-profile">
              <img
                src={userAuth?.user?.profile ? userAuth?.user?.profile : Avater}
                className="rounded-full w-10 h-10 object-cover"
                alt=""
              />
            </Link>
          )}
        </div>
      </div>
      <MobileNav
        handleLogout={handleLogout}
        menu={menu}
        setMenu={setMenu}
        menuref={menuref}
        userAuth={userAuth}
      />
    </header>
  );
}

export default Header;
