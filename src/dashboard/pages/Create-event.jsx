import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import { useCreateEventMutation } from "../../redux/rtk/features/event/eventApi";

const CreateEvent = () => {
  // const navigate = useNavigate();
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
  const Ref = useRef();
  const [eventPic, seteventPic] = useState(null);
  const {
    title,
    category,
    condition,
    description,
    location,
    star,
    requirement,
  } = event || {};

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("eventPic", eventPic);
    Object.keys(event).forEach((key) => {
      formData.append(key, event[key]);
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
          <h2>Enter Event info</h2>
          <form onSubmit={handleSubmit}>
            <div className={Style.formBox}>
              <div className={Style.leftBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="trackingNumber"
                    className="text-xl font-normal text-black"
                  >
                    Title
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={title}
                      type="text"
                      name="title"
                      placeholder="Enter title"
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
                    Event Thumbnail
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
                    Location
                  </label>
                  <span>
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      value={location}
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Enter location"
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="upc"
                    className="text-xl font-normal text-black"
                  >
                    Requirement
                  </label>
                  <span>
                    <textarea
                      name="requirement"
                      id="requirement"
                      onChange={handleChange}
                      value={requirement}
                      placeholder="Enter requirements"
                      rows={3}
                    ></textarea>
                  </span>
                </div>
              </div>
              <div className={Style.rightBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="category"
                    className="text-xl font-normal text-black"
                  >
                    Category
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
                        Select One
                      </option>
                      <option value="Tail">Food and beverage</option>
                      <option value="Onaw">Fashion and Apparel</option>
                      <option value="Onaw">Health and Fitness</option>
                      <option value="Onaw">Entertainment and Media</option>
                      <option value="Onaw">Hotels and Villas</option>
                      <option value="Onaw">Products</option>
                    </select>
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="star"
                    className="text-xl font-normal text-black"
                  >
                    Rating
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
                        Select One
                      </option>
                      <option value="*">1</option>
                      <option value="**">2</option>
                      <option value="***">3</option>
                      <option value="****">4</option>
                      <option value="*****">5</option>
                    </select>
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="condition"
                    className="text-xl font-normal text-black"
                  >
                    Condition
                  </label>
                  <span>
                    <input
                      type="text"
                      value={condition}
                      id="condition"
                      onChange={handleChange}
                      required
                      name="condition"
                      placeholder="Enter conditions"
                    />
                  </span>
                </div>
                <div className={Style.formField}>
                  <label
                    htmlFor="description"
                    className="text-xl font-normal text-black"
                  >
                    Description
                  </label>
                  <span>
                    <textarea
                      name="description"
                      id="description"
                      onChange={handleChange}
                      value={description}
                      placeholder="Enter description"
                      rows={3}
                    ></textarea>
                  </span>
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
                  <p>Loading...</p>
                </>
              ) : (
                "Create"
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
