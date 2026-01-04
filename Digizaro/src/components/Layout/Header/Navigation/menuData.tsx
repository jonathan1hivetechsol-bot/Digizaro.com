import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "SEO Services", href: "/services" },
      { label: "Web Design", href: "/web-designing-e-commerce-store" },
      { label: "Facebook Ads", href: "/facebook-services" },
      { label: "E-commerce", href: "/shop" },
      { label: "Graphic Design", href: "/graphic-designing" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  { label: "Contact", href: "/contact" },
];
