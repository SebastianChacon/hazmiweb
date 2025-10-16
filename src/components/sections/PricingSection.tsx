import React from "react";
import { Check, Zap, Star, Crown } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
  color: string;
}

interface PricingSectionProps {
  onNavigateToContact: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onNavigateToContact,
}) => {
  const plans: Plan[] = [
    {
      name: "Básico",
      price: "$20",
      description: "Perfecto para empezar",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      features: [
        "Diseño responsive",
        "1 página",
        "Formulario de contacto",
        "SEO básico",
        "Hosting 1 mes gratis",
        "Soporte 30 días",
      ],
    },
    {
      name: "Profesional",
      price: "$45",
      description: "Para negocios en crecimiento",
      icon: Star,
      color: "from-purple-500 to-purple-600",
      popular: true,
      features: [
        "Todo del plan Básico",
        "Hasta 5 páginas",
        "Blog integrado",
        "Google Analytics",
        "Galería de imágenes",
        "Hosting 3 meses gratis",
        "Soporte 60 días",
        "Redes sociales integradas",
      ],
    },
    {
      name: "Premium",
      price: "$80",
      description: "Solución completa",
      icon: Crown,
      color: "from-amber-500 to-amber-600",
      features: [
        "Todo del plan Profesional",
        "Páginas ilimitadas",
        "E-commerce básico",
        "Sistema de reservas",
        "Panel de administración",
        "Chat en vivo",
        "Hosting 6 meses gratis",
        "Soporte prioritario 90 días",
        "Mantenimiento mensual",
      ],
    },
  ];

  return (
    <section id="precios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Planes Que Se Adaptan a Tu Negocio
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan perfecto para tus necesidades
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <ScaleIn key={idx} delay={idx * 0.15}>
                <motion.div
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 ${
                    plan.popular ? "border-purple-500 scale-105" : "border-gray-100"
                  }`}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Más Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">/ una vez</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIdx) => (
                        <motion.li
                          key={featureIdx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIdx * 0.1 }}
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant={plan.popular ? "gradient" : "secondary"}
                        onClick={onNavigateToContact}
                        className="w-full"
                      >
                        Contratar {plan.name}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
