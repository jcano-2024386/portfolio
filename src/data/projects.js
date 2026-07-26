export const categories = [
  { id: "all", label: "Todos" },
  { id: "featured", label: "Destacados" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
]

/**
 * Proyectos del portafolio (rúbrica Kinal):
 * título, descripción, habilidades aprendidas, GitHub, capturas y despliegue cuando existe.
 */
export const projects = [
  {
    id: "kinalsports",
    name: "Kinalsports",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Plataforma de gestión deportiva: reservas de campos, torneos, equipos y panel administrativo. Monorepo con autenticación, API admin y cliente React.",
    learned: [
      "Arquitectura monorepo con microservicios",
      "JWT entre auth-service y server-admin",
      "React 19 + Vite + Tailwind en panel admin",
      "Upload de imágenes con Cloudinary",
    ],
    stack: ["React 19", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/jcano-2024386/Kinalsports",
    demo: null,
    year: "2026",
    impact: "Proyecto principal — arquitectura real con auth-service y server-admin.",
    screenshots: [
      {
        label: "Panel admin",
        tone: "violet",
        image: "/screenshots/kinalsports-admin.svg",
      },
      {
        label: "Reservas",
        tone: "teal",
        image: "/screenshots/kinalsports-reservas.svg",
      },
    ],
  },
  {
    id: "k-bank",
    name: "K-BANK",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Proyecto de banco: gestión de operaciones financieras y estructura orientada a un sistema bancario académico.",
    learned: [
      "Modelado de dominio bancario",
      "Organización de un proyecto completo",
      "Buenas prácticas de repositorio",
    ],
    stack: ["C#", "Backend", "Git"],
    github: "https://github.com/jcano-2024386/K-BANK",
    demo: null,
    year: "2026",
    impact: "Proyecto propio de banca académica.",
    screenshots: [
      {
        label: "Dashboard banco",
        tone: "emerald",
        image: "/screenshots/banco-dashboard.svg",
      },
    ],
  },
  {
    id: "k-food",
    name: "Restaurante K-FOOD",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Sistema de restaurante para gestionar pedidos, menú y operaciones del negocio gastronómico.",
    learned: [
      "Desarrollo en C#",
      "Modelado de un negocio real",
      "Estructura de proyecto orientada a módulos",
    ],
    stack: ["C#", ".NET"],
    github: "https://github.com/jcano-2024386/Restaurante-K-FOOD",
    demo: null,
    year: "2026",
    impact: "Proyecto propio — dominio de restaurante.",
    screenshots: [
      {
        label: "Interfaz restaurante",
        tone: "amber",
        image: "/screenshots/react-app.svg",
      },
    ],
  },
  {
    id: "gestor-opiniones",
    name: "Gestor de Opiniones",
    category: "backend",
    featured: true,
    hasUi: false,
    description:
      "Gestor de opiniones desarrollado en C#. Permite administrar y organizar feedback de usuarios.",
    learned: [
      "Backend con C#",
      "CRUD y lógica de negocio",
      "Organización de servicios",
    ],
    stack: ["C#", ".NET"],
    github: "https://github.com/jcano-2024386/gestor-opiniones",
    demo: null,
    year: "2026",
    impact: "Proyecto propio de gestión de opiniones.",
    screenshots: [
      {
        label: "Captura de código",
        tone: "violet",
        image: "/screenshots/auth-code.svg",
      },
    ],
  },
  {
    id: "coperex",
    name: "COPEREX API",
    category: "backend",
    featured: true,
    hasUi: false,
    description:
      "API REST para la feria Interfer: registro de empresas, filtros, reportes Excel y administración con JWT, rate limiting y validación.",
    learned: [
      "Diseño de API REST versionada (/coperex/v1)",
      "Seguridad: JWT, bcrypt, helmet, CORS",
      "Reportes Excel y filtros compuestos",
      "Documentación Postman y seeds de admin",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "ExcelJS"],
    github: "https://github.com/jcano-2024386/COPEREX-API",
    demo: null,
    year: "2026",
    impact: "Documentación completa y seguridad lista para uso académico.",
    screenshots: [
      {
        label: "Captura de código / API",
        tone: "emerald",
        image: "/screenshots/coperex-code.svg",
      },
    ],
  },
  {
    id: "signtrack",
    name: "SignTrack",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Aplicación inclusiva tipo Teams con reconocimiento de lenguaje de señas. Microservicios C#, React, MediaPipe y Docker.",
    learned: [
      "Microservicios .NET (Identity, Gateway, Calls)",
      "Integración de IA / MediaPipe",
      "Scrum y contratos JWT entre servicios",
      "Frontend React + Vite para videollamada inclusiva",
    ],
    stack: ["C#", "React", "MediaPipe", "Docker", "PostgreSQL"],
    github: "https://github.com/jcano-2024386/SignTrack",
    demo: null,
    year: "2026",
    impact: "Mayor impacto técnico — accesibilidad e inclusión.",
    screenshots: [
      {
        label: "Interfaz chat",
        tone: "blue",
        image: "/screenshots/signtrack-chat.svg",
      },
      {
        label: "Reconocimiento",
        tone: "cyan",
        image: "/screenshots/signtrack-ia.svg",
      },
    ],
  },
  {
    id: "cotiradar",
    name: "CotiRadar",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Plataforma de inteligencia pública para detectar sobreprecio en compras gubernamentales. Hack@LATAM 2025 con IA y más de 15K contratos.",
    learned: [
      "Análisis de datos públicos con IA",
      "Deploy en Vercel y producto demo",
      "Bot de WhatsApp para consultas",
      "Visualización de riesgo y redes de contratos",
    ],
    stack: ["React", "Node.js", "Python", "LLM", "WhatsApp Bot"],
    github: "https://github.com/jcano-2024386/CotiRadar",
    demo: "https://web-seven-zeta-97.vercel.app",
    year: "2025",
    impact: "Hackathon — demo en vivo con análisis de cotizaciones por IA.",
    screenshots: [
      {
        label: "Demo en vivo",
        tone: "rose",
        image: "/screenshots/cotiradar-home.png",
      },
      {
        label: "Radar de obras",
        tone: "amber",
        image: "/screenshots/cotiradar-radar.svg",
      },
    ],
  },
  {
    id: "auth-service",
    name: "AuthService",
    category: "backend",
    featured: true,
    hasUi: false,
    description:
      "Servicio de autenticación con arquitectura limpia en .NET: capas Api, Application, Domain y Persistence.",
    learned: [
      "Clean Architecture en C#",
      "Separación Domain / Application / Persistence",
      "JWT y capas de aplicación",
    ],
    stack: ["C#", ".NET", "Clean Architecture", "JWT"],
    github: "https://github.com/jcano-2024386/AuthService",
    demo: null,
    year: "2026",
    impact: "Dominio de patrones enterprise en C#.",
    screenshots: [
      {
        label: "Captura de código",
        tone: "violet",
        image: "/screenshots/auth-code.svg",
      },
    ],
  },
  {
    id: "sistema-bancario",
    name: "Sistema Bancario",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Sistema bancario con microservicios .NET y Node.js, Docker Compose y metodología Scrum documentada.",
    learned: [
      "Arquitectura dual-stack (.NET + Node)",
      "Docker Compose para entorno local",
      "Scrum y documentación de endpoints",
    ],
    stack: ["C#", "Node.js", "Docker", "MongoDB", "Scrum"],
    github: "https://github.com/jcano-2024386/Sistema-Bancario-SCRUM",
    demo: null,
    year: "2025",
    impact: "Proyecto académico con arquitectura dual-stack.",
    screenshots: [
      {
        label: "Dashboard banco",
        tone: "emerald",
        image: "/screenshots/banco-dashboard.svg",
      },
    ],
  },
  {
    id: "cet-propuesta",
    name: "CET Propuesta",
    category: "frontend",
    featured: false,
    hasUi: true,
    description:
      "Propuesta de clínica: sitio/presentación orientada a comunicar el proyecto CET.",
    learned: [
      "Presentación de propuestas técnicas",
      "JavaScript para interfaces",
      "Comunicación de producto",
    ],
    stack: ["JavaScript", "HTML"],
    github: "https://github.com/jcano-2024386/CET-Propuesta",
    demo: null,
    year: "2026",
    impact: "Propuesta formal de proyecto clínico.",
    screenshots: [
      {
        label: "Propuesta CET",
        tone: "slate",
        image: "/screenshots/laboratorio-1.svg",
      },
    ],
  },
  {
    id: "laboratorio-1",
    name: "Laboratorio 1",
    category: "frontend",
    featured: true,
    hasUi: true,
    description:
      "Sitio web multipágina con HTML, CSS y JavaScript. Fundamentos de diseño web y navegación estática.",
    learned: [
      "Estructura semántica HTML",
      "Estilos CSS y layouts",
      "Navegación multipágina",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jcano-2024386/Laboratorio-1",
    demo: "/demos/laboratorio-1/index.html",
    year: "2026",
    impact: "Fundamentos de desarrollo web front-end.",
    screenshots: [
      {
        label: "Landing lab",
        tone: "slate",
        image: "/screenshots/laboratorio-1.svg",
      },
    ],
  },
  {
    id: "react-app",
    name: "React App",
    category: "frontend",
    featured: false,
    hasUi: true,
    description:
      "Aplicación React de práctica con Vite. Exploración de componentes y estructura SPA.",
    learned: ["Componentes React", "Vite como bundler", "Estructura SPA"],
    stack: ["React", "Vite"],
    github: "https://github.com/jcano-2024386/React-app",
    demo: null,
    year: "2026",
    impact: "Transición de HTML estático a React.",
    screenshots: [
      {
        label: "SPA React",
        tone: "indigo",
        image: "/screenshots/react-app.svg",
      },
    ],
  },
]
