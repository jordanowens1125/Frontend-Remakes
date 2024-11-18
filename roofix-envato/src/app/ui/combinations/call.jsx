import PhoneSvgComponent from "@/app/svgs/phone";

export default function Call() {
  return (
    <a href="" className="small-row">
      <div className="icon-1">
        <PhoneSvgComponent />
      </div>
      (123) 456 7890
    </a>
  );
}
