import "./contractors.scss";
import Header2 from "../headers/header2";
import ImgContainer1 from "../img-containers/img-container1";
import HammerSVGComponent from "@/app/svgs/hammer";
import TopTriangleElement from "../img-containers/toptriangle";

export default function ContractorsSection({
  group2 = [
    {
      svg: <HammerSVGComponent />,
      header: "Experienced Staff",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Best Equipment",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Complete Inspection",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
  ],
  group3 = [
    {
      svg: <HammerSVGComponent />,
      header: "Experienced Staff",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Best Equipment",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Complete Inspection",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Complete Inspection 2",
      text: "Cras justo odio dapibus eget quam acit posuere erat a ante venenatis dapibus.",
    },
  ],
}) {
  return (
    <section id="contractors">
      <Header2
        header="Roofing contractors, you'll love"
        text="Our range of roofing products provides you with a one-stop shopping center for all roofing needs"
      />
      <div className="groups">
        <TopTriangleElement/>
        <ImgContainer1 />
        <div className="group1 group">
          <h3>We are committed to roofing excellence</h3>
          <p>
            We recognize how important your house and company are to you, as
            well as the major commitment that excellent roof installation or
            roof restoration entails. As a respected and experienced roofing
            repair contractor, we provide years of roofing experience as well as
            a complete and comprehensive variety of roof services that are meant
            to improve curb appeal, boost energy efficiency, and increase the
            value of your commercial or corporate property.
          </p>
        </div>
        <div className="group2 group">
          {group2.map((item) => (
            <div className="item" key={item.header}>
              <div className="icon-3">{item.svg}</div>
              <div className="info">
                <p className="item-h-2">{item.header}</p>
                <p className="text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="group group3">
          {group3.map((item) => (
            <div key={item.header} className="item">
              <div className="icon-2">{item.svg}</div>
              <p className="item-h-2">{item.header}</p>
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
