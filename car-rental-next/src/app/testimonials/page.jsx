import BreadCrumb from "../components/breadcrumb";
import Banner2 from "../components/banner2";
import Reviews from "../components/reviews";
export default function Page() {
  return (
    <main>
      {" "}
      <BreadCrumb page="Testimonials" />
      <Reviews />
      <Banner2 />
    </main>
  );
}
