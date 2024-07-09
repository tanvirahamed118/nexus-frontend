import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDeleteUserMutation } from "../redux/rtk/features/auth/user/authApi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function DeleteAccountTab() {
  const { t } = useTranslation();
  const userAuth = localStorage.getItem("user");
  const userInfo = JSON.parse(userAuth);
  const id = userInfo?.user?._id;
  const [deleteUser, { data, isLoading, isError, isSuccess, error }] =
    useDeleteUserMutation();
  const [user, setUser] = useState({
    password: "",
  });
  const navigate = useNavigate();
  const { password } = user || {};
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser({ user, id });
    setUser({
      password: "",
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
  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/");
        localStorage.clear();
      }
    }, 2000);
  }, [navigate, isSuccess]);

  return (
    <div>
      <span className="flex gap-2 items-center">
        <i className="fa-solid fa-trash text-[#444] text-lg"></i>
        <p className="text-black text-xl font-normal capitalize">
          {t("deleteAccount")}
        </p>
      </span>
      <p className="text-black font-base font-normal capitalize pt-5">
        {t("areYourSure")}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("password")} *
          </label>
          <input
            type="password"
            name="password"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
            onChange={(e) => handleChange(e)}
            value={password}
            placeholder={t("password")}
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
            t("deleteAccount")
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default DeleteAccountTab;
