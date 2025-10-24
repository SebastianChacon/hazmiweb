import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import { SEO } from "../components/SEO";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      slug: "porque-tu-empresa-necesita-pagina-web",
      title: "Por Qué Cualquier Empresa Debería Tener Una Página Web",
      excerpt: "En la era digital, tener presencia online no es opcional, es fundamental para el crecimiento de tu negocio.",
      date: "2025-10-10",
      author: "HazMiWeb",
      category: "Negocios",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Cómo Elegir El Diseño Perfecto Para Tu Sitio Web",
      excerpt: "El diseño de tu página web es la primera impresión que...",
      date: "2025-10-05",
      author: "HazMiWeb",
      category: "Diseño",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "SEO Básico: Posiciona Tu Sitio En Google",
      excerpt: "Aprende las técnicas fundamentales para mejorar tu visibilidad...",
      date: "2025-09-28",
      author: "HazMiWeb",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
    },
  ];

  return (
    <>
      <SEO
        title="Blog - HazMiWeb"
        description="Consejos, tutoriales y noticias sobre desarrollo web y diseño digital"
      />
      <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Blog
              </h1>
              <p className="text-xl text-gray-600">
                Consejos, tutoriales y noticias sobre desarrollo web
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <FadeIn key={post.id} delay={idx * 0.15}>
                <motion.article
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                      {post.category}
                    </span>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <motion.button
                        className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
