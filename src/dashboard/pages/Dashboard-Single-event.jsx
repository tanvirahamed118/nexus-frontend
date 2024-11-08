import { Link, useParams } from "react-router-dom";
import { useGetOneEventQuery } from "../../redux/rtk/features/event/eventApi";

function DashboardSingleEvent() {
  const params = useParams();
  const id = params?.id;
  const { data } = useGetOneEventQuery(id);

  const {
    title,
    category,
    eventPic,
    adminPic,
    adminName,
    conditions,
    description,
    location,
    star,
    requirements,
    createdAt,
  } = data || {};

  let requ;
  if (requirements) {
    requ = JSON?.parse(requirements);
  }
  let cond;
  if (conditions) {
    cond = JSON?.parse(conditions);
  }
  return (
    <section className="p-10 ">
      <div className="p-10 bg-[#ffffffe8] w-full lg:w-8/12 shadow-md rounded-md overflow-y-scroll h-[80vh]">
        <div className="border-b border-gray-300 pb-5 flex justify-between">
          <span className="flex gap-2 items-center">
            <img
              src={adminPic}
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <span>
              <h2 className="text-xl font-bold text-black capitalize !pb-0">
                {adminName}
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
          <Link to={`/dashboard/event/update/${id}`}>
            <i className="fa-solid fa-pen-to-square text-3xl text-red-500 hover:text-red-400"></i>
          </Link>
        </div>
        <div className="py-10">
          <img src={eventPic} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Title
              </h2>
              <p className="text-base font-normal text-[#000000b0]">{title}</p>
            </div>
            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Rating
              </h2>
              <p>{star}</p>
            </div>
            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Location
              </h2>
              <p>{location}</p>
            </div>

            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Description
              </h2>
              <p>{description}</p>
            </div>
            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Category
              </h2>
              <p>{category}</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Condition
              </h2>

              <ul className="flex flex-col gap-2">
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {cond?.conditionsOne}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {cond?.conditionsTow}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {cond?.conditionsThree}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {cond?.conditionsFour}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {cond?.conditionsFive}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl !font-bold text-black !pb-0">
                Event Requirement
              </h2>
              <ul className="flex flex-col gap-2 pt-2">
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {requ?.requirementOne}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {requ?.requirementTow}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {requ?.requirementThree}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {requ?.requirementFour}
                  </p>
                </li>
                <li className="flex gap-2 items-start">
                  <i className="fa-solid fa-angle-right text-base pt-1 text-[#976d44]"></i>
                  <p className="text-black text-base font-normal">
                    {requ?.requirementFive}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSingleEvent;
