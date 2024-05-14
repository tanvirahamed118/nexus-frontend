import { Link, Outlet, useNavigate } from "react-router-dom";
import Avater from "../assets/default_avatar.jpg";
import { useGetOneUserQuery } from "../redux/rtk/features/auth/user/authApi";
import { useEffect } from "react";

function Account() {
  const userAuth = localStorage.getItem("user");
  const user = JSON.parse(userAuth);
  const id = user?.user?._id;
  const { data } = useGetOneUserQuery(id);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.userToken) {
      navigate("/");
    }
  }, [user, navigate]);

  const { firstname, lastname, profile } = data || {};
  return (
    <section className="bg-[#fff] py-14 h-full md:h-screen flex justify-center items-center px-5 md:px-0">
      <div className="container flex md:flex-row flex-col gap-5 items-center">
        <div className="w-full md:w-4/12">
          <div className="flex flex-col items-center">
            <img
              src={profile ? profile : Avater}
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <a
              href=""
              className="text-[#cfa361] text-base font-bold capitalize pt-3"
            >
              {firstname + " " + lastname}
            </a>
            <Link
              to="/user-profile"
              className="text-[#44b0ec] text-base font-normal hover:underline capitalize"
            >
              View Profile
            </Link>
          </div>
          <div>
            <ul className="py-5">
              <li className="flex justify-between bg-[#eee] hover:bg-[#DDDDDD] border-b border-gray-300">
                <i className="fa-solid fa-user text-[#444] text-lg py-2 px-5 border-r border-gray-300"></i>
                <Link
                  to="/account"
                  className="text-left block w-full pl-3 py-2 text-black text-base font-bold capitalize"
                >
                  Account
                </Link>
                <i className="fa-solid fa-angle-right text-[#444] text-lg py-2 px-5 border-l border-gray-300"></i>
              </li>
              <li className="flex items-center justify-between bg-[#eee] hover:bg-[#DDDDDD] border-b border-gray-300">
                <i className="fa-solid fa-gear text-[#444] text-md py-2 px-5 border-r border-gray-300"></i>
                <Link
                  to="/account/change-password"
                  className="text-left block w-full pl-3 py-2 text-black text-base font-bold capitalize"
                >
                  Change Password
                </Link>
                <i className="fa-solid fa-angle-right text-[#444] text-lg py-2 px-5 border-l border-gray-300"></i>
              </li>
              <li className="flex justify-between bg-[#eee] hover:bg-[#DDDDDD] border-b border-gray-300">
                <i className="fa-solid fa-circle-info text-[#444] text-lg py-2 px-5 border-r border-gray-300"></i>
                <Link
                  to="/account/description"
                  className="text-left block w-full pl-3 py-2 text-black text-base font-bold capitalize"
                >
                  Change Description
                </Link>
                <i className="fa-solid fa-angle-right text-[#444] text-lg py-2 px-5 border-l border-gray-300"></i>
              </li>
              <li className="flex justify-between bg-[#eee] hover:bg-[#DDDDDD] border-b border-gray-300">
                <i className="fa-solid fa-lock text-[#444] text-lg py-2 px-5 border-r border-gray-300"></i>
                <Link
                  to="/account/privacy"
                  className="text-left block w-full pl-3 py-2 text-black text-base font-bold capitalize"
                >
                  Privacy
                </Link>
                <i className="fa-solid fa-angle-right text-[#444] text-lg py-2 px-5 border-l border-gray-300"></i>
              </li>

              <li className="flex justify-between bg-[#eee] hover:bg-[#DDDDDD] border-b border-gray-300">
                <i className="fa-solid fa-trash text-[#444] text-lg py-2 px-5 border-r border-gray-300"></i>
                <Link
                  to="/account/delete"
                  className="text-left block w-full pl-3 py-2 text-black text-base font-bold capitalize"
                >
                  Delete Account
                </Link>
                <i className="fa-solid fa-angle-right text-[#444] text-lg py-2 px-5 border-l border-gray-300"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-8/12">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Account;
