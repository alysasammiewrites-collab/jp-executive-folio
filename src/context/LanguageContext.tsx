import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "EN" | "ES";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.about": { EN: "About", ES: "Sobre" },
  "nav.expertise": { EN: "Expertise", ES: "Experticia" },
  "nav.experience": { EN: "Experience", ES: "Experiencia" },
  "nav.achievements": { EN: "Achievements", ES: "Logros" },
  "nav.education": { EN: "Education", ES: "Educación" },
  "nav.references": { EN: "References", ES: "Referencias" },
  "nav.contact": { EN: "Contact", ES: "Contacto" },

  // Hero
  "hero.title": { EN: "Senior Contract Management & Commercial Leader", ES: "Líder Sénior en Gestión de Contratos y Asuntos Comerciales" },
  "hero.stats": { EN: "35+ Years Experience  ·  EPCM, EPC, Energy & Infrastructure  ·  Contracts up to $3B+", ES: "Más de 35 Años de Experiencia  ·  EPCM, EPC, Energía e Infraestructura  ·  Contratos de hasta más de USD $3 Billones" },
  "hero.subtitle": { EN: "Delivering commercial strategy, contract leadership, and risk-managed outcomes across global projects.", ES: "Entregando estrategias comerciales, liderazgo contractual y resultados con gestión de riesgos en proyectos globales." },
  "hero.viewExperience": { EN: "View Experience", ES: "Ver Experiencia" },
  "hero.downloadCV": { EN: "Download CV", ES: "Bajar CV" },

  // About
  "about.label": { EN: "About", ES: "Sobre" },
  "about.title": { EN: "Executive Summary", ES: "Resumen Ejecutivo" },
  "about.p1": { EN: "Senior Contract Management and Commercial Leader with over 30 years of international experience spanning Oil & Gas, Mining, Infrastructure, Renewable Energy, and Data Center projects. Recognized for deep expertise in EPCM/EPC contract structures, claims management, risk allocation, and high-stakes commercial negotiations.", ES: "Líder Sénior en Gestión de Contratos y Asuntos Comerciales con más de 30 años de experiencia internacional en proyectos de petróleo y gas, minería, infraestructura, energías renovables y centros de datos. Reconocido por su amplia experiencia en estructuras contractuales EPCM/EPC, gestión de reclamaciones, control de riesgos y negociaciones comerciales de alto nivel." },
  "about.p2": { EN: "Proven track record managing contracts valued up to", ES: "Trayectoria comprobada en la gestión de contratos por un valor superior a" },
  "about.p2value": { EN: "$3B+", ES: "USD $3 Billones" },
  "about.p2rest": { EN: ", leading cross-functional teams, and delivering measurable commercial outcomes through strategic contract planning, rigorous cost control, and effective dispute resolution.", ES: ", liderando equipos multifuncionales y logrando resultados comerciales medibles mediante la planificación estratégica de contratos, un control riguroso de costos y una resolución eficaz de disputas." },
  "about.p3a": { EN: "Extensive global exposure across", ES: "Amplia experiencia global en" },
  "about.p3regions": { EN: "Latin America, the United States, Nigeria", ES: "Latinoamérica, Estados Unidos, Nigeria" },
  "about.p3and": { EN: ", and the", ES: " y el" },
  "about.p3caribbean": { EN: "Caribbean", ES: "Caribe" },
  "about.p3rest": { EN: ", with a demonstrated ability to navigate complex multinational stakeholder environments, regulatory frameworks, and contractor ecosystems.", ES: ", con una capacidad demostrada para desenvolverse en entornos complejos con múltiples partes interesadas, marcos regulatorios y ecosistemas de contratistas." },

  // Expertise
  "expertise.label": { EN: "Capabilities", ES: "Capacidades" },
  "expertise.title": { EN: "Core Expertise", ES: "Experticias Principales" },
  "expertise.0": { EN: "Contract Management", ES: "Gestión de Contratos" },
  "expertise.1": { EN: "Commercial Management", ES: "Gestión Comercial" },
  "expertise.2": { EN: "EPCM / EPC Contracts", ES: "Contratos EPCM/EPC" },
  "expertise.3": { EN: "FIDIC Contracts", ES: "Contratos FIDIC" },
  "expertise.4": { EN: "Claims & Dispute Resolution", ES: "Reclamaciones y Resolución de Controversias (Disputas)" },
  "expertise.5": { EN: "Change Order Management", ES: "Gestión de Órdenes de Cambio" },
  "expertise.6": { EN: "Risk Management", ES: "Gestión de Riesgos" },
  "expertise.7": { EN: "Cost Control & Budgeting", ES: "Control de Costos y Presupuestos" },
  "expertise.8": { EN: "Procurement & Supplier Management", ES: "Compras y Gestión de Proveedores" },
  "expertise.9": { EN: "Project Controls (EVM, KPI, WBS, CBS)", ES: "Control de Proyectos (EVM, KPI, WBS, CBS)" },
  "expertise.10": { EN: "Tendering (RFQ, RFP, ITB)", ES: "Licitaciones (RFQ, RFP, ITB)" },
  "expertise.11": { EN: "Stakeholder Management", ES: "Gestión de Partes Interesadas" },

  // Experience
  "exp.label": { EN: "Career", ES: "Carrera" },
  "exp.title": { EN: "Professional Experience", ES: "Experiencia Profesional" },
  "exp.viewFull": { EN: "View Full Experience", ES: "Ver la Experiencia Completa" },

  // Experience items
  "exp.0.period": { EN: "Nov 2023 – Present", ES: "Noviembre de 2023 – Presente" },
  "exp.0.title": { EN: "Contract Team Lead", ES: "Jefe de Equipo de Contratos" },
  "exp.0.highlight": { EN: "$250M+ Data Center Project", ES: "Proyecto de Centro de Datos de más de $250 millones" },
  "exp.0.b0": { EN: "Lead contract management for $250M+ data center project (40MW infrastructure)", ES: "Lideré la gestión de contratos para un proyecto de centro de datos de $250 millones (infraestructura de 40 MW)" },
  "exp.0.b1": { EN: "Draft, negotiate, and administer EPCM and supplier contracts", ES: "Redacté, negocié y administré contratos EPCM y PMG con proveedores" },
  "exp.0.b2": { EN: "Identify and mitigate commercial and contractual risks across project lifecycle", ES: "Identifiqué y mitigué riesgos comerciales y contractuales a lo largo del ciclo de vida del proyecto" },
  "exp.0.b3": { EN: "Monitor budgets and implement cost optimization strategies", ES: "Monitoreé presupuestos e implementé estrategias de optimización de costos" },

  "exp.1.period": { EN: "Jul 2021 – Sep 2023", ES: "Julio 2021 – Septiembre 2023" },
  "exp.1.title": { EN: "Senior Contract Administrator", ES: "Administrador Senior de Contratos" },
  "exp.1.highlight": { EN: "$100M Solar Plant", ES: "Planta Solar de $100M" },
  "exp.1.b0": { EN: "Managed contracts for $100M renewable energy project (105MW solar plant)", ES: "Gestioné contratos para un proyecto de energía renovable de $100M (planta solar de 105MW)" },
  "exp.1.b1": { EN: "Secured $24M in performance and advance payment bonds", ES: "Obtuve y ejecuté $24M en fianzas de cumplimiento y anticipos" },
  "exp.1.b2": { EN: "Managed 29+ contractual claims and breach cases", ES: "Gestioné más de 29 reclamaciones contractuales y casos de incumplimiento" },
  "exp.1.b3": { EN: "Controlled delay damages and negotiated extension of time (EOT) claims", ES: "Controlé los daños por demora y negocié extensiones de plazo (EOT)" },

  "exp.2.period": { EN: "Oct 2019 – Jul 2020", ES: "Octubre de 2019 – Julio de 2020" },
  "exp.2.title": { EN: "Project Controls Engineer (PEMS)", ES: "Ingeniero de Control de Proyectos (PEMS)" },
  "exp.2.highlight": { EN: "Mining Project", ES: "Proyecto Minero" },
  "exp.2.b0": { EN: "Managed project equipment data using PEMS asset management system", ES: "Gestioné los datos de los equipos del proyecto utilizando el sistema de gestión de activos PEMS" },
  "exp.2.b1": { EN: "Supported forecasting, scheduling, and cost tracking activities", ES: "Brindé apoyo en las actividades de pronóstico, programación y seguimiento de costos" },
  "exp.2.b2": { EN: "Delivered reporting for project planning and execution decisions", ES: "Elaboré informes para la toma de decisiones sobre la planificación y ejecución del proyecto" },

  "exp.3.period": { EN: "Jul 2013 – Aug 2014", ES: "Julio de 2013 – Agosto de 2014" },
  "exp.3.title": { EN: "Lead Project Control Specialist", ES: "Especialista Líder en Control de Proyectos" },
  "exp.3.highlight": { EN: "$3B Offshore Gas Project", ES: "Proyecto Gas Offshore de USD $3 Billones" },
  "exp.3.b0": { EN: "Delivered project controls for $3B offshore gas supply project", ES: "Gestioné el control de proyectos para un proyecto Offshore de suministro de gas de USD $3 Billones" },
  "exp.3.b1": { EN: "Implemented cost control frameworks (WBS, CBS, KPI, EVA)", ES: "Implementé marcos de control de costos (WBS, CBS, KPI, EVA)" },
  "exp.3.b2": { EN: "Managed change orders, forecasting, and cost estimation processes", ES: "Gestioné órdenes de cambio, pronósticos y procesos de estimación de costos" },
  "exp.3.b3": { EN: "Supported FEED and Pre-FEED project phases", ES: "Brindé apoyo en la Ingeniería Conceptual en sus fases FEED y Pre-FEED del proyecto" },

  "exp.4.period": { EN: "Jan 2010 – Jan 2017", ES: "Enero de 2010 – Enero de 2017" },
  "exp.4.title": { EN: "Managing Director / Contract & Project Consultant", ES: "Director General / Consultor de Contratos y Proyectos" },
  "exp.4.highlight": { EN: "$125M Project Delivered", ES: "Proyecto de USD $125 millones entregado" },
  "exp.4.b0": { EN: "Led contract strategy, procurement, and project controls across multiple projects", ES: "Lideré la estrategia de contratos, adquisiciones y control de proyectos en múltiples proyectos" },
  "exp.4.b1": { EN: "Delivered $125M biomass power project feasibility and contract structuring", ES: "Realicé el estudio de viabilidad y la estructuración contractual de un proyecto de energía de biomasa de $125 millones" },
  "exp.4.b2": { EN: "Managed EPC, EPCM, BOT, and PPA contract structures", ES: "Gestioné estructuras contractuales EPC, EPCM, BOT y PPA" },
  "exp.4.b3": { EN: "Directed multidisciplinary teams across engineering and commercial functions", ES: "Dirigí equipos multidisciplinarios en las áreas de ingeniería y aspectos comerciales" },

  // Achievements
  "ach.label": { EN: "Impact", ES: "Impacto" },
  "ach.title": { EN: "Key Achievements", ES: "Logros Clave" },
  "ach.0.label": { EN: "Contracts Managed", ES: "Contratos Gestionados" },
  "ach.1.label": { EN: "Cost Reduction Achieved", ES: "Reducción de costos logrado" },
  "ach.2.label": { EN: "Funding Secured", ES: "Financiamiento obtenido" },
  "ach.3.label": { EN: "Project Delivered", ES: "Proyecto Entregado" },
  "ach.4.label": { EN: "Years Global Experience", ES: "Años de experiencia internacional" },

  // Education
  "edu.label": { EN: "Credentials", ES: "Credenciales" },
  "edu.title": { EN: "Education & Executive Development", ES: "Formación y Desarrollo Ejecutivo" },
  "edu.summary": { EN: "A comprehensive academic foundation combining executive management, international studies, and specialized postgraduate diplomas across procurement, project management, and foreign commerce.", ES: "Una sólida base académica que combina gestión ejecutiva, estudios internacionales y diplomas de posgrado especializados en compras, gestión de proyectos y comercio exterior." },
  "edu.viewDetails": { EN: "View Details", ES: "Ver detalles" },
  "edu.hideDetails": { EN: "Hide Details", ES: "Ocultar detalles" },
  "edu.postgrad": { EN: "Postgraduate & Executive Education", ES: "Estudios de Posgrado y Ejecutivos" },
  "edu.magister": { EN: "Magister – Advanced Management Program (PAG)", ES: "Maestría – Programa Avanzado de Gestión (PAG)" },
  "edu.iesaLocation": { EN: "Instituto de Estudios Superiores de Administración (IESA) – Venezuela", ES: "Instituto de Estudios Superiores de Administración (IESA) – Venezuela" },
  "edu.undergrad": { EN: "Undergraduate Studies", ES: "Estudios de Pregrado" },
  "edu.polsci": { EN: "Political Science / Minor in International Studies", ES: "Ciencias Políticas / Mención en Estudios Internacionales" },
  "edu.liuLocation": { EN: "C.W. Post Center, Long Island University – New York, USA", ES: "Centro C.W. Post, Long Island University – Nueva York, EE. UU." },
  "edu.incomplete": { EN: "Incomplete", ES: "Incompleto" },
  "edu.diplomas": { EN: "Postgraduate Diplomas", ES: "Diplomas de Posgrado" },
  "edu.procurement": { EN: "International Procurement & Materials Management", ES: "Compras Internacionales y Gestión de Materiales" },
  "edu.procurementLoc": { EN: "World Trade Institute, World Trade Center, New York, USA (May – Jul 1998)", ES: "World Trade Institute, World Trade Center, NY – NY, EE. UU. (Mayo – Julio de 1998)" },
  "edu.projectMgmt": { EN: "Project Formulation & Evaluation (Project Management)", ES: "Formulación y Evaluación de Proyectos (Gestión de Proyectos)" },
  "edu.projectMgmtLoc": { EN: "Venezuelan Board of Engineers, Caracas, Venezuela (Feb – Jun 1994)", ES: "Colegio de Ingenieros de Venezuela, Caracas, Venezuela (Febrero – Junio de 1994)" },
  "edu.foreignCommerce": { EN: "Foreign Commerce (Import/Export)", ES: "Comercio Exterior (Importación/Exportación)" },
  "edu.foreignCommerceLoc": { EN: "Venezuelan Export Association (AVEX), Caracas, Venezuela (Jun – Aug 1988)", ES: "Asociación Venezolana de Exportadores (AVEX), Caracas, Venezuela (Junio – Agosto de 1988)" },
  "edu.training": { EN: "Additional Training & Certifications", ES: "Formación y certificaciones adicionales" },
  "edu.trainingDesc": { EN: "Over 30 professional trainings and certifications across Project Controls, Cost Engineering, Leadership, Compliance, and Safety, including programs delivered by Chevron, Bechtel, Project Control Academy, and other international institutions.", ES: "Más de 30 capacitaciones y certificaciones profesionales en Control de Proyectos, Ingeniería de Costos, Liderazgo, Cumplimiento Normativo y Seguridad, incluyendo programas impartidos por Chevron, Bechtel, Project Control Academy y otras instituciones internacionales." },
  "edu.highSchool": { EN: "Secondary Education", ES: "Educación Secundaria" },
  "edu.languages": { EN: "Languages", ES: "Idiomas" },
  "edu.spanish": { EN: "Spanish – Native", ES: "Español – Nativo" },
  "edu.english": { EN: "English – Fluent", ES: "Inglés – Fluido" },
  "edu.closingNote": { EN: "Continuous professional development across a 35+ year international career spanning multiple industries and continents.", ES: "Desarrollo profesional continuo a lo largo de más de 35 años de trayectoria internacional en diversos sectores y continentes." },

  // References
  "ref.label": { EN: "Endorsements", ES: "Recomendaciones" },
  "ref.title": { EN: "Professional References", ES: "Referencias Profesionales" },
  "ref.available": { EN: "Available upon request for direct verification.", ES: "Disponible a solicitud para verificación directa." },
  "ref.former": { EN: "Former", ES: "Anterior" },

  // Global
  "global.label": { EN: "Reach", ES: "Alcance" },
  "global.title": { EN: "Global Experience", ES: "Experiencia Global" },
  "global.latam": { EN: "Latin America", ES: "Latinoamérica" },
  "global.latamDetail": { EN: "Chile, Venezuela, Peru, Colombia, Mexico, Panama", ES: "Chile, Venezuela, Perú, Colombia, México, Panamá" },
  "global.usa": { EN: "United States", ES: "Estados Unidos" },
  "global.usaDetail": { EN: "Corsicana, Texas – Fracking Wells Consultancy", ES: "Corsicana, Texas – Consultoría de Pozos de Fracking" },
  "global.nigeria": { EN: "Nigeria (MEA)", ES: "Nigeria (MEA)" },
  "global.nigeriaDetail": { EN: "Chevron Offshore Operations", ES: "Operaciones Offshore de Chevron" },
  "global.caribbean": { EN: "Caribbean", ES: "Caribe" },
  "global.caribbeanDetail": { EN: "Sint Maarten – Environmental & Energy Projects", ES: "Sint Maarten – Proyectos Ambientales y Energéticos" },

  // Contact
  "contact.label": { EN: "Connect", ES: "Conectar" },
  "contact.title": { EN: "Get in Touch", ES: "Contáctame" },
  "contact.email": { EN: "Email", ES: "Correo Electrónico" },
  "contact.phone": { EN: "Phone", ES: "Móvil / Celular" },
  "contact.linkedin": { EN: "LinkedIn", ES: "LinkedIn" },
  "contact.location": { EN: "Location", ES: "Ubicación" },

  // Footer
  "footer.title": { EN: "Senior Contract Management & Commercial Leader", ES: "Líder Sénior en Gestión de Contratos y Asuntos Comerciales" },
  "footer.rights": { EN: "All rights reserved.", ES: "Todos los derechos reservados." },

  // Full Experience page
  "fullexp.back": { EN: "Back to Home", ES: "Volver al Inicio" },
  "fullexp.label": { EN: "Career", ES: "Carrera y/o Trayectoria Profesional" },
  "fullexp.title": { EN: "Full Career Experience", ES: "Experiencia Profesional Completa" },
  "fullexp.intro": { EN: "Over **35 years** of progressive experience across contract management, project controls, procurement, and commercial leadership within global Oil & Gas, Mining, Energy, and Infrastructure projects.", ES: "Más de **35 años** de experiencia progresiva en gestión de contratos, control de proyectos, adquisiciones y liderazgo comercial en proyectos globales de petróleo y gas, minería, energía e infraestructura." },
  "fullexp.closing": { EN: "A career built on delivering results — managing multi-million and billion-dollar projects with integrity, precision, and commercial discipline across complex international environments.", ES: "Una trayectoria profesional basada en la consecución de resultados gestionando proyectos multimillonarios con integridad, precisión y disciplina comercial en complejos entornos internacionales." },
  "fullexp.keyProjects": { EN: "Key Projects", ES: "Proyectos Clave" },

  // Full experience items
  "fexp.0.title": { EN: "Contract Team Lead", ES: "Jefe de Equipo de Contratos" },
  "fexp.0.period": { EN: "Nov 2023 – Present", ES: "Noviembre de 2023 – Presente" },
  "fexp.0.b0": { EN: "Leading contract management for a **$250M** data center project (40MW infrastructure)", ES: "Lideré la gestión de contratos para un proyecto de centro de datos de **$250 millones** (infraestructura de 40 MW)" },
  "fexp.0.b1": { EN: "Drafting, negotiating, and administering EPCM and supplier contracts", ES: "Redacté, negocié y administré de contratos PMG & EPCM con proveedores" },
  "fexp.0.b2": { EN: "Driving risk identification and mitigation strategies across the full project lifecycle", ES: "Impulsé estrategias de identificación y mitigación de riesgos a lo largo de todo el ciclo de vida del proyecto" },
  "fexp.0.b3": { EN: "Overseeing budgeting, cost control, and contract documentation", ES: "Supervisé del presupuesto, el control de costos y la documentación contractual" },
  "fexp.0.b4": { EN: "Acting as key interface between stakeholders, contractors, and senior leadership", ES: "Enlace clave entre las partes interesadas, los contratistas y la alta gerencia" },
  "fexp.0.b5": { EN: "Supporting dispute resolution and contract negotiations", ES: "Apoyé en la resolución de disputas y negociaciones contractuales" },

  "fexp.1.title": { EN: "Senior Contract Administrator", ES: "Administrador Senior de Contratos" },
  "fexp.1.period": { EN: "Jul 2021 – Sep 2023", ES: "Julio 2021 – Septiembre 2023" },
  "fexp.1.b0": { EN: "Managed contracts for a **$100M** solar energy project (105MW plant)", ES: "Gestioné contratos para un proyecto de energía solar de **$100 millones** (planta de 105 MW)" },
  "fexp.1.b1": { EN: "Administered contract amendments, including COVID-related adjustments", ES: "Administré modificaciones contractuales, incluyendo ajustes relacionados con la COVID-19" },
  "fexp.1.b2": { EN: "Managed **$24M** in performance and advance payment bonds", ES: "Gestioné y ejecuté USD **$24 millones** en fianzas de cumplimiento y anticipos" },
  "fexp.1.b3": { EN: "Resolved **29** contractual claims and breaches", ES: "Resolví **29** reclamaciones e incumplimientos contractuales" },
  "fexp.1.b4": { EN: "Controlled payment processes and financial tracking", ES: "Controlé los procesos de pago y el seguimiento financiero" },
  "fexp.1.b5": { EN: "Led negotiations on delay damages and Extension of Time (EOT) claims", ES: "Lideré las negociaciones sobre daños por demora y reclamaciones de extensión de plazo (EOT)" },

  "fexp.2.title": { EN: "Project Controls Engineer (PEMS)", ES: "Ingeniero de Control de Proyectos (PEMS)" },
  "fexp.2.period": { EN: "Oct 2019 – Jul 2020", ES: "Octubre de 2019 – Julio de 2020" },
  "fexp.2.b0": { EN: "Managed project equipment data using PEMS asset management system", ES: "Gestioné los datos de los equipos del proyecto utilizando el sistema de gestión de activos PEMS" },
  "fexp.2.b1": { EN: "Supported construction equipment planning, forecasting, and scheduling", ES: "Brindé apoyo en la planificación, previsión y programación de equipos de construcción" },
  "fexp.2.b2": { EN: "Delivered performance reporting and utilization analysis", ES: "Elaboré informes de desempeño y análisis de utilización" },
  "fexp.2.b3": { EN: "Provided technical system support and training to project teams", ES: "Proporcioné soporte técnico y capacitación a los equipos del proyecto" },

  "fexp.3.title": { EN: "Managing Director / Lead Project Consultant", ES: "Director General / Consultor Principal de Proyectos" },
  "fexp.3.period": { EN: "Jan 2014 – Jan 2017", ES: "Enero de 2014 – Enero de 2017" },
  "fexp.3.b0": { EN: "Led multi-country consultancy projects across the United States, Mexico, and Venezuela", ES: "Lideré proyectos de consultoría multinacionales en Estados Unidos, México y Venezuela" },
  "fexp.3.b1": { EN: "Delivered cost estimation, feasibility studies, and investment planning", ES: "Realicé estimaciones de costos, estudios de factibilidad y planificación de inversiones" },
  "fexp.3.b2": { EN: "Managed engineering evaluations, procurement, and project execution", ES: "Gestioné evaluaciones de ingeniería, adquisiciones y ejecución de proyectos" },
  "fexp.3.b3": { EN: "Secured and executed multiple private and commercial contracts", ES: "Obtuve y ejecuté múltiples contratos privados y comerciales" },
  "fexp.3.kp0": { EN: "**$25.2M** Drilling Rigs Evaluation (83 rigs) – Venezuela", ES: "Evaluación de Taladros y Plataformas de Perforación (83 taladros y plataformas) por USD **$25.2 millones** – Venezuela" },
  "fexp.3.kp1": { EN: "**$2.2M** Fracking Wells Evaluation – Corsicana, Texas", ES: "Evaluación de Pozos de Fracturación Hidráulica por USD **$2.2 millones** – Corsicana, Texas" },
  "fexp.3.kp2": { EN: "**$500K** Private Investment Project – Mexico", ES: "Proyecto de Inversión Privada por USD **$500K** – México" },

  "fexp.4.title": { EN: "Lead Project Control Specialist", ES: "Especialista Líder en Control de Proyectos" },
  "fexp.4.period": { EN: "Jul 2013 – Aug 2014", ES: "Julio de 2013 – Agosto de 2014" },
  "fexp.4.b0": { EN: "Delivered project controls for **$3B** offshore gas supply project", ES: "Gestioné el control de proyectos para un proyecto de suministro de gas offshore de USD **$3 Billones**" },
  "fexp.4.b1": { EN: "Implemented cost control frameworks (WBS, CBS, KPI, EVA)", ES: "Implementé marcos de control de costos (WBS, CBS, KPI, EVA)" },
  "fexp.4.b2": { EN: "Managed cost estimation methodologies (Class III & IV)", ES: "Gestioné metodologías de estimación de costos (Clase III y IV)" },
  "fexp.4.b3": { EN: "Oversaw scheduling, forecasting, and reporting systems", ES: "Supervisé los sistemas de programación, pronóstico e informes" },
  "fexp.4.b4": { EN: "Coordinated change order management and compliance tracking", ES: "Coordiné la gestión de órdenes de cambio y el seguimiento del cumplimiento" },
  "fexp.4.b5": { EN: "Supported FEED and Pre-FEED project phases", ES: "Brindé apoyo a la ingeniería conceptual en sus fases de Pre-FEED y FEED del proyecto" },

  "fexp.5.title": { EN: "Managing Director / Lead Consultant", ES: "Director General / Consultor Principal" },
  "fexp.5.period": { EN: "Jan 2010 – Dec 2013", ES: "Enero 2010 – Diciembre 2013" },
  "fexp.5.b0": { EN: "Delivered feasibility and engineering consultancy across multiple regions", ES: "Consultorías de factibilidad económica e ingeniería en diversas regiones" },
  "fexp.5.b1": { EN: "Led development of **$125M** biomass power plant project", ES: "Lideré el desarrollo de un proyecto de planta de energía de biomasa de **$125 millones**" },
  "fexp.5.b2": { EN: "Managed financial structuring, PPA agreements, and commercial negotiations", ES: "Gestioné la estructuración financiera, los acuerdos de compra de energía (PPA) y las negociaciones comerciales" },
  "fexp.5.b3": { EN: "Delivered project controls, cost analysis, and technical documentation", ES: "Realicé el control de proyectos, el análisis de costos y la documentación técnica" },
  "fexp.5.b4": { EN: "Managed EPC, EPCM, BOT, and PPA contract structures", ES: "Gestioné estructuras contractuales EPC, EPCM, BOT y PPA" },

  "fexp.6.title": { EN: "Senior Engineering & Commercial Roles", ES: "Puestos de Alta Responsabilidad en Ingeniería y Gestión Comercial" },
  "fexp.6.period": { EN: "1988 – 2010", ES: "1988 – 2010" },
  "fexp.6.b0": { EN: "Progressive career across engineering, procurement, operations, and commercial management", ES: "Trayectoria profesional progresiva en ingeniería, compras, operaciones y gestión comercial" },
  "fexp.6.b1": { EN: "Lead Cost Estimator and Procurement Manager for major Oil & Gas projects", ES: "Líder Estimador de Costos y Gerente de Compras para importantes proyectos de petróleo y gas" },
  "fexp.6.b2": { EN: "General Manager of Engineering & Construction operations", ES: "Gerente General de Operaciones de Ingeniería y Construcción" },
  "fexp.6.b3": { EN: "Contracts Coordinator for EPCM projects", ES: "Coordinador de Contratos para proyectos EPCM & DBOOT" },
  "fexp.6.b4": { EN: "Operations Manager in Mining & Logistics sectors", ES: "Gerente de Operaciones en los sectores de minería y logística" },
  "fexp.6.b5": { EN: "International Purchasing & Logistics Manager for infrastructure projects", ES: "Gerente de Compras Internacionales y Logística para proyectos de infraestructura" },
  "fexp.6.b6": { EN: "Directed multidisciplinary teams across engineering and commercial functions", ES: "Lideré equipos multidisciplinarios en las áreas de ingeniería y gestión comercial" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("EN");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
