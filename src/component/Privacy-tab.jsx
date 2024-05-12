function PrivacyTab() {
  return (
    <div>
      <span className="flex gap-2 items-center">
        <i className="fa-solid fa-lock text-[#444] text-lg"></i>
        <p className="text-black text-xl font-normal capitalize">Privacy</p>
      </span>
      <form action="" className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            Profile Privacy *
          </label>
          <select
            name=""
            id=""
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
          >
            <option value="Everyone">Everyone</option>
            <option value="Everyone">Everyone</option>
            <option value="Everyone">Everyone</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            Avoid indexing my profile by search engines
          </label>
          <select
            name=""
            id=""
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
          >
            <option value="Everyone">Everyone</option>
            <option value="Everyone">Everyone</option>
            <option value="Everyone">Everyone</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center mt-4">
            <h2 className="text-lg text-black font-bold">
              Avoid indexing my profile by search engines
            </h2>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <label htmlFor="" className="text-lg text-black font-normal">
            Enter your current password to confirm a new export of your personal
            data.
          </label>
          <input
            type="password"
            name="username"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <h2 className="text-lg text-black font-bold mt-4">
              Erase of your data
            </h2>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <label htmlFor="" className="text-lg text-black font-normal">
            Enter your current password to confirm the erasure of your personal
            data.
          </label>
          <input
            type="password"
            name="username"
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-[#d2b588] text-white font-normal text-base px-5 py-2 rounded-md w-40"
        >
          Update Privacy
        </button>
      </form>
    </div>
  );
}

export default PrivacyTab;
