import Section1 from "./1-how-we-became";
import Section2 from "./2-we-believe";
import Section3 from "./3-numbers";
import Section4 from "./4-newsletter";
import "./about.scss";
import PageHeader2 from "../ui/page-headers/pageheader2";

export default function Page() {
  return (
    <>
      <PageHeader2 header={"About"} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
