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

export const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "20+ years of experience in business strategy and innovation.",
    links: {
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  },
  {
    name: "Alice Johnson",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Expert in technology solutions and digital transformation.",
    links: {
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  },
  {
    name: "David Chen",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Passionate about creating beautiful and functional designs.",
    links: {
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "Driving growth through innovative marketing strategies.",
    links: {
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  },
];

export const companyValues = [
  {
    title: "Innovation",
    description:
      "Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Excellence",
    description:
      "Committed to delivering the highest quality in everything we do.",
    icon: "Award",
  },
  {
    title: "Integrity",
    description:
      "Building trust through honest and ethical business practices.",
    icon: "Shield",
  },
  {
    title: "Collaboration",
    description:
      "Working together to achieve exceptional results for our clients.",
    icon: "Users",
  },
];

export const achievements = [
  {
    metric: "10+",
    label: "Years of Experience",
  },
  {
    metric: "500+",
    label: "Projects Completed",
  },
  {
    metric: "95%",
    label: "Client Satisfaction",
  },
  {
    metric: "50+",
    label: "Team Members",
  },
];
