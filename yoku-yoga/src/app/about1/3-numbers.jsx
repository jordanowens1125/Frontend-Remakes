import { LIGHTGREENBG } from "../constants/backgroundClasses";
import StatList from "../ui/items/statlist";
import StatsHeader from "../ui/section-headers/statsheader";
import TopBottom from "../ui/topbottom/topbottom";

export default function AboutSection3() {
  return (
    <TopBottom
      top={<StatsHeader />}
      bottom={<StatList />}
      sectionClasses={LIGHTGREENBG}
    />
  );
}
