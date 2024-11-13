import AllBanners from "./banners";
import ButtonDesigns from "./buttons";
import "./design.scss";
import FloatingBoxes from "./floatingboxes";

import HeaderFontDesigns from "./fonts";
import AllHeaders from "./headers";
import IconsDesign from "./icons";
import AllImageContainers from "./imgcontainer";
import InputTextAreaDesign from "./input-textarea";
import AllItems from "./items";

export default function Design() {
  return (
    <>
      {/* <div className="design-group">
        <HeaderFontDesigns />
        
        <InputTextAreaDesign />
        <ButtonDesigns />
      </div> */}
      <div className="design-group">
        {/* <FloatingBoxes /> */}
        {/* <HeaderFontDesigns />
        <IconsDesign />
        <AllItems /> */}
        {/* <AllHeaders /> */}
      </div>
      <div className="design-group">{/* <AllImageContainers /> */}</div>
      <div className="design-group">
        <AllItems />
      </div>
    </>
  );
}
