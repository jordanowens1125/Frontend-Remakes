import Content1 from "../ui/content/content1";
import Bars from "../ui/items/bars/bars";
import StandardSBS from "../ui/sbs/standard";

export default function About2Section5() {
  const text =
    "A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors. The social network perspective provides a set of methods for analyzing the structure of whole social entities as well as a variety of theories. sets of dyadic ties, and other social interactions between actors. methods for analyzing the structure of whole social entities as well as a variety.";
  return (
    <StandardSBS
      left={
        <Content1
          subheader={"Yoku's Strength"}
          header={"Our Expertise"}
          text={text}
        />
      }
      right={<Bars color={"rgb(61, 188, 168)"} />}
    />
  );
}
