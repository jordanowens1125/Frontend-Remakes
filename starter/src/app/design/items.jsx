import BlogGroup from "../ui/groups/blog1";
import ContactGroup from "../ui/groups/contact";
import Features1 from "../ui/groups/features1";
import Projects1Group from "../ui/groups/projects1";
import Projects2Group from "../ui/groups/projects2";
import ReviewsGroup from "../ui/groups/reviews";
import Services1Group from "../ui/groups/services1";
import Services2Group from "../ui/groups/services2";
import StatsGroup from "../ui/groups/stats";
import TeamGroup from "../ui/groups/team";
import CheckGroup from "../ui/groups/checkgroup";
import { imgcontainer1IMG_A } from "../constants/images";
import HammerSVGComponent from "../icons/hammer";
import Item5 from "../ui/item/item5";
import Item1 from "../ui/item/item1";
import Item2 from "../ui/item/item2";
import Item3 from "../ui/item/item3";
import Item4 from "../ui/item/item4";
import Item7 from "../ui/item/item7";
import Item6 from "../ui/item/item6";
import Item8 from "../ui/item/item8";
import Item11 from "../ui/item/item11";
import Item10 from "../ui/item/item10";
import Item9 from "../ui/item/item9";

export default function AllItems() {
  return (
    <section className="group">
      <Item1
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item2
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item3
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item4
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item5
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item6
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item7
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item8
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item9
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item10
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      <Item11
        img={imgcontainer1IMG_A}
        link={"/home"}
        linkClass={"btn-1"}
        linkText={"Read More"}
        text="Variable Text"
        itemHeaderText={"Header Text"}
        count="0"
        svg={<HammerSVGComponent />}
      />
      {/* <CheckGroup />
      <ContactGroup />
      <Features1 />
      <Projects1Group />
      <Projects2Group />
      <ReviewsGroup />
      <Services1Group />
      <Services2Group />
      <StatsGroup />
      <TeamGroup />
      <BlogGroup /> */}
    </section>
  );
}
