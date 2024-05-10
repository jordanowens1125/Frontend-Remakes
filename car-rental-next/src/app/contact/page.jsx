import BreadCrumb from "../components/breadcrumb";
import Banner2 from "../components/banner2";
import Contact from "../components/contact";
export default function Page() {
  return (
    <main>
      {" "}
      <BreadCrumb page="Contact" />
      <Contact />
      <Banner2 />
    </main>
  );
}
