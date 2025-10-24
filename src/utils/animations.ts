/**
 * Variantes de animación para Framer Motion
 * Usar con motion components para crear animaciones consistentes
 */

// Fade in desde abajo
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

// Fade in simple
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

// Scale in (zoom in)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
}

// Slide in desde la izquierda
export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

// Slide in desde la derecha
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

// Fade in desde arriba
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

// Animación para listas (stagger children)
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Item de lista con stagger
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

/**
 * Configuraciones de transición
 */

// Transición suave por defecto
export const defaultTransition = {
  duration: 0.5,
  ease: [0.6, -0.05, 0.01, 0.99] as const
}

// Transición con spring (rebote)
export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15
}

// Transición rápida
export const fastTransition = {
  duration: 0.3,
  ease: "easeOut"
}

// Transición lenta
export const slowTransition = {
  duration: 0.8,
  ease: "easeInOut"
}

/**
 * Variantes para modales y overlays
 */
export const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const modalContent = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 }
}

/**
 * Variantes para navegación
 */
export const navItem = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export const mobileMenuContainer = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2, delay: 0.1 }
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3, delay: 0.1 },
      opacity: { duration: 0.2 }
    }
  }
}

/**
 * Hover animations
 */
export const hoverScale = {
  scale: 1.05,
  transition: springTransition
}

export const hoverLift = {
  y: -5,
  transition: springTransition
}

export const hoverGlow = {
  boxShadow: "0 10px 40px rgba(59, 130, 246, 0.6)",
  transition: defaultTransition
}
