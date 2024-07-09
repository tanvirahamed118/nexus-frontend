import Style from "../../dashboard/styles/DashboardEvents.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../dashboard/components/Pagination";
import { Link } from "react-router-dom";
import {
  useDeleteUserByMutation,
  useGetAllUserQuery,
} from "../../redux/rtk/features/auth/user/authApi";
import { useTranslation } from "react-i18next";

const DashboardUsers = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPages, setPostPages] = useState(10);
  const [loadingEventId, setLoadingEventId] = useState(null);
  const { data } = useGetAllUserQuery();
  const [
    deleteUserBy,
    { data: updateData, isLoading, isError, isSuccess, error },
  ] = useDeleteUserByMutation();

  const lastIndex = currentPage * postPages;
  const firstIndex = lastIndex - postPages;
  const slicePost = data?.slice(firstIndex, lastIndex);
  const handledelete = (id) => {
    setLoadingEventId(id);
    deleteUserBy(id);
  };
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(updateData?.message);
    }
    setLoadingEventId(null);
  }, [isError, isSuccess, updateData, error]);
  return (
    <>
      <section className={Style.upcSection}>
        <div className={Style.upcContainer}>
          <h1>{t("userLists")}</h1>
          <div className={Style.upcTable}>
            <table>
              <thead>
                <tr>
                  <th>{t("firstName")}</th>
                  <th>{t("lastName")}</th>
                  <th>{t("profile")}</th>
                  <th>{t("email")}</th>
                  <th>{t("country")}</th>
                  <th>{t("phone")}</th>
                  <th>{t("status")}</th>
                  <th>{t("action")}</th>
                </tr>
              </thead>
              <tbody>
                {slicePost?.length === 0 && (
                  <p className="text-red-500 font-bold text-md p-5">
                    {t("noDataFound")}
                  </p>
                )}
                {slicePost
                  ? slicePost?.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td>{item?.firstname}</td>
                          <td>{item?.lastname}</td>
                          <td>
                            <img
                              src={item?.profile}
                              alt=""
                              className="w-14 h-14 object-cover rounded-md"
                            />
                          </td>
                          <td>{item?.email?.slice(0, 20)}...</td>
                          <td>{item?.country}</td>
                          <td>{item?.phone}</td>
                          <td>
                            <p
                              className={
                                item?.status === "pending"
                                  ? "bg-red-500 text-white capitalize text-xs font-bold py-1 px-5 rounded-md inline-block"
                                  : "bg-green-500 text-white capitalize text-xs font-bold py-1 px-5 rounded-md inline-block"
                              }
                            >
                              {item?.status}
                            </p>
                          </td>
                          <td className="flex gap-2 items-center">
                            <Link
                              to={`/dashboard/users/update/${item?._id}`}
                              className="text-white bg-[#5d4b41] hover:bg-[#695145] py-2 px-3 rounded-md flex gap-2 items-center"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                              <p>{t("updateStatus")}</p>
                            </Link>
                            <button
                              className="text-white bg-[#5d4b41] hover:bg-[#695145] py-2 px-3 rounded-md"
                              onClick={() => handledelete(item?._id)}
                            >
                              {loadingEventId === item?._id && isLoading ? (
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
                                </>
                              ) : (
                                <i className="fa-solid fa-trash-can"></i>
                              )}
                            </button>
                            <Link
                              to={`/dashboard/users/single/${item?._id}`}
                              className="text-white bg-[#5d4b41] hover:bg-[#695145] py-2 px-3 rounded-md"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : `${t("loading")}...`}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {data?.length > postPages && (
        <Pagination
          totalPosts={data}
          postPerPage={postPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setPostPages={setPostPages}
        />
      )}
      <Toaster />
    </>
  );
};

export default DashboardUsers;
