import { Link } from "react-router-dom";

function CallOfAction() {
  const userAuth = localStorage.getItem("user");
  const user = JSON.parse(userAuth);
  return (
    <section className="banner-bg relative">
      <div className="relative bg-gradient-to-t from-[#c8954950] to-[#000000de] w-full h-[60vh] md:h-[70vh] flex items-center flex-col gap-5 pt-32 md:pt-40">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
          <h2 className="text-lg text-white font-bold uppercase md:text-5xl">
            BE ONE OF OUR EXCLUSIVE MEMBERS
          </h2>
          <h2 className="text-[#ffc670] text-2xl font-bold italic md:text-5xl">
            ARE YOU AN INFLUENCER ?
          </h2>
          <h3 className="text-[#ffebcc] text-base font-bold md:text-3xl">
            Get incredible invitations to live your best life !
          </h3>
          {!user?.userToken && (
            <Link
              to="/register"
              className="bg-[#cfa361] w-52 text-center py-2 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all hover:w-56 mt-5 md:text-2xl"
            >
              Apply Now <i className="fa-regular fa-paper-plane"></i>
            </Link>
          )}
          {user?.userToken && (
            <div className="flex gap-5 items-center w-full justify-center">
              <Link
                to="/event"
                className="bg-[#cfa361] w-72 px-10 text-center py-3 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all mt-5 md:text-lg"
              >
                View All Events <i className="fa-solid fa-right-long pl-1"></i>
              </Link>
              <Link
                to="/user-profile"
                className="bg-[#cfa361] w-72 px-10 text-center py-3 text-white font-bold text-base rounded-full hover:bg-white hover:text-black transition-all mt-5 md:text-lg"
              >
                <i className="fa-solid fa-user pr-1"></i> My Profile
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#C89549] flex flex-col items-center py-5">
        <h2 className="text-white text-sm font-bold md:text-2xl">
          SCROLL DOWN FOR UPCOMING EVENTS
        </h2>
        <a href="">
          <i
            className="fa-solid fa-chevron-down text-white animate-bounce"
            style={{ fontSize: "40px" }}
          ></i>
        </a>
      </div>
    </section>
  );
}

export default CallOfAction;
