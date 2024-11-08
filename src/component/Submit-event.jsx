import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useCreateApplyMutation } from "../redux/rtk/features/apply/applyApi";
import { useTranslation } from "react-i18next";

function SubmitEvent({ submit, setSubmit, data: getData }) {
  const { t } = useTranslation();
  const eventID = getData?._id;
  const eventTitle = getData?.title;
  const [createApply, { data: resData, isLoading, isError, isSuccess, error }] =
    useCreateApplyMutation();
  const status = "Require submission";
  const eventPic = getData?.eventPic;

  const [data, setData] = useState({
    date: "",
    time: "",
    message: "",
  });
  data.eventTitle = eventTitle;
  data.eventID = eventID;
  data.status = status;
  data.eventPic = eventPic;
  const { date, time, message } = data || {};

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createApply(data);
    setData({
      date: "",
      time: "",
      message: "",
    });
    setTimeout(() => {
      setSubmit(false);
    }, 1000);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(resData?.message);
    }
  }, [isError, isSuccess, resData, error]);
  useEffect(() => {
    if (submit) {
      document.body.style.overflow = "hidden"; // Disable scroll
      window.scrollTo(0, 0); // Scroll to top
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll when popup closes
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [submit]);
  return (
    <div
      className={
        submit
          ? "absolute left-0 top-0 bg-[#0000001c] w-full h-screen flex justify-center items-center submitActive"
          : "absolute left-0 top-0 bg-[#0000001c] w-full h-screen flex justify-center items-center submitInactive"
      }
    >
      <div className="bg-white p-10 rounded-xl shadow-md w-11/12 lg:w-5/12 flex flex-col justify-center items-center">
        <button
          className="w-full flex justify-end pb-5 hover:text-red-500"
          onClick={() => setSubmit(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <form
          action=""
          className="flex flex-col gap-5 xl:w-full mt-8 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex md:flex-row flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-black text-md font-normal">
                {t("eventDate")}
              </label>
              <input
                type="date"
                name="date"
                id=""
                placeholder={t("eventDate")}
                className="uppercase border rounded-md px-5 text-black text-md font-normal py-3 border-gray-300"
                value={date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-black text-md font-normal" htmlFor="">
                {t("eventTime")}
              </label>
              <select
                name="time"
                id=""
                className="uppercase border rounded-md px-5 text-black text-md font-normal py-3 border-gray-300"
                value={time}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled>
                  {t("selectTime")}
                </option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
              </select>
            </div>
          </div>
          <div className="w-full pt-5 flex flex-col gap-2">
            <label htmlFor="" className="text-black text-md font-normal">
              {t("eventMessage")}
            </label>
            <textarea
              name="message"
              placeholder={t("yourMessage")}
              id=""
              cols="30"
              rows="5"
              className="uppercase border rounded-md px-5 text-black text-md font-normal py-3 border-gray-300 w-full"
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex gap-3 justify-end py-5">
            <Link
              to=""
              onClick={() => setSubmit(false)}
              className="text-white text-base font-normal bg-[#858796] py-2 capitalize px-5 rounded-md"
            >
              {t("close")}
            </Link>

            <button
              type="submit"
              className="text-white text-base font-normal bg-[#BD8231] py-2 capitalize px-5 rounded-md flex justify-center gap-3"
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
                t("sendAMessage")
              )}
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
SubmitEvent.propTypes = {
  submit: PropTypes.bool,
  setSubmit: PropTypes.func,
  data: PropTypes.object,
};
export default SubmitEvent;
