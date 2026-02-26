# Plan de Actualización — HazMiWeb
> Creado: 2026-02-26 | Estado: En progreso

## Resumen Ejecutivo

Actualización completa basada en el catálogo de servicios oficial (PDF). Los cambios incluyen:
- Corrección de precios (de precios demo a precios reales del catálogo)
- Reestructuración de los paquetes de servicio (3 → 4 paquetes)
- Nueva sección de Add-ons / Servicios Adicionales
- Mejora de la sección "Cómo Funciona"
- Mejoras visuales para un look más profesional y moderno

---

## 1. ACTUALIZACIÓN DE PRECIOS Y PAQUETES

### Precios Actuales (INCORRECTOS — demo)
| Plan | Precio |
|------|--------|
| Básico | $20 |
| Profesional | $69 |
| Premium | $178 |

### Precios Nuevos (del catálogo oficial)
| Paquete | Precio | Tiempo |
|---------|--------|--------|
| Landing Page | $200 - $250 | 3–5 días |
| Sitio Informativo / Corporativo | $400 - $600 | 7–12 días |
| Tienda en Línea (E-Commerce) | $700 - $1,200 | 15–25 días |
| Aplicación Web a Medida | $1,200 - $2,500+ | 25–45 días |

---

## 2. DETALLE DE CADA PAQUETE

### 01. Landing Page — $200–$250
- Diseño personalizado y moderno
- Totalmente responsiva (móvil, tablet, escritorio)
- Formulario de contacto funcional
- Optimización básica de velocidad
- Integración con redes sociales (enlaces)
- 1 revisión de diseño incluida
- **Ideal para:** Emprendedores, freelancers o promociones puntuales

### 02. Sitio Web Informativo / Corporativo — $400–$600
- Hasta 5 páginas (Inicio, Nosotros, Servicios, Blog, Contacto)
- Diseño profesional y personalizado
- Totalmente responsiva
- Formulario de contacto avanzado
- Mapa de Google Maps integrado
- Galería de imágenes / portafolio
- Optimización de velocidad
- 2 revisiones de diseño incluidas
- **Ideal para:** Pequeñas y medianas empresas, consultorios, estudios

### 03. Tienda en Línea (E-Commerce) — $700–$1,200
- Catálogo de productos (hasta 50 productos iniciales)
- Carrito de compras funcional
- Pasarela de pago integrada (PayPal, Stripe, etc.)
- Panel de administración para gestionar productos
- Sistema de inventario básico
- Registro e inicio de sesión de clientes
- Notificaciones por correo electrónico
- Diseño responsivo y profesional
- Certificado SSL (sitio seguro)
- 3 revisiones de diseño incluidas
- **Ideal para:** Negocios que quieren vender productos o servicios en línea

### 04. Aplicación Web a Medida — $1,200–$2,500+
- Desarrollo 100% personalizado según tus necesidades
- Sistema de autenticación (registro, login, roles de usuario)
- Base de datos relacional o no relacional
- Panel de administración completo (dashboard)
- API REST o GraphQL
- Integraciones con servicios externos
- Diseño responsivo profesional
- Documentación técnica básica
- Soporte post-lanzamiento (30 días)
- Revisiones ilimitadas durante el desarrollo
- **Ideal para:** Startups, empresas con procesos específicos, plataformas SaaS

---

## 3. SERVICIOS ADICIONALES (ADD-ONS) — Nueva Sección

| Servicio | Precio | Descripción |
|----------|--------|-------------|
| SEO Básico | $80–$150 | Palabras clave, meta tags, sitemap XML, Google Search Console |
| SEO Avanzado + Contenido | $200–$400 | SEO básico + estrategia de contenido, análisis de competencia, reporte mensual |
| Google Analytics + Reportes | $50–$100 | GA4 con panel de métricas y reporte inicial |
| Mantenimiento Mensual | $50–$150/mes | Actualizaciones, respaldos, pequeños cambios, soporte técnico |
| Diseño de Logo | $80–$150 | 2–3 propuestas, 2 revisiones, entrega PNG/SVG/PDF |
| Dominio + Hosting (1er año) | $60–$120/año | Dominio personalizado + hosting rápido y seguro |
| Página Adicional | $40–$80 c/u | Página extra con diseño consistente |
| Integración de Chat en Vivo | $50–$80 | WhatsApp, Tawk.to o similar |
| Correos Corporativos | $30–$60 | Correos con dominio propio (ej: info@tunegocio.com) |
| Multi-idioma | $100–$250 | Sitio en 2+ idiomas con selector de idioma |

---

## 4. SECCIÓN "CÓMO FUNCIONA" — Actualizar

Los 6 pasos del proceso:
1. **Consulta Inicial (Gratis)** — Conversamos sobre tu proyecto y objetivos
2. **Propuesta y Presupuesto** — Propuesta detallada con alcance, tiempos y precio
3. **Anticipo del 50%** — Se inicia el trabajo con anticipo del 50%
4. **Desarrollo y Revisiones** — Avances para aprobación y cambios
5. **Entrega y Pago Final** — Aprobación + pago del 50% restante + entrega
6. **Soporte Post-Lanzamiento** — Soporte técnico según el paquete

---

## 5. DATOS DE CONTACTO

```
Email: chacontsebastian@gmail.com
Teléfono: +593 939 398 090
Web: hazmiweb.lat
Ubicación: Cuenca, Ecuador
```

> **Nota:** Actualizar phone en constants.ts de "+593 93 939 8090" a "+593 939 398 090"

---

## 6. ACTUALIZACIONES DE DISEÑO / UI

### Hero Section
- [ ] Cambiar precio "$20" a "desde $200"
- [ ] Actualizar CTA y texto descriptivo para reflejar los servicios reales
- [ ] Mantener animaciones actuales

### Pricing Section (Reestructurar completamente)
- [ ] De 3 columnas a 4 columnas (o 2x2 en mobile)
- [ ] Usar los 4 paquetes del PDF
- [ ] Marcado "Más Popular" en el paquete de Sitio Corporativo o E-Commerce
- [ ] Agregar tiempo de entrega estimado por plan
- [ ] Agregar etiqueta "Ideal para" en cada plan
- [ ] Colores: Azul (Landing), Púrpura (Corporativo), Verde (E-Commerce), Ámbar (App)

### Nueva Sección: Add-ons / Servicios Adicionales
- [ ] Crear componente `AddonsSection.tsx`
- [ ] Tabla o grid de tarjetas con los 10 servicios adicionales
- [ ] Diseño moderno con iconos
- [ ] Animaciones de entrada

### Process Section (Actualizar HowItWorksSection)
- [ ] Actualizar los 6 pasos con el texto del PDF
- [ ] Diseño de timeline horizontal o vertical numerado
- [ ] Mejorar visual del paso "Consulta Inicial (Gratis)"

### Constants.ts
- [ ] Actualizar PRICE a "desde $200"
- [ ] Actualizar teléfono
- [ ] Agregar los 4 SERVICE_PACKAGES con todos los detalles
- [ ] Agregar ADDONS array
- [ ] Agregar PROCESS_STEPS array

---

## 7. ORDEN DE IMPLEMENTACIÓN

### Fase 1 — Datos (sin riesgo de romper UI)
1. Actualizar `src/utils/constants.ts` con todos los nuevos datos
2. Actualizar `src/utils/schemas.ts` con los nuevos precios

### Fase 2 — Componentes Existentes
3. Actualizar `PricingSection.tsx` con 4 paquetes
4. Actualizar `HeroSection.tsx` precio hero
5. Actualizar "Cómo Funciona" con los 6 pasos del PDF

### Fase 3 — Nuevo Componente
6. Crear `AddonsSection.tsx`
7. Registrar en `HomePage.tsx`

### Fase 4 — Revisión Final
8. Verificar mobile responsiveness
9. Verificar animaciones
10. Build de producción sin errores

---

## 8. ARCHIVOS A MODIFICAR

| Archivo | Tipo de cambio |
|---------|---------------|
| `src/utils/constants.ts` | Actualización de datos (precios, paquetes, add-ons) |
| `src/components/sections/PricingSection.tsx` | Reestructurar a 4 paquetes |
| `src/components/sections/HeroSection.tsx` | Actualizar precio hero |
| `src/pages/HomePage.tsx` | Agregar AddonsSection |
| `src/utils/schemas.ts` | Actualizar precios en structured data |
| `src/components/sections/AddonsSection.tsx` | **NUEVO** |

---

## 9. CRITERIOS DE ÉXITO

- [ ] Todos los precios coinciden con el catálogo PDF
- [ ] Los 4 paquetes están visibles en PricingSection
- [ ] La sección de Add-ons muestra los 10 servicios
- [ ] El número de teléfono está correcto en todo el sitio
- [ ] `npm run build` pasa sin errores TypeScript
- [ ] El sitio se ve profesional en mobile y desktop
- [ ] Las animaciones funcionan correctamente

---

*Fuente de datos: `servicios-web.pdf` — Catálogo de Servicios y Precios de HazMiWeb*
