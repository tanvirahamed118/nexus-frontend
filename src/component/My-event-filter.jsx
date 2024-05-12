import { useDispatch } from "react-redux";
import { chosePeriod } from "../redux/rtk/features/filter/myEventSlice";

function MyEventFilter() {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3 items-center">
      <select
        name=""
        id=""
        className="border border-gray-200 rounded-md text-black text-base font-normal py-2 px-3 bg-white capitalize"
        onChange={(e) => dispatch(chosePeriod(e.target.value))}
      >
        <option value="" selected>
          Period
        </option>
        <option value="require submission">require submission</option>
        <option value="submitted">submitted</option>
        <option value="need approval">need approval</option>
        <option value="canceled">canceled</option>
      </select>
    </div>
  );
}

export default MyEventFilter;
