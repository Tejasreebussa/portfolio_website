import Favicon from "/public/images/teju_memoji.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Tejasree Bussa | Data Analyst",
  description:
    "Welcome to Tejasree's Data Analyst Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life. Let's connect and discuss your next venture!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website",
  ],
  icons: [
    {
      rel: "icon",
      url: Favicon.src,
    },
  ],
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
