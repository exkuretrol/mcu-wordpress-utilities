import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "首頁",
      href: "/",
    },
    {
      title: "轉 Json",
      href: "/tojson"
    }
  ],
  links: {
    github: "https://github.com/exkuretrol"
  },
}
