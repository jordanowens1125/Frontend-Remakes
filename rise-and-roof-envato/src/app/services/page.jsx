import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import Services2 from "../ui/groups/services2";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"Services"} />
      <div className="container">
        <Services2 />
      </div>
    </main>
  );
}
