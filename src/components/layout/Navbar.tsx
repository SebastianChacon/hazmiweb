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

  // Función para manejar navegación con cierre de menú
  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    onToggleMenu(); // Cierra el menú móvil después de navegar
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt={`${COMPANY_NAME} - Creación de sitios web profesionales`}
              className="w-8 h-8 object-contain"
              loading="eager"
              width="32"
              height="32"
            />
            <span className="font-bold text-xl text-gray-800">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              isHome ? (
                // Si estamos en home, hacer scroll a la sección
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              ) : (
                // Si estamos en otra página, navegar a home con hash
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={onToggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) =>
              isHome ? (
                // Si estamos en home, hacer scroll y cerrar menú
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              ) : (
                // Si estamos en otra página, navegar a home con hash
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  className="block text-gray-700 hover:text-blue-600 transition"
                  onClick={onToggleMenu}
                >
                  {item.label}
                </Link>
              )
            )}
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
