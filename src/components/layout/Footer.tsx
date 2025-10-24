import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { COMPANY_NAME, CONTACT_INFO } from "../../utils/constants";
import logo from "../../assets/hazmiweb-removebg-preview.png";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Precios", href: "/#precios" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/#contacto" },
  ];

  const services = [
    { name: "Diseño Web", href: "/#servicios" },
    { name: "Desarrollo Frontend", href: "/#servicios" },
    { name: "SEO Optimización", href: "/#servicios" },
    { name: "Hosting & Dominio", href: "/#servicios" },
    { name: "Mantenimiento Web", href: "/#servicios" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/hazmiweb", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/hazmiweb", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/hazmiweb", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/hazmiweb", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/hazmiweb", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />

      <div className="relative section-content py-16 md:py-20">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Columna 1: Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.img
                src={logo}
                alt={`${COMPANY_NAME} - Diseño web profesional`}
                className="w-12 h-12 object-contain elevation-3 rounded-xl p-2 bg-gradient-brand"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                loading="lazy"
                width="48"
                height="48"
              />
              <span className="font-bold text-2xl text-gradient">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Transformamos ideas en experiencias digitales excepcionales. Creamos sitios web que no solo se ven bien,
              sino que funcionan mejor.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gradient-brand hover:border-blue-500 transition-all duration-300 elevation-1 hover:elevation-3"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <motion.span
                      className="inline-block mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <motion.span
                      className="inline-block mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Contáctanos</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm">{CONTACT_INFO.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Teléfono</p>
                  <p className="text-sm">{CONTACT_INFO.phone}</p>
                </div>
              </motion.a>

              <motion.div className="flex items-start space-x-3 text-gray-400 group" whileHover={{ x: 3 }}>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Ubicación</p>
                  <p className="text-sm">{CONTACT_INFO.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Separador con gradiente */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700/50"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-brand px-6 py-1 rounded-full elevation-2">
              <span className="text-xs text-white font-medium">Web Design & Development</span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
            <Link to="/privacidad" className="hover:text-blue-400 transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terminos" className="hover:text-blue-400 transition-colors">
              Términos de Servicio
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">
              Política de Cookies
            </Link>
          </div>

          <p className="text-xs text-center md:text-right">
            &copy; 2025 {COMPANY_NAME}. Hecho con
            <motion.span
              className="inline-block mx-1 text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            en Ecuador
          </p>
        </motion.div>
      </div>

      {/* Botón scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center elevation-4 glow-blue hover:elevation-5 z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};
