import { Link } from "react-router-dom";
import { useGetOneAdminQuery } from "../../redux/rtk/features/auth/admin/authApi";

function AdminProfile() {
  const getAdmin = localStorage.getItem("admin");
  const adminAuth = JSON.parse(getAdmin);
  const { admin } = adminAuth || {};
  const id = admin?._id;
  const { data } = useGetOneAdminQuery(id);

  const {
    firstname,
    lastname,
    email,
    Organization,
    description,
    phone,
    adminProfile,
  } = data || {};
  return (
    <section className="p-10">
      <h3 className="text-3xl !font-bold text-black pb-5 border-b border-gray-300 mb-5">
        My Profile
      </h3>
      <div className="p-10 bg-[#ffffffe8] w-full xl:w-6/12 shadow-md rounded-md">
        <div className="border-b border-gray-300 pb-5 flex justify-between">
          <img
            src={adminProfile}
            alt=""
            className="w-20 h-20 object-cover rounded-full"
          />
          <Link to="/dashboard/setting">
            <i className="fa-solid fa-pen-to-square text-3xl text-red-500 hover:text-red-400"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Full Name</h2>
            <p className="text-base font-normal text-[#000000b0]">
              {firstname + " " + lastname}
            </p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Email</h2>
            <p>{email}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Phone</h2>
            <p>{phone}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Organization
            </h2>
            <p>{Organization}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Description</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminProfile;
