import { useTranslation } from "react-i18next";

function PrivacyTab() {
  const { t } = useTranslation();
  return (
    <div>
      <span className="flex gap-2 items-center">
        <i className="fa-solid fa-lock text-[#444] text-lg"></i>
        <p className="text-black text-xl font-normal capitalize">
          {t("privacy")}
        </p>
      </span>
      <form action="" className="flex flex-col gap-4 py-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("profilePrivacy")} *
          </label>
          <select
            name=""
            id=""
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
          >
            <option value="Everyone">{t("everyone")}</option>
            <option value="Everyone">{t("everyone")}</option>
            <option value="Everyone">{t("everyone")}</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("avoidIndexing")}
          </label>
          <select
            name=""
            id=""
            className="text-base font-normal text-black border border-gray-300 p-3 rounded-md"
          >
            <option value="Everyone">{t("everyone")}</option>
            <option value="Everyone">{t("everyone")}</option>
            <option value="Everyone">{t("everyone")}</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center mt-4">
            <h2 className="text-lg text-black font-bold">
              {t("avoidIndexing")}
            </h2>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("enterCurrentPassword")}
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
              {t("eraseData")}
            </h2>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <label htmlFor="" className="text-lg text-black font-normal">
            {t("enterCurrentPassword")}
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
          {t("updatePrivacy")}
        </button>
      </form>
    </div>
  );
}

export default PrivacyTab;
