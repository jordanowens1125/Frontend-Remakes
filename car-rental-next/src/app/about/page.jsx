import BreadCrumb from "../components/breadcrumb";
import Banner2 from "../components/banner2";
import About from "../components/about";
import Features from "../components/features";
export default function Page() {
  return (
    <main>
      {" "}
      <BreadCrumb page="About" />
      <About />
      <Features />
      <Banner2 />
    </main>
  );
}
