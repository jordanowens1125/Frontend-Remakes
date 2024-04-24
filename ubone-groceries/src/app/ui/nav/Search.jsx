import { CANCEL, SEARCH } from "@/app/constants/icons";

export default function Search({ active, closeSearch }) {
  return (
    <>
      <div className={active ? "modal" : ""} onClick={closeSearch}></div>
      <div
        className={
          active ? "nav-search show-search" : "nav-search"
        }
      >
        <span>
          <img src={CANCEL} alt="" className="icon" onClick={closeSearch} />
        </span>
        <p className="section-h">What are you looking for?</p>
        <form>
          <input type="text" placeholder="Search for your grocery items..." />
          <img src={SEARCH} alt="" className="icon" />
        </form>
        <p>Nothing to show for now</p>
      </div>
    </>
  );
}
