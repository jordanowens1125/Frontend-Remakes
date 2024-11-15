import "./globals.scss";
import Footer from "./ui/footer/footer";
import Nav from "./ui/nav/nav";
import ToTop from "./ui/to-top";

export const metadata = {
  title: "Starter Template",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="top"></div>
        <ToTop />
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
