import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import OurServices from "../ui/section/ourservices";

export default function Page() {
  return (
    <main id="services-page">
      <BreadCrumb page={"Services"} />
      <OurServices triangle={false} bgColor="white" />
    </main>
  );
}
