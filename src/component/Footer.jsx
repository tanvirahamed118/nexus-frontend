import { Link } from "react-router-dom";
import Logo from "../assets/Logo-white.png";
import { useTranslation } from "react-i18next";
import { useGetOneAdminQuery } from "../redux/rtk/features/auth/admin/authApi";

function Footer() {
  const { t } = useTranslation();
  const adminAuth = localStorage.getItem("admin");
  const admin = JSON.parse(adminAuth);
  const id = admin?.admin?._id;
  const { data } = useGetOneAdminQuery(id);
  const { instagram, facebook, linkedin, tiktok } = data || {};
  return (
    <>
      <section className="bg-black py-5 md:py-10">
        <div className="container flex flex-col md:flex-row md:justify-around gap-5 items-center">
          <div>
            <Link to="/">
              <img src={Logo} alt="" className="w-40" />
            </Link>
          </div>
          <div className="mt-5 px-2">
            <ul className="flex md:flex-row flex-wrap gap-5 items-center justify-center">
              <li>
                <Link
                  to="/faq"
                  className="text-[#ccc] font-medium text-base uppercase hover:text-white"
                >
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#ccc] font-medium text-base uppercase hover:text-white"
                >
                  {t("contactUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-condition"
                  className="text-[#ccc] font-medium text-base uppercase hover:text-white"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-[#ccc] font-medium text-base uppercase hover:text-white"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/login"
                  className="text-[#ccc] font-medium text-base uppercase hover:text-white"
                >
                  {t("dashboard")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-5">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook text-[#b6b6b6] text-xl hover:text-white"></i>
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-[#b6b6b6] text-xl hover:text-white"></i>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-[#b6b6b6] text-xl hover:text-white"></i>
            </a>
            <a href={tiktok} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-tiktok text-[#b6b6b6] text-xl hover:text-white"></i>
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-[#1A1B1D] py-5">
        <div className="container">
          <p className="text-sm text-white font-normal uppercase text-center">
            {t("copyRightText")}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
