import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  useGetOneBrandQuery,
  useUpdateBrandMutation,
} from "../../redux/rtk/features/brand/brandSlice";
import { useTranslation } from "react-i18next";

const UpdateBrand = () => {
  const { t } = useTranslation();
  const [updateBrand, { data, isLoading, isError, isSuccess, error }] =
    useUpdateBrandMutation();
  const params = useParams();
  const id = params?.id;

  const { data: getData } = useGetOneBrandQuery(id);

  const [brand, setBrand] = useState({
    nameOfEST: "",
    RPPersonName: "",
    position: "",
    email: "",
    phone: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateBrand({ brand, id });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data, error]);

  useEffect(() => {
    setBrand(getData);
  }, [getData]);

  return (
    <>
      <section className={Style.warehouse}>
        <div className={Style.warehouseContainer}>
          <h2>{t("updateBrandInfo")}</h2>
          <form onSubmit={handleSubmit}>
            <div className={Style.formBox}>
              <div className={Style.leftBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="nameOfEST"
                    className="text-xl font-normal text-black"
                  >
                    {t("nameOfEst")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={nameOfEST}
                      type="text"
                      name="nameOfEST"
                      placeholder={t("nameOfEst")}
                      id="nameOfEST"
                      required
                    />
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="RPPersonName"
                    className="text-xl font-normal text-black"
                  >
                    {t("rPPersonName")}
                  </label>
                  <span>
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      value={RPPersonName}
                      type="text"
                      name="RPPersonName"
                      id="RPPersonName"
                      placeholder={t("rPPersonName")}
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="position"
                    className="text-xl font-normal text-black"
                  >
                    {t("position")}
                  </label>
                  <span>
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      value={position}
                      type="text"
                      name="position"
                      id="position"
                      placeholder={t("position")}
                    />
                  </span>
                </div>
              </div>
              <div className={Style.rightBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="category"
                    className="text-xl font-normal text-black"
                  >
                    {t("email")}
                  </label>
                  <span>
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t("email")}
                    />
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="condition"
                    className="text-xl font-normal text-black"
                  >
                    {t("phone")}
                  </label>
                  <span>
                    <input
                      type="number"
                      value={phone}
                      id="phone"
                      onChange={handleChange}
                      required
                      name="phone"
                      placeholder={t("phone")}
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="description"
                    className="text-xl font-normal text-black"
                  >
                    {t("message")}
                  </label>
                  <span>
                    <input
                      type="text"
                      value={message}
                      id="message"
                      onChange={handleChange}
                      required
                      name="message"
                      placeholder={t("message")}
                    />
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-base font-bold uppercase text-white rounded-md !w-auto py-4 text-center hover:bg-[#3A3A3A] flex justify-center items-center gap-2"
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
                  <p>{`${t("loading")}...`}</p>
                </>
              ) : (
                t("saveChanges")
              )}
            </button>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default UpdateBrand;
