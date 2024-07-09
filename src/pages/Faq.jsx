import { useTranslation } from "react-i18next";

function Faq() {
  const { t } = useTranslation();

  return (
    <>
      <section className="banner-bg relative">
        <div className="relative bg-gradient-to-t from-[#0000003d] to-[#000000a1] w-full py-10 flex items-center flex-col gap-5">
          <h2 className="text-lg text-white font-bold uppercase md:text-4xl">
            {t("frequentlyAQ")}
          </h2>
        </div>
      </section>
      <section className="bg-[#F5F4F6] py-10">
        <div className="w-[90%] lg:w-[1000px] m-auto flex flex-col gap-14">
          <div>
            <h2 className="text-[#3f3f3f] text-2xl font-bold uppercase">
              {t("brands")}
            </h2>
            <div className="w-full border border-gray-300 mt-5">
              <div className="accordian">
                <input type="checkbox" id="faq-1" />
                <h1>
                  <label htmlFor="faq-1">{t("faqTitleOne")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsOne")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-2" />
                <h1>
                  <label htmlFor="faq-2">{t("faqTitlTow")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsTow")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-3" />
                <h1>
                  <label htmlFor="faq-3">{t("faqTitlThree")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsThree")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-4" />
                <h1>
                  <label htmlFor="faq-4">{t("faqTitlFour")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsFour")}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[#3f3f3f] text-2xl font-bold uppercase">
              {t("influencers")}
            </h2>
            <div className="w-full border border-gray-300 mt-5">
              <div className="accordian">
                <input type="checkbox" id="faq-5" />
                <h1>
                  <label htmlFor="faq-5">{t("faqTitlFive")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsFive")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-6" />
                <h1>
                  <label htmlFor="faq-6">{t("faqTitlSix")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsSix")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-7" />
                <h1>
                  <label htmlFor="faq-7">{t("faqTitlSeven")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsSeven")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-8" />
                <h1>
                  <label htmlFor="faq-8">{t("faqTitlEight")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsEight")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-9" />
                <h1>
                  <label htmlFor="faq-9">{t("faqTitlNine")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsNine")}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[#3f3f3f] text-2xl font-bold uppercase">
              {t("howItWork")}
            </h2>
            <div className="w-full border border-gray-300 mt-5">
              <div className="accordian">
                <input type="checkbox" id="faq-10" />
                <h1>
                  <label htmlFor="faq-10">{t("faqTitlTen")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsTen")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-11" />
                <h1>
                  <label htmlFor="faq-11">{t("faqTitlEliven")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsEliven")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-12" />
                <h1>
                  <label htmlFor="faq-12">{t("faqTitlTwilve")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsTwilve")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-14" />
                <h1>
                  <label htmlFor="faq-14">{t("faqTitlThertin")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsThertin")}</p>
                </div>
              </div>
              <div className="accordian">
                <input type="checkbox" id="faq-15" />
                <h1>
                  <label htmlFor="faq-15">{t("faqTitlFourtin")}</label>
                </h1>
                <div className="p">
                  <p>{t("faqAnsFortin")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
