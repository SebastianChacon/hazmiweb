import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "../ui/ScrollProgress";
import { CustomCursor } from "../ui/CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (section: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ScrollProgress />
      <CustomCursor />
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={onToggleMenu}
        onNavigate={onNavigate}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
