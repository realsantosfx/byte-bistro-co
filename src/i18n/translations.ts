export type Translations = {
  nav: { services: string; cases: string; approach: string; about: string; cta: string; ctaSecondary: string; mobileMicrocopy: string };
  hero: { badge: string; headline1: string; headline2: string; sub: string; body: string; cta1: string; cta2: string; statCard1Label: string; statCard2Label: string; statCard2Value: string; statCard2Sub: string; statCard3Label: string; statCard3Sub: string };
  services: { label: string; title: string; cta: string; items: { title: string; description: string; list: string[] }[] };
  approach: { label: string; title: string; cta: string; steps: { number: string; title: string; description: string }[] };
  cases: { label: string; title: string; cardCta: string; items: { title: string; category: string; description: string; metrics: string[]; link: string }[] };
  why: { label: string; title: string; body: string; cta: string; reasons: string[] };
  about: { label: string; title: string; p1: string; p2: string; p3: string; cta: string };
  ways: { label: string; title: string; items: { title: string; description: string; cta: string; link?: string }[] };
  finalCta: { title: string; body1: string; body2: string; cta: string };
  footer: { tagline: string; navigate: string; connect: string; legal: string; rights: string; contactLabel: string };
  enterprise: {
    badge: string;
    heroHeadline1: string;
    heroHeadline2: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody: string;
    solutionSub: string;
    buildLabel: string;
    buildTitle: string;
    buildItems: { label: string; desc: string }[];
    useCaseLabel: string;
    useCaseTitle: string;
    useCaseBody: string;
    useCases: string[];
    showcaseLabel: string;
    showcaseTitle: string;
    showcaseSub: string;
    showcaseCards: { slug: string; title: string; description: string; cta: string }[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    workLabel: string;
    workTitle: string;
    workBody: string;
    workSub: string;
    authority: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  demo: {
    badge: string;
    heroHeadline1: string;
    heroHeadline2: string;
    heroSub: string;
    backLabel: string;
    detailHeadline: string;
    detailCta: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    cards: { slug: string; title: string; description: string; cta: string; detailDescription: string; features: string[] }[];
  };
  restaurantDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  barberDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  studioDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  businessDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  deliveryDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  dealFlowDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  guestServiceDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
  venueDetail: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    problemLabel: string;
    problemTitle: string;
    problemBody: string;
    problems: string[];
    solutionLabel: string;
    solutionTitle: string;
    solutionBody1: string;
    solutionBody2: string;
    processLabel: string;
    processTitle: string;
    steps: string[];
    backendLabel: string;
    backendTitle: string;
    backendItems: string[];
    resultLabel: string;
    resultTitle: string;
    results: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    backLabel: string;
  };
};

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      services: "Systems",
      cases: "Examples",
      approach: "Process",
      about: "About",
      cta: "View Systems",
      ctaSecondary: "Open Live Demo",
      mobileMicrocopy: "See how your system works first",
    },
    hero: {
      badge: "AI-Native Enterprise Systems",
      headline1: "We build the operational brain",
      headline2: "for companies that want to grow.",
      sub: "No off-the-shelf tool. No standard ERP.",
      body: "A system that understands your processes, analyzes your data and actively prepares decisions.",
      cta1: "View System",
      cta2: "Book intro call",
      statCard1Label: "Process efficiency",
      statCard2Label: "AI Layer",
      statCard2Value: "Active from day 1.",
      statCard2Sub: "Precise after 30 days.",
      statCard3Label: "Standard solutions",
      statCard3Sub: "Always custom.",
    },
    
    services: {
      label: "Services",
      title: "What We Develop",
      cta: "View systems in detail",
      items: [
        {
          title: "Custom System Architecture",
          description: "No template. We analyze your processes and build the system that fits your company exactly. From sales to logistics.",
          list: ["Process analysis", "Tailored architecture", "From sales to logistics", "No templates", "End-to-end delivery"],
        },
        {
          title: "AI as the Operational Layer",
          description: "The AI collects operational data, recognizes patterns and actively suggests where efficiency is lost and what to do next.",
          list: ["Operational data in real time", "Pattern recognition", "Proactive recommendations", "Efficiency monitoring", "Decision support"],
        },
        {
          title: "Scalable from Day One",
          description: "Built for companies between €5M and €50M in revenue that plan to grow in the coming years. The system grows with you – no restart needed.",
          list: ["For €5M to €50M revenue", "Grows with the company", "No re-build needed", "Modular and extensible", "Enterprise-ready"],
        },
      ],
    },
    approach: {
      label: "Process",
      title: "Our Approach",
      cta: "Book intro call",
      steps: [
        { number: "01", title: "Analysis", description: "We analyze your processes, data structures and where decisions are made on gut feeling instead of data." },
        { number: "02", title: "Architecture", description: "We design a custom system architecture with an integrated AI layer – tailored to your structure." },
        { number: "03", title: "Optimization & Scaling", description: "We optimize workflows and ship a system where the AI actively prepares decisions and grows with you." },
      ],
    },
    cases: {
      label: "Case Study",
      title: "What This Looks Like in Practice",
      cardCta: "View System",
      items: [
        {
          title: "€7M revenue. Excel and phone calls.",
          category: "Mid-market · Manufacturing",
          description: "A mid-sized company with 40 employees grew faster than its internal structures. Orders, inventory and capacity were coordinated manually – the error rate scaled with revenue. We built a custom ERP with an AI layer that analyzes operational patterns and proactively suggests where capacity is wasted and which orders to prioritize.",
          metrics: ["−80% manual coordination", "+127% efficiency in 3 months", "€45,000 project volume", "2 months to active AI"],
          link: "/case/mittelstand-erp",
        },
        {
          title: "Field sales on word of mouth. Pipeline invisible.",
          category: "Mid-market · Chemical Distribution",
          description: "A chemical distributor coordinated visits, agreements and quotes entirely by word of mouth. We built a custom field sales CRM with mobile voice capture, real-time inventory and an AI layer that detects churn before it happens.",
          metrics: ["−100% lost visit reports", "1 central pipeline", "€20,000 project volume", "6 wks to first AI alert"],
          link: "/case/chemievertrieb-crm",
        },
        {
          title: "Sales System",
          category: "Revenue",
          description: "Sales pipeline with automated lead scoring and an AI layer that prioritizes deals and surfaces where revenue is at risk – built for B2B organizations.",
          metrics: ["Automated pipeline", "AI-driven prioritization", "Revenue forecasting", "Full revenue visibility"],
          link: "/demo/salesystem",
        },
        {
          title: "Logistics System",
          category: "Operations",
          description: "Route optimization, driver management and real-time tracking with an AI layer that recognizes patterns in capacity usage and recommends where to act.",
          metrics: ["Optimized routes", "Real-time tracking", "Pattern-based recommendations", "Scalable logistics"],
          link: "/demo/delivery",
        },
      ],
    },
    why: {
      label: "The Problem",
      title: "Most companies buy tools. None of them understand the company.",
      body: "CRM, ERP, BI dashboard. Each tool solves one problem. Your team spends hours moving data from system A to system B. Decisions are made on gut feeling because the data foundation is missing. Growth doesn't fail in the market – it fails on internal complexity. SantosLab builds the system that solves this problem permanently.",
      cta: "See what that looks like in practice",
      reasons: [
        "Hours wasted moving data between systems",
        "Decisions made on gut feeling, not data",
        "Tools that don't talk to each other",
        "No central source of operational truth",
        "Growth blocked by internal complexity",
      ],
    },
    about: {
      label: "About",
      title: "About SantosLab",
      p1: "SantosLab is an AI-native software studio for custom business systems and enterprise infrastructure.",
      p2: "We help companies turn complex processes into clear, scalable systems with an active AI layer – from architecture to ongoing operation.",
      p3: "",
      cta: "View System",
    },
    ways: {
      label: "Get Started",
      title: "How We Work Together",
      items: [
        { title: "Consulting & Analysis", description: "We analyze your existing processes and identify where a custom system with an AI layer creates the biggest impact.", cta: "Book intro call", link: "/kontakt" },
        { title: "System Development", description: "We design and develop your system – architecture, AI layer and rollout, closely aligned with your team.", cta: "Discuss project", link: "/kontakt" },
        { title: "Integration & Operation", description: "We integrate the system into your existing infrastructure and stay alongside you while the AI sharpens itself on your operational data.", cta: "Discuss project", link: "/kontakt" },
      ],
    },
    finalCta: {
      title: "Your company is next.",
      body1: "We take 45 minutes. You explain your processes.",
      body2: "We show you what's possible.",
      cta: "Book intro call",
    },
    enterprise: {
      badge: "Enterprise",
      heroHeadline1: "Custom Business Systems",
      heroHeadline2: "for Complex Organizations.",
      heroSub: "We develop tailored software solutions for managing processes, customers and operational workflows.",
      heroCta: "Discuss System",
      problemLabel: "The Problem",
      problemTitle: "Standard software reaches its limits.",
      problemBody: "Many companies work with a combination of tools, spreadsheets and isolated solutions. This leads to:",
      problems: ["Unclear processes", "Manual work", "Lack of transparency", "Slow workflows"],
      solutionLabel: "The Solution",
      solutionTitle: "A system that fits your company.",
      solutionBody: "We develop business systems precisely tailored to your structure, processes and requirements.",
      solutionSub: "No generic tools. No workarounds.\nA system that truly reflects your business.",
      buildLabel: "Services",
      buildTitle: "Systems for Central Control and Efficiency",
      buildItems: [
        { label: "Business Operating Systems", desc: "Central control of all workflows" },
        { label: "CRM & Customer Management Systems", desc: "" },
        { label: "Process & Workflow Automation", desc: "" },
        { label: "Internal Tools & Platforms", desc: "" },
        { label: "Data & Reporting Infrastructure", desc: "" },
      ],
      useCaseLabel: "Use Cases",
      useCaseTitle: "For Companies with Complex Operations",
      useCaseBody: "Our systems are deployed where standard solutions are no longer sufficient.",
      useCases: ["Logistics & Dispatch", "Production & Industrial Processes", "Multi-Department Structures", "Companies with High Coordination Needs"],
      showcaseLabel: "Live Solutions",
      showcaseTitle: "Enterprise Systems in Action",
      showcaseSub: "See how our custom-built enterprise solutions work in real environments.",
      showcaseCards: [
        { slug: "delivery", title: "Logistics System", description: "Route optimization, driver management and real-time fleet tracking for delivery operations.", cta: "View Solution" },
        { slug: "dealflow", title: "Sales System", description: "Sales pipeline, lead management and revenue intelligence for B2B organizations.", cta: "View Solution" },
      ],
      resultLabel: "Results",
      resultTitle: "Clear Processes. Central Control. Scalability.",
      results: ["Clear workflows instead of chaos", "Central control of all processes", "Less manual work", "Higher efficiency", "Scalable infrastructure"],
      workLabel: "Approach",
      workTitle: "Limited Projects. Clear Results.",
      workBody: "We work with a small number of companies and only take on projects where we can create real structural impact.",
      workSub: "Every system is individually developed and closely aligned with the company.",
      authority: "Our systems are built on experience from developing complex business structures and operational processes.",
      ctaTitle: "Discuss System",
      ctaBody: "If you need a system that truly reflects your company, let's talk.",
      ctaButton: "Discuss System",
    },
    demo: {
      badge: "Enterprise Systems",
      heroHeadline1: "A Selection of Our Systems.",
      heroHeadline2: "In Detail.",
      heroSub: "Enterprise infrastructure for business, sales and logistics – custom-built, ready to deploy.\nBased on systems we've already built for a wide range of companies.",
      backLabel: "Back to overview",
      detailHeadline: "How your system works:",
      detailCta: "Set up system",
      ctaTitle: "Ready to Start?",
      ctaBody: "Let's build your system together.",
      ctaButton: "Request a project",
      cards: [
        {
          slug: "business",
          title: "Business System",
          description: "Central control of processes, teams and data – your custom operating system.",
          cta: "View System",
          detailDescription: "A system tailored to your company – for managing processes, teams and data.",
          features: ["Custom business operating system", "CRM & customer management", "Process automation", "Data & reporting infrastructure", "Scalable architecture"],
        },
        {
          slug: "salesystem",
          title: "Sales System",
          description: "Sales pipeline, lead management and revenue intelligence – from lead to close.",
          cta: "View System",
          detailDescription: "Your entire sales operation in one system – from lead to close, fully managed.",
          features: ["Automated lead scoring", "Custom deal pipelines", "AI-powered sales insights", "Revenue analytics & forecasting", "Full CRM with contact management"],
        },
        {
          slug: "delivery",
          title: "Logistics System",
          description: "Route planning, driver management and real-time tracking for scalable logistics.",
          cta: "View System",
          detailDescription: "Your entire delivery operation digitized – from dispatch to doorstep, fully tracked.",
          features: ["Automated route optimization", "Real-time driver tracking", "Order & stop management", "Driver app with navigation", "Admin dashboard & analytics"],
        },
        {
          slug: "guest-service",
          title: "Guest Service System",
          description: "Room service, concierge, minibar and wellness – digitally managed.",
          cta: "View System",
          detailDescription: "Your entire guest experience digitized – from check-in to checkout, fully automated.",
          features: ["Digital room service ordering", "Concierge requests & messaging", "Minibar management", "Wellness & spa booking", "Real-time guest communication"],
        },
        {
          slug: "venue",
          title: "Venue System",
          description: "Event spaces, bookings and guest management – all in one system.",
          cta: "View System",
          detailDescription: "Your venue operations digitized – from booking to event day, fully managed.",
          features: ["Event space management", "Online booking system", "Guest list management", "Catering coordination", "Real-time availability"],
        },
        {
          slug: "restaurant",
          title: "Restaurant System",
          description: "Online ordering, checkout and automated order processing.",
          cta: "View System",
          detailDescription: "See how your restaurant runs digitally – from order to delivery, fully automated.",
          features: ["Digital menu with real-time updates", "Online ordering & checkout", "Automated order processing", "Payment integration (card, Apple Pay)", "Admin dashboard for full control"],
        },
        {
          slug: "barber",
          title: "Barber & Hair Salon System",
          description: "Appointment booking, calendar and customer management.",
          cta: "View System",
          detailDescription: "Your salon fully digitized – customers book, you focus on your craft.",
          features: ["Online appointment booking", "Automated reminders", "Customer profiles & history", "Calendar management", "Revenue analytics"],
        },
        {
          slug: "studio",
          title: "Studio System",
          description: "Appointments, customers and organization in one place.",
          cta: "View System",
          detailDescription: "Everything your studio needs – from booking to customer management, streamlined.",
          features: ["Unified booking platform", "Customer management", "Service catalog", "Automated communications", "Performance tracking"],
        },
      ],
    },
    restaurantDetail: {
      heroHeadline: "How your Restaurant System works.",
      heroSub: "Customers order directly – no phone calls, no chaos.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Orders are often chaotic.",
      problemBody: "Many restaurants still rely on phone calls, notes or WhatsApp. This leads to:",
      problems: ["Misunderstandings with orders", "Lost orders", "Unnecessary stress in operations"],
      solutionLabel: "The Solution",
      solutionTitle: "A clear, digital workflow.",
      solutionBody1: "Your customers order directly through your system.",
      solutionBody2: "Everything is automatically captured and passed on in a structured way.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Customer opens your menu", "Products are selected", "Order is submitted", "Order appears directly in the system"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What happens in the background.",
      backendItems: ["Every order is automatically saved", "All information is instantly visible", "No manual entry needed", "Clear overview of all orders"],
      resultLabel: "Result",
      resultTitle: "More orders. Less chaos.",
      results: ["Faster workflows", "Fewer errors", "More control", "Better overview"],
      ctaTitle: "See the system live.",
      ctaBody: "This demo is exactly the system we set up for you.",
      ctaButton: "Set up system",
      backLabel: "Back to overview",
    },
    barberDetail: {
      heroHeadline: "How your Barber & Salon System works.",
      heroSub: "Customers book online – you focus on your craft.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Appointment chaos costs you customers.",
      problemBody: "Many salons still manage appointments via phone, WhatsApp or walk-ins. This leads to:",
      problems: ["Double bookings and scheduling conflicts", "No-shows without reminders", "Lost overview of the day"],
      solutionLabel: "The Solution",
      solutionTitle: "A booking system that runs itself.",
      solutionBody1: "Your customers book their appointment online – anytime, from anywhere.",
      solutionBody2: "Automated reminders reduce no-shows. You always see what's coming.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Customer opens your booking page", "Selects service, stylist and time", "Booking is confirmed automatically", "You see the appointment in your calendar"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What happens in the background.",
      backendItems: ["Every booking is saved automatically", "Customers receive reminders", "Customer history is stored", "Clear daily and weekly overview"],
      resultLabel: "Result",
      resultTitle: "Full schedule. Zero stress.",
      results: ["Fewer no-shows", "Less phone time", "Happier customers", "Better planning"],
      ctaTitle: "Get your booking system.",
      ctaBody: "We build a system tailored to your salon – ready to use.",
      ctaButton: "Set up system for me",
      backLabel: "Back to overview",
    },
    studioDetail: {
      heroHeadline: "How your Studio System works.",
      heroSub: "Bookings, customers and operations – all in one place.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Too many tools, too little overview.",
      problemBody: "Many studios juggle between calendars, spreadsheets and messaging apps. This leads to:",
      problems: ["Scattered customer information", "Manual scheduling effort", "Missed follow-ups and communication gaps"],
      solutionLabel: "The Solution",
      solutionTitle: "One system for everything.",
      solutionBody1: "Your studio gets a central platform for bookings, clients and communication.",
      solutionBody2: "Everything is connected – no more switching between tools.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Client books a session online", "You receive the booking instantly", "Client data is stored automatically", "Follow-ups and reminders run on autopilot"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What happens in the background.",
      backendItems: ["All bookings centrally managed", "Client profiles with history", "Automated communication", "Revenue and performance tracking"],
      resultLabel: "Result",
      resultTitle: "More structure. More time for your work.",
      results: ["Organized schedule", "Better client retention", "Less admin work", "Clear business insights"],
      ctaTitle: "Get your studio system.",
      ctaBody: "We build a system that fits your studio – from booking to reporting.",
      ctaButton: "Set up system for me",
      backLabel: "Back to overview",
    },
    businessDetail: {
      heroHeadline: "How your Business System works.",
      heroSub: "Processes, data and decisions – structured and automated.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Growth creates complexity.",
      problemBody: "As organizations scale, manual processes break down. The result:",
      problems: ["Fragmented data across departments", "Repetitive manual workflows", "Delayed decisions due to missing insights", "High coordination overhead"],
      solutionLabel: "The Solution",
      solutionTitle: "A system that grows with you.",
      solutionBody1: "Your business gets a custom platform that connects processes, teams and data.",
      solutionBody2: "From operations to reporting – everything in one place.",
      processLabel: "How It Works",
      processTitle: "From complexity to clarity.",
      steps: ["We analyze your core processes", "We design a tailored system architecture", "We build and integrate step by step", "You operate with full transparency"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What powers your system.",
      backendItems: ["Centralized data management", "Role-based access and permissions", "Automated workflows and notifications", "Real-time dashboards and reporting"],
      resultLabel: "Result",
      resultTitle: "Less friction. Better decisions.",
      results: ["Streamlined operations", "Faster decision-making", "Reduced manual effort", "Scalable infrastructure"],
      ctaTitle: "Build your business system.",
      ctaBody: "We design and develop a system tailored to your organization – from process to platform.",
      ctaButton: "Set up system for me",
      backLabel: "Back to overview",
    },
    deliveryDetail: {
      heroHeadline: "How your Logistics System works.",
      heroSub: "From dispatch to doorstep – fully tracked and optimized.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Deliveries run on chaos.",
      problemBody: "Many delivery operations still rely on phone calls, manual routing and guesswork. This leads to:",
      problems: ["Inefficient routes and wasted fuel", "No real-time visibility on driver location", "Missed or delayed deliveries", "Manual coordination between dispatchers and drivers"],
      solutionLabel: "The Solution",
      solutionTitle: "A logistics system that runs itself.",
      solutionBody1: "Orders are automatically assigned, routes optimized, and drivers tracked in real time.",
      solutionBody2: "From admin dashboard to driver app – one connected system.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Orders come in via your system", "Routes are automatically optimized", "Drivers receive stops in their app", "You track everything live on the dashboard"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What powers your delivery system.",
      backendItems: ["Automated route calculation and optimization", "Real-time GPS tracking of all drivers", "Stop-by-stop delivery confirmation", "Full analytics and delivery reports"],
      resultLabel: "Result",
      resultTitle: "Faster deliveries. Lower costs.",
      results: ["Optimized routes", "Real-time tracking", "Fewer missed deliveries", "Full operational control"],
      ctaTitle: "See the system live.",
      ctaBody: "This demo is exactly the delivery system we set up for you.",
      ctaButton: "Set up system",
      backLabel: "Back to overview",
    },
    dealFlowDetail: {
      heroHeadline: "How your Sales System works.",
      heroSub: "From lead to close – every deal tracked, scored and managed.",
      heroCta: "Discuss system",
      problemLabel: "The Problem",
      problemTitle: "Deals slip through the cracks.",
      problemBody: "Many sales teams work with scattered tools, spreadsheets and disconnected pipelines. This leads to:",
      problems: ["Lost leads and missed follow-ups", "No visibility on deal progress", "Manual data entry instead of selling", "Unclear revenue forecasts"],
      solutionLabel: "The Solution",
      solutionTitle: "A CRM that drives revenue.",
      solutionBody1: "Every lead, deal and contact in one connected system – with automated scoring, pipeline management and revenue intelligence.",
      solutionBody2: "From prospecting to close – your entire sales operation in one place.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Leads are captured and auto-scored", "Deals move through your custom pipeline", "Tasks and follow-ups are automated", "Revenue analytics update in real time"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What powers your sales system.",
      backendItems: ["Automated lead scoring and prioritization", "Custom deal pipelines with stage tracking", "AI-powered sales insights", "Full analytics and revenue reporting"],
      resultLabel: "Result",
      resultTitle: "More deals closed. Less work wasted.",
      results: ["Automated pipeline", "AI-driven insights", "Zero lost leads", "Full revenue visibility"],
      ctaTitle: "See the system live.",
      ctaBody: "This demo shows exactly the CRM system we build for you.",
      ctaButton: "Discuss system",
      backLabel: "Back to overview",
    },
    guestServiceDetail: {
      heroHeadline: "How your Guest Service System works.",
      heroSub: "Room service, concierge, wellness – everything your guests need, digitally.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Guest requests get lost.",
      problemBody: "Many hotels and accommodations still handle guest requests via phone, paper notes or face-to-face. This leads to:",
      problems: ["Delayed responses to guest requests", "Lost room service orders", "No overview of guest preferences", "Manual coordination between departments"],
      solutionLabel: "The Solution",
      solutionTitle: "A digital guest experience platform.",
      solutionBody1: "Every guest request, order and booking flows through one connected system – from room service to wellness appointments.",
      solutionBody2: "Your guests get a seamless digital experience. Your team gets full operational control.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Guest opens the digital service menu", "Room service, concierge or wellness is selected", "Request is instantly routed to the right team", "Status updates flow back to the guest in real time"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What powers your guest service.",
      backendItems: ["Automated request routing to departments", "Real-time status tracking for all orders", "Minibar inventory management", "Guest preference profiles & history"],
      resultLabel: "Result",
      resultTitle: "Happier guests. Smoother operations.",
      results: ["Faster response times", "Zero lost requests", "Seamless guest experience", "Full operational visibility"],
      ctaTitle: "See the system live.",
      ctaBody: "This demo shows exactly the guest service system we build for you.",
      ctaButton: "Set up system",
      backLabel: "Back to overview",
    },
    venueDetail: {
      heroHeadline: "How your Venue System works.",
      heroSub: "Events, bookings and guests – everything managed in one place.",
      heroCta: "Set up system",
      problemLabel: "The Problem",
      problemTitle: "Event management is fragmented.",
      problemBody: "Many venues still juggle bookings, guest lists and catering across emails, spreadsheets and phone calls. This leads to:",
      problems: ["Double bookings and scheduling conflicts", "Lost guest list updates", "No real-time availability overview", "Manual coordination with caterers and staff"],
      solutionLabel: "The Solution",
      solutionTitle: "One system for your entire venue.",
      solutionBody1: "From booking requests to event execution – everything runs through a single, connected platform.",
      solutionBody2: "Your guests get a smooth booking experience. Your team stays in full control.",
      processLabel: "How It Works",
      processTitle: "This is how it works.",
      steps: ["Client browses available spaces and dates", "Booking request is submitted online", "Event details and catering are coordinated", "Event day runs with real-time overview"],
      backendLabel: "Behind the Scenes",
      backendTitle: "What powers your venue system.",
      backendItems: ["Automated availability management", "Booking confirmations and reminders", "Guest list and check-in tracking", "Catering and resource coordination"],
      resultLabel: "Result",
      resultTitle: "More bookings. Less chaos.",
      results: ["Zero double bookings", "Faster booking flow", "Full event transparency", "Happier clients"],
      ctaTitle: "See the system live.",
      ctaBody: "This demo shows exactly the venue system we build for you.",
      ctaButton: "Set up system",
      backLabel: "Back to overview",
    },
    footer: {
      tagline: "Systems that companies run on.",
      navigate: "Navigate",
      connect: "More Solutions",
      legal: "Legal",
      rights: "All rights reserved.",
      contactLabel: "View System",
    },
  },
  de: {
    nav: {
      services: "Systeme",
      cases: "Beispiele",
      approach: "Ablauf",
      about: "Über uns",
      cta: "System ansehen",
      ctaSecondary: "Live Demo öffnen",
      mobileMicrocopy: "Sieh zuerst, wie dein System funktioniert",
    },
    hero: {
      badge: "AI-Native Enterprise Systems",
      headline1: "Wir bauen das operative Gehirn",
      headline2: "für Unternehmen, die wachsen wollen.",
      sub: "Kein Standard-Tool. Kein ERP von der Stange.",
      body: "Ein System, das deine Prozesse versteht, deine Daten auswertet und aktiv Entscheidungen vorbereitet.",
      cta1: "System ansehen",
      cta2: "Erstgespräch vereinbaren",
      statCard1Label: "Prozesseffizienz",
      statCard2Label: "AI Layer",
      statCard2Value: "Ab Tag 1 aktiv.",
      statCard2Sub: "Nach 30 Tagen präzise.",
      statCard3Label: "Standard-Lösungen",
      statCard3Sub: "Immer custom.",
    },
    services: {
      label: "Leistungen",
      title: "Was wir entwickeln",
      cta: "Systeme im Detail ansehen",
      items: [
        {
          title: "Custom System-Architektur",
          description: "Kein Template. Wir analysieren deine Prozesse und bauen das System, das genau zu deinem Unternehmen passt. Von Sales bis Logistik.",
          list: ["Prozessanalyse", "Maßgeschneiderte Architektur", "Von Sales bis Logistik", "Keine Templates", "End-to-End Umsetzung"],
        },
        {
          title: "AI als operative Schicht",
          description: "Die AI sammelt Betriebsdaten, erkennt Muster und schlägt aktiv vor, wo Effizienz verloren geht und was als nächstes zu tun ist.",
          list: ["Betriebsdaten in Echtzeit", "Mustererkennung", "Proaktive Empfehlungen", "Effizienz-Monitoring", "Entscheidungs-Support"],
        },
        {
          title: "Skalierbar von Anfang an",
          description: "Gebaut für Unternehmen mit 5 bis 50M€ Umsatz, die in den nächsten Jahren wachsen. Das System wächst mit, ohne neu zu starten.",
          list: ["Für 5 bis 50M€ Umsatz", "Wächst mit dem Unternehmen", "Kein Re-Build nötig", "Modular erweiterbar", "Enterprise-ready"],
        },
      ],
    },
    approach: {
      label: "Prozess",
      title: "Unser Ansatz",
      cta: "Erstgespräch vereinbaren",
      steps: [
        { number: "01", title: "Analyse", description: "Wir analysieren deine Prozesse, deine Datenstrukturen und wo Entscheidungen heute auf Bauchgefühl statt auf Daten basieren." },
        { number: "02", title: "Architektur", description: "Wir entwerfen eine individuelle Systemarchitektur mit integriertem AI-Layer – zugeschnitten auf deine Struktur." },
        { number: "03", title: "Optimierung & Skalierung", description: "Wir optimieren Abläufe und liefern ein System, in dem die AI aktiv Entscheidungen vorbereitet und mitwächst." },
      ],
    },
    cases: {
      label: "Fallstudie",
      title: "So sieht das in der Praxis aus",
      cardCta: "System ansehen",
      items: [
        {
          title: "7M€ Umsatz. Excel und Telefonanrufe.",
          category: "Mittelstand · Produzierendes Gewerbe",
          description: "Ein mittelständisches Unternehmen mit 40 Mitarbeitern wuchs schneller als seine internen Strukturen. Aufträge, Lagerbestände und Kapazitäten wurden manuell koordiniert – die Fehlerquote stieg mit dem Umsatz mit. Wir haben ein custom ERP mit AI-Schicht gebaut, das Betriebsmuster analysiert und proaktiv vorschlägt, wo Kapazitäten ineffizient genutzt werden und welche Aufträge zu priorisieren sind.",
          metrics: ["−80% manueller Koordinationsaufwand", "+127% Effizienz in 3 Monaten", "45.000€ Projektvolumen", "2 Mo. bis AI aktiv"],
          link: "/case/mittelstand-erp",
        },
        {
          title: "Außendienst auf Zuruf. Pipeline unsichtbar.",
          category: "Mittelstand · Chemievertrieb",
          description: "Ein Chemievertriebler koordinierte Besuche, Absprachen und Angebote vollständig auf Zuruf. Wir haben ein custom Außendienst-CRM mit mobiler Sprachaufnahme, Echtzeit-Lager und einer AI-Schicht gebaut, die Churn erkennt, bevor er passiert.",
          metrics: ["−100% verlorene Besuchsberichte", "1 zentrale Pipeline", "20.000€ Projektvolumen", "6 Wo. bis erstes AI-Alert"],
          link: "/case/chemievertrieb-crm",
        },
        {
          title: "Sales System",
          category: "Revenue",
          description: "Sales Pipeline mit automatisiertem Lead Scoring und einer AI-Schicht, die Deals priorisiert und sichtbar macht, wo Umsatz gefährdet ist – gebaut für B2B-Organisationen.",
          metrics: ["Automatisierte Pipeline", "AI-gestützte Priorisierung", "Revenue Forecasting", "Volle Umsatztransparenz"],
          link: "/demo/salesystem",
        },
        {
          title: "Logistik System",
          category: "Operations",
          description: "Routenoptimierung, Fahrerverwaltung und Echtzeit-Tracking mit einer AI-Schicht, die Muster in der Kapazitätsnutzung erkennt und Empfehlungen ausspricht.",
          metrics: ["Optimierte Routen", "Echtzeit-Tracking", "Musterbasierte Empfehlungen", "Skalierbare Logistik"],
          link: "/demo/delivery",
        },
      ],
    },
    why: {
      label: "Das Problem",
      title: "Die meisten Unternehmen kaufen Tools. Keines versteht das Unternehmen.",
      body: "CRM, ERP, BI-Dashboard. Jedes Tool löst ein Problem. Dein Team verbringt Stunden damit, Daten von System A nach System B zu übertragen. Entscheidungen werden auf Basis von Bauchgefühl getroffen, weil die Datenbasis fehlt. Wachstum scheitert nicht am Markt, sondern an interner Komplexität. SantosLab baut das System, das dieses Problem dauerhaft löst.",
      cta: "So sieht die Lösung aus",
      reasons: [
        "Stunden für manuellen Datentransfer zwischen Systemen",
        "Entscheidungen auf Bauchgefühl statt auf Daten",
        "Tools, die nicht miteinander reden",
        "Keine zentrale operative Datenbasis",
        "Wachstum blockiert durch interne Komplexität",
      ],
    },
    about: {
      label: "Über uns",
      title: "Über SantosLab",
      p1: "SantosLab ist ein AI-natives Software-Studio für individuelle Business-Systeme und Enterprise-Infrastruktur.",
      p2: "Wir helfen Unternehmen, komplexe Prozesse in klare, skalierbare Systeme mit aktivem AI-Layer zu überführen – von der Architektur bis zum laufenden Betrieb.",
      p3: "",
      cta: "System ansehen",
    },
    ways: {
      label: "Zusammenarbeit",
      title: "So arbeiten wir zusammen",
      items: [
        { title: "Beratung & Analyse", description: "Wir analysieren deine bestehenden Prozesse und identifizieren, wo ein individuelles System mit AI-Layer den größten Impact hat.", cta: "Erstgespräch vereinbaren", link: "/kontakt" },
        { title: "System-Entwicklung", description: "Wir entwerfen und entwickeln dein System – Architektur, AI-Layer und Rollout, eng abgestimmt mit deinem Team.", cta: "Projekt besprechen", link: "/kontakt" },
        { title: "Integration & Betrieb", description: "Wir integrieren das System in deine bestehende Infrastruktur und begleiten dich, während die AI sich auf deinen Betriebsdaten schärft.", cta: "Projekt besprechen", link: "/kontakt" },
      ],
    },
    finalCta: {
      title: "Dein Unternehmen ist das nächste.",
      body1: "Wir nehmen uns 45 Minuten. Du erklärst deine Prozesse.",
      body2: "Wir zeigen dir, was möglich ist.",
      cta: "Erstgespräch vereinbaren",
    },
    enterprise: {
      badge: "Enterprise",
      heroHeadline1: "Individuelle Business-Systeme",
      heroHeadline2: "für komplexe Unternehmen.",
      heroSub: "Wir entwickeln maßgeschneiderte Softwarelösungen zur Steuerung von Prozessen, Kunden und operativen Abläufen.",
      heroCta: "System besprechen",
      problemLabel: "Das Problem",
      problemTitle: "Standard-Software stößt an ihre Grenzen.",
      problemBody: "Viele Unternehmen arbeiten mit einer Kombination aus Tools, Tabellen und Insellösungen. Das führt zu:",
      problems: ["Unklare Prozesse", "Manuelle Arbeit", "Fehlende Transparenz", "Langsame Abläufe"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein System, das zu deinem Unternehmen passt.",
      solutionBody: "Wir entwickeln Business-Systeme, die exakt auf deine Struktur, Prozesse und Anforderungen abgestimmt sind.",
      solutionSub: "Keine generischen Tools. Kein Workaround.\nSondern ein System, das dein Unternehmen abbildet.",
      buildLabel: "Leistungen",
      buildTitle: "Systeme für zentrale Steuerung und Effizienz",
      buildItems: [
        { label: "Business Operating Systems", desc: "Zentrale Steuerung aller Abläufe" },
        { label: "CRM- und Kundenmanagement-Systeme", desc: "" },
        { label: "Prozess- und Workflow-Automatisierung", desc: "" },
        { label: "Interne Tools und Plattformen", desc: "" },
        { label: "Daten- und Reporting-Infrastruktur", desc: "" },
      ],
      useCaseLabel: "Einsatzbereiche",
      useCaseTitle: "Für Unternehmen mit komplexen Abläufen",
      useCaseBody: "Unsere Systeme kommen dort zum Einsatz, wo Standardlösungen nicht mehr ausreichen.",
      useCases: ["Logistik und Disposition", "Produktions- und Industrieprozesse", "Multi-Abteilungs-Strukturen", "Unternehmen mit hohem Koordinationsaufwand"],
      showcaseLabel: "Live Lösungen",
      showcaseTitle: "Enterprise Systeme im Einsatz",
      showcaseSub: "Erlebe, wie unsere maßgeschneiderten Enterprise-Lösungen in realen Umgebungen funktionieren.",
      showcaseCards: [
        { slug: "delivery", title: "Logistik System", description: "Routenoptimierung, Fahrerverwaltung und Echtzeit-Flottentracking für Lieferbetriebe.", cta: "Lösung ansehen" },
        { slug: "dealflow", title: "Sales System", description: "Sales Pipeline, Lead Management und Revenue Intelligence für B2B-Organisationen.", cta: "Lösung ansehen" },
      ],
      resultLabel: "Ergebnis",
      resultTitle: "Klare Prozesse. Zentrale Steuerung. Skalierbarkeit.",
      results: ["Klare Abläufe statt Chaos", "Zentrale Steuerung aller Prozesse", "Weniger manuelle Arbeit", "Höhere Effizienz", "Skalierbare Infrastruktur"],
      workLabel: "Arbeitsweise",
      workTitle: "Begrenzte Projekte. Klare Ergebnisse.",
      workBody: "Wir arbeiten mit einer kleinen Anzahl an Unternehmen und übernehmen nur Projekte, bei denen wir echten strukturellen Impact schaffen können.",
      workSub: "Jedes System wird individuell entwickelt und eng mit dem Unternehmen abgestimmt.",
      authority: "Unsere Systeme basieren auf Erfahrungen aus dem Aufbau komplexer Business-Strukturen und operativer Prozesse.",
      ctaTitle: "System besprechen",
      ctaBody: "Wenn du ein System brauchst, das dein Unternehmen wirklich abbildet, lass uns sprechen.",
      ctaButton: "System besprechen",
    },
    demo: {
      badge: "Enterprise Systeme",
      heroHeadline1: "Ein Ausschnitt unserer Systeme.",
      heroHeadline2: "Im Detail.",
      heroSub: "Enterprise-Infrastruktur für Business, Sales und Logistik – individuell entwickelt, sofort einsatzbereit.\nBasierend auf Systemen, die wir bereits für unterschiedlichste Unternehmen gebaut haben.",
      backLabel: "Zurück zur Übersicht",
      detailHeadline: "So funktioniert das",
      detailCta: "System aufsetzen",
      ctaTitle: "Bereit zu starten?",
      ctaBody: "Lass uns dein System gemeinsam aufbauen.",
      ctaButton: "Projekt anfragen",
      cards: [
        {
          slug: "business",
          title: "Business System",
          description: "Zentrale Steuerung von Prozessen, Teams und Daten – dein individuelles Operating System.",
          cta: "System ansehen",
          detailDescription: "Ein System, das auf dein Unternehmen zugeschnitten ist – für Prozesse, Teams und Daten.",
          features: ["Individuelles Business Operating System", "CRM & Kundenmanagement", "Prozessautomatisierung", "Daten- & Reporting-Infrastruktur", "Skalierbare Architektur"],
        },
        {
          slug: "salesystem",
          title: "Sales System",
          description: "Sales Pipeline, Lead Management und Revenue Intelligence – vom Lead zum Abschluss.",
          cta: "System ansehen",
          detailDescription: "Dein gesamter Vertrieb in einem System – vom Lead zum Abschluss, vollständig gesteuert.",
          features: ["Automatisiertes Lead Scoring", "Individuelle Deal Pipelines", "KI-gestützte Vertriebs-Insights", "Umsatzanalysen & Forecasting", "Vollständiges CRM mit Kontaktverwaltung"],
        },
        {
          slug: "delivery",
          title: "Logistik System",
          description: "Routenplanung, Fahrerverwaltung und Echtzeit-Tracking für skalierbare Logistik.",
          cta: "System ansehen",
          detailDescription: "Dein gesamter Lieferbetrieb digitalisiert – vom Versand bis zur Haustür, vollständig getrackt.",
          features: ["Automatisierte Routenoptimierung", "Echtzeit-Fahrer-Tracking", "Auftrags- & Stoppverwaltung", "Fahrer-App mit Navigation", "Admin Dashboard & Analysen"],
        },
        {
          slug: "guest-service",
          title: "Gäste-Service System",
          description: "Zimmerservice, Concierge, Minibar und Wellness – digital gesteuert.",
          cta: "System ansehen",
          detailDescription: "Dein gesamtes Gästeerlebnis digitalisiert – vom Check-in bis zum Checkout, vollständig automatisiert.",
          features: ["Digitaler Zimmerservice", "Concierge-Anfragen & Messaging", "Minibar-Verwaltung", "Wellness- & Spa-Buchung", "Echtzeit-Gästekommunikation"],
        },
        {
          slug: "venue",
          title: "Venue System",
          description: "Eventlocations, Buchungen und Gästemanagement – alles in einem System.",
          cta: "System ansehen",
          detailDescription: "Dein Venue-Betrieb digitalisiert – von der Buchung bis zum Event, vollständig gesteuert.",
          features: ["Eventflächen-Verwaltung", "Online-Buchungssystem", "Gästelisten-Management", "Catering-Koordination", "Echtzeit-Verfügbarkeit"],
        },
        {
          slug: "restaurant",
          title: "Restaurant System",
          description: "Online-Bestellungen, Checkout und automatisierte Abwicklung.",
          cta: "System ansehen",
          detailDescription: "Erlebe, wie dein Restaurant digital läuft – von der Bestellung bis zur Lieferung, vollständig automatisiert.",
          features: ["Digitale Speisekarte mit Echtzeit-Updates", "Online-Bestellungen & Checkout", "Automatisierte Bestellabwicklung", "Zahlungsintegration (Karte, Apple Pay)", "Admin Dashboard für volle Kontrolle"],
        },
        {
          slug: "barber",
          title: "Friseur & Barber System",
          description: "Terminbuchung, Kalender und Kundenverwaltung.",
          cta: "System ansehen",
          detailDescription: "Dein Salon komplett digitalisiert – Kunden buchen, du konzentrierst dich auf dein Handwerk.",
          features: ["Online-Terminbuchung", "Automatisierte Erinnerungen", "Kundenprofile & Historie", "Kalenderverwaltung", "Umsatzanalysen"],
        },
        {
          slug: "studio",
          title: "Studio System",
          description: "Termine, Kunden und Organisation an einem Ort.",
          cta: "System ansehen",
          detailDescription: "Alles, was dein Studio braucht – von der Buchung bis zur Kundenverwaltung, optimiert.",
          features: ["Zentrale Buchungsplattform", "Kundenverwaltung", "Leistungskatalog", "Automatisierte Kommunikation", "Performance Tracking"],
        },
      ],
    },
    restaurantDetail: {
      heroHeadline: "So funktioniert dein Restaurant System.",
      heroSub: "Kunden bestellen direkt – ohne Telefon, ohne Chaos.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Bestellungen laufen oft chaotisch.",
      problemBody: "Viele Restaurants arbeiten noch mit Telefon, Zetteln oder WhatsApp. Das führt zu:",
      problems: ["Missverständnissen bei Bestellungen", "Verlorenen Aufträgen", "Unnötigem Stress im Betrieb"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein klarer, digitaler Ablauf.",
      solutionBody1: "Deine Kunden bestellen direkt über dein System.",
      solutionBody2: "Alles wird automatisch erfasst und strukturiert weitergegeben.",
      processLabel: "So läuft es ab",
      processTitle: "So läuft es ab.",
      steps: ["Kunde öffnet dein Menü", "Produkte werden ausgewählt", "Bestellung wird abgeschickt", "Bestellung erscheint direkt im System"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was im Hintergrund passiert.",
      backendItems: ["Jede Bestellung wird automatisch gespeichert", "Alle Informationen sind sofort sichtbar", "Kein manuelles Nachtragen nötig", "Klarer Überblick über alle Bestellungen"],
      resultLabel: "Ergebnis",
      resultTitle: "Mehr Bestellungen. Weniger Chaos.",
      results: ["Schnellere Abläufe", "Weniger Fehler", "Mehr Kontrolle", "Bessere Übersicht"],
      ctaTitle: "Sieh dir das System live an.",
      ctaBody: "Diese Demo entspricht genau dem System, das wir für dich aufsetzen.",
      ctaButton: "System aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    barberDetail: {
      heroHeadline: "So funktioniert dein Friseur & Barber System.",
      heroSub: "Kunden buchen online – du konzentrierst dich auf dein Handwerk.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Termin-Chaos kostet dich Kunden.",
      problemBody: "Viele Salons verwalten Termine noch per Telefon, WhatsApp oder Laufkundschaft. Das führt zu:",
      problems: ["Doppelbuchungen und Terminkonflikten", "No-Shows ohne Erinnerungen", "Verlorenem Überblick über den Tag"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein Buchungssystem, das sich selbst organisiert.",
      solutionBody1: "Deine Kunden buchen ihren Termin online – jederzeit, von überall.",
      solutionBody2: "Automatische Erinnerungen reduzieren No-Shows. Du siehst immer, was kommt.",
      processLabel: "So läuft es ab",
      processTitle: "So läuft es ab.",
      steps: ["Kunde öffnet deine Buchungsseite", "Wählt Service, Stylist und Uhrzeit", "Buchung wird automatisch bestätigt", "Du siehst den Termin in deinem Kalender"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was im Hintergrund passiert.",
      backendItems: ["Jede Buchung wird automatisch gespeichert", "Kunden erhalten Erinnerungen", "Kundenhistorie wird gespeichert", "Klare Tages- und Wochenübersicht"],
      resultLabel: "Ergebnis",
      resultTitle: "Voller Terminkalender. Null Stress.",
      results: ["Weniger No-Shows", "Weniger Telefonate", "Zufriedenere Kunden", "Bessere Planung"],
      ctaTitle: "Hol dir dein Buchungssystem.",
      ctaBody: "Wir bauen ein System, das auf deinen Salon zugeschnitten ist – sofort einsatzbereit.",
      ctaButton: "System für mich aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    studioDetail: {
      heroHeadline: "So funktioniert dein Studio System.",
      heroSub: "Buchungen, Kunden und Organisation – alles an einem Ort.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Zu viele Tools, zu wenig Überblick.",
      problemBody: "Viele Studios jonglieren zwischen Kalendern, Tabellen und Messenger-Apps. Das führt zu:",
      problems: ["Verstreuten Kundeninformationen", "Manuellem Planungsaufwand", "Verpassten Follow-ups und Kommunikationslücken"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein System für alles.",
      solutionBody1: "Dein Studio bekommt eine zentrale Plattform für Buchungen, Kunden und Kommunikation.",
      solutionBody2: "Alles ist verbunden – kein Wechsel mehr zwischen Tools.",
      processLabel: "So läuft es ab",
      processTitle: "So läuft es ab.",
      steps: ["Kunde bucht eine Session online", "Du erhältst die Buchung sofort", "Kundendaten werden automatisch gespeichert", "Follow-ups und Erinnerungen laufen automatisch"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was im Hintergrund passiert.",
      backendItems: ["Alle Buchungen zentral verwaltet", "Kundenprofile mit Historie", "Automatisierte Kommunikation", "Umsatz- und Performance-Tracking"],
      resultLabel: "Ergebnis",
      resultTitle: "Mehr Struktur. Mehr Zeit für deine Arbeit.",
      results: ["Organisierter Terminplan", "Bessere Kundenbindung", "Weniger Verwaltungsaufwand", "Klare Geschäftseinblicke"],
      ctaTitle: "Hol dir dein Studio-System.",
      ctaBody: "Wir bauen ein System, das zu deinem Studio passt – von der Buchung bis zum Reporting.",
      ctaButton: "System für mich aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    businessDetail: {
      heroHeadline: "So funktioniert dein Business System.",
      heroSub: "Prozesse, Daten und Entscheidungen – strukturiert und automatisiert.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Wachstum erzeugt Komplexität.",
      problemBody: "Je größer die Organisation, desto mehr brechen manuelle Abläufe zusammen. Das Ergebnis:",
      problems: ["Fragmentierte Daten über Abteilungen hinweg", "Wiederkehrende manuelle Arbeitsschritte", "Verzögerte Entscheidungen durch fehlende Einblicke", "Hoher Koordinationsaufwand"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein System, das mitwächst.",
      solutionBody1: "Dein Unternehmen bekommt eine maßgeschneiderte Plattform, die Prozesse, Teams und Daten verbindet.",
      solutionBody2: "Von der Steuerung bis zum Reporting – alles an einem Ort.",
      processLabel: "So läuft es ab",
      processTitle: "Von Komplexität zu Klarheit.",
      steps: ["Wir analysieren deine Kernprozesse", "Wir entwerfen eine passende Systemarchitektur", "Wir bauen und integrieren Schritt für Schritt", "Du arbeitest mit voller Transparenz"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was dein System antreibt.",
      backendItems: ["Zentrale Datenverwaltung", "Rollenbasierter Zugriff und Berechtigungen", "Automatisierte Workflows und Benachrichtigungen", "Echtzeit-Dashboards und Reporting"],
      resultLabel: "Ergebnis",
      resultTitle: "Weniger Reibung. Bessere Entscheidungen.",
      results: ["Schlankere Abläufe", "Schnellere Entscheidungen", "Weniger manueller Aufwand", "Skalierbare Infrastruktur"],
      ctaTitle: "Bau dir dein Business System.",
      ctaBody: "Wir konzipieren und entwickeln ein System, das auf deine Organisation zugeschnitten ist – vom Prozess zur Plattform.",
      ctaButton: "System für mich aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    deliveryDetail: {
      heroHeadline: "So funktioniert dein Logistik System.",
      heroSub: "Vom Versand bis zur Haustür – vollständig getrackt und optimiert.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Lieferungen laufen im Chaos.",
      problemBody: "Viele Lieferbetriebe arbeiten noch mit Telefon, manueller Routenplanung und Bauchgefühl. Das führt zu:",
      problems: ["Ineffiziente Routen und verschwendeter Sprit", "Keine Echtzeit-Sicht auf den Fahrer-Standort", "Verpasste oder verspätete Lieferungen", "Manuelle Koordination zwischen Disponent und Fahrer"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein Logistiksystem, das sich selbst steuert.",
      solutionBody1: "Aufträge werden automatisch zugewiesen, Routen optimiert und Fahrer in Echtzeit getrackt.",
      solutionBody2: "Vom Admin Dashboard bis zur Fahrer-App – ein verbundenes System.",
      processLabel: "So läuft es ab",
      processTitle: "So funktioniert es.",
      steps: ["Aufträge kommen über dein System rein", "Routen werden automatisch optimiert", "Fahrer erhalten Stopps in ihrer App", "Du trackst alles live auf dem Dashboard"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was dein Liefersystem antreibt.",
      backendItems: ["Automatische Routenberechnung und -optimierung", "Echtzeit-GPS-Tracking aller Fahrer", "Stopp-für-Stopp Lieferbestätigung", "Vollständige Analysen und Lieferberichte"],
      resultLabel: "Ergebnis",
      resultTitle: "Schnellere Lieferungen. Niedrigere Kosten.",
      results: ["Optimierte Routen", "Echtzeit-Tracking", "Weniger verpasste Lieferungen", "Volle operative Kontrolle"],
      ctaTitle: "Sieh dir das System live an.",
      ctaBody: "Diese Demo ist genau das Liefersystem, das wir für dich aufbauen.",
      ctaButton: "System aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    dealFlowDetail: {
      heroHeadline: "So funktioniert dein Sales System.",
      heroSub: "Vom Lead zum Abschluss – jeder Deal getrackt, bewertet und gesteuert.",
      heroCta: "System besprechen",
      problemLabel: "Das Problem",
      problemTitle: "Deals gehen verloren.",
      problemBody: "Viele Vertriebsteams arbeiten mit verteilten Tools, Tabellen und getrennten Pipelines. Das führt zu:",
      problems: ["Verlorene Leads und vergessene Follow-ups", "Keine Sicht auf den Deal-Fortschritt", "Manuelle Dateneingabe statt Verkaufen", "Unklare Umsatzprognosen"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein CRM, das Umsatz treibt.",
      solutionBody1: "Jeder Lead, Deal und Kontakt in einem verbundenen System – mit automatischem Scoring, Pipeline-Management und Revenue Intelligence.",
      solutionBody2: "Vom Prospecting bis zum Abschluss – dein gesamter Vertrieb an einem Ort.",
      processLabel: "So läuft es ab",
      processTitle: "So funktioniert es.",
      steps: ["Leads werden erfasst und automatisch bewertet", "Deals bewegen sich durch deine individuelle Pipeline", "Aufgaben und Follow-ups werden automatisiert", "Umsatzanalysen aktualisieren sich in Echtzeit"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was dein Vertriebssystem antreibt.",
      backendItems: ["Automatisiertes Lead Scoring und Priorisierung", "Individuelle Deal Pipelines mit Stage-Tracking", "KI-gestützte Vertriebs-Insights", "Vollständige Analysen und Umsatzreporting"],
      resultLabel: "Ergebnis",
      resultTitle: "Mehr Abschlüsse. Weniger Aufwand.",
      results: ["Automatisierte Pipeline", "KI-gestützte Insights", "Keine verlorenen Leads", "Volle Umsatztransparenz"],
      ctaTitle: "Sieh dir das System live an.",
      ctaBody: "Diese Demo zeigt genau das CRM-System, das wir für dich aufbauen.",
      ctaButton: "System besprechen",
      backLabel: "Zurück zur Übersicht",
    },
    guestServiceDetail: {
      heroHeadline: "So funktioniert dein Gäste-Service System.",
      heroSub: "Zimmerservice, Concierge, Wellness – alles, was deine Gäste brauchen, digital.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Gästewünsche gehen verloren.",
      problemBody: "Viele Hotels und Unterkünfte bearbeiten Gästeanfragen noch per Telefon, Zettel oder persönlich. Das führt zu:",
      problems: ["Verzögerte Reaktionen auf Gästewünsche", "Verlorene Zimmerservice-Bestellungen", "Kein Überblick über Gästepräferenzen", "Manuelle Koordination zwischen Abteilungen"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Eine digitale Gäste-Experience-Plattform.",
      solutionBody1: "Jede Gästeanfrage, Bestellung und Buchung läuft durch ein verbundenes System – vom Zimmerservice bis zum Wellness-Termin.",
      solutionBody2: "Deine Gäste bekommen ein nahtloses digitales Erlebnis. Dein Team behält die volle operative Kontrolle.",
      processLabel: "So läuft es ab",
      processTitle: "So funktioniert es.",
      steps: ["Gast öffnet das digitale Service-Menü", "Zimmerservice, Concierge oder Wellness wird gewählt", "Anfrage wird sofort ans richtige Team geleitet", "Statusupdates fließen in Echtzeit zurück zum Gast"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was dein Gäste-Service antreibt.",
      backendItems: ["Automatisches Anfragen-Routing an Abteilungen", "Echtzeit-Statustracking für alle Bestellungen", "Minibar-Bestandsverwaltung", "Gästepräferenz-Profile & Historie"],
      resultLabel: "Ergebnis",
      resultTitle: "Zufriedenere Gäste. Reibungsloser Betrieb.",
      results: ["Schnellere Reaktionszeiten", "Keine verlorenen Anfragen", "Nahtloses Gästeerlebnis", "Volle operative Transparenz"],
      ctaTitle: "Sieh dir das System live an.",
      ctaBody: "Diese Demo zeigt genau das Gäste-Service-System, das wir für dich aufbauen.",
      ctaButton: "System aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    venueDetail: {
      heroHeadline: "So funktioniert dein Venue System.",
      heroSub: "Events, Buchungen und Gäste – alles an einem Ort verwaltet.",
      heroCta: "System aufsetzen",
      problemLabel: "Das Problem",
      problemTitle: "Event-Management ist zersplittert.",
      problemBody: "Viele Venues jonglieren Buchungen, Gästelisten und Catering über E-Mails, Excel und Telefon. Das führt zu:",
      problems: ["Doppelbuchungen und Terminkonflikte", "Verlorene Gästelisten-Updates", "Kein Echtzeit-Überblick über Verfügbarkeit", "Manuelle Abstimmung mit Catering und Personal"],
      solutionLabel: "Die Lösung",
      solutionTitle: "Ein System für dein gesamtes Venue.",
      solutionBody1: "Von der Buchungsanfrage bis zur Event-Durchführung – alles läuft über eine einzige, vernetzte Plattform.",
      solutionBody2: "Deine Kunden erleben eine reibungslose Buchung. Dein Team behält die volle Kontrolle.",
      processLabel: "So läuft es ab",
      processTitle: "So funktioniert es.",
      steps: ["Kunde sieht verfügbare Räume und Termine", "Buchungsanfrage wird online eingereicht", "Event-Details und Catering werden abgestimmt", "Am Event-Tag läuft alles mit Echtzeit-Überblick"],
      backendLabel: "Im Hintergrund",
      backendTitle: "Was dein Venue System antreibt.",
      backendItems: ["Automatisches Verfügbarkeitsmanagement", "Buchungsbestätigungen und Erinnerungen", "Gästelisten- und Check-in-Tracking", "Catering- und Ressourcen-Koordination"],
      resultLabel: "Ergebnis",
      resultTitle: "Mehr Buchungen. Weniger Chaos.",
      results: ["Keine Doppelbuchungen", "Schnellerer Buchungsablauf", "Volle Event-Transparenz", "Zufriedenere Kunden"],
      ctaTitle: "Sieh dir das System live an.",
      ctaBody: "Diese Demo zeigt genau das Venue-System, das wir für dich aufbauen.",
      ctaButton: "System aufsetzen",
      backLabel: "Zurück zur Übersicht",
    },
    footer: {
      tagline: "Systeme, auf denen Unternehmen laufen.",
      navigate: "Navigation",
      connect: "Mehr Lösungen",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
      contactLabel: "System ansehen",
    },
  },
};

export type Language = "en" | "de";
