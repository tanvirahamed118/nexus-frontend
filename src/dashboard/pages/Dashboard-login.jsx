import { useEffect, useState } from "react";
import Style from "../../dashboard/styles/Global.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaLock } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { useLoginAdminMutation } from "../../redux/rtk/features/auth/admin/authApi";

const DashboardLogin = () => {
  const getAdmin = localStorage.getItem("admin");
  const adminAuth = JSON.parse(getAdmin);
  const { adminToken } = adminAuth || {};
  const navigate = useNavigate();
  const [loginAdmin, { data, isLoading, isError, isSuccess, error }] =
    useLoginAdminMutation();

  useEffect(() => {
    if (adminToken) {
      navigate("/dashboard");
    }
  }, [adminToken, navigate]);

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = admin || {};

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginAdmin(admin);
    if (isSuccess) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    }
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
    <section className={Style.loginPage}>
      <div className={Style.container}>
        <Link to="/" className={Style.logo}>
          <img src={Logo} alt="" />
        </Link>
        <h2>Login Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <span>
            <FaUser />
            <input
              required
              value={email}
              type="email"
              name="email"
              placeholder="E-mail"
              id="username"
              onChange={(e) => handleChange(e)}
            />
          </span>
          <span>
            <FaLock />
            <input
              required
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </span>
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
              "Login"
            )}
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default DashboardLogin;
