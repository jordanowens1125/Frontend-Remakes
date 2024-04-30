import PageHeading1 from "../ui/page-headers/pageheader1";
import TopBottom from "../ui/topbottom/topbottom";
import Instructors2Header from "../ui/section-headers/instructors2header";
import Instructors2 from "../ui/items/instructors/instructors2";
import StandardSBS from "../ui/sbs/standard";
import { LIGHTGREENBG } from "../constants/backgroundClasses";
import Bars from "../ui/items/bars/bars";
import { ORANGE } from "../constants/colors";
import Content3 from "../ui/content/content3";

export default function Page() {
  const instructorText =
    "Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school.";

  return (
    <>
      <PageHeading1 header={"Our Instructors 2"} />
      <TopBottom
        top={
          <Instructors2Header
            header={"Team of the best"}
            text={instructorText}
          />
        }
        bottom={<Instructors2 />}
      />
      <StandardSBS
        left={<Content3 link={{ text: "We were in the press", route: "/" }} />}
        right={<Bars color={ORANGE} />}
        sectionClasses={LIGHTGREENBG}
      />
    </>
  );
}
