import { Link } from "react-router-dom";
import Banner from "../assets/pexels-quark-studio-3201920-scaled.jpg";
import { useGetAllEventQuery } from "../redux/rtk/features/event/eventApi";
import { useTranslation } from "react-i18next";

function Events() {
  const { data, isLoading, isError } = useGetAllEventQuery();
  const { t } = useTranslation();
  // decide what to render
  let content;
  if (!isLoading && !isError && data?.length === 0) {
    content = <p>{t("eventNotFound")}</p>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = data?.slice(0, 8)?.map((item) => {
      const { _id, eventPic, title, category } = item || {};
      return (
        <div key={_id} className="flex">
          <div className="w-4/12 h-80">
            <img
              src={eventPic ? eventPic : Banner}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center w-8/12 px-5">
            <Link
              to={`/event/${_id}`}
              className="text-base text-[#cfa361] font-bold md:text-2xl capitalize hover:underline"
            >
              {title?.slice(0, 100)}...
            </Link>
            <h2 className="text-sm text-black font-normal md:text-xl capitalize">
              {category}
            </h2>
            <Link
              to={`/event/${_id}`}
              className="border border-[#ff6161] px-5 py-1 md:px-10 md:py-2 rounded-full text-[#ff6161] text-sm font-bold uppercase hover:bg-[#ff6161] hover:text-white mt-1 md:text-base"
            >
              {t("attend")}
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">{content}</div>
      </div>
    </section>
  );
}

export default Events;
