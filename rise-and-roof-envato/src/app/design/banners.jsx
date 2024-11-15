// import Banner1 from "../ui/banners/banner1";
// import Banner2 from "../ui/banners/banner2";
import LogoBanner1 from "../ui/banners/logobanner1";
import MapBanner from "../ui/banners/map";

export default function AllBanners() {
  return (
    <div className="group">
      {/* <Banner1 />
      <Banner2 /> */}
      <LogoBanner1 />
      <MapBanner />
    </div>
  );
}
