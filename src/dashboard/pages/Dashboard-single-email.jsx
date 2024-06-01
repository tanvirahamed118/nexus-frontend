import { Link, useParams } from "react-router-dom";
import { useGetOneContactQuery } from "../../redux/rtk/features/contact/contactApi";

function DashboardSingleEmail() {
  const params = useParams();
  const id = params.id;
  const { data } = useGetOneContactQuery(id);

  const { name, email, messages } = data || {};
  return (
    <section className="p-10">
      <h3 className="text-3xl !font-bold text-black pb-5 border-b border-gray-300 mb-5 capitalize">
        Email Details
      </h3>
      <div className="p-10 bg-[#ffffffe8] w-full xl:w-6/12 shadow-md rounded-md">
        <div className="border-b border-gray-300 pb-5 flex justify-between">
          <span>
            <h2 className="text-xl font-bold text-black capitalize !pb-0 flex gap-2">
              <p className="font-bold">Name:</p> {name}
            </h2>
            <h2 className="text-base font-normal text-gray-400 capitalize !pb-0 flex gap-2">
              <p className="font-bold">Email:</p> {email}
            </h2>
          </span>
          <Link to={`/dashboard/emails/update/${id}`}>
            <i className="fa-solid fa-pen-to-square text-3xl text-red-500 hover:text-red-400"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Message</h2>
            <p className="text-base font-normal text-[#000000b0]">{messages}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSingleEmail;
