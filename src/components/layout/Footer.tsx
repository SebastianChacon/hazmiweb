import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_NAME, CONTACT_INFO } from "../../utils/constants";
import logo from "../../assets/hazmiweb-removebg-preview.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt={COMPANY_NAME} className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400">
              Creamos páginas web profesionales para impulsar tu negocio en el
              mundo digital.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {COMPANY_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
