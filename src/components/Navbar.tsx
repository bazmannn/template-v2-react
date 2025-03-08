import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  const { t } = useTranslation("common");

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between p-3 border-b backdrop-blur-sm bg-background/90 shadow-sm">
      {/* Left Side: Logo and Desktop Hamburger Menu */}
      <div className="flex items-center gap-4">
        {/* Desktop Hamburger Menu (Visible on Desktop) */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="hidden md:flex items-center gap-2 hover:bg-accent"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo or Brand Name */}
        <Link to="/" className="text-xl font-bold flex items-center">
          <span>My Awesome App</span>
        </Link>
      </div>

      {/* Right Side: Navigation Links (Visible on Desktop) */}
      <div className="hidden md:flex items-center gap-1">
        <Link
          to="/"
          className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
        >
          {t("home")}
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
        >
          {t("about")}
        </Link>
      </div>

      {/* Mobile Hamburger Menu (Visible on Mobile) */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onMenuToggle}
        className="md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </nav>
  );
};

export default Navbar;
