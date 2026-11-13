export interface Partner {
  id: string;
  name: string;
  tagline: string;
  role: string;
  description: string;
  website: string;
  badge: string;
  accentColor: string; // Tailwind accent color or hex
  tags: string[];
}

export const PARTNERS_DATA: Partner[] = [
  {
    id: "open-source-weekends",
    name: "Open Source Weekends",
    tagline: "Empowering developers to build in the open",
    role: "Official Community Partner",
    description:
      "A vibrant global initiative connecting passionate developers, maintainers, and beginners through collaborative weekend hack days, open source contributions, and knowledge sharing.",
    website: "https://opensourceweekend.org/",
    badge: "Official Community Partner",
    accentColor: "from-cyan-500 to-blue-600",
    tags: ["Open Source", "Global Hackathons", "Community Collaboration", "Mentorship"]
  },
  {
    id: "xr-creatorcon",
    name: "XR CreatorCon",
    tagline: "Pioneering the Next Dimension of Spatial Computing",
    role: "Official Community Partner",
    description:
      "The premier gathering for creators, engineers, and visionaries exploring Extended Reality (XR), Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), and spatial computing technologies.",
    website: "https://xrcreatorcon.com/", // Editable reference link
    badge: "Official Community Partner",
    accentColor: "from-purple-500 to-pink-600",
    tags: ["XR / AR / VR", "Spatial Computing", "Immersive 3D", "WebXR"]
  }
];

export interface TechDomain {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  keySkills: string[];
  gradient: string;
}

export const TECH_DOMAINS: TechDomain[] = [
  {
    id: "react-frontend",
    title: "React & Modern Web",
    description: "Architecting high-performance user interfaces with React 19, Server Components, TypeScript, and micro-interactions.",
    iconName: "Atom",
    category: "Frontend",
    keySkills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: "fullstack-eng",
    title: "Full-Stack Engineering",
    description: "Designing resilient backend microservices, real-time APIs, distributed state, and cloud-native databases.",
    iconName: "Layers",
    category: "Full Stack",
    keySkills: ["Node.js", "GraphQL", "PostgreSQL", "REST APIs", "Redis"],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: "ai-agentic",
    title: "AI, GenAI & Agentic Systems",
    description: "Building autonomous agentic workflows, LLM orchestration, RAG pipelines, and intelligent neural interfaces.",
    iconName: "BrainCircuit",
    category: "AI & ML",
    keySkills: ["LLM Orchestration", "Agentic Workflows", "LangChain", "Vector DBs", "RAG"],
    gradient: "from-fuchsia-500 to-purple-600"
  },
  {
    id: "cloud-devops",
    title: "Cloud & Distributed Systems",
    description: "Scalable infrastructure automation, Docker containers, serverless architectures, and CI/CD pipelines.",
    iconName: "Cloud",
    category: "DevOps",
    keySkills: ["AWS / GCP", "Docker", "Kubernetes", "CI/CD", "Serverless"],
    gradient: "from-blue-500 to-teal-400"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Cryptography",
    description: "Ethical hacking, application security audits, decentralized identity, and privacy-preserving protocols.",
    iconName: "ShieldCheck",
    category: "Security",
    keySkills: ["Zero Trust", "Penetration Testing", "OAuth2 / OIDC", "Cryptography"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description: "Transforming raw data streams into actionable intelligence with predictive modeling and visualization.",
    iconName: "BarChart3",
    category: "Data",
    keySkills: ["Python", "Pandas", "PyTorch", "Data Pipelines", "Visualization"],
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "xr-spatial",
    title: "XR & Spatial Computing",
    description: "Creating next-generation immersive environments, WebXR interfaces, and 3D spatial user experiences.",
    iconName: "Glasses",
    category: "Immersive",
    keySkills: ["Three.js", "WebXR", "Unity", "Spatial Audio", "AR Core"],
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "open-source",
    title: "Open Source Development",
    description: "Collaborative contribution to global repositories, maintainership, open standards, and tooling.",
    iconName: "GitBranch",
    category: "Open Source",
    keySkills: ["Git Workflows", "FOSS Standards", "CI Automation", "Documentation"],
    gradient: "from-violet-500 to-cyan-500"
  }
];

export interface ReactTrend {
  id: string;
  title: string;
  category: "Core React" | "Architecture" | "Styling & UI" | "AI & Tools";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  badge: string;
  summary: string;
  officialDocUrl: string;
  features: string[];
}

export const REACT_TRENDS: ReactTrend[] = [
  {
    id: "react-19",
    title: "Modern React & React 19",
    category: "Core React",
    difficulty: "Intermediate",
    badge: "Latest Stable Standard",
    summary: "Introduces Actions, useActionState, useOptimistic, and native asset preloading for seamless web apps.",
    officialDocUrl: "https://react.dev/blog/2024/04/25/react-19",
    features: ["Server Actions", "useActionState hook", "Native document metadata support"]
  },
  {
    id: "rsc",
    title: "React Server Components",
    category: "Architecture",
    difficulty: "Advanced",
    badge: "Architecture Shift",
    summary: "Zero-bundle-size components executing on the server with direct database and file system access.",
    officialDocUrl: "https://react.dev/reference/rsc/server-components",
    features: ["Zero client JavaScript payload", "Direct backend integration", "Streaming rendering"]
  },
  {
    id: "react-compiler",
    title: "React Compiler (Forget)",
    category: "Core React",
    difficulty: "Advanced",
    badge: "Automated Memoization",
    summary: "An optimizing compiler that automatically memorizes values and components, eliminating useMemo and useCallback boilerplate.",
    officialDocUrl: "https://react.dev/learn/react-compiler",
    features: ["Auto memoization", "Clean functional syntax", "Compile-time performance guarantees"]
  },
  {
    id: "nextjs",
    title: "Next.js App Router",
    category: "Architecture",
    difficulty: "Intermediate",
    badge: "Full-Stack React",
    summary: "Production-grade framework with Server Components, Nested Layouts, Server Actions, and Partial Prerendering.",
    officialDocUrl: "https://nextjs.org/docs",
    features: ["App Router architecture", "Partial Prerendering (PPR)", "Built-in SEO & Image optimization"]
  },
  {
    id: "typescript",
    title: "Strict TypeScript in React",
    category: "Architecture",
    difficulty: "Beginner",
    badge: "Type Safety",
    summary: "Compile-time type checking, polymorphic component typing, and bulletproof interface contracts.",
    officialDocUrl: "https://www.typescriptlang.org/docs/",
    features: ["Generic component props", "Strong typing for Hooks", "Error-free refactoring"]
  },
  {
    id: "tailwind-shadcn",
    title: "Tailwind CSS & Shadcn UI",
    category: "Styling & UI",
    difficulty: "Beginner",
    badge: "Design System",
    summary: "Utility-first CSS paired with copy-paste Radix UI accessible primitives giving full code ownership.",
    officialDocUrl: "https://ui.shadcn.com/",
    features: ["Accessible Radix primitives", "Customizable design tokens", "Zero runtime overhead"]
  },
  {
    id: "motion-gsap",
    title: "Motion & GSAP",
    category: "Styling & UI",
    difficulty: "Intermediate",
    badge: "Animation",
    summary: "Declarative physics-based animations, layout transitions, and GPU-accelerated micro-interactions.",
    officialDocUrl: "https://motion.dev/",
    features: ["Spring physics gestures", "Scroll-driven sequences", "Exit & layout morphing animations"]
  },
  {
    id: "vite",
    title: "Vite Next-Gen Bundler",
    category: "AI & Tools",
    difficulty: "Beginner",
    badge: "Lightning Fast DX",
    summary: "Instant hot module replacement (HMR) powered by native ES modules and lightning-fast Rollup builds.",
    officialDocUrl: "https://vite.dev/",
    features: ["Sub-millisecond HMR", "Plugin ecosystem", "Optimized production bundles"]
  },
  {
    id: "perf-suspense",
    title: "Performance & Suspense",
    category: "Architecture",
    difficulty: "Advanced",
    badge: "Optimized UX",
    summary: "Progressive hydration, selective fallback boundaries, and concurrent rendering for stutter-free apps.",
    officialDocUrl: "https://react.dev/reference/react/Suspense",
    features: ["Concurrent rendering", "Streaming SSR", "Granular error boundaries"]
  },
  {
    id: "ai-react",
    title: "AI-Powered React & LLMs",
    category: "AI & Tools",
    difficulty: "Intermediate",
    badge: "Next Frontier",
    summary: "Integrating Vercel AI SDK, streaming LLM completions, dynamic generative UI components, and tool calls.",
    officialDocUrl: "https://sdk.vercel.ai/docs",
    features: ["Streaming text & JSON UI", "Assistant tool invocations", "Client-side prompt orchestration"]
  },
  {
    id: "pwa",
    title: "Progressive Web Apps (PWA)",
    category: "Architecture",
    difficulty: "Intermediate",
    badge: "Offline First",
    summary: "Service workers, offline caching strategies, background sync, and installable native-like experiences.",
    officialDocUrl: "https://web.dev/explore/progressive-web-apps",
    features: ["Offline capability", "App shell caching", "Push notifications"]
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  featured: boolean;
  category: "Open Source" | "Community Tool" | "AI / Web3";
}

export const COMMUNITY_PROJECTS: ProjectItem[] = [
  {
    id: "cipher-core",
    title: "CipherCore Security Scanner",
    tagline: "Automated vulnerability scanner for modern web applications",
    description: "An open-source security tool that checks headers, dependency trees, and client security posture with actionable reporting.",
    techStack: ["TypeScript", "Node.js", "React", "Docker"],
    githubUrl: "https://github.com/ciphertekies/ciphertekies",
    demoUrl: "#",
    featured: true,
    category: "Open Source"
  },
  {
    id: "open-dimension-xr",
    title: "OpenDimension WebXR",
    tagline: "Interactive 3D spatial canvas for collaborative brainstorming",
    description: "Built in partnership with XR enthusiasts, offering a lightweight browser-based VR/AR spatial room for remote teams.",
    techStack: ["Three.js", "WebXR", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/ciphertekies/ciphertekies",
    demoUrl: "#",
    featured: true,
    category: "Community Tool"
  },
  {
    id: "agentic-pulse",
    title: "AgenticPulse Community Engine",
    tagline: "Autonomous newsletter & tech radar generator for student developers",
    description: "A collaborative open-source agent pipeline that curates emerging GitHub trends, security patches, and hackathon schedules.",
    techStack: ["Python", "FastAPI", "React 19", "LangChain"],
    githubUrl: "https://github.com/ciphertekies/ciphertekies",
    demoUrl: "#",
    featured: true,
    category: "AI / Web3"
  }
];

export interface EventItem {
  id: string;
  title: string;
  type: "Workshop" | "Hackathon" | "Tech Talk" | "Partner Event";
  status: "Upcoming" | "Completed";
  date: string;
  time: string;
  location: string;
  description: string;
  registrationUrl: string;
  isPartner: boolean;
  partnerName?: string;
}

export const COMMUNITY_EVENTS: EventItem[] = [
  {
    id: "event-1",
    title: "Open Source Weekend Hack: Decode & Build",
    type: "Hackathon",
    status: "Upcoming",
    date: "Coming Soon 2026",
    time: "10:00 AM - 5:00 PM IST",
    location: "Virtual & Partner Hub",
    description: "Collaborative sprint with Open Source Weekends community. Learn Git workflows, submit your first PR, and win mentorship prizes.",
    registrationUrl: "https://opensourceweekend.org/",
    isPartner: true,
    partnerName: "Open Source Weekends"
  },
  {
    id: "event-2",
    title: "XR Immersion: WebXR & Spatial Interfaces",
    type: "Workshop",
    status: "Upcoming",
    date: "Quarter 2, 2026",
    time: "4:00 PM - 7:00 PM IST",
    location: "Online Interactive Stream",
    description: "Deep dive into WebXR, Three.js, and spatial computing concepts alongside XR CreatorCon community innovators.",
    registrationUrl: "https://xrcreatorcon.com/",
    isPartner: true,
    partnerName: "XR CreatorCon"
  },
  {
    id: "event-3",
    title: "Modern React 19 & Agentic Architecture",
    type: "Tech Talk",
    status: "Upcoming",
    date: "Monthly Tech Series",
    time: "6:00 PM - 7:30 PM IST",
    location: "Community Discord / Live Session",
    description: "Practical session covering React 19 Actions, Server Components, and hooking LLM agentic streams directly into frontends.",
    registrationUrl: "#contact",
    isPartner: false
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  interests: string[];
  linkedinUrl: string;
  avatarText: string;
}

export const COMMUNITY_TEAM: TeamMember[] = [
  {
    id: "lead-setu",
    name: "Setu Madhavani",
    role: "Community Lead",
    bio: "Passionate technologist driving collaborative student innovation, open-source adoption, and ecosystem partnerships.",
    interests: ["Full-Stack", "Community Building", "Web Architecture"],
    linkedinUrl: "https://www.linkedin.com/in/setumadhavani1410/",
    avatarText: "SM"
  },
  {
    id: "lead-dhruvi",
    name: "Dhruvi Jain",
    role: "Community Lead",
    bio: "Community builder and technology enthusiast spearheading impactful collaborative initiatives, mentorship tracks, and partner events.",
    interests: ["Community Operations", "Tech Outreach", "Event Strategy"],
    linkedinUrl: "https://www.linkedin.com/in/dhruvi-mandloi-81a5ba290/",
    avatarText: "DJ"
  },

  {
    id: "lead-atharv",
    name: "Atharv Ambekar",
    role: "Community Lead",
    bio: "Technology enthusiast and community builder passionate about AI, emerging technologies, modern web development, and fostering collaboration through innovative projects and open-source initiatives.",
    interests: ["AI & ML", "Data Analytics", "Open Source Development"],
    linkedinUrl: "https://www.linkedin.com/in/atharv-ambekar-187160297/",
    avatarText: "AA"
  }

];

export const SOCIAL_LINKS = {
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/ciphertekies_/",
    handle: "@ciphertekies_",
    description: "Follow our creative journeys, event recaps, workshops, and student tech stories."
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/ciphertekies/posts/?feedView=all",
    handle: "Ciphertekies",
    description: "Official updates, career opportunities, partner announcements, and technical articles."
  },
  linktree: {
    name: "Official Linktree",
    url: "https://linktr.ee/ciphertekies",
    handle: "linktr.ee/ciphertekies",
    description: "All official channels, registration portals, social feeds, and community access hubs in one unified bio link."
  }
};

