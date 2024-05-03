import Content1 from "../ui/content/content1";
import NoGapSBS from "../ui/sbs/nogap";

export default function About2Section2() {
  const text =
    "Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school.Some versions of modern yoga contain reworkings of the ancient spiritual tradition, and practices vary from wholly secular, for exercise and relaxation, through.";
  return (
    <NoGapSBS
      left={
        <Content1
          image={"about2/section4-icon.png"}
          subheader={"What keeps pushing us"}
          header={"Clear Mind & Body"}
          text={text}
          link={"/instructors2"}
        />
      }
      right={<img src="about2/section2.jpg" />}
    />
  );
}
