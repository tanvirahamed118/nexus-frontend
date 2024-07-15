import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CallOfAction() {
  const userAuth = localStorage.getItem("user");
  const user = JSON.parse(userAuth);
  const { t } = useTranslation();
  return (
    <section className="banner-bg relative">
      <div className="relative bg-gradient-to-t from-[#7a5c2d50] to-[#000000de] w-full h-[60vh] md:h-[70vh] flex items-center flex-col gap-5 pt-32 md:pt-40">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
          <h2 className="text-lg text-white font-bold uppercase md:text-5xl">
            {t("beOne")}
          </h2>
          <h2 className="text-[#ffc670] text-2xl font-bold italic md:text-5xl">
            {t("influencer")}
          </h2>
          <h3 className="text-white text-base font-bold md:text-3xl text-center">
            {t("getIncredible")}
          </h3>
          {!user?.userToken && (
            <Link
              to="/register"
              className="bg-[#cfa361] w-auto px-10 text-center py-2 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all hover:px-14 mt-5 md:text-2xl"
            >
              {t("applyNow")} <i className="fa-regular fa-paper-plane"></i>
            </Link>
          )}
          {user?.userToken && (
            <div className="flex md:flex-row flex-col md:gap-5 gap-2 items-center w-full justify-center">
              <Link
                to="/event"
                className="bg-[#cfa361] w-72 px-10 text-center py-3 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all mt-5 md:text-lg"
              >
                {t("viewAllEvents")}{" "}
                <i className="fa-solid fa-right-long pl-1"></i>
              </Link>
              <Link
                to="/user-profile"
                className="bg-[#cfa361] w-72 px-10 text-center py-3 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all mt-5 md:text-lg"
              >
                <i className="fa-solid fa-user pr-1"></i> {t("myProfile")}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#C89549] flex flex-col items-center py-5">
        <h2 className="text-white text-sm font-bold md:text-2xl">
          {t("scroolDown")}
        </h2>
        <Link to="/">
          <i
            className="fa-solid fa-chevron-down text-white animate-bounce"
            style={{ fontSize: "40px" }}
          ></i>
        </Link>
      </div>
    </section>
  );
}

export default CallOfAction;
