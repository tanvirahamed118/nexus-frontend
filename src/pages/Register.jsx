import { useEffect, useMemo, useRef, useState } from "react";
import Banner from "../assets/georgia-de-lotz-Ebb8fe-NZtM-unsplash-scaled.jpg";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useRegisterUserMutation } from "../redux/rtk/features/auth/user/authApi";
import toast, { Toaster } from "react-hot-toast";
function Register() {
  const [registerUser, { data, isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    snapchat: "",
    facebook: "",
  });
  const [country, setCountry] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [profile, setProfile] = useState(null);
  const [agreement, setAgreement] = useState(false);
  const [video, setVideo] = useState(null);
  const profileRef = useRef();
  const instaRef = useRef();
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    phone,
    instagram,
    tiktok,
    youtube,
    snapchat,
    facebook,
  } = user || {};

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const options = useMemo(() => countryList().getData(), []);
  const handleCountry = (value) => {
    setCountry(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPass) {
      const formData = new FormData();
      formData.append("profile", profile);
      formData.append("video", video);
      formData.append("agreement", agreement);
      formData.append("country", country.label);

      Object.keys(user).forEach((key) => {
        formData.append(key, user[key]);
      });
      try {
        await registerUser({ formData });
        setUser({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
          phone: "",
          instagram: "",
          tiktok: "",
          youtube: "",
          snapchat: "",
          facebook: "",
        });
        setCountry("");
        setAgreement(false);
        if (profileRef.current) {
          profileRef.current.value = "";
        }
        if (instaRef.current) {
          instaRef.current.value = "";
        }
        setConfirmPass("");
      } catch (error) {
        toast.error("Error Occurred");
      }
    } else {
      toast.error("Password Not Matched!");
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
    <section className="">
      <div className="flex lg:flex-row flex-col h-full">
        <div className="w-full lg:w-6/12 h-80 lg:h-auto">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-6/12 p-10 lg:p-14 flex flex-col justify-center">
          <h2 className="text-black text-2xl lg:text-3xl font-bold uppercase">
            BECOME ONE OF OUR INFLUENCERS
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-5">
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-lg text-black font-bold">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                  placeholder="First name"
                  onChange={(e) => handleChange(e)}
                  value={firstname}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-lg text-black font-bold">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                  placeholder="Last name"
                  onChange={(e) => handleChange(e)}
                  value={lastname}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Username*
              </label>
              <input
                type="text"
                name="username"
                className="border border-gray-300 px-5 py-3 rounded-md"
                placeholder="Enter your username"
                onChange={(e) => handleChange(e)}
                value={username}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                <i className="fa-solid fa-image"></i> Profile Picture*
              </label>
              <span className="border border-dashed border-gray-200 w-full h-32 flex justify-center items-center rounded-md">
                <input
                  type="file"
                  name="username"
                  className="border-none"
                  ref={profileRef}
                  onChange={(e) => setProfile(e.target.files[0])}
                  required
                />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                placeholder="Enter your email address"
                onChange={(e) => handleChange(e)}
                value={email}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                placeholder="Phone Number"
                onChange={(e) => handleChange(e)}
                value={phone}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Country of residence *
              </label>
              <Select
                name="country"
                id=""
                className="text-lg text-black font-bold border border-gray-200 px-5 py-3 rounded-md"
                onChange={handleCountry}
                value={country}
                options={options}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Password*
              </label>
              <input
                type="password"
                name="password"
                className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                placeholder="Enter a password"
                onChange={(e) => handleChange(e)}
                value={password}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Confirm Password*
              </label>
              <input
                type="password"
                className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPass(e.target.value)}
                required
                value={confirmPass}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-lg text-black font-bold">
                  Instagram*
                </label>
                <input
                  type="text"
                  name="instagram"
                  className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                  placeholder="@yourusername"
                  onChange={(e) => handleChange(e)}
                  value={instagram}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-lg text-black font-bold">
                  Tiktok
                </label>
                <input
                  type="text"
                  name="tiktok"
                  className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                  placeholder="@yourusername"
                  onChange={(e) => handleChange(e)}
                  value={tiktok}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-lg text-black font-bold">
                  YouTube
                </label>
                <input
                  type="text"
                  name="youtube"
                  className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                  placeholder="Channel URL"
                  onChange={(e) => handleChange(e)}
                  value={youtube}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="" className="text-lg text-black font-bold">
                  Snapchat
                </label>
                <input
                  type="text"
                  name="snapchat"
                  className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                  placeholder="@yourusername"
                  onChange={(e) => handleChange(e)}
                  value={snapchat}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                Facebook
              </label>
              <input
                type="text"
                name="facebook"
                className="border border-gray-300 px-5 py-3 rounded-md text-black text-base font-normal"
                placeholder="@yourusername"
                onChange={(e) => handleChange(e)}
                value={facebook}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg text-black font-bold">
                <i className="fa-solid fa-chart-line"></i> Instagram Statistics
                video*
              </label>
              <span className="border border-dashed border-gray-200 w-full h-32 flex justify-center items-center rounded-md">
                <input
                  type="file"
                  name="username"
                  className="border-none"
                  ref={instaRef}
                  onChange={(e) => setVideo(e.target.files[0])}
                  required
                />
              </span>
            </div>
            <div className="flex gap-2 items-start md:items-center">
              <input
                type="checkbox"
                name="agreement"
                id="check"
                className="mt-2 md:mt-0"
                onChange={() => setAgreement(!agreement)}
                checked={agreement}
                value={agreement}
                required
              />
              <label
                htmlFor="check"
                className="text-lg text-[#888] font-normal"
              >
                Please confirm that you agree with
                <a href="">Terms & Conditions</a> of this platform
              </label>
            </div>

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
                "register"
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Register;
