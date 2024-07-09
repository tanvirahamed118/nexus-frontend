import Hero from "../assets/hero-image-home.jpg";
import Avater from "../assets/default_avatar.jpg";
import { Link, useParams } from "react-router-dom";
import { useGetOneEventQuery } from "../redux/rtk/features/event/eventApi";
import SubmitEvent from "../component/Submit-event";
import { useEffect, useState } from "react";
import {
  useDeleteApplyMutation,
  useGetAllApplyQuery,
} from "../redux/rtk/features/apply/applyApi";
import { useTranslation } from "react-i18next";

function SingleEvent() {
  const { t } = useTranslation();
  const params = useParams();
  const id = params.id;
  const { data } = useGetOneEventQuery(id);
  const { data: getSubmit } = useGetAllApplyQuery();
  const [deleteApply, { isLoading }] = useDeleteApplyMutation();
  const findSubmit = getSubmit?.filter((item) => item.eventID === id);

  const userAuth = localStorage.getItem("user");
  const user = JSON.parse(userAuth);
  const {
    title,
    category,
    location,
    adminName,
    adminPic,
    star,
    eventPic,
    condition,
    requirement,
    description,
  } = data || {};

  const [submit, setSubmit] = useState(false);
  const handleClick = () => {
    setSubmit(true);
  };
  const handleRemove = () => {
    const id = getSubmit[0]._id;
    deleteApply(id);
  };
  useEffect(() => {
    if (submit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [submit]);

  return (
    <section className="bg-[#F3F4F6] py-14">
      <div className="container">
        <div className="pb-10">
          <Link
            to="/event"
            className="bg-white shadow-md rounded-md text-black flex gap-2 items-center text-base px-5 py-2 w-28"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <button>{t("back")}</button>
          </Link>
        </div>
        <div className="flex gap-5 lg:flex-row flex-col">
          <div className="flex bg-white rounded-xl shadow-md w-full lg:w-9/12">
            <div className="w-5/12 h-full">
              <img
                src={eventPic ? eventPic : Hero}
                alt=""
                className="w-full h-full rounded-l-xl object-cover"
              />
            </div>
            <div className="w-7/12 p-5 flex flex-col gap-10">
              <div className="flex flex-col gap-2 items-start">
                <h2 className="text-[#3a3a3a] text-3xl font-bold capitalize">
                  {title}
                </h2>
                <button className="bg-[#F0F0F0] px-5 py-2 rounded-full text-black text-base font-bold w-auto capitalize">
                  {category}
                </button>
                <span className="flex gap-2 items-center">
                  <img
                    src={adminPic ? adminPic : Avater}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <p className="text-base font-normal text-[#3a3a3a] capitalize">
                    {adminName ? adminName : "xxxxxxx"}
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-location-dot text-sm text-[#976d44]"></i>
                  <p className="text-base font-normal text-[#3a3a3a] capitalize">
                    {location}
                  </p>
                </span>
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-star text-sm text-[#976d44]"></i>
                  <p className="text-base font-normal text-[#3a3a3a] capitalize">
                    {star}
                  </p>
                </span>
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-clock text-sm text-[#976d44]"></i>
                  <p className="text-base font-normal text-[#3a3a3a] capitalize">
                    {new Date(data?.createdAt).toDateString()}
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 bg-white rounded-lg p-10 shadow-xl">
            <h2 className="text-xl font-bold text-[#3a3a3a]">
              {t("condition")}
            </h2>
            <ul className="flex flex-col gap-2 pt-2">
              <li className="flex gap-2 items-start">
                <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                <p className="text-black text-base font-normal">{condition}</p>
              </li>
            </ul>
            <h2 className="text-xl font-bold text-[#3a3a3a] pt-5">
              {t("requirements")}
            </h2>
            <ul className="flex flex-col gap-2 pt-2">
              <li className="flex gap-2 items-start">
                <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                <p className="text-black text-base font-normal">
                  {requirement}
                </p>
              </li>
            </ul>
            {findSubmit?.length === 1 && (
              <p
                className="bg-[#FDF3D8] text-[#947a3d] font-normal text-base py-3 px-5 rounded-md
               mt-5"
              >
                {t("youCanSubmit")} ({" "}
                {`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`}
                )
              </p>
            )}
            {!user?.userToken && (
              <Link
                to="/login"
                className="bg-[#cfa361] text-white text-base font-bold py-2 block text-center rounded-lg mt-5"
              >
                {t("pleaseLoginToApply")}
              </Link>
            )}
            {findSubmit?.length === 0 && user?.userToken && (
              <Link
                onClick={handleClick}
                to=""
                className="bg-[#cfa361] text-white text-base font-bold py-2 block text-center rounded-lg mt-5"
              >
                {t("submitReq")}
              </Link>
            )}
            {findSubmit?.length === 1 && (
              <button
                onClick={handleRemove}
                to=""
                className="border border-[#cfa361] text-[#cfa361] text-base font-bold py-2 text-center rounded-lg mt-5 flex justify-center gap-3 w-full"
                disabled={findSubmit?.length === 0}
              >
                {isLoading ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 animate-spin"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    <p>{t("loading")}</p>
                  </>
                ) : (
                  ""
                )}
              </button>
            )}
          </div>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
          <h2 className="text-xl font-bold text-[#3a3a3a] pb-3">
            {t("description")}:
          </h2>
          <p className="text-black text-base font-normal pb-2">{description}</p>
        </div>
      </div>
      <SubmitEvent submit={submit} setSubmit={setSubmit} data={data} />
    </section>
  );
}

export default SingleEvent;
