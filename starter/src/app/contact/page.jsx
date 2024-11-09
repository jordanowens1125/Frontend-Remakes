import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import Contact from "../ui/contact/contact";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"Contact"} />
      <Contact />
    </main>
  );
}
