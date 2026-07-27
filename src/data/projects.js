export const categories = [
  { id: "all", label: "Todos" },
  { id: "featured", label: "Destacados" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
]

/**
 * Núcleo: KinalMedic, Banco King, Sistema de Restaurante.
 * Complemento: Kinalsports, COPEREX, SignTrack.
 */
export const projects = [
  {
    id: "kinalmedic",
    name: "KinalMedic",
    short: "Enfermería institucional",
    category: "featured",
    featured: true,
    hasUi: true,
    status: "deployed",
    role: "Full Stack · Backend lead",
    description:
      "Plataforma de gestión de enfermería institucional para Fundación Kinal. Centraliza alumnos, historiales clínicos, signos vitales, inventario de medicamentos, disponibilidad del personal médico y notificaciones de emergencia en tiempo real.",
    longDescription:
      "El sistema se diseñó para digitalizar el área de enfermería escolar: el panel React permite al personal médico abrir módulos de registro, inventario, usuarios y estado del personal. En backend, microservicios Node.js separan students, medical-records, inventory y availability, con autenticación JWT y roles. Incluye documentación Swagger de los endpoints CRUD y flujos de autorización Bearer para operaciones admin.",
    learned: [
      "Microservicios Node.js (students, records, inventory, availability)",
      "Panel admin React + Vite con módulos por dominio",
      "JWT, roles y autorización Bearer en Swagger",
      "Inventario con alertas y notificaciones de asistencia",
      "Modelado de historiales y signos vitales",
    ],
    highlights: [
      "Panel principal con accesos a 6 módulos clínicos",
      "API documentada (OAS 3.0) para historiales médicos",
      "Alertas de emergencia y disponibilidad en campus",
    ],
    modules: ["Registro médico", "Inventario", "Notificaciones", "Usuarios", "Personal"],
    stack: ["Node.js", "React", "MongoDB", "JWT", "Docker"],
    github: "https://github.com/jcano-2024386/KinalMedic",
    demo: null,
    year: "2026",
    impact: "Digitalización del área de enfermería en Kinal.",
    deploy: {
      env: "GitHub · microservicios locales",
      runtime: "Node 20 · React/Vite",
      db: "MongoDB",
    },
    screenshots: [
      { label: "Panel principal", tone: "moss", image: "/screenshots/projects/kinalmedic-ui.jpg" },
      { label: "API Swagger", tone: "ink", image: "/screenshots/projects/kinalmedic-api-swagger.jpg" },
      { label: "API historiales", tone: "cream", image: "/screenshots/projects/kinalmedic-api-records.jpg" },
      { label: "Branding enfermería", tone: "moss", image: "/screenshots/projects/kinalmedic-enfermeria.png" },
    ],
  },
  {
    id: "k-bank",
    name: "Banco King",
    short: "Banca digital dual-stack",
    category: "featured",
    featured: true,
    hasUi: true,
    status: "deployed",
    role: "Scrum Master · Full Stack",
    description:
      "Sistema bancario digital con cuentas, depósitos, retiros, transferencias atómicas, préstamos y Auth Service en ASP.NET Core. Frontend de administración con listados de movimientos, filtros y búsqueda por UUID.",
    longDescription:
      "Como Scrum Master coordiné sprints y entregables del producto. La arquitectura combina servicios Node.js para dominio bancario con un Auth Service .NET bajo Clean Architecture (Api, Application, Domain, Persistence). El panel muestra movimientos con tipo DEPOSITO, montos en quetzales, paginación y búsqueda. Se aplicaron límites de seguridad, JWT y contenedores Docker para entornos reproducibles.",
    learned: [
      "Microservicios Node.js + .NET en el mismo producto",
      "Transacciones atómicas y límites de seguridad",
      "Clean Architecture en C#",
      "JWT, Cloudinary y Docker",
      "Facilitación Scrum (planning, dailies, review)",
    ],
    highlights: [
      "UI de movimientos bancarios con filtros y paginación",
      "Auth Service .NET con capas enterprise",
      "Operaciones de depósito, retiro y transferencia",
    ],
    modules: ["Dashboard", "Usuarios", "Cuentas", "Movimientos", "Depósitos", "Transferencias"],
    stack: ["Node.js", "C#", "MongoDB", "PostgreSQL", "Docker"],
    github: "https://github.com/jcano-2024386/K-BANK",
    demo: null,
    year: "2026",
    impact: "Práctica Supervisada — banca con arquitectura dual-stack.",
    deploy: {
      env: "GitHub · Docker Compose",
      runtime: "Node · ASP.NET Core 8",
      db: "MongoDB + PostgreSQL",
    },
    screenshots: [
      { label: "Movimientos bancarios", tone: "ink", image: "/screenshots/projects/bancoking-ui.jpg" },
      { label: "Identidad Banco King", tone: "cream", image: "/screenshots/projects/kbank-icon.png" },
    ],
  },
  {
    id: "restaurante",
    name: "Sistema de Restaurante",
    short: "Heaven Flavor · ops gastronómicas",
    category: "featured",
    featured: true,
    hasUi: true,
    status: "deployed",
    role: "Full Stack · Práctica Supervisada",
    description:
      "Sistema de gestión de restaurantes (Heaven Flavor): sucursales, mesas, menús, pedidos, reservaciones y eventos. API Node.js + Auth Service .NET con roles ADMIN, GERENTE, MESERO y CLIENTE.",
    longDescription:
      "Cubre el ciclo operativo de un restaurante: alta de sucursales y mesas, catálogo de menús, pedidos con estados (PENDIENTE → EN_PROCESO → LISTO → ENTREGADO/CANCELADO), reservaciones y eventos. El Auth Service .NET emite JWT con roles por módulo; el backend Node expone estadísticas y reglas de negocio para liberar mesas al cerrar pedidos. Enfoque en flujos claros y separación de responsabilidades por rol.",
    learned: [
      "CRUD de dominio gastronómico completo",
      "Máquina de estados en pedidos y reservaciones",
      "Auth Service .NET + JWT por roles",
      "Estadísticas operativas por módulo",
      "Modelado multi-sucursal",
    ],
    highlights: [
      "Roles ADMIN / GERENTE / MESERO / CLIENTE",
      "Flujo de pedidos con liberación de mesa",
      "API + Auth Service desacoplados",
    ],
    modules: ["Sucursales", "Mesas", "Menús", "Pedidos", "Reservaciones", "Eventos"],
    stack: ["Node.js", "C#", "MongoDB", "PostgreSQL", "React"],
    github: "https://github.com/jcano-2024386/Restaurante-K-FOOD",
    demo: null,
    year: "2026",
    impact: "Práctica Supervisada — operación completa de restaurante.",
    deploy: {
      env: "GitHub · API + Auth Service",
      runtime: "Node · .NET",
      db: "MongoDB + PostgreSQL",
    },
    screenshots: [
      { label: "Heaven Flavor", tone: "amber", image: "/screenshots/projects/kfood-logo.jpeg" },
      { label: "App icon", tone: "moss", image: "/screenshots/projects/kfood-icon.jpeg" },
    ],
  },
  {
    id: "kinalsports",
    name: "Kinalsports",
    short: "Reservas y torneos deportivos",
    category: "featured",
    featured: true,
    hasUi: true,
    status: "deployed",
    role: "Full Stack",
    description:
      "Plataforma de gestión deportiva: reservas de campos, torneos, equipos y panel administrativo. Monorepo con autenticación, API admin y cliente React.",
    longDescription:
      "Monorepo que integra authentication-service, server-admin y Client-admin. El cliente React 19 + Vite + Tailwind consume APIs protegidas con JWT; Cloudinary cubre carga de assets. Sirve para administrar espacios deportivos, torneos y equipos con una arquitectura de servicios separada y lista para crecer.",
    learned: [
      "Arquitectura monorepo multi-servicio",
      "JWT entre auth-service y server-admin",
      "React 19 + Vite + Tailwind",
      "Upload de medios con Cloudinary",
      "Panel administrativo deportivo",
    ],
    highlights: [
      "Auth + admin API + cliente en un solo repo",
      "Reservas de campos y gestión de torneos",
      "Stack moderno React 19",
    ],
    modules: ["Auth", "Reservas", "Torneos", "Equipos", "Admin"],
    stack: ["React 19", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/jcano-2024386/Kinalsports",
    demo: null,
    year: "2026",
    impact: "Arquitectura real con auth-service y server-admin.",
    deploy: {
      env: "GitHub monorepo",
      runtime: "Node · React 19",
      db: "MongoDB",
    },
    screenshots: [
      { label: "Marca / panel", tone: "ink", image: "/screenshots/projects/kinalsports-logo.png" },
    ],
  },
  {
    id: "coperex",
    name: "COPEREX API",
    short: "API feria Interfer",
    category: "backend",
    featured: true,
    hasUi: false,
    status: "api",
    role: "Backend",
    description:
      "API REST para la feria Interfer: registro de empresas, filtros, reportes Excel y administración con JWT, rate limiting y validación.",
    longDescription:
      "Backend académico orientado a seguridad y operación: registro y edición de empresas (sin DELETE por requisito), filtros, exportación Excel, JWT + bcrypt, helmet y rate limiting. Documentación Postman para consumo del cliente. Enfocada en prácticas REST, validación de entrada y endurecimiento de endpoints.",
    learned: [
      "API REST con reglas de negocio claras",
      "Seguridad JWT, bcrypt, helmet y rate limit",
      "Reportes Excel con ExcelJS",
      "Documentación Postman",
      "Validación de payloads",
    ],
    highlights: [
      "Sin DELETE de empresas (requisito del proyecto)",
      "Reportes Excel listos para feria",
      "Stack Express endurecido",
    ],
    modules: ["Empresas", "Auth", "Filtros", "Reportes Excel"],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "ExcelJS"],
    github: "https://github.com/jcano-2024386/COPEREX-API",
    demo: null,
    year: "2026",
    impact: "API segura lista para uso académico.",
    deploy: {
      env: "GitHub · API REST",
      runtime: "Node / Express",
      db: "MongoDB",
    },
    screenshots: [
      { label: "Código / API", tone: "moss", image: "/screenshots/coperex-code.svg" },
    ],
  },
  {
    id: "signtrack",
    name: "SignTrack",
    short: "Señas · videollamada inclusiva",
    category: "featured",
    featured: true,
    hasUi: true,
    status: "prototype",
    role: "Full Stack · IA",
    description:
      "Aplicación inclusiva tipo Teams con reconocimiento de lenguaje de señas. Microservicios C#, React, MediaPipe y Docker para acercar la comunicación a personas sordas o con discapacidad auditiva.",
    longDescription:
      "SignTrack combina videollamada y reconocimiento de señas: microservicios .NET, contratos JWT entre servicios, frontend React y pipeline MediaPipe para IA. La idea es traducir/apoyar la comunicación en tiempo real. Docker facilita levantar el ecosistema local; PostgreSQL persiste datos de sesión y usuarios.",
    learned: [
      "Microservicios .NET con contratos claros",
      "Integración MediaPipe / IA de visión",
      "JWT entre servicios",
      "Frontend React orientado a videollamada",
      "Orquestación con Docker",
    ],
    highlights: [
      "Enfoque en accesibilidad e inclusión",
      "Pipeline de reconocimiento de señas",
      "Arquitectura de microservicios + React",
    ],
    modules: ["Auth", "Videollamada", "Reconocimiento", "IA dataset"],
    stack: ["C#", "React", "MediaPipe", "Docker", "PostgreSQL"],
    github: "https://github.com/jcano-2024386/SignTrack",
    demo: null,
    year: "2026",
    impact: "Accesibilidad e inclusión.",
    deploy: {
      env: "GitHub · Docker",
      runtime: ".NET · React · MediaPipe",
      db: "PostgreSQL",
    },
    screenshots: [
      { label: "Chat", tone: "ink", image: "/screenshots/signtrack-chat.svg" },
      { label: "Reconocimiento", tone: "cream", image: "/screenshots/signtrack-ia.svg" },
    ],
  },
]
