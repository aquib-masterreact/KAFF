import crmImg from "../assets/CRM.jpg";
import analyticsImg from "../assets/analytics.jpg";
import databaseImg from "../assets/Database-Services.png";
import ecommerceImg from "../assets/ecommerce-integration.jpg";
import marketingImg from "../assets/marketing.webp";
import appDevImg from "../assets/ADP.png";

// Company details shown across the site. Update these in one place.
export const company = {
  name: "KAFF Solutions",
  domain: "kaffsolutions.in",
  tagline: "IT Services & Consulting",
  email: "info@kaffsolutions.in",
  phone: "",
  address: "India",
  founded: 2023,
};

export const services = [
  {
    slug: "it-consulting",
    icon: "compass",
    title: "IT Consulting & Strategy",
    summary:
      "Technology roadmaps, architecture reviews and digital transformation plans aligned to your business goals.",
    points: [
      "Technology assessment & roadmap",
      "Solution architecture",
      "Vendor & platform selection",
      "Digital transformation planning",
    ],
  },
  {
    slug: "software-development",
    icon: "code",
    image: appDevImg,
    title: "Custom Software Development",
    summary:
      "Web, mobile and cross-platform applications engineered for performance, security and scale.",
    points: [
      "Web applications & portals",
      "iOS, Android & cross-platform apps",
      "API design & integrations",
      "Legacy modernization",
    ],
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps",
    summary:
      "Migrate, build and run on AWS, Azure or GCP with automated pipelines and infrastructure as code.",
    points: [
      "Cloud migration & optimization",
      "CI/CD pipelines",
      "Containers & Kubernetes",
      "Infrastructure as code",
    ],
  },
  {
    slug: "data-analytics",
    icon: "chart",
    image: analyticsImg,
    title: "Data & Analytics",
    summary:
      "Turn raw data into decisions with modern data platforms, dashboards and AI-driven insights.",
    points: [
      "Data warehousing & pipelines",
      "BI dashboards & reporting",
      "AI / ML solutions",
      "Database as a Service",
    ],
  },
  {
    slug: "crm-enterprise",
    icon: "users",
    image: crmImg,
    title: "CRM & Enterprise Apps",
    summary:
      "Implement and customize cloud CRM and ERP platforms that keep customers and operations connected.",
    points: [
      "CRM implementation & customization",
      "ERP integration",
      "Workflow automation",
      "SaaS & PaaS solutions",
    ],
  },
  {
    slug: "ecommerce",
    icon: "cart",
    image: ecommerceImg,
    title: "E-commerce Solutions",
    summary:
      "Storefronts and integrations that connect sales, inventory, payments and fulfilment seamlessly.",
    points: [
      "Online store development",
      "Payment & logistics integration",
      "Inventory & order management",
      "Marketplace integration",
    ],
  },
  {
    slug: "digital-marketing",
    icon: "megaphone",
    image: marketingImg,
    title: "Digital Marketing & Automation",
    summary:
      "Reach the right audience, nurture leads and measure every campaign with marketing automation.",
    points: [
      "Marketing automation",
      "SEO & performance marketing",
      "Campaign analytics",
      "Lead nurturing workflows",
    ],
  },
  {
    slug: "managed-it",
    icon: "shield",
    image: databaseImg,
    title: "Managed IT & Cybersecurity",
    summary:
      "Proactive monitoring, support and security practices that keep your systems safe and available.",
    points: [
      "24/7 monitoring & support",
      "Security audits & hardening",
      "Backup & disaster recovery",
      "Compliance readiness",
    ],
  },
];

export const values = [
  {
    icon: "target",
    title: "Business-first thinking",
    text: "We start with your goals and outcomes, then choose the technology that serves them.",
  },
  {
    icon: "layers",
    title: "End-to-end delivery",
    text: "From strategy and design to build, launch and support, one accountable partner.",
  },
  {
    icon: "bolt",
    title: "Agile & transparent",
    text: "Short iterations, regular demos and clear communication at every step.",
  },
  {
    icon: "shield",
    title: "Secure by design",
    text: "Security and quality practices are built into every solution, not bolted on.",
  },
];

export const process = [
  {
    title: "Discover",
    text: "We understand your business, users and constraints through workshops and audits.",
  },
  {
    title: "Plan",
    text: "We define scope, architecture, timelines and success metrics together.",
  },
  {
    title: "Build",
    text: "Our engineers deliver in agile sprints with continuous testing and feedback.",
  },
  {
    title: "Launch & Grow",
    text: "We deploy, monitor and keep improving, so your solution scales with you.",
  },
];

export const industries = [
  { icon: "bank", title: "Banking & Finance" },
  { icon: "heart", title: "Healthcare" },
  { icon: "cart", title: "Retail & E-commerce" },
  { icon: "book", title: "Education" },
  { icon: "factory", title: "Manufacturing" },
  { icon: "truck", title: "Logistics" },
  { icon: "home", title: "Real Estate" },
  { icon: "rocket", title: "Startups" },
];

export const techStack = [
  { group: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "TypeScript"] },
  { group: "Backend", items: ["Node.js", "Java", "Python", ".NET", "PHP"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin", "Ionic"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Power BI", "Snowflake"] },
  { group: "Enterprise", items: ["Salesforce", "Zoho", "SAP", "Shopify", "WordPress"] },
];
