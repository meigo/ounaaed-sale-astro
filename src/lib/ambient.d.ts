type SiteColor = "" | "main" | "secondary" | "light" | "dark" | "accent";

type MenuType = "main" | "page";

interface MenuData {
  main: { label: string; href: string }[];
  page: { label: string; href: string }[];
}
