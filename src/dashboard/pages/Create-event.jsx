import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { FaUpload } from "react-icons/fa";
import { useCreateEventMutation } from "../../redux/rtk/features/event/eventApi";
import { useTranslation } from "react-i18next";

const CreateEvent = () => {
  const { t } = useTranslation();
  const [createEvent, { data, isLoading, isError, isSuccess, error }] =
    useCreateEventMutation();

  const getAdmin = localStorage.getItem("admin");
  const adminAuth = JSON.parse(getAdmin);
  const { admin } = adminAuth;
  const [event, setEvent] = useState({
    title: "",
    category: "",
    condition: "",
    description: "",
    location: "",
    star: "",
    requirement: "",
    adminId: admin?._id,
  });
  const [requirements, setRequirements] = useState({
    requirementOne: "",
    requirementTow: "",
    requirementThree: "",
    requirementFour: "",
    requirementFive: "",
  });
  const [conditions, setCondtions] = useState({
    conditionsOne: "",
    conditionsTow: "",
    conditionsThree: "",
    conditionsFour: "",
    conditionsFive: "",
  });

  const requirementHandleChange = (e) => {
    setRequirements({
      ...requirements,
      [e.target.name]: e.target.value,
    });
  };
  const conditionsHandleChange = (e) => {
    setCondtions({
      ...conditions,
      [e.target.name]: e.target.value,
    });
  };
  const Ref = useRef();
  const [eventPic, seteventPic] = useState(null);
  const { title, category, description, location, star } = event || {};

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedEvent = {
      ...event,
      requirements: { ...requirements },
      conditions: { ...conditions },
    };
    const formData = new FormData();
    formData.append("eventPic", eventPic);
    Object.keys(combinedEvent).forEach((key) => {
      if (typeof combinedEvent[key] === "object") {
        formData.append(key, JSON.stringify(combinedEvent[key]));
      } else {
        formData.append(key, combinedEvent[key]);
      }
    });
    try {
      await createEvent(formData);
      setEvent({
        title: "",
        category: "",
        condition: "",
        description: "",
        location: "",
        star: "",
        requirement: "",
        adminId: admin?._id,
      });
      setRequirements({
        requirementOne: "",
        requirementTow: "",
        requirementThree: "",
        requirementFour: "",
        requirementFive: "",
      });
      setCondtions({
        conditionsOne: "",
        conditionsTow: "",
        conditionsThree: "",
        conditionsFour: "",
        conditionsFive: "",
      });
      if (Ref.current) {
        Ref.current.value = "";
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data, error]);

  return (
    <>
      <section className={Style.warehouse}>
        <div className={Style.warehouseContainer}>
          <h2>{t("enterEventInfo")}</h2>
          <form onSubmit={handleSubmit}>
            <div className={Style.formBox}>
              <div className={Style.leftBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="trackingNumber"
                    className="text-xl font-normal text-black"
                  >
                    {t("eventDashTitle")}
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={title}
                      type="text"
                      name="title"
                      placeholder={t("title")}
                      id="trackingNumber"
                      required
                    />
                  </span>
                </div>

                <div className={`${Style.formField} ${Style.upContainer}`}>
                  <label
                    htmlFor="upproduct"
                    className={`${Style.dropContainer} text-xl font-normal text-black`}
                  >
                    {t("eventThumnail")}
                  </label>
                  <span>
                    <FaUpload />

                    <input
                      ref={Ref}
                      onChange={(e) => seteventPic(e.target.files[0])}
                      type="file"
                      name="upproduct"
                      id="upproduct"
                      required
                    />
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="location"
                    className="text-xl font-normal text-black"
                  >
                    {t("location")}
                  </label>
                  <span>
                    <textarea
                      required
                      onChange={(e) => handleChange(e)}
                      value={location}
                      type="text"
                      name="location"
                      id="location"
                      placeholder={t("location")}
                      rows={3}
                    ></textarea>
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="upc"
                    className="text-xl font-normal text-black"
                  >
                    {t("requirements")}
                  </label>
                  <div className={Style.requirements}>
                    <input
                      type="text"
                      name="requirementOne"
                      id="requirement"
                      onChange={requirementHandleChange}
                      value={requirements.requirementOne}
                      placeholder={t("requirements")}
                      required
                    />
                    <input
                      type="text"
                      name="requirementTow"
                      id="requirement"
                      onChange={requirementHandleChange}
                      value={requirements.requirementTow}
                      placeholder={t("requirements")}
                    />
                    <input
                      type="text"
                      name="requirementThree"
                      id="requirement"
                      onChange={requirementHandleChange}
                      value={requirements.requirementThree}
                      placeholder={t("requirements")}
                    />
                    <input
                      type="text"
                      name="requirementFour"
                      id="requirement"
                      onChange={requirementHandleChange}
                      value={requirements.requirementFour}
                      placeholder={t("requirements")}
                    />
                    <input
                      type="text"
                      name="requirementFive"
                      id="requirement"
                      onChange={requirementHandleChange}
                      value={requirements.requirementFive}
                      placeholder={t("requirements")}
                    />
                  </div>
                </div>
              </div>
              <div className={Style.rightBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="category"
                    className="text-xl font-normal text-black"
                  >
                    {t("eventDashCategory")}
                  </label>
                  <span>
                    <select
                      required
                      name="category"
                      id="category"
                      value={category}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="" selected disabled>
                        {t("selectOne")}
                      </option>
                      <option value="Food and beverage">
                        {t("foodBeverage")}
                      </option>
                      <option value="Fashion and Apparel">
                        {t("fashionApparel")}
                      </option>
                      <option value="Health and Fitness">
                        {t("healthFitness")}
                      </option>
                      <option value="Entertainment and Media">
                        {t("entertainmentMedia")}
                      </option>
                      <option value="Hotels and Villas">
                        {t("hotelsVillas")}
                      </option>
                      <option value="Products">{t("products")}</option>
                    </select>
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="star"
                    className="text-xl font-normal text-black"
                  >
                    {t("rating")}
                  </label>
                  <span>
                    <select
                      required
                      name="star"
                      id="star"
                      value={star}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="" selected disabled>
                        {t("selectOne")}
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="description"
                    className="text-xl font-normal text-black"
                  >
                    {t("description")}
                  </label>
                  <span>
                    <textarea
                      name="description"
                      id="description"
                      onChange={handleChange}
                      value={description}
                      placeholder={t("description")}
                      rows={3}
                    ></textarea>
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="condition"
                    className="text-xl font-normal text-black"
                  >
                    {t("condition")}
                  </label>
                  <div className={Style.requirements}>
                    <input
                      type="text"
                      value={conditions.conditionsOne}
                      id="condition"
                      onChange={conditionsHandleChange}
                      required
                      name="conditionsOne"
                      placeholder={t("condition")}
                    />
                    <input
                      type="text"
                      value={conditions.conditionsTow}
                      id="condition"
                      onChange={conditionsHandleChange}
                      name="conditionsTow"
                      placeholder={t("condition")}
                    />
                    <input
                      type="text"
                      value={conditions.conditionsThree}
                      id="condition"
                      onChange={conditionsHandleChange}
                      name="conditionsThree"
                      placeholder={t("condition")}
                    />
                    <input
                      type="text"
                      value={conditions.conditionsFour}
                      id="condition"
                      onChange={conditionsHandleChange}
                      name="conditionsFour"
                      placeholder={t("condition")}
                    />
                    <input
                      type="text"
                      value={conditions.conditionsFive}
                      id="condition"
                      onChange={conditionsHandleChange}
                      name="conditionsFive"
                      placeholder={t("condition")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-base font-bold uppercase text-white rounded-md !w-auto py-4 text-center hover:bg-[#3A3A3A] flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <p>{t("loading")}...</p>
                </>
              ) : (
                t("create")
              )}
            </button>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default CreateEvent;
