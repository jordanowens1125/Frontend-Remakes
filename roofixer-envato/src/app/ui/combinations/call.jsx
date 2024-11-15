import COMPANYINFO from "@/app/constants/info";
import PhoneSvgComponent from "@/app/svgs/phone";

export default function Call() {
  return (
    <a href={COMPANYINFO.phoneNumberLink} className="small-row">
      <div className="icon-3">
        <PhoneSvgComponent />
      </div>
      {COMPANYINFO.phoneNumber}
    </a>
  );
}
