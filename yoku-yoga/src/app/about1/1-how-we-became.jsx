import { headers } from "next/headers";
import Content1 from "../ui/content/content1";
import FloatingLeftImgSBS from "../ui/sbs/floating-left-img";

export default function Section1() {
  const text =
    "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition. For example, Bikram Yoga has an aerobic exercise style with rooms heated to 105 °F";
  return (
    <section id="became">
      <div className="container">
        <FloatingLeftImgSBS
          leftimg={"about1/section-1.png"}
          right={
            <Content1
              subheading={"About our school"}
              heading={"How we became Yoku"}
              text={text}
              buttons={[
                {
                  class: "btn-9",
                  text: "Meet instructors",
                },
              ]}
            />
          }
        />
      </div>
    </section>
  );
}
