import BreadCrumb from "../components/breadcrumb";
import Banner2 from "../components/banner2";
import Team from "../components/team";
export default function Page() {
  return (
    <main>
      {" "}
      <BreadCrumb page="Team" />
      <Team />
      <Banner2 />
    </main>
  );
}
