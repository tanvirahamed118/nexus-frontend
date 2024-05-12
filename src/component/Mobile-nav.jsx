import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MobileNav({ handleLogout, menu, menuref, userAuth }) {
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
          >
            Home
          </Link>
        </li>
        {userAuth?.userToken ? null : (
          <li>
            <Link
              to="/brand"
              className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
            >
              Brand
            </Link>
          </li>
        )}
        {userAuth?.userToken && (
          <>
            <li>
              <Link
                to="/event"
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                Find Events
              </Link>
            </li>
            <li>
              <Link
                to="my-event"
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                My Event Requests
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            to="/contact"
            className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
          >
            Contact
          </Link>
        </li>
        {userAuth?.userToken ? null : (
          <>
            <li>
              <Link
                to="/login"
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                Register
              </Link>
            </li>
          </>
        )}
        {userAuth?.userToken && (
          <>
            <li>
              <Link
                to="/account/change-password"
                className="text-base md:text-lg font-normal text-black hover:text-[#cfa361]"
              >
                Change Password
              </Link>
            </li>
            {userAuth?.userToken && (
              <li>
                <Link
                  to=""
                  onClick={() => handleLogout()}
                  className="bg-red-500 text-base md:text-lg font-normal text-white block text-center py-3 rounded-md hover:bg-red-600"
                >
                  Logout
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
};
export default MobileNav;
