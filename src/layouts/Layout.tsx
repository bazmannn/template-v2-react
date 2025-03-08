import { ReactNode, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
          <main className="flex-1 p-4">{children}</main>
          <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Layout;
