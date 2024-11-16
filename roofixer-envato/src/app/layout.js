import COMPANYINFO from "./constants/info";
import "./globals.scss";
import Footer from "./ui/footer/footer";
import Nav from "./ui/nav-item/nav";
import ToTop from "./ui/to-top";

export const metadata = {
  title: COMPANYINFO.name,
  description: COMPANYINFO.description,
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
