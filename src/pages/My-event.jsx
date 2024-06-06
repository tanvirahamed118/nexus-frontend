import { Link, useNavigate } from "react-router-dom";
import Avater from "../assets/default_avatar.jpg";
import { useEffect } from "react";
import MyEventFilter from "../component/My-event-filter";
import { useSelector } from "react-redux";
import { useGetAllApplyQuery } from "../redux/rtk/features/apply/applyApi";

function MyEvent() {
  const { data } = useGetAllApplyQuery();
  const user = localStorage.getItem("user");
  const userAuth = JSON.parse(user);
  const navigate = useNavigate();
  const { period } = useSelector((state) => state.period);

  useEffect(() => {
    if (!userAuth?.userToken) {
      navigate("/");
    }
  }, [userAuth, navigate]);

  const filterByCategory = (item) => {
    if (item?.status?.toLowerCase().includes(period)) {
      return true;
    }
    return false;
  };
  return (
    <section className="bg-[#F3F4F6] py-14">
      <div className="container">
        <div className="flex items-center justify-between pb-10">
          <h2 className="lg:text-5xl text-black font-bold capitalize">
            My Requests
          </h2>
          <MyEventFilter />
        </div>
        <div className="overflow-x-auto">
          <table className="border-collapse w-full bg-white border border-gray-200">
            <tr>
              <th className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-bold">
                Event Image
              </th>
              <th className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-bold">
                Event
              </th>
              <th className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-bold">
                Date/Time
              </th>
              <th className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-bold">
                Status
              </th>
              <th className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-bold">
                Action
              </th>
            </tr>
            {data?.filter(filterByCategory)?.map((item) => {
              const { eventTitle, eventPic, status, eventID, createdAt } = item;

              return (
                <tr key={item?._id}>
                  <td className="border border-[#dddddd] text-left px-5 py-3 w-[12%]">
                    <img
                      src={eventPic ? eventPic : Avater}
                      alt=""
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-normal capitalize">
                    {eventTitle}
                  </td>
                  <td className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-nomal capitalize w-2/12">
                    {new Date(createdAt).toDateString()}
                  </td>
                  <td className="border border-[#dddddd] text-left px-5 py-3 w-[16%]">
                    <button
                      className={
                        status.toLowerCase() === "require submission"
                          ? "bg-[#36b9cc] py-0.5 px-3 rounded-md text-white text-sm font-normal capitalize w-full"
                          : status.toLowerCase() === "submitted"
                          ? "bg-[#6413b1] py-0.5 px-3 rounded-md text-white text-sm font-normal capitalize w-full"
                          : status.toLowerCase() === "need approval"
                          ? "bg-[#1c45b4] py-0.5 px-3 rounded-md text-white text-sm font-normal capitalize w-full"
                          : status.toLowerCase() === "canceled"
                          ? "bg-[#5a5c69] py-0.5 px-3 rounded-md text-white text-sm font-normal capitalize w-full"
                          : null
                      }
                    >
                      {status}
                    </button>
                  </td>
                  <td className="border border-[#dddddd] text-left px-5 py-3 text-base text-black font-bold">
                    <Link
                      to={`/event/${eventID}`}
                      className="text-white bg-[#c3a86e] hover:bg-[#c89549] py-1.5 block w-24 text-center rounded-md text-base font-normal"
                    >
                      View <i className="fa-solid fa-right-long pl-2"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
}

export default MyEvent;
