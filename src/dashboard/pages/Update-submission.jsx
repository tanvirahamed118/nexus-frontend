import Style from "../../dashboard/styles/CreateEvent.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useGetOneApplyQuery,
  useUpdateApplyMutation,
} from "../../redux/rtk/features/apply/applyApi";

const UpdateSubmission = () => {
  // const navigate = useNavigate();
  const [updateApply, { data, isLoading, isError, isSuccess, error }] =
    useUpdateApplyMutation();
  const params = useParams();
  const id = params?.id;

  const { data: getData } = useGetOneApplyQuery(id);

  const [submission, setSubmission] = useState({
    date: "",
    time: "",
    message: "",
    status: "",
  });

  const { date, time, message, status } = submission || {};

  const handleChange = (e) => {
    setSubmission({
      ...submission,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateApply({ submission, id });
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data, error]);

  useEffect(() => {
    setSubmission(getData);
  }, [getData]);

  return (
    <>
      <section className={Style.warehouse}>
        <div className={Style.warehouseContainer}>
          <h2>Update Submission info</h2>
          <form onSubmit={handleSubmit}>
            <div className={Style.formBox}>
              <div className={Style.leftBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="date"
                    className="text-xl font-normal text-black"
                  >
                    Date
                  </label>
                  <span>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={date}
                      type="date"
                      name="date"
                      placeholder="Enter date"
                      id="date"
                      required
                    />
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="time"
                    className="text-xl font-normal text-black"
                  >
                    Time
                  </label>
                  <span>
                    <input
                      required
                      onChange={(e) => handleChange(e)}
                      value={time}
                      type="time"
                      name="time"
                      id="time"
                      placeholder="Enter time"
                    />
                  </span>
                </div>
              </div>
              <div className={Style.rightBox}>
                <div className={Style.formField}>
                  <label
                    htmlFor="status"
                    className="text-xl font-normal text-black"
                  >
                    Status
                  </label>
                  <span>
                    <select
                      required
                      name="status"
                      id="status"
                      value={status}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="" selected disabled>
                        Select One
                      </option>
                      <option value="submitted">Submitted</option>
                      <option value="need approval">Need Approval</option>
                      <option value="canceled">Canceled</option>
                      <option value="require submission">
                        require submission
                      </option>
                    </select>
                  </span>
                </div>

                <div className={Style.formField}>
                  <label
                    htmlFor="message"
                    className="text-xl font-normal text-black"
                  >
                    Message
                  </label>
                  <span>
                    <input
                      type="text"
                      value={message}
                      id="message"
                      onChange={handleChange}
                      required
                      name="message"
                      placeholder="Enter conditions"
                    />
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-base font-bold uppercase text-white rounded-md w-full py-4 text-center hover:bg-[#3A3A3A] flex justify-center items-center gap-2"
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
                  <p>Loading</p>
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

export default UpdateSubmission;
