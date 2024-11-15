import COMPANYINFO from "@/app/constants/info";
import SendSvgComponent from "@/app/icons/send";

export default function SendEmail() {
  return (
    <a href={COMPANYINFO.emailLink} className="small-row">
      <div className="icon-3">
        <SendSvgComponent />
      </div>
      {COMPANYINFO.emailName}
    </a>
  );
}
