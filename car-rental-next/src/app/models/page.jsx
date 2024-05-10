import BreadCrumb from "../components/breadcrumb";
import Banner2 from "../components/banner2";
import Cars from "../components/cars";
export default function Page() {
  return (
    <main>
      {" "}
      <BreadCrumb page="Models" />
      <Cars/>
      <Banner2 />
    </main>
  );
}
