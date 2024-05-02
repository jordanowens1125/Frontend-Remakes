import './sectionheader1.scss'

export default function SectionHeader1({ header, subheader }) {
  return (
    <>
      {subheader && <span className="subheader">{subheader}</span>}
      {header && <h3 className="header">{header}</h3>}
    </>
  );
}
