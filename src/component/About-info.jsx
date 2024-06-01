import { useGetOneUserQuery } from "../redux/rtk/features/auth/user/authApi";

function AboutInfo() {
  const userAuth = localStorage.getItem("user");
  const user = JSON.parse(userAuth);
  const id = user?.user?._id;
  const { data } = useGetOneUserQuery(id);
  const { video, bio } = data || {};
  return (
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
  );
}

export default AboutInfo;