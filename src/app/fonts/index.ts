import localFont from "next/font/local";

const consola = localFont({
  src: [
    {
      path: "./consola-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./consolai-webfont.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./consolab-webfont.woff",
      weight: "600",
      style: "bold",
    },
    {
      path: "./consolaz-webfont.woff",
      weight: "500",
      style: "italic-bold",
    },
  ],
  display: "swap",
  variable: "--font-consola",
});

export { consola };
