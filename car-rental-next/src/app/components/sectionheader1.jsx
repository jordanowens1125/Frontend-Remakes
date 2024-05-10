import './sectionheader1.scss'
export default function SectionHeader1({ header, subheader, text }) {
  return (
    <div className="section-header-1">
      {subheader && <h3 className='subheader'>{subheader}</h3>}
      {header && <h2 className='header'>{header}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
}
