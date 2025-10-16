import React from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_NAME } from "../../utils/constants";
import logo from "../../assets/hazmiweb-removebg-preview.png";

interface NavbarProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt={COMPANY_NAME} className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl text-gray-800">{COMPANY_NAME}</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {isHome && navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Blog
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={onToggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {isHome && navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={onToggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
