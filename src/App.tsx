import React, { useState } from "react";
import {
  Menu,
  X,
  Check,
  Globe,
  Zap,
  Headphones,
  Mail,
  Phone,
  MapPin,
  // Facebook,
  // Instagram,
  // Linkedin,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.description.trim()) {
      newErrors.description = "La descripción es requerida";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", description: "" });
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-800">WebPro</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contacto
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu Página Web Profesional por solo <span className="text-blue-600">$20</span>
              </h1>
              <p className="text-xl text-gray-600">
                Impulsa tu negocio con una presencia digital moderna, rápida y efectiva. Sin complicaciones, sin costos
                ocultos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contratar Ahora
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Ver Servicios
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Qué Incluye el Servicio?</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para empezar tu presencia digital</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Diseño Moderno</h3>
              <p className="text-gray-700">Diseño responsive y atractivo que se adapta a todos los dispositivos.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Entrega Rápida</h3>
              <p className="text-gray-700">Tu página web lista en 5-9 días hábiles garantizado.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Soporte Básico</h3>
              <p className="text-gray-700">30 días de soporte técnico incluido sin costo adicional.</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Características Incluidas:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Diseño personalizado",
                "Optimización SEO básica",
                "Formulario de contacto",
                "Galería de imágenes",
                "Integración redes sociales",
                "Hosting primer mes gratis",
                "Certificado SSL",
                "Carga ultra rápida",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Purchase Form */}
      <section id="contacto" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¡Comienza Hoy!</h2>
            <p className="text-xl text-gray-600">Completa el formulario y te contactaremos en menos de 24 horas</p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-8 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">¡Solicitud Enviada!</h3>
              <p className="text-green-700">Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-required="true"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-required="true"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Descripción de tu Negocio *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-required="true"
                  placeholder="Cuéntanos sobre tu negocio y qué te gustaría en tu página web..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contratar por $20
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>* Campos requeridos</p>
              </div>
            </form>
          )}

          {/* <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Métodos de pago aceptados:</p>
            <div className="flex justify-center items-center space-x-6">
              <div className="bg-white px-6 py-3 rounded-lg shadow">
                <img src="https://giliteastern.weebly.com/blog/paypal-logo-svg" alt="" />
                PayPal
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-8 h-8 text-blue-500" />
                <span className="font-bold text-xl">WebPro</span>
              </div>
              <p className="text-gray-400">
                Creamos páginas web profesionales para impulsar tu negocio en el mundo digital.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>chacontsebastian@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+593 93 939 8090</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Cuenca, Ecuador</span>
                </div>
              </div>
            </div>

            {/* <div>
              <h4 className="font-bold text-lg mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WebPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
