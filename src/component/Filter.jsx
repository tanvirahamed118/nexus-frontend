import { useDispatch } from "react-redux";
import { choseCategory } from "../redux/rtk/features/filter/categorySlice";
import { useGetAllEventQuery } from "../redux/rtk/features/event/eventApi";
import { useTranslation } from "react-i18next";

function Filter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data } = useGetAllEventQuery();
  const category = data?.filter(
    (obj, index, self) =>
      index === self.findIndex((t) => t.category === obj.category)
  );

  return (
    <div className="flex items-center justify-between pb-10">
      <h2 className="lg:text-5xl text-black font-bold capitalize">
        {t("events")}
      </h2>
      <select
        name=""
        id=""
        className="border border-gray-200 rounded-md text-black text-base font-normal py-2 px-4 bg-white capitalize"
        onChange={(e) => dispatch(choseCategory(e.target.value))}
      >
        <option value="">{t("allEvent")}</option>
        {category?.map((item) => {
          return (
            <option key={item?._id} value={item?.category}>
              {item?.category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
