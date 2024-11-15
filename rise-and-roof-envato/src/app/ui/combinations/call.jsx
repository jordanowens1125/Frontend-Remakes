import PhoneSvgComponent from "@/app/icons/phone";

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
