import "./socials.scss";
import LinkedinSvgComponent from "@/app/svgs/linkedin";
import SkypeSvgComponent from "@/app/svgs/skype";
import TwitterComponent from "@/app/svgs/twitter";

export default function SocialsGroup({
  items = [
    {
      link: "skype.com",
      svg: <SkypeSvgComponent />,
    },
    {
      link: "linkedin.com",
      svg: <LinkedinSvgComponent />,
    },
    {
      link: "twitter.com",
      svg: <TwitterComponent />,
    },
  ],
  iconClass = "icon-6",
}) {
  return (
    <div className="socials">
      {items.map((item) => (
        <div className={iconClass} key={item.link}>
          <a href={item.link}>{item.svg}</a>
        </div>
      ))}
    </div>
  );
}
