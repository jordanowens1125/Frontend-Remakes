import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import Stats from "../ui/groups/stats";
import Team from "../ui/groups/team";
import About2 from "../ui/sbs/about2";
import Whyus2 from "../ui/sbs/whyus2";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"About"} />
      <About2 />
      <Team />
      <Stats />
    </main>
  );
}
