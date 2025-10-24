import React from "react";
import { Star, Quote } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "María González",
      role: "CEO",
      company: "Boutique Luna",
      content:
        "Excelente servicio. Mi tienda online está funcionando perfectamente y he triplicado mis ventas en solo 2 meses.",
      rating: 5,
      avatar: "MG",
    },
    {
      name: "Carlos Pérez",
      role: "Propietario",
      company: "Café del Sol",
      content:
        "Profesionales, rápidos y muy atentos. La página web refleja exactamente lo que quería para mi negocio.",
      rating: 5,
      avatar: "CP",
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora",
      company: "Yoga Studio",
      content:
        "Me ayudaron a digitalizar mi negocio. Ahora mis clientes pueden reservar clases directamente desde la web.",
      rating: 5,
      avatar: "AR",
    },
  ];

  return (
    <section className="section-container bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="section-content">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-heading text-gray-900">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="section-description text-gray-600">
              Más de 100 negocios confían en nosotros
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <motion.div
                className="bg-white rounded-xl p-6 elevation-2 hover-elevate hover-lift relative"
                whileHover={{ y: -5 }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold elevation-2">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} en {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{testimonial.content}</p>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
