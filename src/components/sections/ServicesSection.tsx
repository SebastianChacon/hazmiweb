import React from "react";
import { Globe, Zap, Headphones, Check } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";
import { FEATURES, DELIVERY_TIME, SUPPORT_DAYS } from "../../utils/constants";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Diseño Moderno",
      description:
        "Diseño responsive y atractivo que se adapta a todos los dispositivos.",
      colorScheme: {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        icon: "bg-blue-600",
      },
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: `Tu página web lista en ${DELIVERY_TIME} garantizado.`,
      colorScheme: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        icon: "bg-purple-600",
      },
    },
    {
      icon: Headphones,
      title: "Soporte Básico",
      description: `${SUPPORT_DAYS} de soporte técnico incluido sin costo adicional.`,
      colorScheme: {
        bg: "bg-gradient-to-br from-green-50 to-green-100",
        icon: "bg-green-600",
      },
    },
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué Incluye el Servicio?
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para empezar tu presencia digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Características Incluidas:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
