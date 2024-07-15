import { Link, useNavigate } from "react-router-dom";
import Hero from "../assets/hero-image-home.jpg";
import { useGetAllEventQuery } from "../redux/rtk/features/event/eventApi";
import Loading from "../component/Loading";
import Filter from "../component/Filter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Events() {
  const { data, isLoading, isError, error } = useGetAllEventQuery();
  const { t } = useTranslation();
  const { category } = useSelector((state) => state.category);
  const user = localStorage.getItem("user");
  const userAuth = JSON.parse(user);
  const [loadMore, setLoadMore] = useState(6);
  const slicePost = data?.slice(0, loadMore);
  const navigate = useNavigate();

  const loadMorePost = () => {
    setLoadMore(loadMore + 4);
  };
  // filters
  const filterByCategory = (item) => {
    if (item.category.includes(category)) {
      return true; // Include the item if its category matches the specified category
    }
    return false; // Exclude the item if its category does not match
  };
  useEffect(() => {
    if (!userAuth?.userToken) {
      navigate("/");
    }
  }, [userAuth, navigate]);

  // decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <p className="text-xl text-red-500 font-normal">{error}</p>;
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = (
      <p className="text-xl text-red-500 font-normal">{t("eventNotFound")}</p>
    );
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = slicePost?.filter(filterByCategory)?.map((item) => {
      const { _id, eventPic, title, category, location, createdAt } =
        item || {};
      return (
        <Link to={`/event/${_id}`} key={_id}>
          <div className="flex bg-white rounded-xl shadow-md">
            <div className="w-5/12">
              <img
                src={eventPic ? eventPic : Hero}
                alt=""
                className="w-full h-72 rounded-l-xl object-cover"
              />
            </div>
            <div className="w-7/12 p-5 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="text-[#3a3a3a] text-3xl font-bold capitalize">
                  {title?.slice(0, 50)}...
                </h2>
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-location-dot text-sm text-[#976d44]"></i>
                  <p className="text-base font-normal text-[#3a3a3a] capitalize">
                    {location}
                  </p>
                </span>
                <p className="text-base font-normal text-[#c89549] capitalize">
                  {category}
                </p>
              </div>
              <span className="flex gap-2 items-center">
                <i className="fa-regular fa-calendar text-sm text-[#976d44]"></i>
                <p className="text-base font-normal text-[#3a3a3a] capitalize">
                  {new Date(createdAt).toDateString()}
                </p>
              </span>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <section className="bg-[#F3F4F6] py-14 px-2 md:px-0">
      <div className="container">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{content}</div>
        <div className="flex justify-center pt-10">
          {slicePost?.length >= loadMore && (
            <button
              onClick={loadMorePost}
              className="bg-[#976d44] py-2 px-5 hover:px-10 transition-all rounded-md text-white font-bold text-base hover:bg-[#ec9f52]"
            >
              {t("loadMore")}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Events;
