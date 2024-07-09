import { Link, useNavigate } from "react-router-dom";
import servicesOne from "../assets/pexels-photo-238480.jpeg";
import BorderImage from "../assets/services.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Brand() {
  const user = localStorage.getItem("user");
  const { t } = useTranslation();
  const userAuth = JSON.parse(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuth?.userToken) {
      navigate("/");
    } else {
      navigate("/brand");
    }
  }, [userAuth, navigate]);
  return (
    <>
      <section className="bg-brand relative">
        <div className="relative bg-gradient-to-t from-[#0000003d] to-[#000000a1] w-full h-[60vh] md:h-[70vh] flex items-center flex-col gap-5 pt-32 md:pt-40">
          <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
            <h2 className="text-lg text-white font-bold uppercase md:text-4xl">
              {t("yourAreBrand")}
            </h2>
            <h2 className="text-[#ffc670] text-2xl font-bold md:text-5xl">
              {t("discover")}
            </h2>
            <h3 className="text-[#fff] text-sm leading-6 w-[90%] font-normal md:text-lg md:w-[54%] text-center">
              {t("thePerpose")}
            </h3>
            <Link
              to="/brand-contract"
              className="bg-[#cfa361] w-40 md:w-auto px-20 text-center py-2 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all hover:w-auto hover:px-24 mt-5 md:text-2xl"
            >
              {t("joinUs")} <i className="fa-regular fa-paper-plane"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-[-100px] relative">
        <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 items-center justify-center p-8 border-t-8 border border-[#DEA23A] bg-white md:px-4">
              <i className="fas fa-money-bill-wave text-[#DEA23A] text-[60px]"></i>
              <h2 className="text-[#2a2a2a] text-base font-bold mt-5 md:text-xl uppercase">
                {t("less")}
              </h2>
              <p className="text-base font-normal text-black text-center">
                {t("lessExpensive")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-8 border-t-8 border border-[#DEA23A] bg-white md:px-4">
              <i className="far fa-clock text-[#DEA23A] text-[60px]"></i>
              <h2 className="text-[#2a2a2a] text-base font-bold mt-5 md:text-xl uppercase">
                {t("noWaste")}
              </h2>
              <p className="text-base font-normal text-black text-center">
                {t("toManage")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-8 border-t-8 border border-[#DEA23A] bg-white md:px-4">
              <i className="fas fa-film text-[#DEA23A] text-[60px]"></i>
              <h2 className="text-[#2a2a2a] text-base font-bold mt-5 md:text-xl uppercase">
                {t("onAvarage")}
              </h2>
              <p className="text-base font-normal text-black text-center">
                {t("moreClients")}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-8 border-t-8 border border-[#DEA23A] bg-white md:px-4">
              <i className="fas fa-users text-[#DEA23A] text-[60px]"></i>
              <h2 className="text-[#2a2a2a] text-base font-bold mt-5 md:text-xl uppercase">
                {t("wellQualified")}
              </h2>
              <p className="text-base font-normal text-black text-center">
                {t("wellQualifiedInfluencer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-10">
        <div className="container">
          <h2 className="text-black text-2xl font-bold uppercase text-center">
            {t("ourServices")}
          </h2>
          <img src={BorderImage} alt="" className="m-auto" />
          <div className="py-14 px-2 grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-xl flex flex-col gap-5">
              <img
                src={servicesOne}
                alt=""
                className="w-full h-72 rounded-t-xl"
              />
              <h2 className="text-[#cfa361] text-2xl font-bold text-center">
                {t("influencerStrategy")}
              </h2>
              <p className="text-base font-normal text-center px-5 pb-5">
                {t("influencerStrategyDes")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl flex flex-col gap-5">
              <img
                src={servicesOne}
                alt=""
                className="w-full h-72 rounded-t-xl"
              />
              <h2 className="text-[#cfa361] text-2xl font-bold text-center">
                {t("communityManagement")}
              </h2>
              <p className="text-base font-normal text-center px-5 pb-5">
                {t("communityManagementDes")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl flex flex-col gap-5">
              <img
                src={servicesOne}
                alt=""
                className="w-full h-72 rounded-t-xl"
              />
              <h2 className="text-[#cfa361] text-2xl font-bold text-center">
                {t("contentCreation")}
              </h2>
              <p className="text-base font-normal text-center px-5 pb-5">
                {t("contentCreationDes")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl flex flex-col gap-5">
              <img
                src={servicesOne}
                alt=""
                className="w-full h-72 rounded-t-xl"
              />
              <h2 className="text-[#cfa361] text-2xl font-bold text-center">
                {t("branding")}
              </h2>
              <p className="text-base font-normal text-center px-5 pb-5">
                {t("brandingDes")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl flex flex-col gap-5">
              <img
                src={servicesOne}
                alt=""
                className="w-full h-72 rounded-t-xl"
              />
              <h2 className="text-[#cfa361] text-2xl font-bold text-center">
                {t("websiteDesign")}
              </h2>
              <p className="text-base font-normal text-center px-5 pb-5">
                {t("webSiteDesignDes")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl flex flex-col gap-5">
              <img
                src={servicesOne}
                alt=""
                className="w-full h-72 rounded-t-xl"
              />
              <h2 className="text-[#cfa361] text-2xl font-bold text-center">
                {t("sponsorship")}
              </h2>
              <p className="text-base font-normal text-center px-5 pb-5">
                {t("sponsorshipDes")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brand;
