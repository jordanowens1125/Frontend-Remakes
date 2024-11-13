import AccountSVGComponent from "../icons/account";
import CheckSvgComponent from "../icons/check";
import DoubleChevronSvgComponent from "../icons/double-chevron";
import PhoneSvgComponent from "../icons/phone";
import QuotationSvgComponent from "../icons/quotations";
import RightArrowSvgComponent from "../icons/right";
import TwitterComponent from "../icons/twitter";

export default function IconsDesign() {
  return (
    <>
      <div className="group">
        <div className="icon-1">
          <AccountSVGComponent />
        </div>
        <div className="icon-2">
          <AccountSVGComponent />
        </div>
        <div className="icon-3">
          <CheckSvgComponent />
        </div>
        <div className="icon-4">
          <PhoneSvgComponent />
        </div>
        <div className="icon-5">
          <QuotationSvgComponent />
        </div>
        <div className="icon-6">
          <RightArrowSvgComponent />
        </div>
        <div className="icon-7">
          <CheckSvgComponent />
        </div>
        <div className="icon-8">
          <DoubleChevronSvgComponent />
        </div>
        <div className="icon-9">
          <TwitterComponent />
        </div>
      </div>
    </>
  );
}
