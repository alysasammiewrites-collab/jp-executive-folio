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
  "nav.about": { EN: "About", ES: "Acerca" },
  "nav.expertise": { EN: "Expertise", ES: "Competencias" },
  "nav.experience": { EN: "Experience", ES: "Experiencia" },
  "nav.achievements": { EN: "Achievements", ES: "Logros" },
  "nav.education": { EN: "Education", ES: "Educación" },
  "nav.references": { EN: "References", ES: "Referencias" },
  "nav.contact": { EN: "Contact", ES: "Contacto" },

  // Hero
  "hero.title": { EN: "Senior Contract Management & Commercial Leader", ES: "Líder Senior en Gestión de Contratos y Comercial" },
  "hero.stats": { EN: "35+ Years Experience  ·  EPCM, EPC, Energy & Infrastructure  ·  Contracts up to $3B+", ES: "35+ Años de Experiencia  ·  EPCM, EPC, Energía e Infraestructura  ·  Contratos hasta $3B+" },
  "hero.subtitle": { EN: "Delivering commercial strategy, contract leadership, and risk-managed outcomes across global projects.", ES: "Entregando estrategia comercial, liderazgo contractual y resultados con gestión de riesgos en proyectos globales." },
  "hero.viewExperience": { EN: "View Experience", ES: "Ver Experiencia" },
  "hero.downloadCV": { EN: "Download CV", ES: "Descargar CV" },

  // About
  "about.label": { EN: "About", ES: "Acerca" },
  "about.title": { EN: "Executive Summary", ES: "Resumen Ejecutivo" },
  "about.p1": { EN: "Senior Contract Management and Commercial Leader with over 30 years of international experience spanning Oil & Gas, Mining, Infrastructure, Renewable Energy, and Data Center projects. Recognized for deep expertise in EPCM/EPC contract structures, claims management, risk allocation, and high-stakes commercial negotiations.", ES: "Líder Senior en Gestión de Contratos y Comercial con más de 30 años de experiencia internacional en proyectos de Petróleo y Gas, Minería, Infraestructura, Energía Renovable y Centros de Datos. Reconocido por su profunda experiencia en estructuras contractuales EPCM/EPC, gestión de reclamos, asignación de riesgos y negociaciones comerciales de alto nivel." },
  "about.p2": { EN: "Proven track record managing contracts valued up to", ES: "Trayectoria comprobada gestionando contratos valorados hasta" },
  "about.p2value": { EN: "$3B+", ES: "$3B+" },
  "about.p2rest": { EN: ", leading cross-functional teams, and delivering measurable commercial outcomes through strategic contract planning, rigorous cost control, and effective dispute resolution.", ES: ", liderando equipos multifuncionales y entregando resultados comerciales medibles a través de planificación contractual estratégica, control de costos riguroso y resolución efectiva de disputas." },
  "about.p3a": { EN: "Extensive global exposure across", ES: "Amplia exposición global en" },
  "about.p3regions": { EN: "Latin America, the United States, Nigeria", ES: "América Latina, Estados Unidos, Nigeria" },
  "about.p3and": { EN: ", and the", ES: ", y el" },
  "about.p3caribbean": { EN: "Caribbean", ES: "Caribe" },
  "about.p3rest": { EN: ", with a demonstrated ability to navigate complex multinational stakeholder environments, regulatory frameworks, and contractor ecosystems.", ES: ", con capacidad demostrada para navegar entornos complejos de partes interesadas multinacionales, marcos regulatorios y ecosistemas de contratistas." },

  // Expertise
  "expertise.label": { EN: "Capabilities", ES: "Capacidades" },
  "expertise.title": { EN: "Core Expertise", ES: "Competencias Principales" },
  "expertise.0": { EN: "Contract Management", ES: "Gestión de Contratos" },
  "expertise.1": { EN: "Commercial Management", ES: "Gestión Comercial" },
  "expertise.2": { EN: "EPCM / EPC Contracts", ES: "Contratos EPCM / EPC" },
  "expertise.3": { EN: "FIDIC Contracts", ES: "Contratos FIDIC" },
  "expertise.4": { EN: "Claims & Dispute Resolution", ES: "Reclamos y Resolución de Disputas" },
  "expertise.5": { EN: "Change Order Management", ES: "Gestión de Órdenes de Cambio" },
  "expertise.6": { EN: "Risk Management", ES: "Gestión de Riesgos" },
  "expertise.7": { EN: "Cost Control & Budgeting", ES: "Control de Costos y Presupuestos" },
  "expertise.8": { EN: "Procurement & Supplier Management", ES: "Adquisiciones y Gestión de Proveedores" },
  "expertise.9": { EN: "Project Controls (EVM, KPI, WBS, CBS)", ES: "Controles de Proyecto (EVM, KPI, WBS, CBS)" },
  "expertise.10": { EN: "Tendering (RFQ, RFP, ITB)", ES: "Licitaciones (RFQ, RFP, ITB)" },
  "expertise.11": { EN: "Stakeholder Management", ES: "Gestión de Partes Interesadas" },

  // Experience
  "exp.label": { EN: "Career", ES: "Carrera" },
  "exp.title": { EN: "Professional Experience", ES: "Experiencia Profesional" },
  "exp.viewFull": { EN: "View Full Experience", ES: "Ver Experiencia Completa" },
  // Experience items
  "exp.0.period": { EN: "Nov 2023 – Present", ES: "Nov 2023 – Presente" },
  "exp.0.title": { EN: "Contract Team Lead", ES: "Líder del Equipo de Contratos" },
  "exp.0.highlight": { EN: "$250M+ Data Center Project", ES: "Proyecto Centro de Datos $250M+" },
  "exp.0.b0": { EN: "Lead contract management for $250M+ data center project (40MW infrastructure)", ES: "Liderar la gestión de contratos para proyecto de centro de datos de $250M+ (infraestructura de 40MW)" },
  "exp.0.b1": { EN: "Draft, negotiate, and administer EPCM and supplier contracts", ES: "Redactar, negociar y administrar contratos EPCM y de proveedores" },
  "exp.0.b2": { EN: "Identify and mitigate commercial and contractual risks across project lifecycle", ES: "Identificar y mitigar riesgos comerciales y contractuales durante el ciclo de vida del proyecto" },
  "exp.0.b3": { EN: "Monitor budgets and implement cost optimization strategies", ES: "Monitorear presupuestos e implementar estrategias de optimización de costos" },

  "exp.1.period": { EN: "Jul 2021 – Sep 2023", ES: "Jul 2021 – Sep 2023" },
  "exp.1.title": { EN: "Senior Contract Administrator", ES: "Administrador Senior de Contratos" },
  "exp.1.highlight": { EN: "$100M Solar Plant", ES: "Planta Solar $100M" },
  "exp.1.b0": { EN: "Managed contracts for $100M renewable energy project (105MW solar plant)", ES: "Gestión de contratos para proyecto de energía renovable de $100M (planta solar 105MW)" },
  "exp.1.b1": { EN: "Secured $24M in performance and advance payment bonds", ES: "Asegurar $24M en garantías de cumplimiento y anticipos" },
  "exp.1.b2": { EN: "Managed 29+ contractual claims and breach cases", ES: "Gestión de 29+ reclamos contractuales y casos de incumplimiento" },
  "exp.1.b3": { EN: "Controlled delay damages and negotiated extension of time (EOT) claims", ES: "Control de daños por retraso y negociación de reclamos de extensión de tiempo (EOT)" },

  "exp.2.period": { EN: "Oct 2019 – Jul 2020", ES: "Oct 2019 – Jul 2020" },
  "exp.2.title": { EN: "Project Controls Engineer (PEMS)", ES: "Ingeniero de Controles de Proyecto (PEMS)" },
  "exp.2.highlight": { EN: "Mining Project", ES: "Proyecto Minero" },
  "exp.2.b0": { EN: "Managed project equipment data using PEMS asset management system", ES: "Gestión de datos de equipos del proyecto usando el sistema PEMS" },
  "exp.2.b1": { EN: "Supported forecasting, scheduling, and cost tracking activities", ES: "Apoyo en actividades de pronóstico, programación y seguimiento de costos" },
  "exp.2.b2": { EN: "Delivered reporting for project planning and execution decisions", ES: "Entrega de informes para decisiones de planificación y ejecución del proyecto" },

  "exp.3.period": { EN: "Jul 2013 – Aug 2014", ES: "Jul 2013 – Ago 2014" },
  "exp.3.title": { EN: "Lead Project Control Specialist", ES: "Especialista Líder en Control de Proyectos" },
  "exp.3.highlight": { EN: "$3B Offshore Gas Project", ES: "Proyecto de Gas Offshore $3B" },
  "exp.3.b0": { EN: "Delivered project controls for $3B offshore gas supply project", ES: "Entrega de controles de proyecto para proyecto de suministro de gas offshore de $3B" },
  "exp.3.b1": { EN: "Implemented cost control frameworks (WBS, CBS, KPI, EVA)", ES: "Implementación de marcos de control de costos (WBS, CBS, KPI, EVA)" },
  "exp.3.b2": { EN: "Managed change orders, forecasting, and cost estimation processes", ES: "Gestión de órdenes de cambio, pronósticos y procesos de estimación de costos" },
  "exp.3.b3": { EN: "Supported FEED and Pre-FEED project phases", ES: "Apoyo en fases de proyecto FEED y Pre-FEED" },

  "exp.4.period": { EN: "Jan 2010 – Jan 2017", ES: "Ene 2010 – Ene 2017" },
  "exp.4.title": { EN: "Managing Director / Contract & Project Consultant", ES: "Director General / Consultor de Contratos y Proyectos" },
  "exp.4.highlight": { EN: "$125M Project Delivered", ES: "Proyecto de $125M Entregado" },
  "exp.4.b0": { EN: "Led contract strategy, procurement, and project controls across multiple projects", ES: "Liderar estrategia contractual, adquisiciones y controles de proyecto en múltiples proyectos" },
  "exp.4.b1": { EN: "Delivered $125M biomass power project feasibility and contract structuring", ES: "Entrega de factibilidad y estructuración de contratos para proyecto de biomasa de $125M" },
  "exp.4.b2": { EN: "Managed EPC, EPCM, BOT, and PPA contract structures", ES: "Gestión de estructuras contractuales EPC, EPCM, BOT y PPA" },
  "exp.4.b3": { EN: "Directed multidisciplinary teams across engineering and commercial functions", ES: "Dirección de equipos multidisciplinarios en funciones de ingeniería y comerciales" },

  // Achievements
  "ach.label": { EN: "Impact", ES: "Impacto" },
  "ach.title": { EN: "Key Achievements", ES: "Logros Clave" },
  "ach.0.label": { EN: "Contracts Managed", ES: "Contratos Gestionados" },
  "ach.1.label": { EN: "Cost Reduction Achieved", ES: "Reducción de Costos Lograda" },
  "ach.2.label": { EN: "Funding Secured", ES: "Financiamiento Asegurado" },
  "ach.3.label": { EN: "Project Delivered", ES: "Proyecto Entregado" },
  "ach.4.label": { EN: "Years Global Experience", ES: "Años de Experiencia Global" },

  // Education
  "edu.label": { EN: "Credentials", ES: "Credenciales" },
  "edu.title": { EN: "Education & Executive Development", ES: "Educación y Desarrollo Ejecutivo" },
  "edu.summary": { EN: "A comprehensive academic foundation combining executive management, international studies, and specialized postgraduate diplomas across procurement, project management, and foreign commerce.", ES: "Una base académica integral que combina gestión ejecutiva, estudios internacionales y diplomas de postgrado especializados en adquisiciones, gestión de proyectos y comercio exterior." },
  "edu.viewDetails": { EN: "View Details", ES: "Ver Detalles" },
  "edu.hideDetails": { EN: "Hide Details", ES: "Ocultar Detalles" },
  "edu.postgrad": { EN: "Postgraduate & Executive Education", ES: "Postgrado y Educación Ejecutiva" },
  "edu.magister": { EN: "Magister – Advanced Management Program (PAG)", ES: "Magíster – Programa Avanzado de Gerencia (PAG)" },
  "edu.iesaLocation": { EN: "Instituto de Estudios Superiores de Administración (IESA) – Venezuela", ES: "Instituto de Estudios Superiores de Administración (IESA) – Venezuela" },
  "edu.undergrad": { EN: "Undergraduate Studies", ES: "Estudios de Pregrado" },
  "edu.polsci": { EN: "Political Science / Minor in International Studies", ES: "Ciencias Políticas / Minor en Estudios Internacionales" },
  "edu.liuLocation": { EN: "C.W. Post Center, Long Island University – New York, USA", ES: "C.W. Post Center, Long Island University – Nueva York, EE.UU." },
  "edu.incomplete": { EN: "Incomplete", ES: "Incompleto" },
  "edu.diplomas": { EN: "Postgraduate Diplomas", ES: "Diplomas de Postgrado" },
  "edu.procurement": { EN: "International Procurement & Materials Management", ES: "Adquisiciones Internacionales y Gestión de Materiales" },
  "edu.procurementLoc": { EN: "World Trade Institute, World Trade Center, New York, USA (May – Jul 1998)", ES: "World Trade Institute, World Trade Center, Nueva York, EE.UU. (May – Jul 1998)" },
  "edu.projectMgmt": { EN: "Project Formulation & Evaluation (Project Management)", ES: "Formulación y Evaluación de Proyectos (Gestión de Proyectos)" },
  "edu.projectMgmtLoc": { EN: "Venezuelan Board of Engineers, Caracas, Venezuela (Feb – Jun 1994)", ES: "Colegio de Ingenieros de Venezuela, Caracas, Venezuela (Feb – Jun 1994)" },
  "edu.foreignCommerce": { EN: "Foreign Commerce (Import/Export)", ES: "Comercio Exterior (Importación/Exportación)" },
  "edu.foreignCommerceLoc": { EN: "Venezuelan Export Association (AVEX), Caracas, Venezuela (Jun – Aug 1988)", ES: "Asociación Venezolana de Exportadores (AVEX), Caracas, Venezuela (Jun – Ago 1988)" },
  "edu.training": { EN: "Additional Training & Certifications", ES: "Capacitación y Certificaciones Adicionales" },
  "edu.trainingDesc": { EN: "Over 30 professional trainings and certifications across Project Controls, Cost Engineering, Leadership, Compliance, and Safety, including programs delivered by Chevron, Bechtel, Project Control Academy, and other international institutions.", ES: "Más de 30 capacitaciones y certificaciones profesionales en Controles de Proyecto, Ingeniería de Costos, Liderazgo, Cumplimiento y Seguridad, incluyendo programas impartidos por Chevron, Bechtel, Project Control Academy y otras instituciones internacionales." },
  "edu.highSchool": { EN: "Secondary Education", ES: "Educación Secundaria" },
  "edu.languages": { EN: "Languages", ES: "Idiomas" },
  "edu.spanish": { EN: "Spanish – Native", ES: "Español – Nativo" },
  "edu.english": { EN: "English – Fluent", ES: "Inglés – Fluido" },
  "edu.closingNote": { EN: "Continuous professional development across a 35+ year international career spanning multiple industries and continents.", ES: "Desarrollo profesional continuo a lo largo de una carrera internacional de más de 35 años abarcando múltiples industrias y continentes." },

  // References
  "ref.label": { EN: "Endorsements", ES: "Avales" },
  "ref.title": { EN: "Professional References", ES: "Referencias Profesionales" },
  "ref.available": { EN: "Available upon request for direct verification.", ES: "Disponible a solicitud para verificación directa." },
  "ref.former": { EN: "Former", ES: "Anterior" },

  // Global
  "global.label": { EN: "Reach", ES: "Alcance" },
  "global.title": { EN: "Global Experience", ES: "Experiencia Global" },
  "global.latam": { EN: "Latin America", ES: "América Latina" },
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
  "contact.email": { EN: "Email", ES: "Correo" },
  "contact.phone": { EN: "Phone", ES: "Teléfono" },
  "contact.linkedin": { EN: "LinkedIn", ES: "LinkedIn" },
  "contact.location": { EN: "Location", ES: "Ubicación" },

  // Footer
  "footer.title": { EN: "Senior Contract Management & Commercial Leader", ES: "Líder Senior en Gestión de Contratos y Comercial" },
  "footer.rights": { EN: "All rights reserved.", ES: "Todos los derechos reservados." },

  // Full Experience page
  "fullexp.back": { EN: "Back to Home", ES: "Volver al Inicio" },
  "fullexp.label": { EN: "Career", ES: "Carrera" },
  "fullexp.title": { EN: "Full Career Experience", ES: "Experiencia Profesional Completa" },
  "fullexp.intro": { EN: "Over **35 years** of progressive experience across contract management, project controls, procurement, and commercial leadership within global Oil & Gas, Mining, Energy, and Infrastructure projects.", ES: "Más de **35 años** de experiencia progresiva en gestión de contratos, controles de proyecto, adquisiciones y liderazgo comercial en proyectos globales de Petróleo y Gas, Minería, Energía e Infraestructura." },
  "fullexp.closing": { EN: "A career built on delivering results — managing multi-million and billion-dollar projects with integrity, precision, and commercial discipline across complex international environments.", ES: "Una carrera construida en la entrega de resultados — gestionando proyectos multimillonarios con integridad, precisión y disciplina comercial en entornos internacionales complejos." },
  "fullexp.keyProjects": { EN: "Key Projects", ES: "Proyectos Clave" },

  // Full experience items
  "fexp.0.title": { EN: "Contract Team Lead", ES: "Líder del Equipo de Contratos" },
  "fexp.0.period": { EN: "Nov 2023 – Present", ES: "Nov 2023 – Presente" },
  "fexp.0.b0": { EN: "Leading contract management for a **$250M** data center project (40MW infrastructure)", ES: "Liderando la gestión de contratos para un proyecto de centro de datos de **$250M** (infraestructura de 40MW)" },
  "fexp.0.b1": { EN: "Drafting, negotiating, and administering EPCM and supplier contracts", ES: "Redactando, negociando y administrando contratos EPCM y de proveedores" },
  "fexp.0.b2": { EN: "Driving risk identification and mitigation strategies across the full project lifecycle", ES: "Impulsando estrategias de identificación y mitigación de riesgos durante todo el ciclo del proyecto" },
  "fexp.0.b3": { EN: "Overseeing budgeting, cost control, and contract documentation", ES: "Supervisando presupuestos, control de costos y documentación contractual" },
  "fexp.0.b4": { EN: "Acting as key interface between stakeholders, contractors, and senior leadership", ES: "Actuando como interfaz clave entre partes interesadas, contratistas y liderazgo senior" },
  "fexp.0.b5": { EN: "Supporting dispute resolution and contract negotiations", ES: "Apoyando la resolución de disputas y negociaciones contractuales" },

  "fexp.1.title": { EN: "Senior Contract Administrator", ES: "Administrador Senior de Contratos" },
  "fexp.1.period": { EN: "Jul 2021 – Sep 2023", ES: "Jul 2021 – Sep 2023" },
  "fexp.1.b0": { EN: "Managed contracts for a **$100M** solar energy project (105MW plant)", ES: "Gestión de contratos para un proyecto de energía solar de **$100M** (planta de 105MW)" },
  "fexp.1.b1": { EN: "Administered contract amendments, including COVID-related adjustments", ES: "Administración de enmiendas contractuales, incluyendo ajustes relacionados con COVID" },
  "fexp.1.b2": { EN: "Managed **$24M** in performance and advance payment bonds", ES: "Gestión de **$24M** en garantías de cumplimiento y anticipos" },
  "fexp.1.b3": { EN: "Resolved **29** contractual claims and breaches", ES: "Resolución de **29** reclamos contractuales e incumplimientos" },
  "fexp.1.b4": { EN: "Controlled payment processes and financial tracking", ES: "Control de procesos de pago y seguimiento financiero" },
  "fexp.1.b5": { EN: "Led negotiations on delay damages and Extension of Time (EOT) claims", ES: "Liderazgo en negociaciones de daños por retraso y reclamos de Extensión de Tiempo (EOT)" },

  "fexp.2.title": { EN: "Project Controls Engineer (PEMS)", ES: "Ingeniero de Controles de Proyecto (PEMS)" },
  "fexp.2.period": { EN: "Oct 2019 – Jul 2020", ES: "Oct 2019 – Jul 2020" },
  "fexp.2.b0": { EN: "Managed project equipment data using PEMS asset management system", ES: "Gestión de datos de equipos del proyecto usando el sistema PEMS" },
  "fexp.2.b1": { EN: "Supported construction equipment planning, forecasting, and scheduling", ES: "Apoyo en planificación, pronóstico y programación de equipos de construcción" },
  "fexp.2.b2": { EN: "Delivered performance reporting and utilization analysis", ES: "Entrega de informes de rendimiento y análisis de utilización" },
  "fexp.2.b3": { EN: "Provided technical system support and training to project teams", ES: "Soporte técnico del sistema y capacitación a equipos del proyecto" },

  "fexp.3.title": { EN: "Managing Director / Lead Project Consultant", ES: "Director General / Consultor Líder de Proyectos" },
  "fexp.3.period": { EN: "Jan 2014 – Jan 2017", ES: "Ene 2014 – Ene 2017" },
  "fexp.3.b0": { EN: "Led multi-country consultancy projects across the United States, Mexico, and Venezuela", ES: "Liderazgo de proyectos de consultoría multinacionales en Estados Unidos, México y Venezuela" },
  "fexp.3.b1": { EN: "Delivered cost estimation, feasibility studies, and investment planning", ES: "Entrega de estimación de costos, estudios de factibilidad y planificación de inversiones" },
  "fexp.3.b2": { EN: "Managed engineering evaluations, procurement, and project execution", ES: "Gestión de evaluaciones de ingeniería, adquisiciones y ejecución de proyectos" },
  "fexp.3.b3": { EN: "Secured and executed multiple private and commercial contracts", ES: "Asegurar y ejecutar múltiples contratos privados y comerciales" },
  "fexp.3.kp0": { EN: "**$25.2M** Drilling Rigs Evaluation (83 rigs) – Venezuela", ES: "Evaluación de **$25.2M** en Plataformas de Perforación (83 plataformas) – Venezuela" },
  "fexp.3.kp1": { EN: "**$2.2M** Fracking Wells Evaluation – Corsicana, Texas", ES: "Evaluación de **$2.2M** en Pozos de Fracking – Corsicana, Texas" },
  "fexp.3.kp2": { EN: "**$500K** Private Investment Project – Mexico", ES: "Proyecto de Inversión Privada de **$500K** – México" },

  "fexp.4.title": { EN: "Lead Project Control Specialist", ES: "Especialista Líder en Control de Proyectos" },
  "fexp.4.period": { EN: "Jul 2013 – Aug 2014", ES: "Jul 2013 – Ago 2014" },
  "fexp.4.b0": { EN: "Delivered project controls for **$3B** offshore gas supply project", ES: "Entrega de controles de proyecto para proyecto de suministro de gas offshore de **$3B**" },
  "fexp.4.b1": { EN: "Implemented cost control frameworks (WBS, CBS, KPI, EVA)", ES: "Implementación de marcos de control de costos (WBS, CBS, KPI, EVA)" },
  "fexp.4.b2": { EN: "Managed cost estimation methodologies (Class III & IV)", ES: "Gestión de metodologías de estimación de costos (Clase III y IV)" },
  "fexp.4.b3": { EN: "Oversaw scheduling, forecasting, and reporting systems", ES: "Supervisión de sistemas de programación, pronóstico e informes" },
  "fexp.4.b4": { EN: "Coordinated change order management and compliance tracking", ES: "Coordinación de gestión de órdenes de cambio y seguimiento de cumplimiento" },
  "fexp.4.b5": { EN: "Supported FEED and Pre-FEED project phases", ES: "Apoyo en fases de proyecto FEED y Pre-FEED" },

  "fexp.5.title": { EN: "Managing Director / Lead Consultant", ES: "Director General / Consultor Líder" },
  "fexp.5.period": { EN: "Jan 2010 – Dec 2013", ES: "Ene 2010 – Dic 2013" },
  "fexp.5.b0": { EN: "Delivered feasibility and engineering consultancy across multiple regions", ES: "Entrega de consultoría de factibilidad e ingeniería en múltiples regiones" },
  "fexp.5.b1": { EN: "Led development of **$125M** biomass power plant project", ES: "Liderazgo del desarrollo del proyecto de planta de biomasa de **$125M**" },
  "fexp.5.b2": { EN: "Managed financial structuring, PPA agreements, and commercial negotiations", ES: "Gestión de estructuración financiera, acuerdos PPA y negociaciones comerciales" },
  "fexp.5.b3": { EN: "Delivered project controls, cost analysis, and technical documentation", ES: "Entrega de controles de proyecto, análisis de costos y documentación técnica" },
  "fexp.5.b4": { EN: "Managed EPC, EPCM, BOT, and PPA contract structures", ES: "Gestión de estructuras contractuales EPC, EPCM, BOT y PPA" },

  "fexp.6.title": { EN: "Senior Engineering & Commercial Roles", ES: "Roles Senior de Ingeniería y Comercial" },
  "fexp.6.period": { EN: "1988 – 2010", ES: "1988 – 2010" },
  "fexp.6.b0": { EN: "Progressive career across engineering, procurement, operations, and commercial management", ES: "Carrera progresiva en ingeniería, adquisiciones, operaciones y gestión comercial" },
  "fexp.6.b1": { EN: "Lead Cost Estimator and Procurement Manager for major Oil & Gas projects", ES: "Estimador de Costos Líder y Gerente de Adquisiciones para proyectos importantes de Petróleo y Gas" },
  "fexp.6.b2": { EN: "General Manager of Engineering & Construction operations", ES: "Gerente General de operaciones de Ingeniería y Construcción" },
  "fexp.6.b3": { EN: "Contracts Coordinator for EPCM projects", ES: "Coordinador de Contratos para proyectos EPCM" },
  "fexp.6.b4": { EN: "Operations Manager in Mining & Logistics sectors", ES: "Gerente de Operaciones en sectores de Minería y Logística" },
  "fexp.6.b5": { EN: "International Purchasing & Logistics Manager for infrastructure projects", ES: "Gerente de Compras Internacionales y Logística para proyectos de infraestructura" },
  "fexp.6.b6": { EN: "Directed multidisciplinary teams across engineering and commercial functions", ES: "Dirección de equipos multidisciplinarios en funciones de ingeniería y comerciales" },
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
