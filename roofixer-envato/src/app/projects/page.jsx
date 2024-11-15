import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import ProjectSection from "../ui/section/projectSection";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"Projects"} />
      <ProjectSection triangle={false} bgColor="white"/>
    </main>
  );
}
