import { Home, Info, X, Sun, Moon, LaptopIcon } from "lucide-react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const { i18n, t } = useTranslation("common");
  const { theme, setTheme } = useTheme();

  // Determine the sliding direction based on the language
  const isRTL = i18n.language === "ar"; // Assuming "ar" is your RTL language
  // Inversed slide direction - left for English, right for Arabic
  const slideDirection = isRTL ? "right" : "left";

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Side Menu Content */}
      <div
        className={`fixed top-0 ${
          slideDirection === "left" ? "left-0" : "right-0"
        } h-full w-72 bg-background border-${
          slideDirection === "left" ? "r" : "l"
        } shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : slideDirection === "left"
            ? "translate-x-[-100%]"
            : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="p-4 border-b flex justify-between items-center">
            <span className="font-semibold text-lg">{t("menu")}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-accent/80"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              <Link
                to="/"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors w-full"
                onClick={onClose}
              >
                <Home className="h-4 w-4" />
                <span>{t("home")}</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors w-full"
                onClick={onClose}
              >
                <Info className="h-4 w-4" />
                <span>{t("about")}</span>
              </Link>
            </div>
          </div>

          {/* Footer with Theme and Language Switchers */}
          <div className="p-4 border-t bg-accent/20">
            {/* Theme Toggle */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">{t("theme")}</p>
              <div className="flex gap-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setTheme("light")}
                >
                  <Sun className="h-4 w-4 mr-1" />
                  <span className="text-xs">{t("light")}</span>
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="h-4 w-4 mr-1" />
                  <span className="text-xs">{t("dark")}</span>
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setTheme("system")}
                >
                  <LaptopIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs">{t("system")}</span>
                </Button>
              </div>
            </div>

            {/* Language Switcher */}
            <div>
              <p className="text-sm font-medium mb-2">{t("language")}</p>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
