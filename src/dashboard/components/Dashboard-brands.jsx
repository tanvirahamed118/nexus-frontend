import Style from "../../dashboard/styles/DashboardEvents.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../dashboard/components/Pagination";
import { Link } from "react-router-dom";
import {
  useDeleteBrandMutation,
  useGetAllBrandQuery,
} from "../../redux/rtk/features/brand/brandSlice";

const DashboardBrands = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPages, setPostPages] = useState(8);
  const [loadingEventId, setLoadingEventId] = useState(null);
  const { data } = useGetAllBrandQuery();
  const [
    deleteApply,
    { data: updateData, isLoading, isError, isSuccess, error },
  ] = useDeleteBrandMutation();

  const lastIndex = currentPage * postPages;
  const firstIndex = lastIndex - postPages;
  const slicePost = data?.slice(firstIndex, lastIndex);
  const handledelete = (id) => {
    setLoadingEventId(id);
    deleteApply(id);
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
          <h1>Brand Lists</h1>
          <div className={Style.upcTable}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name Of EST</th>
                  <th>RP Person Name</th>
                  <th>Postition</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {slicePost?.length === 0 && (
                  <p className="text-red-500 font-bold text-md p-5">
                    No data found!
                  </p>
                )}
                {slicePost
                  ? slicePost?.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td>
                            {new Date(item.createdAt).getFullYear() +
                              "-" +
                              new Date(item.createdAt).getMonth() +
                              "-" +
                              new Date(item.createdAt).getDate()}
                          </td>
                          <td>{item?.nameOfEST}</td>
                          <td>{item?.RPPersonName}</td>
                          <td>{item?.position}</td>
                          <td>{item?.email}</td>
                          <td>{item?.phone}</td>
                          <td>{item?.message}</td>

                          <td className="flex gap-2 items-center">
                            <Link
                              to={`/dashboard/brands/update/${item?._id}`}
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
                              to={`/dashboard/brands/single/${item?._id}`}
                              className="text-white bg-[#5d4b41] hover:bg-[#695145] py-2 px-3 rounded-md"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : "Loading..."}
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

export default DashboardBrands;