import { useEffect, useRef, useState } from "react";
import {
  useGetOneUserQuery,
  useUpdateUserMutation,
} from "../redux/rtk/features/auth/user/authApi";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function AccountTab() {
  const [updateUser, { data, isLoading, isError, isSuccess, error }] =
    useUpdateUserMutation();
  const { t } = useTranslation();
  const userAuth = localStorage.getItem("user");
  const userInfo = JSON.parse(userAuth);
  const id = userInfo?.user?._id;
  const { data: getData } = useGetOneUserQuery(id);
  const [profile, setProfile] = useState(null);
  const [video, setVideo] = useState(null);
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const profileRef = useRef();
  const instaRef = useRef();
  const { firstname, lastname, email, username } = user || {};

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setUser(getData);
  }, [getData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", profile);
    formData.append("video", video);
    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });
    updateUser({ formData, id });
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
    <div>
      <span className="flex gap-2 items-center">
        <i className="fa-solid fa-user text-[#444] text-lg"></i>
        <p className="text-black text-xl font-normal capitalize">
          {t("account")}
        </p>
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("userName")} *
          </label>
          <input
            type="text"
            name="username"
            placeholder={t("userName")}
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={username}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("firstName")} *
          </label>
          <input
            type="text"
            name="firstname"
            placeholder={t("firstName")}
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={firstname}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("lastName")} *
          </label>
          <input
            type="text"
            name="lastname"
            placeholder={t("lastName")}
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={lastname}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg text-black font-bold">
            <i className="fa-solid fa-image"></i> {t("profilePicture")}*
          </label>
          <span className="border border-dashed border-gray-200 w-full h-32 flex justify-center items-center rounded-md">
            <input
              type="file"
              name="username"
              className="border-none"
              ref={profileRef}
              onChange={(e) => setProfile(e.target.files[0])}
              required
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-lg text-black font-bold">
            <i className="fa-solid fa-image"></i>{" "}
            {t("InstagramStatisticsVideo")}*
          </label>
          <span className="border border-dashed border-gray-200 w-full h-32 flex justify-center items-center rounded-md">
            <input
              type="file"
              name="username"
              className="border-none"
              ref={instaRef}
              onChange={(e) => setVideo(e.target.files[0])}
              required
            />
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("emailAddress")} *
          </label>
          <input
            type="email"
            name="email"
            placeholder="clarwin.dekam1@gmail.com"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={email}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#d2b588] text-white font-normal text-base px-5 py-2 rounded-md w-40 flex justify-center items-center gap-2"
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
            t("updateAccount")
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default AccountTab;
