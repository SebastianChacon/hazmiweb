import React from "react";
import { Check, Clock, Users, Zap, Star, ShoppingCart, Code2 } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { SERVICE_PACKAGES } from "../../utils/constants";

interface PricingSectionProps {
  onNavigateToContact: () => void;
}

const COLOR_MAP = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    border: "border-blue-200",
    badge: "bg-blue-50 text-blue-700",
    glow: "",
    button: "secondary" as const,
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    border: "border-purple-400",
    badge: "bg-purple-50 text-purple-700",
    glow: "glow-purple",
    button: "gradient" as const,
  },
  green: {
    gradient: "from-emerald-500 to-emerald-600",
    border: "border-emerald-200",
    badge: "bg-emerald-50 text-emerald-700",
    glow: "",
    button: "secondary" as const,
  },
  amber: {
    gradient: "from-amber-500 to-amber-600",
    border: "border-amber-200",
    badge: "bg-amber-50 text-amber-700",
    glow: "",
    button: "secondary" as const,
  },
};

const ICON_MAP = {
  blue: Zap,
  purple: Star,
  green: ShoppingCart,
  amber: Code2,
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigateToContact }) => {
  return (
    <section id="precios" className="section-container bg-gray-50">
      <div className="section-content">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Paquetes
            </span>
            <h2 className="section-heading text-gray-900">
              Elige el Paquete Ideal para Tu Proyecto
            </h2>
            <p className="section-description text-gray-600 max-w-2xl mx-auto">
              Precios claros y transparentes. Sin costos ocultos. Todos los precios son referenciales
              y pueden ajustarse según la complejidad de tu proyecto.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            const colors = COLOR_MAP[pkg.color];
            const Icon = ICON_MAP[pkg.color];
            return (
              <ScaleIn key={pkg.id} delay={idx * 0.1}>
                <motion.div
                  className={`relative bg-white rounded-2xl elevation-3 transition-all border-2 ${colors.border} ${
                    pkg.popular ? `${colors.glow} scale-[1.02]` : ""
                  } h-full flex flex-col`}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
                        ⭐ Más Popular
                      </span>
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    {/* Header */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-xl flex items-center justify-center mb-5 elevation-2`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">{pkg.description}</p>

                    {/* Price */}
                    <div className="mb-5 pb-5 border-b border-gray-100">
                      <div className="text-3xl font-extrabold text-gray-900 leading-tight">
                        {pkg.price}
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{pkg.deliveryTime}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {pkg.features.map((feature, featureIdx) => (
                        <motion.li
                          key={featureIdx}
                          className="flex items-start gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIdx * 0.07 }}
                        >
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Ideal para */}
                    <div className={`flex items-start gap-2 p-3 rounded-lg ${colors.badge} mb-5`}>
                      <Users className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-medium leading-snug">{pkg.idealFor}</span>
                    </div>

                    {/* CTA */}
                    <Button
                      variant={colors.button}
                      onClick={onNavigateToContact}
                      className="w-full"
                    >
                      Solicitar Cotización
                    </Button>
                  </div>
                </motion.div>
              </ScaleIn>
            );
          })}
        </div>

        {/* Footer note */}
        <FadeIn delay={0.5}>
          <p className="text-center text-sm text-gray-500 mt-10">
            ¿No sabes cuál elegir?{" "}
            <button
              onClick={onNavigateToContact}
              className="text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-2 transition-colors"
            >
              Escríbeme y te ayudo a decidir
            </button>{" "}
            — la consulta inicial es gratis.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
