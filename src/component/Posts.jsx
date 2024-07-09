import { useTranslation } from "react-i18next";

function Posts() {
  const { t } = useTranslation();
  return (
    <div className="">
      <p className="text-[#555] font-normal text-lg text-center pt-10">
        {t("notPostCreate")}
      </p>
    </div>
  );
}

export default Posts;
