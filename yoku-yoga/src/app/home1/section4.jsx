import Content2 from "../ui/content/content2";
import FloatingLeftImgSBS from "../ui/sbs/floating-left-img";

export default function HomeSection4() {
  const text =
    "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition. For example, Bikram Yoga has an aerobic exercise style with rooms heated to 105 °F";
  return (
    <FloatingLeftImgSBS
      leftimg={"home1/section4.png"}
      right={
        <Content2
          subheader={"our foundation is"}
          header={"Modern Yoga"}
          text={text}
          buttons={[
            { text: "Learn More", class: "btn-4" },
            { text: "Our Story", class: "btn-5" },
          ]}
        />
      }
    />
  );
}
