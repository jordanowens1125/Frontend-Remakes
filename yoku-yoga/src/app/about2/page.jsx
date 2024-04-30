import About2Section1 from "./1-about";
import About2Section2 from "./2-clear-mind";
import About2Section3 from "./3-stats";
import About2Section4 from "./4-where-are-we-from 4";
import About2Section5 from "./5-strength";

import "./about2.scss";
import PageHeader2 from "../ui/page-headers/pageheader2";

export default function Page() {
  const text =
    "Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school.";

  return (
    <>
      <PageHeader2
        heading={"About Our School"}
        subheading={"our Story"}
        text={text}
        button={{ text: "Meet Instructors", class: "btn-9" }}
        divider={true}
      />
      <About2Section1 />
      <About2Section2 />
      <About2Section3 />
      <About2Section4 />
      <About2Section5 />
      {/* newsletter placeholder */}
      <About2Section1 />
    </>
  );
}
