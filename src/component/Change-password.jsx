import { useEffect, useState } from "react";
import { useUpdateUserPassMutation } from "../redux/rtk/features/auth/user/authApi";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function ChangePassword() {
  const userAuth = localStorage.getItem("user");
  const { t } = useTranslation();
  const userInfo = JSON.parse(userAuth);
  const id = userInfo?.user?._id;
  const [updateUserPass, { data, isLoading, isError, isSuccess, error }] =
    useUpdateUserPassMutation();
  const [user, setUser] = useState({
    password: "",
    oldPassword: "",
  });
  const [ConfPassword, setConfPassword] = useState("");
  const { password, oldPassword } = user || {};
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ConfPassword) {
      updateUserPass({ user, id });
    } else {
      toast.error("Password Not Match");
    }
    setUser({
      password: "",
      oldPassword: "",
    });
    setConfPassword("");
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
        <i className="fa-solid fa-gear text-[#444] text-lg"></i>
        <p className="text-black text-xl font-normal capitalize">
          {t("changePassword")}
        </p>
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("currentPassword")} *
          </label>
          <input
            type="password"
            name="oldPassword"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={oldPassword}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("newPassword")} *
          </label>
          <input
            type="password"
            name="password"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={password}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("confirmPassword")} *
          </label>
          <input
            type="password"
            name="ConfPassword"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => setConfPassword(e.target.value)}
            value={ConfPassword}
          />
        </div>
        <button
          type="submit"
          className="bg-[#d2b588] text-white font-normal text-base px-5 py-2 rounded-md w-44 flex justify-center items-center gap-2"
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
            t("updatePassword")
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default ChangePassword;
