import { LIGHTGREENBG } from "../constants/backgroundClasses";
import QuoteContent from "../ui/content/quote-content";
import Instructors1 from "../ui/items/instructors/instructors1";
import PageHeader2 from "../ui/page-headers/pageheader2";
import FloatingLeftImgSBS from "../ui/sbs/floating-left-img";
import Instructors1Header from "../ui/section-headers/instructors1header";
import StatsTopBottom from "../ui/topbottom/stats-topbottom";
import TopBottom from "../ui/topbottom/topbottom";

export default function Page() {
  const instructorText =
    "A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release any suffering, find inner peace and salvation.";

  const quoteText =
    "Modern yoga consists of a range of techniques including asanas and meditation derived from some of the philosophies, teachings and practices of the Yoga school, which is one of the six schools of traditional Hindu philosophies, and organised into a wide variety of schools and denominations. It has been described by Elizabeth de Michelis as having four types, namely";
  return (
    <>
      <PageHeader2 header={"Our Instructors"} text={"Our Story"} />
      <FloatingLeftImgSBS
        leftimg={"instructor1/1.png"}
        right={
          <QuoteContent
            text={quoteText}
            name={"Anna Curtis"}
            info={"Vinyasa Yoga"}
          />
        }
      />
      <TopBottom
        top={
          <Instructors1Header
            header={"Our Instructors"}
            text={instructorText}
          />
        }
        bottom={<Instructors1 />}
      />
      <StatsTopBottom sectionClasses={LIGHTGREENBG} />
    </>
  );
}
