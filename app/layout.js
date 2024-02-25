import { Inter } from "next/font/google";
import "./globals.css";
// import favicon from "@/public/assets/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skilled Up",
  description: "Skilled Up is a website for finding best employees",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href={favicon} sizes="any" />
      </head> */}
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
