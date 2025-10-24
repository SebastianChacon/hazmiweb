import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_NAME, CONTACT_INFO } from "../../utils/constants";
import logo from "../../assets/hazmiweb-removebg-preview.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-responsive">
      <div className="section-content">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt={`${COMPANY_NAME} - Diseño web profesional`}
                className="w-10 h-10 object-contain elevation-2 rounded-lg"
              />
              <span className="font-bold text-xl text-gradient">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creamos páginas web profesionales para impulsar tu negocio en el
              mundo digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <motion.div
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.phone}</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5" />
                <span>{CONTACT_INFO.location}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>&copy; 2025 {COMPANY_NAME}. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};
