export const siteConfig = {
  name: "Business Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "https://example.com",
  ogImage: "https://example.com/og.jpg",
  links: {
    twitter: "https://twitter.com/username",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    facebook: "https://facebook.com/username",
    instagram: "https://instagram.com/username",
  },
  contact: {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street, City, State 12345",
  },
  metadata: {
    title: {
      default: "Business Name",
      template: "%s | Business Name",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    keywords: ["business", "services", "professional"],
    authors: [{ name: "Author Name" }],
    creator: "Creator Name",
    verification: {
      google: "google-verification-code",
      yandex: "yandex-verification-code",
      yahoo: "yahoo-verification-code",
    },
  },
  analytics: {
    googleId: "G-XXXXXXXXXX",
  },
};

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const features = [
  {
    title: "Feature One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Feature Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    title: "Feature Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  },
];

export const services = [
  {
    category: "consulting",
    title: "Business Strategy",
    description:
      "Comprehensive business strategy and growth planning services.",
    price: "$999",
    period: "/month",
    badge: "Popular",
    features: [
      "Market analysis and research",
      "Competitive positioning",
      "Growth strategy development",
      "Performance monitoring",
      "Monthly strategy sessions",
    ],
  },
  {
    category: "development",
    title: "Web Development",
    description: "Professional web development and design services.",
    price: "$4,999",
    period: "/project",
    features: [
      "Custom design and development",
      "Responsive layouts",
      "SEO optimization",
      "Performance optimization",
      "3 months of support",
    ],
  },
  {
    category: "marketing",
    title: "Digital Marketing",
    description: "Results-driven digital marketing campaigns.",
    price: "$1,499",
    period: "/month",
    features: [
      "Social media management",
      "Content creation",
      "Email marketing",
      "PPC advertising",
      "Monthly reporting",
    ],
  },
  {
    category: "consulting",
    title: "Financial Advisory",
    description: "Expert financial planning and advisory services.",
    price: "$799",
    period: "/month",
    features: [
      "Financial analysis",
      "Risk assessment",
      "Investment planning",
      "Tax strategy",
      "Quarterly reviews",
    ],
  },
  {
    category: "development",
    title: "Mobile App Development",
    description: "Custom mobile application development.",
    price: "$7,999",
    period: "/project",
    features: [
      "Native app development",
      "Cross-platform support",
      "UI/UX design",
      "App store submission",
      "6 months of support",
    ],
  },
  {
    category: "marketing",
    title: "Brand Development",
    description: "Comprehensive brand identity and strategy.",
    price: "$2,999",
    period: "/project",
    features: [
      "Brand strategy",
      "Visual identity",
      "Brand guidelines",
      "Marketing collateral",
      "Social media kit",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Working with this team has transformed our business. Their strategic insights and execution were invaluable.",
    author: "Sarah Johnson",
    title: "CEO, Tech Innovations",
    rating: 5,
  },
  {
    quote:
      "The level of professionalism and expertise exceeded our expectations. Highly recommended!",
    author: "Michael Chen",
    title: "Founder, Growth Startup",
    rating: 5,
  },
  {
    quote:
      "Their services have significantly improved our online presence and customer engagement.",
    author: "Emily Rodriguez",
    title: "Marketing Director, E-commerce Solutions",
    rating: 5,
  },
];
