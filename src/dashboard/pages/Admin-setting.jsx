import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUpload } from "react-icons/fa";
import {
  useGetOneAdminQuery,
  useUpdateAdminMutation,
} from "../../redux/rtk/features/auth/admin/authApi";
import { useTranslation } from "react-i18next";

const AdminSetting = () => {
  const { t } = useTranslation();
  const [updateAdmin, { data, isLoading, isError, isSuccess, error }] =
    useUpdateAdminMutation();
  const getAdmin = localStorage.getItem("admin");
  const adminAuth = JSON.parse(getAdmin);
  const { admin } = adminAuth || {};
  const id = admin?._id;
  const Ref = useRef();
  const [adminProfile, setadminProfile] = useState(null);

  const { data: getData } = useGetOneAdminQuery(id);
  const [adminData, setAdminData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    Organization: "",
    description: "",
    phone: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
  });

  const {
    firstname,
    lastname,
    email,
    Organization,
    description,
    phone,
    facebook,
    instagram,
    linkedin,
    tiktok,
  } = adminData || {};

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("adminProfile", adminProfile);
    Object.keys(adminData).forEach((key) => {
      formData.append(key, adminData[key]);
    });
    try {
      await updateAdmin({ formData, id });
      setAdminData({
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        Organization: "",
        description: "",
        phone: "",
      });
      if (Ref.current) {
        Ref.current.value = "";
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
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
    setAdminData(getData);
  }, [getData]);

  return (
    <>
      <section className={Style.warehouse}>
        <div className={Style.warehouseContainer}>
          <h2>{t("updateMyInfo")}</h2>
          <form onSubmit={handleSubmit}>
            <div className={Style.formBox}>
              <div className={Style.leftBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="firstname"
                    className="text-xl font-normal text-black"
                  >
                    {t("firstName")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={firstname}
                      type="text"
                      name="firstname"
                      placeholder={t("firstName")}
                      id="firstname"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="email"
                    className="text-xl font-normal text-black"
                  >
                    {t("email")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={email}
                      type="email"
                      name="email"
                      placeholder={t("email")}
                      id="email"
                      required
                    />
                  </span>
                </div>

                <div className={`${Style.formField} ${Style.upContainer}`}>
                  <label
                    htmlFor="upproduct"
                    className={`${Style.dropContainer} text-xl font-normal text-black`}
                  >
                    {t("profilePicture")}
                  </label>
                  <span>
                    <FaUpload />

                    <input
                      ref={Ref}
                      onChange={(e) => setadminProfile(e.target.files[0])}
                      type="file"
                      name="upproduct"
                      id="upproduct"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="description"
                    className="text-xl font-normal text-black"
                  >
                    {t("description")}
                  </label>
                  <span>
                    <input
                      name="description"
                      id="description"
                      onChange={handleChange}
                      value={description}
                      placeholder={t("description")}
                      type="text"
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="linkedin"
                    className="text-xl font-normal text-black"
                  >
                    {t("linkedin")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={linkedin}
                      type="text"
                      name="linkedin"
                      placeholder={t("linkedin")}
                      id="linkedin"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="tiktok"
                    className="text-xl font-normal text-black"
                  >
                    {t("tiktok")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={tiktok}
                      type="text"
                      name="tiktok"
                      placeholder={t("tiktok")}
                      id="tiktok"
                      required
                    />
                  </span>
                </div>
              </div>
              <div className={Style.rightBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="lastname"
                    className="text-xl font-normal text-black"
                  >
                    {t("lastName")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={lastname}
                      type="text"
                      name="lastname"
                      placeholder={t("lastName")}
                      id="lastname"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="password"
                    className="text-xl font-normal text-black"
                  >
                    {t("password")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      type="password"
                      name="password"
                      placeholder={t("password")}
                      id="password"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="phone"
                    className="text-xl font-normal text-black"
                  >
                    {t("phone")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={phone}
                      type="tel"
                      name="phone"
                      placeholder={t("phone")}
                      id="phone"
                      required
                    />
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="Organization"
                    className="text-xl font-normal text-black"
                  >
                    {t("organization")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={Organization}
                      type="text"
                      name="Organization"
                      placeholder={t("organization")}
                      id="Organization"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="facebook"
                    className="text-xl font-normal text-black"
                  >
                    {t("facebook")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={facebook}
                      type="text"
                      name="facebook"
                      placeholder={t("facebook")}
                      id="facebook"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="instagram"
                    className="text-xl font-normal text-black"
                  >
                    {t("instagram")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={instagram}
                      type="text"
                      name="instagram"
                      placeholder={t("instagram")}
                      id="instagram"
                      required
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

export default AdminSetting;
