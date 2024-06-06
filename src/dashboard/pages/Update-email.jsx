import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useGetOneContactQuery,
  useUpdateContactMutation,
} from "../../redux/rtk/features/contact/contactApi";

const UpdateEmail = () => {
  // const navigate = useNavigate();
  const [updateContact, { data, isLoading, isError, isSuccess, error }] =
    useUpdateContactMutation();
  const params = useParams();
  const id = params?.id;

  const { data: getData } = useGetOneContactQuery(id);
  const [emails, setEmails] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const { name, email, messages } = emails || {};

  const handleChange = (e) => {
    setEmails({
      ...emails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateContact({ emails, id });
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
    setEmails(getData);
  }, [getData]);

  return (
    <>
      <section className={Style.warehouse}>
        <div className={`${Style.warehouseContainer} !w-[500px]`}>
          <h2>Update Email info</h2>
          <form onSubmit={handleSubmit}>
            <div className={"w-full"}>
              <div className={"w-full flex flex-col gap-5"}>
                <div className={Style.formField}>
                  <label
                    htmlFor="trackingNumber"
                    className="text-xl font-normal text-black"
                  >
                    Name
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={name}
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      id="trackingNumber"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="trackingNumber"
                    className="text-xl font-normal text-black"
                  >
                    Email
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={email}
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      id="trackingNumber"
                      required
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="messages"
                    className="text-xl font-normal text-black"
                  >
                    Messages
                  </label>
                  <span>
                    <textarea
                      name="messages"
                      id="messages"
                      onChange={handleChange}
                      value={messages}
                      placeholder="Enter messages"
                      rows={3}
                    ></textarea>
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
                  <p>Loading...</p>
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default UpdateEmail;
