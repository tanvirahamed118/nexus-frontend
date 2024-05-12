import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Avater from "../assets/default_avatar.jpg";
import MobileNav from "./Mobile-nav";
import { useRef, useState } from "react";

function Header() {
  const user = localStorage.getItem("user");
  const [menu, setMenu] = useState(false);
  const menuref = useRef();
  const userAuth = JSON.parse(user);
  const navigate = useNavigate();
  const handleLogout = () => {
    if (userAuth?.userToken) {
      localStorage.clear();
      navigate("/");
    }
  };
  return (
    <header className="shadow-[0px_0px_14px_-0px_rgba(0,0,0,0.1)] relative">
      <div className="container flex justify-between items-center">
        <div className="flex justify-between items-center h-24 md:w-full">
          <div className="pl-3 lg:pl-0">
            <Link to="/">
              <img src={Logo} alt="" className="w-16 rounded-md" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-10 items-center">
              <li>
                <Link
                  to="/"
                  className="text-lg font-normal text-black hover:text-[#cfa361]"
                >
                  Home
                </Link>
              </li>
              {userAuth?.userToken ? null : (
                <li>
                  <Link
                    to="/brand"
                    className="text-lg font-normal text-black hover:text-[#cfa361]"
                  >
                    Brand
                  </Link>
                </li>
              )}
              {userAuth?.userToken && (
                <li className="relative hover-menu">
                  <Link
                    to=""
                    className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
                  >
                    Events <i className="fa-solid fa-angle-down text-xs"></i>
                  </Link>
                  <ul className="hoverd flex flex-col gap-2 w-60 pl-2 pt-3 absolute bg-white z-10 shadow-2xl top-10 py-5 rounded-md opacity-0 invisible transition-all duration-300">
                    <li className="border-b border-gray-200 pb-3">
                      <Link
                        to="/event"
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                      >
                        Find Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-event"
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                      >
                        My Event Requests
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
                  Contact
                </Link>
              </li>
              {userAuth?.userToken ? null : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-lg font-normal text-black hover:text-[#cfa361]"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-lg font-normal text-black hover:text-[#cfa361]"
                    >
                      Register
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
                    Account <i className="fa-solid fa-angle-down text-xs"></i>
                  </Link>
                  <ul className="hoverd flex flex-col gap-2 w-60 pl-2 pt-3 absolute bg-white z-10 shadow-2xl top-10 right-0 py-5 rounded-md opacity-0 invisible transition-all duration-300">
                    <li className="border-b border-gray-200 pb-3">
                      <Link
                        to="/account/change-password"
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                      >
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="text-base md:text-lg font-normal text-black hover:text-[#cfa361] px-5"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {userAuth?.userToken && (
                <li>
                  <img
                    src={
                      userAuth?.user?.profile ? userAuth?.user?.profile : Avater
                    }
                    alt=""
                    className="w-10 rounded-full h-10 object-cover"
                  />
                </li>
              )}
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
            <img
              src={userAuth?.user?.profile ? userAuth?.user?.profile : Avater}
              className="rounded-full w-10 h-10 object-cover"
              alt=""
            />
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
