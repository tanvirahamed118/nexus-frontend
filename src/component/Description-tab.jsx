import { useEffect, useState } from "react";
import {
  useGetOneUserQuery,
  useUpdateUserMutation,
} from "../redux/rtk/features/auth/user/authApi";
import toast, { Toaster } from "react-hot-toast";

function DescriptionTab() {
  const userAuth = localStorage.getItem("user");
  const response = JSON.parse(userAuth);
  const id = response?.user?._id;
  const [formData, setUser] = useState({
    bio: "",
  });
  const { data } = useGetOneUserQuery(id);
  const [updateUser, { data: getData, isLoading, isError, isSuccess, error }] =
    useUpdateUserMutation();
  const { bio } = formData || {};
  console.log(formData?.bio);
  const handleChange = (e) => {
    setUser({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ formData, id });

    setUser({
      bio: "",
    });
  };
  useEffect(() => {
    setUser(data);
  }, [data]);
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(getData?.message);
    }
  }, [isError, isSuccess, getData, error]);
  console.log(data);
  return (
    <div>
      <span className="flex gap-2 items-center">
        <i className="fa-solid fa-circle-info text-[#444] text-lg"></i>
        <p className="text-black text-xl font-normal capitalize">
          Add your description
        </p>
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            Add Your Info
          </label>
          <textarea
            name="bio"
            placeholder="your description"
            id=""
            cols="30"
            rows="3"
            className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
            onChange={handleChange}
            value={bio}
            required
          ></textarea>
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
              <p>Loading</p>
            </>
          ) : (
            "Update Password"
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default DescriptionTab;
