import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "¿Cuánto tiempo tarda en estar lista mi página web?",
      answer:
        "Tu página web estará lista en 3-5 días hábiles una vez que tengamos todo el contenido (textos, imágenes, logos). Para proyectos más complejos, el tiempo puede variar.",
    },
    {
      question: "¿Necesito conocimientos técnicos para administrar mi sitio?",
      answer:
        "No, creamos sitios web fáciles de administrar. Te proporcionamos un tutorial completo y soporte técnico durante 30 días para que puedas actualizar tu contenido sin problemas.",
    },
    {
      question: "¿La página será visible en celulares y tablets?",
      answer:
        "Sí, todos nuestros diseños son 100% responsivos. Tu página se verá perfecta en cualquier dispositivo: computadoras, tablets y smartphones.",
    },
    {
      question: "¿Qué incluye el hosting gratuito?",
      answer:
        "El hosting incluye el espacio en servidor, certificado SSL para seguridad, copias de seguridad diarias y soporte técnico. Después del período gratuito, puedes renovarlo desde $5/mes.",
    },
    {
      question: "¿Puedo agregar más funciones después?",
      answer:
        "¡Por supuesto! Puedes agregar funciones como tienda online, blog, sistema de reservas, galería, etc. Te cotizamos las mejoras que necesites en cualquier momento.",
    },
    {
      question: "¿Qué pasa si no me gusta el diseño?",
      answer:
        "Trabajamos contigo hasta que estés 100% satisfecho. Incluimos hasta 2 rondas de revisiones sin costo adicional. Tu conformidad es nuestra prioridad.",
    },
    {
      question: "¿Tendré acceso al código de mi página?",
      answer:
        "Sí, una vez completado el pago, te entregamos todos los archivos del código fuente. Tu página es tuya al 100%.",
    },
    {
      question: "¿Ofrecen mantenimiento continuo?",
      answer:
        "Sí, ofrecemos planes de mantenimiento desde $15/mes que incluyen actualizaciones de seguridad, copias de respaldo, cambios de contenido y soporte prioritario.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber antes de empezar
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
