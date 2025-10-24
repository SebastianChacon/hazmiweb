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
  "como-elegir-diseno-perfecto-sitio-web": {
    id: 2,
    title: "Cómo Elegir El Diseño Perfecto Para Tu Sitio Web",
    excerpt: "El diseño de tu página web es la primera impresión que tendrán tus visitantes. Descubre cómo elegir colores, tipografías y layouts que conviertan.",
    date: "2025-10-05",
    author: "HazMiWeb",
    category: "Diseño",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    readTime: "6 min lectura",
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          El diseño de tu sitio web es mucho más que solo hacer que se vea "bonito". Es la <strong>primera impresión</strong> que tendrán tus visitantes, y según estudios, tienes apenas <strong>50 milisegundos</strong> para causar un impacto positivo antes de que decidan quedarse o irse.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Un buen diseño web combina estética con funcionalidad, guía al usuario hacia tus objetivos de negocio y refleja la personalidad de tu marca. En esta guía te mostraré cómo elegir el diseño perfecto para tu sitio.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Los 3 Pilares del Diseño Web Efectivo
        </h2>

        <div className="space-y-8 my-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                1. Identidad Visual Coherente
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tu sitio debe reflejar la personalidad de tu marca de forma consistente. Esto incluye el uso correcto de tu logo, paleta de colores corporativos, tipografías definidas y un estilo visual que sea reconocible en cada página.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2. Experiencia de Usuario (UX)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La navegación debe ser intuitiva y sin fricciones. Los usuarios deben encontrar lo que buscan en máximo 3 clics. Menús claros, jerarquía visual bien definida y llamados a la acción obvios son fundamentales.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3. Performance y Velocidad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Un diseño hermoso que carga lento es un diseño fallido. El 53% de usuarios abandonan un sitio que tarda más de 3 segundos en cargar. Optimiza imágenes, minimiza animaciones excesivas y prioriza la velocidad.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Cómo Elegir Tu Paleta de Colores
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Los colores no son solo decorativos: <strong>comunican emociones</strong> y afectan el comportamiento del usuario. Aquí está la psicología básica de colores en web:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 ml-4">
          <li className="leading-relaxed">
            <strong>Azul:</strong> Confianza, profesionalismo, tecnología (ideal para finanzas, tech, salud)
          </li>
          <li className="leading-relaxed">
            <strong>Verde:</strong> Crecimiento, naturaleza, sostenibilidad (perfecto para eco-productos, wellness)
          </li>
          <li className="leading-relaxed">
            <strong>Rojo:</strong> Urgencia, pasión, energía (e-commerce, ofertas, food)
          </li>
          <li className="leading-relaxed">
            <strong>Naranja:</strong> Creatividad, entusiasmo, accesibilidad (startups, educación)
          </li>
          <li className="leading-relaxed">
            <strong>Negro/Gris:</strong> Elegancia, lujo, sofisticación (moda, premium)
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 italic">
            <strong>Regla de oro:</strong> Usa máximo 3 colores principales: un color primario (60%), uno secundario (30%) y uno de acento (10%) para CTAs y elementos importantes.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Tipografía: La Clave de la Legibilidad
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          La tipografía puede hacer o deshacer tu diseño. Aquí están las mejores prácticas:
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Para títulos:</strong> Puedes usar fuentes más creativas y con personalidad (ejemplo: Montserrat, Poppins, Playfair Display). Comunican la esencia de tu marca.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Para cuerpo de texto:</strong> Prioriza la legibilidad con fuentes sans-serif como Inter, Open Sans o Roboto. Tamaño mínimo: 16px.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Jerarquía:</strong> Títulos grandes (36-48px), subtítulos medianos (24-32px), texto normal (16-18px). El contraste de tamaño guía la lectura.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Espaciado:</strong> Usa line-height de 1.5-1.8 para párrafos. El texto apretado cansa la vista.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Layouts Modernos Que Funcionan
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          El layout (estructura) de tu sitio determina cómo los usuarios navegan tu contenido. Estos son los más efectivos en 2025:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hero Section con CTA</h3>
            <p className="text-gray-700 leading-relaxed">
              La primera sección debe tener un título claro, subtítulo que explique tu propuesta de valor, y un botón de acción prominente. Añade una imagen o video de alta calidad que refuerce tu mensaje.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Grid de Servicios/Productos</h3>
            <p className="text-gray-700 leading-relaxed">
              Usa cards (tarjetas) con iconos, títulos cortos y descripciones breves. Layout de 3 columnas en desktop, 1 en mobile. Añade hover effects para interactividad.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sección de Testimonios</h3>
            <p className="text-gray-700 leading-relaxed">
              Muestra prueba social con fotos reales, nombres y calificaciones. Un carousel horizontal funciona mejor que listados verticales largos.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Footer Informativo</h3>
            <p className="text-gray-700 leading-relaxed">
              Incluye enlaces importantes, información de contacto, redes sociales y un pequeño formulario de newsletter. El footer no debe ser ignorado.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Diseño Responsive: No Es Opcional
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Más del <strong>60% del tráfico web</strong> viene de dispositivos móviles. Tu diseño DEBE verse perfecto en todas las pantallas:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 ml-4">
          <li className="leading-relaxed">
            <strong>Mobile-first:</strong> Diseña primero para móvil, luego expande a desktop
          </li>
          <li className="leading-relaxed">
            <strong>Touch-friendly:</strong> Botones de mínimo 44x44 píxeles para dedos
          </li>
          <li className="leading-relaxed">
            <strong>Menú hamburguesa:</strong> Usa menú colapsable en móvil, navbar completo en desktop
          </li>
          <li className="leading-relaxed">
            <strong>Imágenes adaptativas:</strong> Carga versiones optimizadas según el dispositivo
          </li>
          <li className="leading-relaxed">
            <strong>Test en dispositivos reales:</strong> No solo en navegador, prueba en iPhone, Android, tablets
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Elementos de Diseño Que Aumentan Conversiones
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Tu diseño debe guiar al usuario hacia acciones específicas. Estos elementos aumentan conversiones:
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>1. Botones de acción con contraste:</strong> Usa tu color de acento para CTAs. "Comenzar ahora" convierte mejor que "Enviar".
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>2. Espacios en blanco:</strong> No llenes cada pixel. El espacio negativo da respiro y dirige la atención.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>3. Números y datos:</strong> "Más de 500 clientes satisfechos" es más creíble que "Muchos clientes".
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>4. Flecha o indicadores visuales:</strong> Guía la mirada con flechas sutiles hacia tu CTA principal.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>5. Formularios cortos:</strong> Pide solo información esencial. Cada campo extra reduce conversión un 10%.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-10">
          <h3 className="text-2xl font-bold mb-4">El Diseño Es Una Inversión, No Un Gasto</h3>
          <p className="text-lg leading-relaxed mb-4">
            Un diseño profesional aumenta tu credibilidad, mejora la experiencia del usuario y directamente impacta tus conversiones y ventas.
          </p>
          <p className="text-lg leading-relaxed">
            En HazMiWeb, creamos diseños que no solo se ven bien, sino que <strong>convierten visitantes en clientes</strong>. Combinamos estética moderna con estrategia de conversión.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Errores Comunes de Diseño Web (Y Cómo Evitarlos)
        </h2>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>❌ Demasiadas animaciones:</strong> Las animaciones son geniales, pero en exceso distraen y ralentizan el sitio.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>❌ Texto sobre imágenes sin contraste:</strong> Asegúrate de que el texto sea legible con overlays oscuros/claros.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>❌ Navegación confusa:</strong> Si necesitas un tutorial para usar tu menú, está mal diseñado.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>❌ Ignorar la accesibilidad:</strong> Contraste de colores, alt text en imágenes, navegación por teclado son importantes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>❌ Pop-ups agresivos:</strong> Un pop-up inmediato al entrar frustra usuarios. Espera al menos 30 segundos.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Conclusión
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          El diseño perfecto para tu sitio web es aquel que <strong>balancea estética con funcionalidad</strong>, refleja tu identidad de marca y guía a los usuarios hacia tus objetivos de negocio.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          No necesitas ser diseñador para crear un sitio efectivo, pero sí necesitas entender estos principios fundamentales. Un buen diseño es invisible: el usuario no nota el diseño, solo disfruta la experiencia.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Recuerda: tu sitio web es tu vendedor 24/7. Invierte en un diseño que represente la calidad de tu negocio y que convierta visitantes en clientes leales.
        </p>

        <div className="border-t border-gray-200 pt-8 mt-10">
          <p className="text-gray-600">
            ¿Necesitas ayuda con el diseño de tu sitio web?
            <Link to="/#contacto" className="text-blue-600 font-semibold hover:underline ml-1">
              Contáctanos
            </Link>
            {" "}y te ayudaremos a crear un diseño que convierta.
          </p>
        </div>
      </>
    ),
  },
  "seo-basico-posiciona-sitio-google": {
    id: 3,
    title: "SEO Básico: Posiciona Tu Sitio En Google",
    excerpt: "Aprende las técnicas fundamentales para mejorar tu visibilidad en buscadores y atraer más tráfico orgánico a tu sitio web.",
    date: "2025-09-28",
    author: "HazMiWeb",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&h=600&fit=crop",
    readTime: "7 min lectura",
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          El SEO (Search Engine Optimization) es el conjunto de técnicas que permiten que tu sitio web aparezca en los primeros resultados de Google cuando alguien busca productos o servicios como los tuyos. Y no, <strong>no es magia negra</strong>: es una combinación de buenas prácticas técnicas, contenido de calidad y estrategia.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          El <strong>93% de las experiencias online comienzan con un motor de búsqueda</strong>, y el 75% de los usuarios nunca pasa de la primera página de resultados. Si tu sitio no está optimizado para SEO, estás invisibilizando tu negocio ante miles de potenciales clientes.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 italic">
            <strong>Dato clave:</strong> El primer resultado orgánico de Google recibe el 28.5% de todos los clics. El segundo solo el 15%. La diferencia entre posición #1 y #5 puede significar miles de visitantes mensuales.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          ¿Cómo Funciona Google? (Versión Simple)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Google usa "arañas" (bots) que rastrean millones de páginas web constantemente. Estas arañas:
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>1. Rastrean:</strong> Siguen enlaces de página en página, descubriendo nuevo contenido.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>2. Indexan:</strong> Guardan el contenido en una base de datos gigante organizada por temas y keywords.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>3. Rankean:</strong> Cuando alguien busca algo, Google usa más de 200 factores para decidir qué páginas mostrar y en qué orden.
          </p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Tu objetivo con SEO es <strong>facilitarle el trabajo a Google</strong>: ayudar a que entienda de qué trata tu sitio y convencerlo de que mereces estar en los primeros resultados.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Los 3 Pilares del SEO
        </h2>

        <div className="space-y-8 my-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                1. SEO Técnico (La Base)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Asegura que Google pueda rastrear e indexar tu sitio correctamente. Incluye velocidad de carga, sitio responsive, estructura de URLs, sitemap XML, y HTTPS. Sin una base técnica sólida, el resto del SEO no funciona.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2. SEO On-Page (Tu Contenido)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Todo lo que puedes controlar dentro de tu sitio: títulos optimizados, uso correcto de keywords, meta descriptions, encabezados (H1, H2, H3), imágenes con alt text, y contenido de calidad que resuelva las dudas de los usuarios.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                3. SEO Off-Page (Tu Reputación)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lo que sucede fuera de tu sitio: backlinks (enlaces desde otros sitios hacia el tuyo), menciones en redes sociales, reseñas, y autoridad de dominio. Google interpreta los enlaces como "votos de confianza".
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Keywords: El Corazón del SEO
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Las keywords (palabras clave) son los términos que tus potenciales clientes escriben en Google. Tu trabajo es <strong>identificar esas keywords y optimizar tu contenido para ellas</strong>.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Cómo Encontrar Keywords Efectivas</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Google Suggest:</strong> Empieza a escribir en Google y mira las sugerencias automáticas</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Búsquedas relacionadas:</strong> Al final de la página de resultados de Google</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Herramientas gratuitas:</strong> Google Keyword Planner, Ubersuggest, AnswerThePublic</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Analiza a tu competencia:</strong> ¿Qué keywords usan en sus títulos y contenido?</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Tipos de keywords:</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Short tail (genéricas):</strong> "zapatillas" → Mucha competencia, difícil posicionar
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Long tail (específicas):</strong> "zapatillas running mujer baratas" → Menos búsquedas pero más conversión
          </p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Consejo:</strong> Para sitios nuevos, enfócate en long tail keywords. Son más fáciles de posicionar y atraen usuarios con intención de compra más clara.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Optimización On-Page: La Checklist
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Estos son los elementos que DEBES optimizar en cada página de tu sitio:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Title Tag (Título SEO)</h3>
            <p className="text-gray-700 mb-2">El título que aparece en los resultados de Google. Incluye tu keyword principal.</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded font-mono">
              Ejemplo: "Desarrollo Web Profesional en Ecuador | HazMiWeb"
            </p>
            <p className="text-sm text-gray-600 mt-2">• Máximo 60 caracteres • Keyword al inicio • Marca al final</p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Meta Description</h3>
            <p className="text-gray-700 mb-2">La descripción bajo el título en Google. No afecta ranking pero sí el CTR (clics).</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded font-mono">
              Ejemplo: "Creamos sitios web profesionales desde $20. Diseño moderno, SEO incluido y entrega en 3-5 días. ¡Cotiza gratis!"
            </p>
            <p className="text-sm text-gray-600 mt-2">• 150-160 caracteres • Incluye CTA • Vende el clic</p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ H1 (Título Principal)</h3>
            <p className="text-gray-700 mb-2">El título más importante de la página. Solo uno por página.</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded font-mono">
              Ejemplo: "Desarrollo de Sitios Web Profesionales en Cuenca"
            </p>
            <p className="text-sm text-gray-600 mt-2">• Debe incluir keyword • Diferente al Title Tag • Claro y descriptivo</p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ H2 y H3 (Subtítulos)</h3>
            <p className="text-gray-700 mb-2">Organizan el contenido jerárquicamente. Google los usa para entender la estructura.</p>
            <p className="text-sm text-gray-600 mt-2">• Incluye keywords secundarias • Facilita lectura • Mejora experiencia</p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ URL Amigable</h3>
            <p className="text-gray-700 mb-2">URLs cortas, descriptivas y con keywords.</p>
            <p className="text-sm text-green-600 bg-green-50 p-3 rounded font-mono">
              ✅ tusite.com/diseno-web-ecuador
            </p>
            <p className="text-sm text-red-600 bg-red-50 p-3 rounded font-mono mt-2">
              ❌ tusite.com/pagina?id=12345&cat=web
            </p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Alt Text en Imágenes</h3>
            <p className="text-gray-700 mb-2">Describe lo que muestra la imagen. Google no "ve" imágenes, lee el alt text.</p>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded font-mono">
              Ejemplo: alt="diseño web responsive para restaurante en Cuenca"
            </p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">✅ Enlaces Internos</h3>
            <p className="text-gray-700 mb-2">Enlaza tus páginas entre sí. Ayuda a Google a entender la estructura de tu sitio.</p>
            <p className="text-sm text-gray-600 mt-2">• Anchor text descriptivo • Jerarquiza contenido • Mejora navegación</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Contenido de Calidad: El Factor #1
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Google premia el contenido que <strong>realmente ayuda a los usuarios</strong>. Olvídate de trucos y atajos: el contenido de calidad es tu mejor estrategia SEO a largo plazo.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-10">
          <h3 className="text-2xl font-bold mb-4">¿Qué Es "Contenido de Calidad"?</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex gap-3">
              <span>✓</span>
              <span><strong>Resuelve una duda o problema</strong> real del usuario</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span><strong>Es original</strong>, no copiado de otros sitios</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span><strong>Profundiza en el tema</strong> (mínimo 800-1000 palabras)</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span><strong>Está bien escrito</strong>, sin errores ortográficos</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span><strong>Incluye ejemplos, datos, imágenes</strong> que enriquecen</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span><strong>Se actualiza regularmente</strong> con información fresca</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          SEO Técnico Básico
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Estos aspectos técnicos son fundamentales pero a menudo ignorados:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 ml-4">
          <li className="leading-relaxed">
            <strong>Velocidad de carga:</strong> Tu sitio debe cargar en menos de 3 segundos. Usa PageSpeed Insights para medir.
          </li>
          <li className="leading-relaxed">
            <strong>Mobile-friendly:</strong> Google usa "mobile-first indexing". Si tu sitio no funciona en móvil, no rankeas.
          </li>
          <li className="leading-relaxed">
            <strong>HTTPS (candado verde):</strong> Certificado SSL es obligatorio. Google penaliza sitios sin HTTPS.
          </li>
          <li className="leading-relaxed">
            <strong>Sitemap XML:</strong> Un "mapa" de tu sitio que facilita el rastreo de Google. Súbelo a Google Search Console.
          </li>
          <li className="leading-relaxed">
            <strong>Robots.txt:</strong> Archivo que indica a Google qué páginas rastrear y cuáles ignorar.
          </li>
          <li className="leading-relaxed">
            <strong>Errores 404:</strong> Arregla enlaces rotos. Usan Google Search Console para detectarlos.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Backlinks: Construye Tu Autoridad
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Un backlink es cuando otro sitio web enlaza al tuyo. Google los interpreta como "recomendaciones". Mientras más backlinks de <strong>sitios confiables</strong>, mayor tu autoridad.
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Cómo conseguir backlinks de calidad:</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Crea contenido extraordinario:</strong> Infografías, guías completas, estudios → contenido que otros quieran compartir
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Guest blogging:</strong> Escribe artículos para blogs de tu industria a cambio de un enlace
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Directorios locales:</strong> Regístrate en Google Business Profile, Yelp, directorios de tu ciudad
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Redes sociales:</strong> Comparte tu contenido en LinkedIn, Facebook, Twitter
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>• Relaciones públicas:</strong> Contacta medios locales para menciones y entrevistas
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800">
            <strong>⚠️ Evita:</strong> Comprar backlinks, participar en "link farms" o usar técnicas de spam. Google penaliza estas prácticas y tu sitio puede desaparecer de los resultados.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          SEO Local: Domina Tu Ciudad
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Si tu negocio es local (restaurante, consultorio, taller), el SEO local es <strong>oro puro</strong>. Es más fácil competir a nivel local que nacional.
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>1. Google Business Profile:</strong> GRATIS y súper poderoso. Completa tu perfil 100%: fotos, horarios, descripción, categorías.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>2. NAP consistente:</strong> Name, Address, Phone deben ser idénticos en TODO internet (sitio, redes, directorios).
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>3. Reseñas de clientes:</strong> Pide reviews en Google. Responde a TODAS (buenas y malas).
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>4. Keywords locales:</strong> Incluye tu ciudad en keywords: "dentista en Cuenca", "abogado laboralista Quito".
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>5. Contenido local:</strong> Escribe sobre eventos, noticias, guías de tu ciudad.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Herramientas SEO Gratuitas Que Debes Usar
        </h2>

        <ul className="space-y-4 mb-6">
          <li className="bg-white border border-gray-200 rounded-lg p-4">
            <strong className="text-gray-900">Google Search Console:</strong>
            <span className="text-gray-700"> Monitorea cómo Google ve tu sitio, errores, palabras clave, impresiones.</span>
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-4">
            <strong className="text-gray-900">Google Analytics:</strong>
            <span className="text-gray-700"> Tráfico, comportamiento de usuarios, conversiones, fuentes de tráfico.</span>
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-4">
            <strong className="text-gray-900">PageSpeed Insights:</strong>
            <span className="text-gray-700"> Mide velocidad de tu sitio y da recomendaciones de optimización.</span>
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-4">
            <strong className="text-gray-900">Ubersuggest:</strong>
            <span className="text-gray-700"> Investigación de keywords, análisis de competencia, ideas de contenido.</span>
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-4">
            <strong className="text-gray-900">AnswerThePublic:</strong>
            <span className="text-gray-700"> Descubre preguntas que la gente hace sobre tu tema (perfecto para contenido).</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
          Conclusión: El SEO Es Un Maratón, No Un Sprint
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          El SEO no da resultados de la noche a la mañana. Generalmente toma <strong>3-6 meses</strong> ver mejoras significativas en tus rankings. Pero una vez que empiezas a rankear, el tráfico orgánico es <strong>gratuito y sostenible</strong>.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A diferencia de la publicidad pagada (que se detiene cuando dejas de pagar), un buen SEO sigue trayendo visitantes mes tras mes, año tras año. Es la <strong>mejor inversión a largo plazo</strong> para tu presencia digital.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Comienza con lo básico: keywords bien investigadas, contenido de calidad, optimización on-page correcta. Mide tus resultados con Google Analytics y Search Console. Ajusta, mejora, repite.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-10">
          <h3 className="text-2xl font-bold mb-4">Nosotros Incluimos SEO Básico En Todos Nuestros Sitios</h3>
          <p className="text-lg leading-relaxed mb-4">
            En HazMiWeb, cada sitio que creamos viene con optimización SEO básica incluida: estructura correcta, títulos optimizados, velocidad de carga, responsive design y sitemap XML.
          </p>
          <p className="text-lg leading-relaxed">
            No solo construimos sitios bonitos, los construimos para que <strong>Google los ame</strong> y tus clientes te encuentren.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-10">
          <p className="text-gray-600">
            ¿Listo para mejorar tu posicionamiento en Google?
            <Link to="/#contacto" className="text-blue-600 font-semibold hover:underline ml-1">
              Contáctanos
            </Link>
            {" "}y te ayudamos a crear una estrategia SEO efectiva.
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
