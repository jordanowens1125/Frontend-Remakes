import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import Projects2 from "../ui/groups/projects2";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"Projects"} />
      <Projects2 />
    </main>
  );
}
