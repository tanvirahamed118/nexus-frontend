import { useTranslation } from "react-i18next";

function TermsAndCodition() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F5F6F7]">
      <div className="container py-14">
        <h2 className="text-xl md:text-4xl font-bold text-black uppercase text-center pb-10">
          {t("terms")}
        </h2>
        <div className="bg-white p-10">
          <p className="text-base text-black font-normal">
            {t("plainTextOne")}
          </p>
          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleOne")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("listTextOne")}
          </p>
          <p className="text-base text-black font-normal mb-3">
            {t("listTextTow")}
          </p>
          <p className="text-base text-black font-normal mb-3">
            {t("listTextThree")}
          </p>
          <p className="text-base text-black font-normal mb-6">
            {t("listTextFour")}
          </p>
          <h5 className="text-base text-black font-bold mb-3">
            1.{t("listTitleOne")}
          </h5>
          <p className="text-base text-black font-normal mb-6">
            {t("plainTextTow")}
          </p>
          <h5 className="text-base text-black font-bold mb-3">
            2.{t("listTitleTow")}
          </h5>
          <p className="text-base text-black font-normal mb-6">
            {t("plainTextThree")}
          </p>
          <h5 className="text-base text-black font-bold mb-3">
            3.{t("listTitleThree")}
          </h5>
          <p className="text-base text-black font-normal mb-6">
            {t("plainTextFour")}
          </p>
          <h5 className="text-base text-black font-bold mb-3">
            4.{t("listTitleFour")}
          </h5>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextFive")}
          </p>
          <ol className="px-8">
            <li className="text-base text-black font-normal list-decimal mb-2">
              {t("ulListOne")}
            </li>
            <li className="text-base text-black font-normal list-decimal mb-2">
              {t("ulListTow")}
            </li>
            <li className="text-base text-black font-normal list-decimal mb-2">
              {t("ulListThree")}
            </li>
            <li className="text-base text-black font-normal list-decimal mb-2">
              {t("ulListFour")}
            </li>
            <li className="text-base text-black font-normal list-decimal mb-6">
              {t("ulListFive")}
            </li>
          </ol>
          <h5 className="text-base text-black font-bold mb-3">
            {t("listTitleFive")}
          </h5>
          <p className="text-base text-black font-normal mb-6">
            {t("plainTextSix")}
          </p>
          <h5 className="text-base text-black font-bold mb-3">
            6. {t("listTitleSix")}
          </h5>
          <p className="text-base text-black font-normal mb-6">
            {t("plainTextSeven")}
          </p>
          <h5 className="text-base text-black font-bold mb-3">
            7. {t("listTitleSeven")}
          </h5>
          <p className="text-base text-black font-normal mb-6">
            {t("plainTextEight")}
          </p>
          <h2 className="text-[#cfa361] text-xl font-bold uppercase mb-3">
            {t("boldTitleTow")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextNine")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleFour")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextTen")}
          </p>
          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleFive")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextEliven")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleSix")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextTwilve")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleSeven")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextThertin")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleEight")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextFourtin")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleNine")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextFiften")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleTen")}
          </h2>
          <p className="text-base text-black font-normal">
            {t("plainTextSixtin")}
          </p>
          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleEliven")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextSeventin")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleTwilve")}
          </h2>
          <p className="text-base text-black font-normal">
            {t("plainTextEightin")}
          </p>
          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleThertin")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextNintin")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleFourtin")}
          </h2>
          <p className="text-base text-black font-normal mb-3">
            {t("plainTextTwinty")}
          </p>

          <h2 className="text-[#cfa361] text-xl font-bold uppercase mt-6 mb-3">
            {t("boldTitleFitin")}
          </h2>
          <p className="text-base text-black font-normal">
            {t("plainTextTwintyOne")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsAndCodition;
