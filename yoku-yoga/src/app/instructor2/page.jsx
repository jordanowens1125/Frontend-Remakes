import PageHeading1 from "../ui/page-headers/pageheader1";
import TopBottom from "../ui/topbottom/topbottom";
import Instructors2Header from "../ui/section-headers/instructors2header";
import Instructors2 from "../ui/items/instructors/instructors2";

export default function Page() {
  const instructorText =
    "Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school.";

  return (
    <>
      <PageHeading1 heading={"Our Instructors 2"} />
      <TopBottom
        top={
          <Instructors2Header
            header={"Team of the best"}
            text={instructorText}
          />
        }
        bottom={<Instructors2 />}
      />
    </>
  );
}
