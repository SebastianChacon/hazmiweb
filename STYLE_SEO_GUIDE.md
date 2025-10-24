# STYLE & SEO IMPROVEMENT GUIDE

Esta guía proporciona instrucciones paso a paso para mejorar los estilos visuales y la optimización SEO del proyecto HazMiWeb.

---

## 📑 ÍNDICE

### PARTE 1: MEJORAS DE ESTILOS
- [Tarea 1: Auditoría Inicial](#tarea-1-auditoría-inicial)
- [Tarea 2: Tipografía Mejorada](#tarea-2-tipografía-mejorada)
- [Tarea 3: Espaciado Consistente](#tarea-3-espaciado-consistente)
- [Tarea 4: Paleta de Colores](#tarea-4-paleta-de-colores)
- [Tarea 5: Micro-animaciones](#tarea-5-micro-animaciones)
- [Tarea 6: Sombras y Profundidad](#tarea-6-sombras-y-profundidad)
- [Tarea 7: Responsividad Optimizada](#tarea-7-responsividad-optimizada)

### PARTE 2: MEJORAS DE SEO
- [Tarea 8: Meta Tags Básicos](#tarea-8-meta-tags-básicos)
- [Tarea 9: SEO Dinámico (react-helmet-async)](#tarea-9-seo-dinámico)
- [Tarea 10: Optimización de Imágenes](#tarea-10-optimización-de-imágenes)
- [Tarea 11: Sitemap.xml](#tarea-11-sitemapxml)
- [Tarea 12: Robots.txt](#tarea-12-robotstxt)
- [Tarea 13: Open Graph y Twitter Cards](#tarea-13-open-graph-y-twitter-cards)
- [Tarea 14: Lazy Loading](#tarea-14-lazy-loading)
- [Tarea 15: Structured Data (JSON-LD)](#tarea-15-structured-data)
- [Tarea 16: Core Web Vitals](#tarea-16-core-web-vitals)

---

# PARTE 1: MEJORAS DE ESTILOS

## Tarea 1: Auditoría Inicial

### ¿Qué es?
Revisar el estado actual del proyecto para identificar áreas de mejora en estilos y SEO.

### ¿Por qué es importante?
Permite entender el punto de partida y priorizar las mejoras más impactantes.

### Pasos de Implementación

1. **Revisar estilos actuales**
   ```bash
   # Examinar archivos de estilos
   cat src/index.css
   ```

2. **Revisar componentes principales**
   - Navbar (`src/components/layout/Navbar.tsx`)
   - HeroSection (`src/components/sections/HeroSection.tsx`)
   - ServicesSection (`src/components/sections/ServicesSection.tsx`)
   - ContactSection (`src/components/sections/ContactSection.tsx`)
   - Footer (`src/components/layout/Footer.tsx`)

3. **Revisar SEO actual**
   ```bash
   cat index.html  # Verificar meta tags existentes
   ```

4. **Crear checklist de problemas encontrados**
   - Fuentes por defecto del sistema
   - Espaciado inconsistente
   - Falta de meta tags SEO
   - Sin optimización de imágenes
   - Sin structured data

---

## Tarea 2: Tipografía Mejorada

### ¿Qué es?
Integrar Google Fonts profesionales para mejorar la apariencia y legibilidad del sitio.

### ¿Por qué es importante?
La tipografía afecta directamente la percepción de profesionalismo y la experiencia de usuario.

### Pasos de Implementación

#### Paso 1: Elegir fuentes
Recomendaciones:
- **Encabezados**: Poppins, Montserrat, Space Grotesk
- **Cuerpo**: Inter, DM Sans, Work Sans

#### Paso 2: Agregar Google Fonts al proyecto

**Opción A: Via CDN (más rápido de implementar)**

Modificar `index.html`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

    <title>HazMiWeb - Tu sitio web profesional</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Opción B: Via npm (mejor performance)**

```bash
npm install @fontsource/poppins @fontsource/inter
```

En `src/main.tsx`:

```typescript
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
```

#### Paso 3: Configurar Tailwind CSS v4

Modificar `src/index.css`:

```css
@import "tailwindcss";

/* Variables CSS personalizadas */
@theme {
  /* Fuentes */
  --font-heading: 'Poppins', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

/* Estilos base */
@layer base {
  body {
    font-family: var(--font-body);
    @apply antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    @apply font-semibold;
  }
}
```

#### Paso 4: Aplicar en componentes

Ejemplo en `HeroSection.tsx`:

```typescript
<h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold">
  ¿Necesitas una <span className="text-blue-400">página web</span>?
</h1>
<p className="font-body text-lg md:text-xl text-gray-300">
  Creamos sitios web modernos y profesionales...
</p>
```

#### Paso 5: Verificar resultado
```bash
npm run dev
# Abrir http://localhost:5173 y verificar las nuevas fuentes
```

---

## Tarea 3: Espaciado Consistente

### ¿Qué es?
Implementar un sistema de espaciado coherente usando las escalas de Tailwind.

### ¿Por qué es importante?
El espaciado consistente mejora la legibilidad y hace que el diseño se vea más profesional.

### Pasos de Implementación

#### Paso 1: Definir escala de espaciado

En `src/index.css`, agregar variables personalizadas:

```css
@theme {
  /* Espaciado personalizado */
  --spacing-section: 6rem;      /* 96px - Entre secciones */
  --spacing-section-sm: 4rem;   /* 64px - Móviles */
  --spacing-content: 3rem;      /* 48px - Dentro de secciones */
  --spacing-element: 1.5rem;    /* 24px - Entre elementos */
}
```

#### Paso 2: Aplicar en Layout

Modificar `src/components/layout/Layout.tsx`:

```typescript
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navbar />
      <main className="pt-16">
        {/* Aplicar espaciado consistente entre secciones */}
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

#### Paso 3: Estandarizar secciones

Crear clase base para secciones en `src/index.css`:

```css
@layer components {
  .section-container {
    @apply py-24 md:py-32 px-4 md:px-8;
  }

  .section-content {
    @apply max-w-7xl mx-auto;
  }

  .section-heading {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center;
  }

  .section-description {
    @apply text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12;
  }
}
```

#### Paso 4: Aplicar en secciones

Ejemplo en `ServicesSection.tsx`:

```typescript
export function ServicesSection() {
  return (
    <section id="servicios" className="section-container">
      <div className="section-content">
        <h2 className="section-heading">
          Nuestros <span className="text-blue-400">Servicios</span>
        </h2>
        <p className="section-description">
          Ofrecemos soluciones web completas adaptadas a tus necesidades
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ServiceCards */}
        </div>
      </div>
    </section>
  )
}
```

---

## Tarea 4: Paleta de Colores

### ¿Qué es?
Definir una paleta de colores de marca consistente usando variables CSS.

### ¿Por qué es importante?
Una paleta coherente refuerza la identidad de marca y facilita el mantenimiento.

### Pasos de Implementación

#### Paso 1: Definir colores de marca

En `src/index.css`:

```css
@theme {
  /* Colores principales */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  /* Colores secundarios */
  --color-secondary-400: #a78bfa;
  --color-secondary-500: #8b5cf6;
  --color-secondary-600: #7c3aed;

  /* Colores de acento */
  --color-accent-cyan: #06b6d4;
  --color-accent-pink: #ec4899;
  --color-accent-green: #10b981;

  /* Grises personalizados */
  --color-gray-50: #f9fafb;
  --color-gray-900: #0f172a;
  --color-gray-950: #020617;
}
```

#### Paso 2: Crear clases de utilidad

```css
@layer utilities {
  .bg-gradient-brand {
    background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-secondary-600) 100%);
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400;
  }

  .border-gradient {
    border-image: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500)) 1;
  }
}
```

#### Paso 3: Aplicar en componentes

Ejemplo en `Button.tsx`:

```typescript
const variants = {
  primary: "bg-gradient-brand hover:shadow-lg hover:shadow-blue-500/50 text-white",
  secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
  outline: "border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10"
}
```

---

## Tarea 5: Micro-animaciones

### ¿Qué es?
Agregar animaciones sutiles que mejoran la experiencia de usuario.

### ¿Por qué es importante?
Las micro-animaciones hacen que la interfaz se sienta más fluida y profesional.

### Pasos de Implementación

#### Paso 1: Configurar Framer Motion (si no está instalado)

```bash
npm install framer-motion
```

#### Paso 2: Crear animaciones reutilizables

Crear `src/utils/animations.ts`:

```typescript
import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

// Configuraciones de transición
export const defaultTransition = {
  duration: 0.5,
  ease: [0.6, -0.05, 0.01, 0.99]
}

export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15
}
```

#### Paso 3: Agregar animaciones en Tailwind

En `src/index.css`:

```css
@layer utilities {
  /* Animaciones de hover */
  .hover-lift {
    @apply transition-transform duration-300 hover:-translate-y-2;
  }

  .hover-glow {
    @apply transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/50;
  }

  .hover-scale {
    @apply transition-transform duration-300 hover:scale-105;
  }

  /* Animaciones de entrada */
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out;
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
    }
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
}
```

#### Paso 4: Aplicar en ServiceCard

Modificar `src/components/ui/ServiceCard.tsx`:

```typescript
import { motion } from 'framer-motion'
import { scaleIn, defaultTransition } from '@/utils/animations'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
}

export function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover-glow"
    >
      <div className="text-blue-400 mb-4 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
```

#### Paso 5: Aplicar en Button

Modificar `src/components/ui/Button.tsx`:

```typescript
import { motion } from 'framer-motion'

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
```

---

## Tarea 6: Sombras y Profundidad

### ¿Qué es?
Implementar un sistema de sombras coherente para crear sensación de profundidad.

### ¿Por qué es importante?
Las sombras ayudan a establecer jerarquía visual y hacen que los elementos se destaquen.

### Pasos de Implementación

#### Paso 1: Definir sistema de sombras

En `src/index.css`:

```css
@theme {
  /* Sistema de sombras personalizado */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Sombras de colores (para efectos glow) */
  --shadow-blue: 0 10px 40px -10px rgba(59, 130, 246, 0.5);
  --shadow-purple: 0 10px 40px -10px rgba(139, 92, 246, 0.5);
  --shadow-cyan: 0 10px 40px -10px rgba(6, 182, 212, 0.5);
}

@layer utilities {
  /* Sombras de elevación */
  .elevation-1 {
    box-shadow: var(--shadow-sm);
  }

  .elevation-2 {
    box-shadow: var(--shadow-md);
  }

  .elevation-3 {
    box-shadow: var(--shadow-lg);
  }

  .elevation-4 {
    box-shadow: var(--shadow-xl);
  }

  .elevation-5 {
    box-shadow: var(--shadow-2xl);
  }

  /* Sombras de colores */
  .glow-blue {
    box-shadow: var(--shadow-blue);
  }

  .glow-purple {
    box-shadow: var(--shadow-purple);
  }

  .glow-cyan {
    box-shadow: var(--shadow-cyan);
  }

  /* Efectos hover con sombras */
  .hover-elevate {
    @apply transition-shadow duration-300;
  }

  .hover-elevate:hover {
    box-shadow: var(--shadow-2xl);
  }
}
```

#### Paso 2: Aplicar en Cards

Ejemplo en `ServiceCard.tsx`:

```typescript
<div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 elevation-2 hover-elevate hover:glow-blue">
  {/* contenido */}
</div>
```

#### Paso 3: Aplicar en Buttons

```typescript
const variants = {
  primary: "bg-gradient-brand glow-blue hover:elevation-4 text-white",
  secondary: "bg-gray-800 elevation-1 hover:elevation-3 text-white"
}
```

#### Paso 4: Crear efecto de profundidad en secciones

```css
@layer components {
  .section-layered {
    position: relative;
  }

  .section-layered::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    pointer-events: none;
  }
}
```

---

## Tarea 7: Responsividad Optimizada

### ¿Qué es?
Mejorar y optimizar el diseño responsive para tablets y móviles.

### ¿Por qué es importante?
La mayoría de usuarios acceden desde dispositivos móviles. Un diseño responsive deficiente afecta la experiencia y el SEO.

### Pasos de Implementación

#### Paso 1: Definir breakpoints personalizados

En `src/index.css`:

```css
@theme {
  /* Breakpoints personalizados (si necesitas más allá de los de Tailwind) */
  --breakpoint-xs: 475px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

#### Paso 2: Auditar componentes móviles

Revisar cada componente y verificar:
- Texto legible en móvil (mínimo 16px para cuerpo)
- Botones táctiles de mínimo 44x44px
- Espaciado adecuado entre elementos interactivos
- Imágenes que se adapten sin distorsión

#### Paso 3: Optimizar Navbar para móvil

Ya está implementado en `src/components/layout/Navbar.tsx`, pero verificar:

```typescript
// Menú móvil con altura completa
<motion.div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-gray-900/95 backdrop-blur-lg">
  {/* navegación móvil */}
</motion.div>
```

#### Paso 4: Optimizar HeroSection

Verificar tamaños responsivos en `HeroSection.tsx`:

```typescript
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
  {/* Escalado progresivo de títulos */}
</h1>

<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
  {/* Texto responsive */}
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Botones apilados en móvil, horizontal en desktop */}
</div>
```

#### Paso 5: Optimizar grids

En `ServicesSection.tsx`:

```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {/* 1 columna móvil, 2 en tablet, 3 en desktop */}
</div>
```

#### Paso 6: Crear utilidades responsive

En `src/index.css`:

```css
@layer utilities {
  /* Padding responsive */
  .px-responsive {
    @apply px-4 sm:px-6 md:px-8 lg:px-12;
  }

  .py-responsive {
    @apply py-12 sm:py-16 md:py-20 lg:py-24;
  }

  /* Texto responsive */
  .text-responsive-sm {
    @apply text-sm sm:text-base;
  }

  .text-responsive-base {
    @apply text-base sm:text-lg md:text-xl;
  }

  .text-responsive-lg {
    @apply text-lg sm:text-xl md:text-2xl lg:text-3xl;
  }
}
```

#### Paso 7: Testing responsive

```bash
# Abrir DevTools y probar en diferentes dispositivos:
# - iPhone SE (375px)
# - iPhone 12 Pro (390px)
# - iPad (768px)
# - iPad Pro (1024px)
# - Desktop (1920px)
```

---

# PARTE 2: MEJORAS DE SEO

## Tarea 8: Meta Tags Básicos

### ¿Qué es?
Agregar meta tags esenciales en el HTML para mejorar el SEO básico.

### ¿Por qué es importante?
Los meta tags ayudan a los motores de búsqueda a entender el contenido de tu página.

### Pasos de Implementación

#### Paso 1: Modificar index.html

Reemplazar el `<head>` en `index.html`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Meta Tags Básicos -->
    <title>HazMiWeb - Creación de Sitios Web Profesionales | Desarrollo Web</title>
    <meta name="description" content="Creamos sitios web modernos, profesionales y optimizados. Diseño responsive, rápido y enfocado en resultados. Transforma tu presencia digital con HazMiWeb." />
    <meta name="keywords" content="diseño web, desarrollo web, sitio web profesional, página web, diseño responsive, desarrollo frontend, hazmiweb" />
    <meta name="author" content="HazMiWeb" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Spanish" />
    <meta name="revisit-after" content="7 days" />

    <!-- Tema de color para navegadores móviles -->
    <meta name="theme-color" content="#1e40af" />
    <meta name="msapplication-TileColor" content="#1e40af" />

    <!-- Canonical URL (actualizar con tu dominio real) -->
    <link rel="canonical" href="https://hazmiweb.com" />

    <!-- Preconnect para optimización -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### Paso 2: Verificar meta tags

```bash
npm run dev
# Abrir navegador, inspeccionar elemento, verificar <head>
```

#### Paso 3: Test con herramientas SEO

- Google Search Console
- Meta Tags Checker: https://metatags.io/
- SEO Checker: https://www.seoptimer.com/

---

## Tarea 9: SEO Dinámico

### ¿Qué es?
Implementar react-helmet-async para gestionar meta tags dinámicos por página.

### ¿Por qué es importante?
Permite que cada página tenga sus propios meta tags optimizados para SEO.

### Pasos de Implementación

#### Paso 1: Instalar react-helmet-async

```bash
npm install react-helmet-async
```

#### Paso 2: Configurar Provider

Modificar `src/main.tsx`:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
```

#### Paso 3: Crear componente SEO

Crear `src/components/common/SEO.tsx`:

```typescript
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

export function SEO({
  title = 'HazMiWeb - Creación de Sitios Web Profesionales',
  description = 'Creamos sitios web modernos, profesionales y optimizados. Diseño responsive, rápido y enfocado en resultados.',
  keywords = 'diseño web, desarrollo web, sitio web profesional, página web, diseño responsive',
  canonicalUrl = 'https://hazmiweb.com',
  ogImage = 'https://hazmiweb.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOProps) {
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HazMiWeb" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Adicional */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="HazMiWeb" />
    </Helmet>
  )
}
```

#### Paso 4: Usar en páginas

En `src/pages/HomePage.tsx`:

```typescript
import { SEO } from '@/components/common/SEO'

export function HomePage() {
  return (
    <>
      <SEO
        title="HazMiWeb - Tu Sitio Web Profesional | Diseño y Desarrollo Web"
        description="Creamos sitios web modernos que convierten visitantes en clientes. Diseño responsive, rápido y optimizado para SEO."
        keywords="diseño web, desarrollo web, sitio web profesional, hazmiweb"
      />

      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
```

En `src/pages/BlogPage.tsx`:

```typescript
export function BlogPage() {
  return (
    <>
      <SEO
        title="Blog - HazMiWeb | Consejos de Diseño y Desarrollo Web"
        description="Artículos sobre diseño web, desarrollo, SEO y mejores prácticas para crear sitios web profesionales."
        keywords="blog diseño web, tutoriales desarrollo, consejos seo, hazmiweb blog"
        canonicalUrl="https://hazmiweb.com/blog"
      />

      {/* Contenido del blog */}
    </>
  )
}
```

---

## Tarea 10: Optimización de Imágenes

### ¿Qué es?
Agregar atributos alt descriptivos y optimizar la carga de imágenes.

### ¿Por qué es importante?
- Mejora SEO (los buscadores leen el texto alt)
- Mejora accesibilidad para lectores de pantalla
- Mejor UX si la imagen no carga

### Pasos de Implementación

#### Paso 1: Auditar imágenes actuales

```bash
# Buscar todas las etiquetas <img> en el proyecto
grep -r "<img" src/
grep -r "background-image" src/
```

#### Paso 2: Agregar alt text descriptivos

Si tienes imágenes en componentes, siempre agregar alt:

```typescript
// ❌ MAL
<img src="/logo.svg" />

// ✅ BIEN
<img src="/logo.svg" alt="HazMiWeb - Logo de la empresa de diseño web" />
```

Ejemplos de alt text descriptivos:

```typescript
// Para logos
alt="HazMiWeb - Creación de sitios web profesionales"

// Para imágenes de productos/servicios
alt="Diseño web responsive en múltiples dispositivos - laptop, tablet y móvil"

// Para capturas de pantalla
alt="Ejemplo de sitio web moderno con diseño minimalista creado por HazMiWeb"

// Para iconos decorativos (si no aportan información)
alt="" // alt vacío para que lectores de pantalla lo ignoren
```

#### Paso 3: Implementar lazy loading

Ya implementado en `src/components/common/LazyImage.tsx`, pero asegurar su uso:

```typescript
// En lugar de:
<img src="/image.jpg" alt="Descripción" />

// Usar:
<LazyImage src="/image.jpg" alt="Descripción" />
```

#### Paso 4: Optimizar imágenes

```bash
# Instalar herramienta de optimización
npm install --save-dev vite-plugin-image-optimizer

# O manualmente usar herramientas online:
# - TinyPNG: https://tinypng.com/
# - Squoosh: https://squoosh.app/
# - ImageOptim (Mac): https://imageoptim.com/
```

Configurar en `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    ViteImageOptimizer({
      png: {
        quality: 80
      },
      jpeg: {
        quality: 80
      },
      jpg: {
        quality: 80
      },
      webp: {
        quality: 80
      }
    })
  ],
  // ...resto de config
})
```

#### Paso 5: Usar formatos modernos

Crear imágenes en formato WebP para mejor compresión:

```html
<picture>
  <source srcset="/image.webp" type="image/webp" />
  <source srcset="/image.jpg" type="image/jpeg" />
  <img src="/image.jpg" alt="Descripción detallada" />
</picture>
```

---

## Tarea 11: Sitemap.xml

### ¿Qué es?
Un archivo XML que lista todas las URLs de tu sitio web.

### ¿Por qué es importante?
Ayuda a los motores de búsqueda a descubrir e indexar todas las páginas de tu sitio.

### Pasos de Implementación

#### Paso 1: Crear sitemap.xml

Crear archivo `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Página principal -->
  <url>
    <loc>https://hazmiweb.com/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Sección Servicios -->
  <url>
    <loc>https://hazmiweb.com/#servicios</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Sección Contacto -->
  <url>
    <loc>https://hazmiweb.com/#contacto</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog (si existe) -->
  <url>
    <loc>https://hazmiweb.com/blog</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Artículos del blog (agregar cada uno) -->
  <url>
    <loc>https://hazmiweb.com/blog/diseno-web-moderno</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

#### Paso 2: Crear generador automático de sitemap

Para proyectos grandes, crear un script:

Crear `scripts/generate-sitemap.js`:

```javascript
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const BASE_URL = 'https://hazmiweb.com'
const today = new Date().toISOString().split('T')[0]

const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/#servicios', priority: 0.8, changefreq: 'monthly' },
  { path: '/#contacto', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.9, changefreq: 'weekly' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync(resolve('public/sitemap.xml'), sitemap)
console.log('✅ Sitemap generado en public/sitemap.xml')
```

Agregar script en `package.json`:

```json
{
  "scripts": {
    "generate-sitemap": "node scripts/generate-sitemap.js"
  }
}
```

Ejecutar:

```bash
npm run generate-sitemap
```

#### Paso 3: Referenciar en robots.txt

Ver Tarea 12.

#### Paso 4: Verificar en Google Search Console

1. Ir a https://search.google.com/search-console
2. Agregar propiedad (tu sitio web)
3. Ir a "Sitemaps"
4. Enviar URL: `https://hazmiweb.com/sitemap.xml`

---

## Tarea 12: Robots.txt

### ¿Qué es?
Un archivo que indica a los buscadores qué páginas pueden o no rastrear.

### ¿Por qué es importante?
Controla cómo los motores de búsqueda acceden a tu sitio y ahorra recursos de rastreo.

### Pasos de Implementación

#### Paso 1: Crear robots.txt

Crear archivo `public/robots.txt`:

```txt
# Permitir a todos los bots rastrear todo el sitio
User-agent: *
Allow: /

# Bloquear archivos y directorios privados (si existen)
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/

# Sitemap
Sitemap: https://hazmiweb.com/sitemap.xml

# Configuración para bots específicos
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Bloquear bots maliciosos (opcional)
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /
```

#### Paso 2: Configuración para producción vs desarrollo

Crear `public/robots.txt` para producción (arriba).

Para desarrollo, bloquear todo:

```txt
# robots.txt para desarrollo/staging
User-agent: *
Disallow: /
```

#### Paso 3: Validar robots.txt

1. Verificar sintaxis: https://en.ryte.com/free-tools/robots-txt/
2. Probar en Google Search Console > Herramientas > robots.txt Tester

---

## Tarea 13: Open Graph y Twitter Cards

### ¿Qué es?
Meta tags que controlan cómo se ve tu sitio cuando se comparte en redes sociales.

### ¿Por qué es importante?
Mejora el CTR (click-through rate) cuando tu sitio se comparte en redes sociales.

### Pasos de Implementación

#### Paso 1: Crear imagen Open Graph

Crear una imagen específica para compartir:
- Tamaño recomendado: 1200x630px
- Formato: JPG o PNG
- Peso máximo: 1MB
- Contenido: Logo + slogan + visual atractivo

Guardar en `public/og-image.jpg`

#### Paso 2: Ya implementado en componente SEO

El componente SEO (Tarea 9) ya incluye Open Graph y Twitter Cards:

```typescript
{/* Open Graph */}
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:url" content={canonicalUrl} />

{/* Twitter Card */}
<meta name="twitter:card" content={twitterCard} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />
```

#### Paso 3: Personalizar por página

En cada página, pasar la imagen específica:

```typescript
<SEO
  title="HazMiWeb - Diseño Web Profesional"
  description="Creamos sitios web modernos..."
  ogImage="https://hazmiweb.com/og-home.jpg"
  twitterCard="summary_large_image"
/>
```

#### Paso 4: Crear variaciones de imágenes

- `public/og-home.jpg` - Para página principal
- `public/og-blog.jpg` - Para blog
- `public/og-services.jpg` - Para servicios

#### Paso 5: Validar meta tags

Herramientas de validación:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Meta Tags Checker**: https://metatags.io/

Pasos:
1. Abrir herramienta
2. Ingresar URL de tu sitio
3. Ver preview
4. Corregir errores si los hay

---

## Tarea 14: Lazy Loading

### ¿Qué es?
Cargar imágenes solo cuando están a punto de ser visibles en el viewport.

### ¿Por qué es importante?
Mejora el tiempo de carga inicial y ahorra ancho de banda.

### Pasos de Implementación

#### Paso 1: Ya implementado

El proyecto ya tiene `LazyImage.tsx` (ver `src/components/common/LazyImage.tsx`).

#### Paso 2: Implementar en todas las imágenes

Reemplazar todas las etiquetas `<img>` por `<LazyImage>`:

```typescript
// Antes
<img src="/image.jpg" alt="Descripción" />

// Después
import { LazyImage } from '@/components/common/LazyImage'

<LazyImage src="/image.jpg" alt="Descripción" />
```

#### Paso 3: Lazy loading de componentes pesados

Para componentes grandes (ej: ChatWidget, NewsletterPopup):

```typescript
import { lazy, Suspense } from 'react'

const ChatWidget = lazy(() => import('@/components/widgets/ChatWidget'))
const NewsletterPopup = lazy(() => import('@/components/widgets/NewsletterPopup'))

export function App() {
  return (
    <div>
      {/* Contenido principal */}

      <Suspense fallback={null}>
        <ChatWidget />
        <NewsletterPopup />
      </Suspense>
    </div>
  )
}
```

#### Paso 4: Lazy loading de rutas

Ya implementado con React Router:

```typescript
const BlogPage = lazy(() => import('@/pages/BlogPage'))

<Route
  path="/blog"
  element={
    <Suspense fallback={<LoadingScreen />}>
      <BlogPage />
    </Suspense>
  }
/>
```

#### Paso 5: Optimizar con loading="lazy" nativo

Para navegadores modernos, usar atributo nativo:

```typescript
<img
  src="/image.jpg"
  alt="Descripción"
  loading="lazy"
  decoding="async"
/>
```

---

## Tarea 15: Structured Data

### ¿Qué es?
JSON-LD (Linked Data) para que los buscadores entiendan mejor tu contenido.

### ¿Por qué es importante?
Permite rich snippets en resultados de búsqueda (estrellas, precios, FAQ, etc.).

### Pasos de Implementación

#### Paso 1: Crear componente StructuredData

Crear `src/components/common/StructuredData.tsx`:

```typescript
import { Helmet } from 'react-helmet-async'

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}
```

#### Paso 2: Crear schema para organización

En `HomePage.tsx`:

```typescript
import { StructuredData } from '@/components/common/StructuredData'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HazMiWeb",
  "url": "https://hazmiweb.com",
  "logo": "https://hazmiweb.com/logo.svg",
  "description": "Creación de sitios web profesionales y modernos",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contacto@hazmiweb.com"
  },
  "sameAs": [
    "https://facebook.com/hazmiweb",
    "https://twitter.com/hazmiweb",
    "https://linkedin.com/company/hazmiweb"
  ]
}

export function HomePage() {
  return (
    <>
      <SEO />
      <StructuredData data={organizationSchema} />

      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
```

#### Paso 3: Schema para servicios

```typescript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Diseño y Desarrollo Web",
  "provider": {
    "@type": "Organization",
    "name": "HazMiWeb"
  },
  "areaServed": {
    "@type": "Country",
    "name": "España"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Diseño Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Básico",
          "description": "Sitio web informativo de 1-5 páginas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Profesional",
          "description": "Sitio web completo con funcionalidades avanzadas"
        }
      }
    ]
  }
}
```

#### Paso 4: Schema para artículos del blog

En artículos del blog:

```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Cómo crear un sitio web moderno en 2025",
  "image": "https://hazmiweb.com/blog/article-image.jpg",
  "author": {
    "@type": "Organization",
    "name": "HazMiWeb"
  },
  "publisher": {
    "@type": "Organization",
    "name": "HazMiWeb",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hazmiweb.com/logo.svg"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20",
  "description": "Guía completa para crear sitios web modernos..."
}
```

#### Paso 5: Schema para FAQ

Si tienes sección de preguntas frecuentes:

```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta crear un sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende de la complejidad. Un sitio básico puede costar desde $500, mientras que un sitio completo puede llegar a $2000 o más."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en hacerse un sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un sitio web básico puede estar listo en 1-2 semanas, mientras que proyectos más complejos pueden tomar 4-8 semanas."
      }
    }
  ]
}
```

#### Paso 6: Validar Structured Data

Herramientas:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Google Search Console**: Ver "Mejoras" > "Structured Data"

---

## Tarea 16: Core Web Vitals

### ¿Qué es?
Métricas de Google para medir la experiencia de usuario: LCP, FID, CLS.

### ¿Por qué es importante?
Son factores de ranking en Google. Mejor experiencia = mejor posicionamiento.

### Pasos de Implementación

#### Paso 1: Medir estado actual

Herramientas:

```bash
# Lighthouse (Chrome DevTools)
# 1. Abrir DevTools (F12)
# 2. Ir a pestaña "Lighthouse"
# 3. Seleccionar "Performance" y "SEO"
# 4. Click "Analyze page load"

# O usar CLI
npm install -g lighthouse
lighthouse https://hazmiweb.com --view
```

Otras herramientas:
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Chrome UX Report: https://developers.google.com/web/tools/chrome-user-experience-report

#### Paso 2: Optimizar LCP (Largest Contentful Paint)

**Meta: < 2.5 segundos**

Optimizaciones:

1. **Precargar recursos críticos**

En `index.html`:

```html
<head>
  <!-- Precargar fuentes críticas -->
  <link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Precargar imagen hero -->
  <link rel="preload" href="/hero-image.jpg" as="image">

  <!-- Preconnect a recursos externos -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
</head>
```

2. **Optimizar imágenes hero**

```typescript
// Usar srcset para responsive images
<img
  src="/hero-image.jpg"
  srcSet="/hero-image-sm.jpg 640w, /hero-image-md.jpg 1024w, /hero-image-lg.jpg 1920w"
  sizes="100vw"
  alt="HazMiWeb"
  fetchPriority="high"
/>
```

3. **Code splitting**

Ya implementado con lazy loading de rutas.

#### Paso 3: Optimizar FID (First Input Delay)

**Meta: < 100 ms**

Optimizaciones:

1. **Reducir JavaScript no usado**

```bash
# Analizar bundle
npm run build
npx vite-bundle-visualizer
```

2. **Defer scripts no críticos**

En `index.html`:

```html
<!-- Scripts no críticos con defer -->
<script defer src="/analytics.js"></script>
```

3. **Usar Web Workers para tareas pesadas**

Crear `src/workers/heavy-task.worker.ts`:

```typescript
self.addEventListener('message', (e) => {
  const result = performHeavyCalculation(e.data)
  self.postMessage(result)
})
```

#### Paso 4: Optimizar CLS (Cumulative Layout Shift)

**Meta: < 0.1**

Optimizaciones:

1. **Reservar espacio para imágenes**

```typescript
// Siempre especificar width y height
<img
  src="/image.jpg"
  alt="Descripción"
  width="800"
  height="600"
  className="w-full h-auto"
/>
```

2. **Evitar insertar contenido dinámico arriba**

```typescript
// ❌ MAL - Insertar arriba causa layout shift
<div>
  {showBanner && <Banner />}
  <Content />
</div>

// ✅ BIEN - Reservar espacio
<div>
  <div className="h-20"> {/* Altura fija */}
    {showBanner && <Banner />}
  </div>
  <Content />
</div>
```

3. **Usar aspect-ratio para videos e iframes**

```css
.video-container {
  aspect-ratio: 16 / 9;
}
```

4. **Fuentes con font-display**

En `src/index.css`:

```css
@font-face {
  font-family: 'Poppins';
  font-display: swap; /* Evita invisible text durante carga */
  src: url('/fonts/Poppins.woff2') format('woff2');
}
```

#### Paso 5: Optimizar tiempo de carga general

1. **Comprimir assets**

En `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remover console.logs en producción
      }
    }
  }
})
```

2. **Habilitar HTTP/2 en servidor**

Asegurar que el hosting soporte HTTP/2 (Vercel, Netlify lo tienen por defecto).

3. **Configurar caché**

En `public/_headers` (para Netlify) o `vercel.json`:

```
# _headers para Netlify
/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable
```

#### Paso 6: Monitorear continuamente

1. **Configurar monitoreo**

```bash
npm install web-vitals
```

Crear `src/utils/reportWebVitals.ts`:

```typescript
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals'

function sendToAnalytics(metric: any) {
  console.log(metric)
  // Enviar a tu servicio de analytics
  // ej: Google Analytics, Firebase, etc.
}

export function reportWebVitals() {
  onCLS(sendToAnalytics)
  onFID(sendToAnalytics)
  onLCP(sendToAnalytics)
  onFCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
}
```

En `src/main.tsx`:

```typescript
import { reportWebVitals } from './utils/reportWebVitals'

reportWebVitals()
```

2. **Configurar alertas**

Usar herramientas como:
- Google Search Console (Core Web Vitals report)
- Lighthouse CI
- WebPageTest API

---

## 🎯 RESUMEN Y PRÓXIMOS PASOS

### Checklist Final

Una vez completadas todas las tareas:

**Estilos:**
- [ ] Fuentes personalizadas implementadas
- [ ] Sistema de espaciado consistente
- [ ] Paleta de colores definida
- [ ] Micro-animaciones agregadas
- [ ] Sistema de sombras implementado
- [ ] Responsividad optimizada

**SEO:**
- [ ] Meta tags básicos agregados
- [ ] react-helmet-async implementado
- [ ] Todas las imágenes tienen alt text
- [ ] sitemap.xml creado
- [ ] robots.txt configurado
- [ ] Open Graph y Twitter Cards implementados
- [ ] Lazy loading habilitado
- [ ] Structured Data (JSON-LD) agregado
- [ ] Core Web Vitals optimizados

### Herramientas de Validación Final

Antes de considerar terminado:

1. **SEO**: https://www.seoptimer.com/
2. **Performance**: https://pagespeed.web.dev/
3. **Accessibility**: https://wave.webaim.org/
4. **Meta Tags**: https://metatags.io/
5. **Structured Data**: https://search.google.com/test/rich-results
6. **Mobile-Friendly**: https://search.google.com/test/mobile-friendly

### Mantenimiento Continuo

- Actualizar sitemap.xml cuando agregues nuevas páginas
- Monitorear Core Web Vitals mensualmente
- Revisar Google Search Console semanalmente
- Actualizar structured data cuando cambies información
- Optimizar nuevas imágenes antes de subirlas

---

## 📚 Recursos Adicionales

### Documentación Oficial

- **Tailwind CSS v4**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **React Helmet Async**: https://github.com/staylor/react-helmet-async
- **Schema.org**: https://schema.org/
- **Google SEO**: https://developers.google.com/search/docs

### Herramientas Útiles

- **Can I Use**: https://caniuse.com/ (compatibilidad navegadores)
- **CSS Gradient Generator**: https://cssgradient.io/
- **Color Palette Generator**: https://coolors.co/
- **Font Pairing**: https://fontpair.co/
- **Shadow Generator**: https://shadows.brumm.af/

### Comunidades

- **Stack Overflow**: https://stackoverflow.com/
- **Reddit r/webdev**: https://reddit.com/r/webdev
- **Dev.to**: https://dev.to/
- **Frontend Mentor**: https://www.frontendmentor.io/

---

**¡Éxito con las mejoras de tu proyecto! 🚀**
