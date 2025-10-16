# 📋 PENDIENTES DEL PROYECTO HAZMIWEB

Este archivo documenta las tareas pendientes, mejoras y correcciones necesarias para el proyecto.

---

## 🔴 PRIORIDAD ALTA (Crítico)

### 1. Configurar Credenciales de Firebase
**Archivo:** `src/config/firebase.ts`
**Estado:** ⚠️ Usando credenciales placeholder
**Acción:** Reemplazar los valores placeholder con credenciales reales de Firebase:
```typescript
const firebaseConfig = {
  apiKey: "TU_API_KEY",           // ← Cambiar
  authDomain: "tu-proyecto.firebaseapp.com",  // ← Cambiar
  projectId: "tu-proyecto",       // ← Cambiar
  storageBucket: "tu-proyecto.appspot.com",  // ← Cambiar
  messagingSenderId: "123456789", // ← Cambiar
  appId: "tu-app-id",            // ← Cambiar
  measurementId: "G-XXXXXXXXXX"  // ← Cambiar
};
```
**Pasos:**
1. Crear proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Activar Firestore Database
3. Activar Google Analytics (opcional)
4. Copiar las credenciales al archivo
5. Crear archivo `.env` para variables de entorno

### 2. Crear Archivo de Variables de Entorno
**Archivos:** `.env` y `.env.example`
**Estado:** ❌ No existen
**Acción:** Crear archivos para gestionar credenciales de forma segura

**Crear `.env.example`:**
```bash
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Crear `.env`:** (copiar de `.env.example` y llenar con valores reales)

**Actualizar `.gitignore`:**
```
.env
.env.local
```

**Actualizar `src/config/firebase.ts`:**
```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
```

### 3. Corregir Favicon
**Archivo:** `index.html:5`
**Estado:** ⚠️ Apunta a `src/assets` (incorrecto)
**Problema:** El favicon debe estar en `public/` no en `src/assets/`
**Acción:**
```bash
# Copiar el logo al directorio public
cp src/assets/hazmiweb-removebg-preview.png public/favicon.png

# Actualizar index.html línea 5:
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## 🟡 PRIORIDAD MEDIA (Importante)

### 4. Crear Imagen Open Graph para SEO
**Archivo:** `public/og-image.jpg`
**Estado:** ❌ No existe
**Referenciado en:** `src/components/SEO.tsx:16`
**Acción:** Crear una imagen de 1200x630px para compartir en redes sociales
- Diseño recomendado: Logo + texto descriptivo
- Formato: JPG o PNG
- Tamaño: 1200x630px (formato de Facebook/Twitter)
- Guardar en: `public/og-image.jpg`

### 5. Integrar AnimatedGradient
**Archivo:** `src/components/ui/AnimatedGradient.tsx`
**Estado:** ✅ Creado pero ❌ No se usa
**Acción:** Agregar el componente a alguna sección para efectos visuales

**Sugerencia:** Integrar en HeroSection o Layout
```typescript
// Opción 1: En HeroSection.tsx
import { AnimatedGradient } from "../ui/AnimatedGradient";

// Dentro del return:
<section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <AnimatedGradient />
  {/* resto del contenido */}
</section>
```

### 6. Optimizar Bundle Size
**Estado:** ⚠️ 750KB (749.99 KB en producción)
**Problema:** Bundle grande puede afectar performance
**Acción:** Implementar code splitting

**Opciones:**
1. **Lazy loading de rutas:**
```typescript
// En App.tsx
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// Envolver en Suspense:
<Suspense fallback={<LoadingScreen />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogPage />} />
  </Routes>
</Suspense>
```

2. **Configurar chunks manuales en vite.config.ts:**
```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'framer-motion': ['framer-motion'],
        'firebase': ['firebase/app', 'firebase/firestore', 'firebase/analytics'],
      }
    }
  }
}
```

### 7. Reemplazar Imágenes Placeholder
**Archivos:** `BlogPage.tsx`, `PortfolioSection.tsx`
**Estado:** ⚠️ Usando URLs de Unsplash
**Acción:** Reemplazar con imágenes locales o URLs definitivas

**Imágenes a reemplazar:**
- Blog: 3 imágenes de artículos
- Portfolio: 6 imágenes de proyectos

**Opciones:**
1. Descargar de Unsplash y guardar en `public/images/`
2. Usar servicio de imágenes propio
3. Usar CDN (Cloudinary, imgix, etc.)

### 8. Agregar Reglas de Seguridad de Firebase
**Estado:** ❌ No configuradas
**Acción:** Configurar reglas de Firestore para proteger datos

**En Firebase Console → Firestore → Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contactId} {
      // Solo permitir escritura (no lectura pública)
      allow write: if true;
      allow read: if false;
    }
  }
}
```

---

## 🟢 PRIORIDAD BAJA (Mejoras Opcionales)

### 9. Agregar Tests
**Estado:** ❌ Sin framework de testing
**Acción:** Configurar Vitest + React Testing Library

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Crear `vitest.config.ts`:**
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
```

### 10. Agregar Analytics y Tracking
**Estado:** ⚠️ Firebase Analytics configurado pero no se usa
**Acción:** Implementar eventos de seguimiento

```typescript
// Crear src/utils/analytics.ts
import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';

export const trackEvent = (eventName: string, params?: object) => {
  if (analytics) {
    logEvent(analytics, eventName, params);
  }
};

// Usar en componentes:
trackEvent('button_click', { button_name: 'Contratar Ahora' });
trackEvent('form_submit', { form_type: 'contact' });
```

### 11. Agregar Modo Oscuro (Dark Mode)
**Estado:** ❌ No implementado
**Acción:** Agregar toggle de tema

```typescript
// Crear src/hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggleDark: () => setIsDark(!isDark) };
};
```

### 12. Implementar Sitemap y robots.txt
**Estado:** ❌ No existen
**Acción:** Crear para SEO

**Crear `public/robots.txt`:**
```txt
User-agent: *
Allow: /
Sitemap: https://hazmiweb.com/sitemap.xml
```

**Crear `public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hazmiweb.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hazmiweb.com/blog</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 13. Agregar Página 404
**Estado:** ❌ No existe
**Acción:** Crear página de error 404

```typescript
// Crear src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Página No Encontrada</h2>
        <p className="text-gray-600 mb-8">La página que buscas no existe</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

// Agregar en App.tsx:
<Route path="*" element={<NotFoundPage />} />
```

### 14. Mejorar Accesibilidad (a11y)
**Estado:** ⚠️ Básico
**Acción:** Mejorar etiquetas ARIA y navegación por teclado

- Agregar `aria-label` a botones sin texto
- Mejorar contraste de colores
- Asegurar navegación por teclado
- Agregar `alt` descriptivos a imágenes

### 15. Agregar Formulario de Newsletter Funcional
**Estado:** ⚠️ Solo UI, sin backend
**Archivo:** `NewsletterPopup.tsx`
**Acción:** Conectar con servicio de email (Mailchimp, SendGrid, etc.)

### 16. Implementar Blog Real con CMS
**Estado:** ⚠️ Posts hardcodeados
**Acción:** Integrar CMS headless

**Opciones:**
- Contentful
- Strapi
- Sanity
- Firebase Firestore

### 17. Agregar Animación de Scroll Reveal
**Estado:** ⚠️ Parcial (solo FadeIn)
**Acción:** Agregar más variedad de animaciones de entrada

### 18. Optimizar Imágenes
**Acción:** Configurar optimización automática

```bash
npm install -D vite-plugin-image-optimizer

# En vite.config.ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

plugins: [
  ViteImageOptimizer({
    jpg: { quality: 80 },
    png: { quality: 80 },
  }),
]
```

---

## 📊 RESUMEN DE ESTADO

| Categoría | Completado | Pendiente |
|-----------|------------|-----------|
| **Funcionalidad Core** | ✅ 100% | - |
| **Animaciones** | ✅ 95% | 1 componente sin usar |
| **Secciones** | ✅ 100% | - |
| **Routing** | ✅ 95% | Falta página 404 |
| **UI Components** | ✅ 100% | - |
| **Backend/Firebase** | ⚠️ 40% | Faltan credenciales reales |
| **SEO** | ⚠️ 70% | Falta imagen OG, sitemap |
| **Performance** | ⚠️ 60% | Optimizar bundle size |
| **Testing** | ❌ 0% | Sin tests |
| **Accesibilidad** | ⚠️ 50% | Mejorar a11y |

---

## 🎯 ROADMAP SUGERIDO

### Sprint 1 (Esta semana)
- [ ] Configurar Firebase con credenciales reales
- [ ] Crear archivos .env y .env.example
- [ ] Corregir favicon
- [ ] Crear imagen OG

### Sprint 2 (Próxima semana)
- [ ] Integrar AnimatedGradient
- [ ] Optimizar bundle size (code splitting)
- [ ] Reemplazar imágenes placeholder
- [ ] Configurar reglas de Firebase

### Sprint 3 (Mes 1)
- [ ] Agregar tests básicos
- [ ] Implementar página 404
- [ ] Crear sitemap y robots.txt
- [ ] Mejorar accesibilidad

### Sprint 4+ (Futuro)
- [ ] Implementar modo oscuro
- [ ] Conectar newsletter con servicio real
- [ ] Agregar analytics detallados
- [ ] Integrar CMS para blog

---

## 📝 NOTAS TÉCNICAS

### Dependencias Instaladas
```json
{
  "framer-motion": "^12.23.24",
  "react-router-dom": "^7.9.4",
  "react-helmet-async": "^2.0.5",
  "firebase": "^12.4.0"
}
```

### Comandos Útiles
```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint

# Analizar bundle (instalar primero)
npx vite-bundle-visualizer
```

### Archivos del Proyecto
- **Total archivos TS/TSX:** 40
- **Tamaño del build:** ~828KB
- **Líneas de código:** ~4,500+

---

## 🐛 BUGS CONOCIDOS

Ninguno detectado actualmente. El proyecto compila y funciona correctamente.

---

**Última actualización:** 16 de octubre de 2025
**Versión del proyecto:** 0.0.0
**Estado general:** 🟢 Funcional y listo para desarrollo adicional
