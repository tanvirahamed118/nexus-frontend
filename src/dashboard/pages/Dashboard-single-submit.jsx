import { Link, useParams } from "react-router-dom";
import { useGetOneApplyQuery } from "../../redux/rtk/features/apply/applyApi";

function DashboardSingleSubmit() {
  const params = useParams();
  const id = params?.id;
  const { data } = useGetOneApplyQuery(id);

  const { date, time, message, eventTitle, status, eventPic, createdAt } =
    data || {};
  return (
    <section className="p-10 ">
      <div className="p-10 bg-[#ffffffe8] w-full lg:w-8/12 shadow-md rounded-md overflow-y-scroll h-[80vh]">
        <div className="border-b border-gray-300 pb-5 flex justify-between">
          <span className="flex gap-2 items-center">
            <span>
              <h2 className="text-2xl font-bold text-black capitalize !pb-0">
                {eventTitle}
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
          <Link to={`/dashboard/event/${id}`}>
            <i className="fa-solid fa-pen-to-square text-3xl text-red-500 hover:text-red-400"></i>
          </Link>
        </div>
        <div className="py-10">
          <img src={eventPic} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Event Title</h2>
            <p className="text-base font-normal text-[#000000b0]">
              {eventTitle}
            </p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Apply Date</h2>
            <p>{date}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">Apply time</h2>
            <p>{time}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Apply Message
            </h2>
            <p>{message}</p>
          </div>
          <div>
            <h2 className="text-xl !font-bold text-black !pb-0">
              Apply Status
            </h2>
            <p>{status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSingleSubmit;
