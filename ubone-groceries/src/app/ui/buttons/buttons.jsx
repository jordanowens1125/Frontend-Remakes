import { BAG, RIGHT } from "@/app/constants/icons";
import Cancel from "./standard/transparent";
import Roundpair from "./sliders/pair/round/pair";
import Transparentpair from "./sliders/pair/transparent/pair";
import Disabled from "./standard/disabled";
import PrimaryButton from "./standard/primary";
import SecondaryButton from "./standard/secondary";
import TertiaryButton from "./standard/tertiary";

export default function Buttons() {
  return (
    <div>
      <Cancel />
      <Roundpair />
      <Transparentpair />
      <Disabled text={"Disabled"} />
      <PrimaryButton text={"Shopping"} righticon={RIGHT} />
      <SecondaryButton text={"Add to cart"} righticon={BAG} />
      <TertiaryButton text={"Tertiary"} righticon={BAG} />
    </div>
  );
}
