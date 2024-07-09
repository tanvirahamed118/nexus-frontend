import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCreateBrandMutation } from "../redux/rtk/features/brand/brandSlice";

function BrandContract() {
  const { t } = useTranslation();
  const [createBrand, { data, isLoading, isError, isSuccess, error }] =
    useCreateBrandMutation();

  const [brand, setBrand] = useState({
    nameOfEST: "",
    RPPersonName: "",
    position: "",
    phone: "",
    email: "",
    message: "",
  });
  const { nameOfEST, RPPersonName, position, email, phone, message } =
    brand || {};
  const handleChange = (e) => {
    setBrand({
      ...brand,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBrand(brand);
    setBrand({
      nameOfEST: "",
      RPPersonName: "",
      position: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data, error]);

  return (
    <section>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="w-full md:w-6/12 bg-[#1D1D1D] h-screen flex flex-col items-end justify-center p-10">
          <div className="w-7/12">
            <h2 className="text-5xl text-white font-bold capitalize leading-snug">
              {t("areYouInterested")}
            </h2>
            <p className="text-white text-lg font-normal capitalize py-5">
              {t("dropUsMessage")}
            </p>
            <div>
              <h3 className="text-white font-bold text-base">
                {t("followUs")}:
              </h3>
              <div className="flex gap-5 pt-3">
                <Link to="">
                  <i className="fa-brands fa-facebook text-[#b6b6b6] text-xl hover:text-white"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-instagram text-[#b6b6b6] text-xl hover:text-white"></i>
                </Link>
                <Link to="">
                  <i className="fa-brands fa-linkedin text-[#b6b6b6] text-xl hover:text-white"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex flex-col p-14 justify-center">
          <h2 className="text-2xl font-bold text-black uppercase">
            {t("fillTheForm")}
          </h2>
          <p className="text-black text-base font-normal">
            {t("enterDetails")}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 xl:w-7/12 mt-8 w-full"
          >
            <input
              type="text"
              name="nameOfEST"
              placeholder={t("nameOfEST")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={nameOfEST}
              required
            />
            <input
              type="text"
              name="RPPersonName"
              placeholder={t("represntative")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={RPPersonName}
              required
            />
            <input
              type="text"
              name="position"
              placeholder={t("position")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={position}
              required
            />

            <input
              type="email"
              name="email"
              id=""
              placeholder={t("email")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={email}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("phone")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={phone}
              required
            />
            <textarea
              name="message"
              placeholder={t("yourMessage")}
              id=""
              cols="30"
              rows="3"
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={message}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-base font-bold uppercase text-white rounded-md w-full py-4 text-center hover:bg-[#3A3A3A] flex justify-center items-center gap-2"
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
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default BrandContract;
