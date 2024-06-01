import { Link, useParams } from "react-router-dom";

import { useGetOneUserQuery } from "../../redux/rtk/features/auth/user/authApi";

function DashboardSingleUser() {
  const params = useParams();
  const id = params.id;
  const { data } = useGetOneUserQuery(id);

  const {
    firstname,
    lastname,
    username,
    email,
    phone,
    country,
    instagram,
    tiktok,
    youtube,
    snapchat,
    facebook,
    profile,
    video,
    status,
  } = data || {};
  return (
    <section className="p-10">
      <h3 className="text-3xl !font-bold text-black pb-5 border-b border-gray-300 mb-5 capitalize">
        {firstname + " " + lastname} Profile
      </h3>
      <div className="p-10 bg-[#ffffffe8] w-full xl:w-6/12 shadow-md rounded-md">
        <div className="border-b border-gray-300 pb-5 flex justify-between">
          <span className="flex gap-2 items-center">
            <img
              src={profile}
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <span>
              <h2 className="text-xl font-bold text-black capitalize !pb-0">
                {firstname + " " + lastname}
              </h2>
              <p className="text-gray-400 text-base font-normal">{username}</p>
            </span>
          </span>
          <Link to={`/dashboard/users/update/${id}`}>
            <i className="fa-solid fa-pen-to-square text-3xl text-red-500 hover:text-red-400"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">User Email</h2>
            <p className="text-base font-normal text-[#000000b0]">{email}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">User Phone</h2>
            <p>{phone}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              User Country
            </h2>
            <p>{country}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">User Status</h2>
            <p>{status}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              User Snaptube Video
            </h2>
            <p>{video}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              User Facebook
            </h2>
            <p>{facebook ? facebook : "Empty"}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              User Snapchat
            </h2>
            <p>{snapchat ? snapchat : "Empty"}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">User Tiktok</h2>
            <p>{tiktok ? tiktok : "Empty"}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              User Instagram
            </h2>
            <p>{instagram ? instagram : "Empty"}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              User YOuTube
            </h2>
            <p>{youtube ? youtube : "Empty"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSingleUser;
