import { defaultTheme } from "vuepress";

export default {
  lang: "en-CA",
  title: "Hello VuePress",
  description: "Just playing around",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Guide",
        link: "/guide",
      },
      {
        text: "Contact",
        link: "/contact.md",
      },
    ],
    logo: "/images/iconmonstr-carousel-filled.svg",
  }),
};
