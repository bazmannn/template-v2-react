import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // Set RTL for Arabic
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"; // Set initial direction
  }, [language]);

  return (
    <div className="flex gap-2 w-full">
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("en")}
        className="flex-1"
      >
        <Globe className="h-4 w-4 mr-1.5" />
        English
      </Button>
      <Button
        variant={language === "ar" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("ar")}
        className="flex-1"
      >
        <Globe className="h-4 w-4 mr-1.5" />
        العربية
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
