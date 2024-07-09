import { Link, Outlet, useNavigate } from "react-router-dom";
import Avater from "../assets/default_avatar.jpg";
import { useGetOneUserQuery } from "../redux/rtk/features/auth/user/authApi";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function UserProfile() {
  const userAuth = localStorage.getItem("user");
  const { t } = useTranslation();
  const user = JSON.parse(userAuth);
  const id = user?.user?._id;
  const { data } = useGetOneUserQuery(id);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.userToken) {
      navigate("/");
    }
  }, [user, navigate]);
  const {
    firstname,
    lastname,
    profile,

    snapchat,
    instagram,
    facebook,

    tiktok,
  } = data || {};

  return (
    <section className="bg-[#F3F4F6] py-14">
      <div className="container">
        <div>
          <div className="flex justify-end">
            <Link to="/account" className="flex gap-2 items-center ">
              <i className="fa-solid fa-gear text-[#aaa] text-xl hover:text-[#4169e1]"></i>
              <p className="text-[#555] text-lg font-bold hover:underline">
                {t("profileSetting")}{" "}
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img
              src={profile ? profile : Avater}
              alt=""
              className="w-40 h-40 object-cover rounded-full"
            />
            <div className="flex flex-col gap-2 items-center">
              <Link
                to="/user-profile"
                className="text-[#555] font-bold text-lg"
              >
                {firstname + " " + lastname}
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <span className="flex gap-2 items-center">
                <i className="fa-brands fa-snapchat text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">
                  @{snapchat ? snapchat : ""}
                </p>
              </span>
              .
              <span className="flex gap-2 items-center">
                <i className="fa-brands fa-instagram text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">
                  @{instagram ? instagram : ""}
                </p>
              </span>
              .
              <span className="flex gap-2 items-center">
                <i className="fa-solid fa-video text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">
                  @{facebook ? facebook : ""}
                </p>
              </span>
              .
              <span className="flex gap-2 items-center">
                <i className="fa-brands fa-tiktok text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">
                  @{tiktok ? tiktok : ""}
                </p>
              </span>
            </div>
          </div>
          <div className="py-5">
            <ul className="bg-[#444444] py-3 px-4 w-full flex gap-2">
              <li className="bg-[#D2B588] hover:bg-[#977c53] py-2 px-3 rounded-md text-white flex gap-2 items-center">
                <Link
                  to="/user-profile"
                  className="text-white text-base font-bold"
                >
                  <i className="fa-solid fa-user pr-2"></i>
                  {t("about")}
                </Link>
              </li>
              <li className="bg-[#D2B588] hover:bg-[#977c53] py-2 px-3 rounded-md text-white flex gap-2 items-center">
                <Link
                  to="/user-profile/posts"
                  className="text-white text-base font-bold"
                >
                  {" "}
                  <i className="fa-solid fa-pencil pr-2"></i>
                  {t("posts")}
                </Link>
              </li>
            </ul>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
