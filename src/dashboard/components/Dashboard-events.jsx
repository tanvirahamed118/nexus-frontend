import Style from "../../dashboard/styles/DashboardEvents.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../dashboard/components/Pagination";
import {
  useDeleteEventMutation,
  useGetAllEventQuery,
} from "../../redux/rtk/features/event/eventApi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DashboardEvents = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPages, setPostPages] = useState(8);
  const [loadingEventId, setLoadingEventId] = useState(null);
  const { data } = useGetAllEventQuery();
  const [
    deleteEvent,
    { data: updateData, isLoading, isError, isSuccess, error },
  ] = useDeleteEventMutation();

  const lastIndex = currentPage * postPages;
  const firstIndex = lastIndex - postPages;
  const slicePost = data?.slice(firstIndex, lastIndex);
  const handledelete = (id) => {
    deleteEvent(id);
    // setLoadingEventId(id);
    console.log(id);
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
          <h1>{t("dashEventList")}</h1>
          <div className={Style.upcTable}>
            <table>
              <thead>
                <tr>
                  <th>{t("eventDashNo")}</th>
                  <th>{t("eventDashThumbnail")}</th>
                  <th>{t("eventDashDate")}</th>
                  <th>{t("eventDashTitle")}</th>
                  <th>{t("eventDashCategory")}</th>
                  <th>{t("eventDashPoster")}</th>
                  <th>{t("eventDashActions")}</th>
                </tr>
              </thead>
              <tbody>
                {slicePost?.length === 0 && (
                  <p className="text-red-500 font-bold text-md p-5">
                    {t("noDataFound")}
                  </p>
                )}
                {slicePost
                  ? slicePost?.map((item, index) => {
                      return (
                        <tr key={item._id}>
                          <td>{"Event - " + index}</td>
                          <td>
                            <img
                              src={item?.eventPic}
                              alt=""
                              className="w-14 h-14 object-cover rounded-md"
                            />
                          </td>
                          <td>
                            {new Date(item.createdAt).getFullYear() +
                              "-" +
                              new Date(item.createdAt).getMonth() +
                              "-" +
                              new Date(item.createdAt).getDate()}
                          </td>
                          <td>{item?.title?.slice(0, 40)}...</td>
                          <td>{item?.category}</td>
                          <td>{item?.adminName}</td>
                          <td className="flex gap-2 items-center">
                            <Link
                              to={`/dashboard/event/update/${item?._id}`}
                              className="text-white bg-[#5d4b41] hover:bg-[#695145] py-2 px-3 rounded-md"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                            <Link
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
                            </Link>
                            <Link
                              to={`/dashboard/event/single/${item?._id}`}
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

export default DashboardEvents;
