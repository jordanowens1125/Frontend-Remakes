export default function SectionHeading({
  headingtext,
  subheadingtext,
  bottomelement,
}) {
  return (
    <div className="upper-section">
      <div className="left">
        {headingtext && <p className="secton-h">{headingtext}</p>}
        {subheadingtext && <p>Stocking up on goodnes, one aisle at a time.</p>}
      </div>

      {
        bottomelement && bottomelement
        // <div className="sliderbuttons">
        //   <button className="sliderbutton tertiary-bg circle">
        //     <img src={LEFT} alt="" className="icon" />
        //   </button>
        //   <button className="sliderbutton tertiary-bg circle">
        //     <img src={RIGHT} alt="" className="icon" />
        //   </button>
        // </div>
      }
    </div>
  );
}
