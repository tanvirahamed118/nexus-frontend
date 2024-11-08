import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MoreEvents() {
  const user = localStorage.getItem("user");
  const userAuth = JSON.parse(user);
  const { t } = useTranslation();

  return (
    <section className="m-banner relative">
      <div className="bg-[#00000094] h-[25vh] flex flex-col gap-5 items-center justify-center">
        <Link
          to={userAuth?.userToken ? "/event" : "/login"}
          className="bg-[#cfa361] px-14 text-center py-2 text-white font-bold text-base rounded-md hover:bg-white hover:text-black transition-all hover:px-20 mt-5 uppercase md:py-3 md:px-20 md:text-xl"
        >
          {t("seeMore")} <i className="fa-solid fa-right-long text-xs pl-2"></i>
        </Link>
        <p className="text-white text-sm font-bold text-center w-[80%] md:text-xl">
          {t("manyMoreIntersting")}
        </p>
      </div>
    </section>
  );
}

export default MoreEvents;
