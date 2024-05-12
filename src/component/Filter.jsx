import { useDispatch } from "react-redux";
import { choseCategory } from "../redux/rtk/features/filter/categorySlice";

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between pb-10">
      <h2 className="lg:text-5xl text-black font-bold capitalize">Events</h2>
      <select
        name=""
        id=""
        className="border border-gray-200 rounded-md text-black text-base font-normal py-2 px-4 bg-white capitalize"
        onChange={(e) => dispatch(choseCategory(e.target.value))}
      >
        <option value="">All</option>
        <option value="Brunch for 2">Brunch for 2</option>
        <option value="Lunch/Dinner for 2">Lunch/Dinner for 2</option>
        <option value="Tasting Box">Tasting Box</option>
      </select>
    </div>
  );
}

export default Filter;
