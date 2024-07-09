import { useEffect, useState } from "react";
import Banner from "../assets/pexels-jéshoots-4831-scaled.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useCreateContactMutation } from "../redux/rtk/features/contact/contactApi";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [createContact, { data, isLoading, isError, isSuccess, error }] =
    useCreateContactMutation();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    messages: "",
  });
  const { name, email, messages } = contact || {};
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(contact);
    setContact({
      name: "",
      email: "",
      messages: "",
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

  return (
    <section>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="w-full md:w-6/12">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-6/12 flex flex-col p-14 justify-center">
          <h2 className="text-2xl font-bold text-black uppercase">
            {t("sendUs")}
          </h2>
          <p className="text-black text-base font-normal">
            {t("enterYourDetail")}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 xl:w-7/12 mt-8 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder={t("name")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={name}
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder={t("email")}
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={email}
              required
            />
            <textarea
              name="messages"
              placeholder={t("yourMessahge")}
              id=""
              cols="30"
              rows="3"
              className="capitalize border-2 rounded-md px-5 text-black text-xl font-normal py-3 border-gray-500"
              onChange={handleChange}
              value={messages}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-base font-bold uppercase text-white rounded-md w-full py-4 text-center hover:bg-[#3A3A3A] flex justify-center items-center gap-2"
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
                t("sendMessage")
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Contact;
