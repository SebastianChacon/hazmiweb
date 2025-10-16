import React from "react";
import { Button } from "../ui/Button";
import { PRICE } from "../../utils/constants";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onNavigateToContact: () => void;
  onNavigateToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToContact,
  onNavigateToServices,
}) => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu Página Web Profesional por solo{" "}
                <motion.span
                  className="text-blue-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {PRICE}
                </motion.span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600">
                Impulsa tu negocio con una presencia digital moderna, rápida y
                efectiva. Sin complicaciones, sin costos ocultos.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="primary" onClick={onNavigateToContact}>
                    Contratar Ahora
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" onClick={onNavigateToServices}>
                    Ver Servicios
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3}>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-3 h-3 bg-red-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-yellow-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  <div className="space-y-3">
                    <motion.div
                      className="h-4 bg-gray-200 rounded w-3/4"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="h-4 bg-gray-200 rounded w-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="h-4 bg-gray-200 rounded w-5/6"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                    <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mt-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};
