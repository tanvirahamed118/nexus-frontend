import { Link, useNavigate } from "react-router-dom";
import Avater from "../assets/default_avatar.jpg";
import { useGetOneUserQuery } from "../redux/rtk/features/auth/user/authApi";
import { useEffect } from "react";

function UserProfile() {
  const userAuth = localStorage.getItem("user");
  const user = JSON.parse(userAuth);
  const id = user?.user?._id;
  const { data } = useGetOneUserQuery(id);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.userToken) {
      navigate("/");
    }
  }, [user, navigate]);
  const {
    firstname,
    lastname,
    email,
    profile,
    video,
    snapchat,
    instagram,
    facebook,
    bio,
  } = data || {};

  return (
    <section className="bg-[#F3F4F6] py-14">
      <div className="container">
        <div>
          <div className="flex justify-end">
            <Link to="/account">
              <i className="fa-solid fa-gear text-[#aaa] text-3xl hover:text-[#4169e1]"></i>
            </Link>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img
              src={profile ? profile : Avater}
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="flex flex-col gap-2 items-center">
              <Link
                to="/user-profile"
                className="text-black font-normal text-lg"
              >
                {firstname + " " + lastname}
              </Link>
              <Link
                to="/user-profile"
                className="text-blue-500 font-normal text-md"
              >
                {email}
              </Link>
            </div>
            <div className="flex gap-5">
              <Link
                to={snapchat ? snapchat : ""}
                className="flex gap-2 items-center"
              >
                <i className="fa-brands fa-snapchat text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">@snapchat</p>
              </Link>
              <Link
                to={instagram ? instagram : ""}
                className="flex gap-2 items-center"
              >
                <i className="fa-brands fa-instagram text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">@instagram</p>
              </Link>
              <Link
                to={facebook ? facebook : ""}
                className="flex gap-2 items-center"
              >
                <i className="fa-solid fa-video text-[#999] text-md"></i>
                <p className="text-[#999] text-base font-nomal">@facebook</p>
              </Link>
            </div>
          </div>
          <div className="py-5">
            <ul className="bg-[#444444] py-3 px-4 w-full flex gap-2">
              <li className="bg-[#D2B588] hover:bg-[#977c53] py-2 px-3 rounded-md text-white flex gap-2 items-center">
                <i className="fa-solid fa-user"></i>
                <a href="" className="text-white text-base font-bold">
                  About
                </a>
              </li>
              <li className="bg-[#D2B588] hover:bg-[#977c53] py-2 px-3 rounded-md text-white flex gap-2 items-center">
                <i className="fa-solid fa-pencil"></i>
                <a href="" className="text-white text-base font-bold">
                  Posts
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-6 py-5">
              <div>
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-circle-info"></i>
                  <p className="text-xl font-bold text-black">About Info</p>
                </span>
                <p className="text-base font-normal text-black">
                  {bio ? bio : "Empty description"}
                </p>
              </div>
              <div>
                <span className="flex gap-2 items-center">
                  <i className="fa-solid fa-chart-line"></i>
                  <p className="text-xl font-bold text-black">
                    Instagram Statistics video
                  </p>
                </span>
                <video
                  width="100%"
                  height="240"
                  controls
                  className="w-full  h-[50vh] pt-5"
                >
                  <source src={video ? video : ""} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
