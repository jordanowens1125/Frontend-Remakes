import Section1 from "../ui/page-components/about/1-how-we-became";
import Section2 from "../ui/page-components/about/2-we-believe";
import Section3 from "../ui/page-components/about/3-numbers";
import Section4 from "../ui/page-components/about/4-newsletter";
import "../ui/page-components/about/about.scss";
import PageHeader from "../ui/page-header";

export default function Page() {
  return (
    <>
      <PageHeader heading={"About"} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
