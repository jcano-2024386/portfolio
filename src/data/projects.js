export const categories = [
  { id: "all", label: "Todos" },
  { id: "featured", label: "Destacados" },
]

export const projects = [
  {
    id: "kinalmedic",
    name: "KinalMedic",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Plataforma de gestión de enfermería institucional: alumnos, historiales clínicos, inventario de medicamentos, disponibilidad del personal y notificaciones. Arquitectura de microservicios con panel admin React.",
    learned: [
      "Microservicios Node.js (students, records, inventory, availability)",
      "Panel admin React + Vite",
      "JWT y roles de acceso",
      "Inventario con alertas y notificaciones",
    ],
    stack: ["Node.js", "React", "MongoDB", "JWT", "Docker"],
    github: "https://github.com/jcano-2024386/KinalMedic",
    demo: null,
    year: "2026",
    impact: "Digitalización del área de enfermería en Kinal.",
    screenshots: [
      { label: "Panel principal", tone: "moss", image: "/screenshots/projects/kinalmedic-ui.jpg" },
      { label: "Branding enfermería", tone: "cream", image: "/screenshots/projects/kinalmedic-enfermeria.png" },
      { label: "API historiales", tone: "ink", image: "/screenshots/projects/kinalmedic-api-records.jpg" },
    ],
  },
  {
    id: "k-bank",
    name: "Banco King",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Sistema bancario digital: cuentas, depósitos, retiros, transferencias atómicas, préstamos y Auth Service en ASP.NET Core con Clean Architecture. Scrum Master del equipo.",
    learned: [
      "Microservicios Node.js + .NET",
      "Transacciones atómicas y límites de seguridad",
      "Clean Architecture en C#",
      "JWT, Cloudinary y Docker",
    ],
    stack: ["Node.js", "C#", "MongoDB", "PostgreSQL", "Docker"],
    github: "https://github.com/jcano-2024386/K-BANK",
    demo: null,
    year: "2026",
    impact: "Práctica Supervisada — banca con arquitectura dual-stack.",
    screenshots: [
      { label: "Movimientos bancarios", tone: "ink", image: "/screenshots/projects/bancoking-ui.jpg" },
      { label: "Identidad Banco King", tone: "cream", image: "/screenshots/projects/kbank-icon.png" },
    ],
  },
  {
    id: "restaurante",
    name: "Sistema de Restaurante",
    category: "featured",
    featured: true,
    hasUi: true,
    description:
      "Sistema de gestión de restaurantes (Heaven Flavor): sucursales, mesas, menús, pedidos, reservaciones y eventos. API Node.js + Auth Service .NET con roles ADMIN, GERENTE, MESERO y CLIENTE.",
    learned: [
      "CRUD de dominio gastronómico",
      "Flujos de estado en pedidos y reservaciones",
      "Auth Service .NET + JWT",
      "Estadísticas y roles por módulo",
    ],
    stack: ["Node.js", "C#", "MongoDB", "PostgreSQL", "React"],
    github: "https://github.com/jcano-2024386/Restaurante-K-FOOD",
    demo: null,
    year: "2026",
    impact: "Práctica Supervisada — operación completa de restaurante.",
    screenshots: [
      { label: "Heaven Flavor", tone: "amber", image: "/screenshots/projects/kfood-logo.jpeg" },
      { label: "App icon", tone: "moss", image: "/screenshots/projects/kfood-icon.jpeg" },
    ],
  },
]
