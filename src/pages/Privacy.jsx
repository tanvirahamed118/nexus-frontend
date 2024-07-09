import { useTranslation } from "react-i18next";

function Privacy() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#fff] py-14">
      <div className="container">
        <h2 className="text-[#b4935f] text-3xl font-bold capitalize pb-3">
          {t("privacyPolicy")}
        </h2>
        <p className="text-base text-black font-normal mb-6">
          {t("privacyTextOne")}
        </p>
        <h2 className="text-2xl font-bold text-[#3a3a3a] mb-3">
          {t("privacyPolicyTitleOne")}
        </h2>
        <p className="text-base text-black font-normal mb-3">
          {t("privacyTextTow")}
        </p>
        <ul className="px-6">
          <li className="text-base text-black font-normal list-disc mb-2">
            {t("privacyUnOrderListOne")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-2">
            {t("privacyUnOrderListTow")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-2">
            {t("privacyUnOrderListThree")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-2">
            {t("privacyUnOrderListFour")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListFive")}
          </li>
        </ul>
        <p className="text-base text-black font-normal mb-6">
          {t("privacyTextThree")}
        </p>
        <h2 className="text-2xl font-bold text-[#3a3a3a] mb-3">
          {t("privacyPolicyTitleTow")}
        </h2>
        <p className="text-base text-black font-normal mb-3">
          {t("privacyTextFour")}
        </p>
        <ul className="px-6 pb-6">
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListSix")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListSeven")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListEight")}
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-[#3a3a3a] mb-3">
          {t("privacyPolicyTitleThree")}
        </h2>
        <ul className="px-6 pb-6">
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListNine")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListTen")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListEliven")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListTwilve")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListThertin")}
          </li>
          <li className="text-base text-black font-normal list-disc mb-3">
            {t("privacyUnOrderListFourtin")}
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-[#3a3a3a] mb-3">
          {t("privacyPolicyTitleFour")}
        </h2>
        <p className="text-base text-black font-normal mb-3">
          {t("privacyTextFive")}
        </p>
      </div>
    </section>
  );
}

export default Privacy;
