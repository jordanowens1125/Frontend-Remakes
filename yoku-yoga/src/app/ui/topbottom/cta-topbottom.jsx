import CTA1 from "../ctas/cta1";
import Companies from "../items/companies";
import TopBottom from "./topbottom";

export default function CTA1TopBottom({ sectionClasses, sectionID }) {
  return (
    <TopBottom
      top={<Companies />}
      bottom={<CTA1 />}
      sectionClasses={sectionClasses}
      sectionID={sectionID}
    />
  );
}
