import React from "react";
import { useParams, Link } from "react-router-dom";
import { FadeIn } from "../components/animations/FadeIn";
import { SEO } from "../components/SEO";
import { Calendar, User, ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: React.ReactElement;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const blogPosts: Record<string, BlogPost> = {
  "porque-tu-empresa-necesita-pagina-web": {
    id: 1,
    title: "Por Qué Cualquier Empresa Debería Tener Una Página Web",
    excerpt: "En la era digital, tener presencia online no es opcional, es fundamental para el crecimiento de tu negocio.",
    date: "2025-10-10",
    author: "HazMiWeb",
    category: "Negocios",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    readTime: "5 min lectura",
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          En pleno 2025, la pregunta ya no es si tu empresa necesita una página web, sino <strong>cuánto estás perdiendo al no tenerla</strong>. La presencia digital se ha convertido en un factor determinante para el éxito de cualquier negocio, sin importar su tamaño o industria.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          La Realidad del Mercado Actual
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Según estudios recientes, el <strong>81% de los consumidores</strong> investigan online antes de realizar una compra. Si tu empresa no aparece en esas búsquedas, literalmente no existes para la mayoría de tus potenciales clientes.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 italic">
            "El 97% de las personas aprenden más sobre una empresa local en línea que en cualquier otro lugar." - BrightLocal
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          10 Razones Fundamentales Para Tener Una Página Web
        </h2>

        <div className="space-y-8 my-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                1. Credibilidad y Profesionalismo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una página web profesional transmite confianza. Las empresas sin presencia web son vistas como menos confiables o incluso inexistentes. Tu sitio web es tu tarjeta de presentación digital las 24 horas del día.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2. Alcance Global
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tu negocio local puede convertirse en un negocio global. Con una página web, tus servicios están disponibles para cualquier persona, en cualquier lugar del mundo, sin limitaciones geográficas.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3. Disponibilidad 24/7
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mientras tú duermes, tu página web trabaja. Los clientes pueden conocer tus servicios, revisar precios, leer testimonios e incluso realizar compras en cualquier momento del día o de la noche.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                4. Marketing Rentable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comparado con publicidad tradicional (TV, radio, prensa), una página web es extremadamente económica. Con SEO y marketing de contenidos, puedes atraer clientes a una fracción del costo de los medios tradicionales.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                5. Ventaja Competitiva
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Si tu competencia tiene presencia web y tú no, estás perdiendo clientes. Es así de simple. Una buena página web te diferencia y te posiciona como líder en tu industria.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                6. Control de Tu Imagen de Marca
              </h3>
              <p className="text-gray-700 leading-relaxed">
                En tu página web, tú decides cómo presentar tu marca, tus valores y tu propuesta de valor. No dependes de las limitaciones de las redes sociales o directorios de terceros.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                7. Generación de Leads
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Con formularios de contacto, chatbots y llamados a la acción estratégicos, tu página web se convierte en una máquina de generar prospectos calificados para tu negocio.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                8. Análisis y Datos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Con herramientas como Google Analytics, puedes saber exactamente quién visita tu sitio, qué les interesa, de dónde vienen y cómo se comportan. Esta información es oro puro para mejorar tu negocio.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                9. Servicio al Cliente Mejorado
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una sección de preguntas frecuentes, chat en vivo, tutoriales y documentación pueden resolver las dudas de tus clientes instantáneamente, mejorando su satisfacción y reduciendo tu carga de trabajo.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                10. Escalabilidad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A medida que tu negocio crece, tu página web puede evolucionar contigo. Puedes agregar nuevas funcionalidades, expandir tu catálogo, crear un e-commerce o integrar sistemas de reservas sin cambiar de plataforma.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          El Costo de No Tener Una Página Web
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Muchos empresarios dudan en invertir en una página web por el costo inicial. Sin embargo, el verdadero costo está en <strong>no tenerla</strong>:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 ml-4">
          <li className="leading-relaxed">
            <strong>Pérdida de ventas:</strong> Clientes potenciales que no te encuentran van con la competencia
          </li>
          <li className="leading-relaxed">
            <strong>Imagen anticuada:</strong> Tu negocio parece desactualizado y poco confiable
          </li>
          <li className="leading-relaxed">
            <strong>Menor alcance:</strong> Te limitas al boca a boca y publicidad costosa
          </li>
          <li className="leading-relaxed">
            <strong>Dependencia de terceros:</strong> Redes sociales que pueden cambiar sus algoritmos o cerrar tu cuenta
          </li>
          <li className="leading-relaxed">
            <strong>Falta de control:</strong> No puedes medir resultados ni optimizar tu estrategia
          </li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-10">
          <h3 className="text-2xl font-bold mb-4">El Momento de Actuar es Ahora</h3>
          <p className="text-lg leading-relaxed mb-4">
            Cada día sin presencia web es un día de oportunidades perdidas. La buena noticia es que crear una página web profesional nunca ha sido tan accesible.
          </p>
          <p className="text-lg leading-relaxed">
            En HazMiWeb, entendemos las necesidades de las empresas modernas y ofrecemos soluciones web profesionales, rápidas y económicas que se adaptan a tu presupuesto.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Conclusión
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Una página web no es un lujo, es una <strong>necesidad empresarial</strong>. Es tu oficina virtual, tu mejor vendedor, tu catálogo digital y tu canal de comunicación directo con clientes actuales y potenciales.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          No importa si eres un pequeño emprendimiento, una PYME o una gran empresa: <strong>tu presencia digital es fundamental</strong> para competir en el mercado actual.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La inversión en una página web se recupera rápidamente a través del aumento en ventas, la mejora en tu imagen de marca y la reducción de costos en publicidad tradicional.
        </p>

        <div className="border-t border-gray-200 pt-8 mt-10">
          <p className="text-gray-600">
            ¿Listo para llevar tu empresa al siguiente nivel con una página web profesional?
            <Link to="/#contacto" className="text-blue-600 font-semibold hover:underline ml-1">
              Contáctanos hoy mismo
            </Link>
            {" "}y descubre cómo podemos ayudarte.
          </p>
        </div>
      </>
    ),
  },
};

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artículo no encontrado
          </h1>
          <Link
            to="/blog"
            className="text-blue-600 hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} - HazMiWeb`}
        description={post.excerpt}
      />

      <article className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Image Header */}
              <div className="h-96 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {post.content}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                ¿Te gustó este artículo?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Suscríbete para recibir más consejos sobre desarrollo web y marketing digital
              </p>
              <Link
                to="/#contacto"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Contáctanos Ahora
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </article>
    </>
  );
};
