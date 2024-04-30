import Companies from "../ui/items/companies";
import TopBottom from "../ui/topbottom/topbottom";
import CTA1 from "../ui/ctas/cta1";
import { GREYBG } from "../constants/backgroundClasses";

export default function AboutSection4() {
  return (
    <TopBottom top={<Companies />} bottom={<CTA1 />} sectionClasses={GREYBG} />
  );
}
