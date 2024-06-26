import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "./ui/footer/footer";
import Nav from "./ui/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yoku Yoga",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div id="top"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
