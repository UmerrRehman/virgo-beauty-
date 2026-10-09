export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
} as const;

export const navigation = [
  { label: "About Us", href: routes.about },
  { label: "Services & Offers", href: routes.services },
  { label: "Contact", action: "contact-modal" },
] as const;

export const aboutBreadcrumb = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
] as const;

export const navigationActions = {
  brandHome: routes.home,
  bookAppointment: "contact-modal",
  scrollToServices: routes.services,
} as const;
