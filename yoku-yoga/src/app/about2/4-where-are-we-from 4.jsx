import FloatingLeftImgSBS from "../ui/sbs/floating-left-img";
import Content1 from "../ui/content/content1";

export default function About2Section4() {
  const text =
    "Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school.";
  return (
    <section>
      <FloatingLeftImgSBS
        leftimg={"about2/section4.png"}
        right={
          <Content1
            image={"about2/section4-icon.png"}
            subheading={"Where are we from"}
            heading={"Group of Yoga Experts"}
            text={text}
            buttons={[{ class: "btn-8", text: "Browse Courses", right: true }]}
          />
        }
      />
    </section>
  );
}
