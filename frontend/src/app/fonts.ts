import localFont from "next/font/local";

export const geist = localFont({
  src: [
    {
      path: "../../public/fonts/geist/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-geist",
  display: "swap",
});

export const geistMono = localFont({
  src: [
    {
      path: "../../public/fonts/geist-mono/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});
