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
    title: "Service One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Starting at $99",
  },
  {
    title: "Service Two",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    price: "Starting at $199",
  },
  {
    title: "Service Three",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    price: "Starting at $299",
  },
];
