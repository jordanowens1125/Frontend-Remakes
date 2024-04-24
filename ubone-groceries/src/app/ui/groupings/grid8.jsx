import SectionHeading from "./section-heading";

export default function Grid8({
  content,
  headingtext,
  subheadingtext,
  bottomelement,
}) {
  return (
    <section>
      <div className="container">
        <SectionHeading
          headingtext={headingtext}
          subheadingtext={subheadingtext}
          bottomelement={bottomelement}
        />
        <div className="grid8">{content}</div>
      </div>
    </section>
  );
}
