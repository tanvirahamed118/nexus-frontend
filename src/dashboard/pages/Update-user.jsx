import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  useGetOneUserQuery,
  useUpdateUserStatusMutation,
} from "../../redux/rtk/features/auth/user/authApi";
import { useTranslation } from "react-i18next";

const UpdateUser = () => {
  const { t } = useTranslation();
  const [updateUserStatus, { data, isLoading, isError, isSuccess, error }] =
    useUpdateUserStatusMutation();
  const params = useParams();
  const id = params?.id;
  const { data: getData } = useGetOneUserQuery(id);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUserStatus({ status, id });
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
    setStatus(getData?.status);
  }, [getData]);

  return (
    <>
      <section className={Style.warehouse}>
        <div className={`${Style.warehouseContainer} !w-[500px]`}>
          <h2>{t("updateUserStatus")}</h2>
          <form onSubmit={handleSubmit}>
            <div className="w-full">
              <div className={Style.formField}>
                <label
                  htmlFor="category"
                  className="text-xl font-normal text-black"
                >
                  {t("status")}
                </label>
                <span>
                  <select
                    required
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="pending">{t("pending")}</option>
                    <option value="approved">{t("approved")}</option>
                  </select>
                </span>
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

export default UpdateUser;
