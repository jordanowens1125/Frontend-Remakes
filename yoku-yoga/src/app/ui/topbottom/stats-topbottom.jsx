import TopBottom from "./topbottom";
import StatsHeader from "../section-headers/statsheader";
import StatList from "../items/statlist";
export default function StatsTopBottom({ sectionClasses }) {
  return (
    <TopBottom
      top={<StatsHeader />}
      bottom={<StatList />}
      sectionClasses={sectionClasses}
    />
  );
}
