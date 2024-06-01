import { Link, useParams } from "react-router-dom";
import { useGetOneBrandQuery } from "../../redux/rtk/features/brand/brandSlice";

function DashboardSingleBrand() {
  const params = useParams();
  const id = params?.id;
  const { data } = useGetOneBrandQuery(id);

  const {
    nameOfEST,
    RPPersonName,
    position,
    email,
    phone,
    message,
    createdAt,
  } = data || {};
  return (
    <section className="p-10 ">
      <div className="p-10 bg-[#ffffffe8] w-full lg:w-8/12 shadow-md rounded-md h-[70vh]">
        <div className="border-b border-gray-300 pb-5 flex justify-between">
          <span className="flex gap-2 items-center">
            <span>
              <h2 className="text-3xl font-bold text-black capitalize !pb-0">
                {RPPersonName}
              </h2>
              <p className="text-gray-400 text-base font-normal">
                {new Date(createdAt).getFullYear() +
                  "-" +
                  new Date(createdAt).getMonth() +
                  "-" +
                  new Date(createdAt).getDate()}
              </p>
            </span>
          </span>
          <Link to={`/dashboard/brands/update/${id}`}>
            <i className="fa-solid fa-pen-to-square text-3xl text-red-500 hover:text-red-400"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Brand Name Of EST
            </h2>
            <p className="text-base font-normal text-[#000000b0]">
              {nameOfEST}
            </p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Brand RPP Person Name
            </h2>
            <p>{RPPersonName}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Brand Position
            </h2>
            <p>{position}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Brand Email</h2>
            <p>{email}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Brand Phone</h2>
            <p>{phone}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Brand Message
            </h2>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSingleBrand;
