import { useEffect, useState } from "react";
import Banner from "../assets/login-image-scaled.jpg";
import { useSendOTPUserMutation } from "../redux/rtk/features/auth/user/authApi";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
function Reset() {
  const [sendOTPUser, { data, isLoading, isError, isSuccess, error }] =
    useSendOTPUserMutation();
  const [user, setUser] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { email } = user || {};
  const handleSubmit = (e) => {
    e.preventDefault();
    sendOTPUser(user);
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
    <section className="">
      <div className="flex md:flex-row flex-col h-full md:h-screen">
        <div className="w-full md:w-6/12">
          <img
            src={Banner}
            alt=""
            className="w-full h-52 md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-6/12 px-5 md:px-20 flex flex-col justify-center py-10 md:py-0">
          <h2 className="text-black text-3xl font-bold uppercase">
            Send your OTP
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 px-5 py-3 rounded-md"
                onChange={(e) => handleChange(e)}
                value={email}
              />
            </div>
            <div className="w-full">
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
                    <p>Loading</p>
                  </>
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
            {isSuccess && (
              <div className="w-full">
                <Link
                  to="/check-otp"
                  className="text-lg text-[#888] font-normal text-center block hover:underline"
                >
                  Check OTP
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Reset;
