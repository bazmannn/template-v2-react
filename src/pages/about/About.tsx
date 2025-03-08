import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{t("about")}</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;