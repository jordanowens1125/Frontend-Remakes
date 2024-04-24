import CATEGORIES from "@/app/constants/categories";
import { CANCEL } from "@/app/constants/icons";

export default function Menu({ active, closeMenu }) {
  return (
    <>
      <div className={active ? "modal" : ""} onClick={closeMenu}></div>
      <div className={active ? "menu show-menu" : "menu"}>
        <span className="flexsb">
          <p>Menu</p>
          <img
            src={CANCEL}
            alt="Close Menu"
            className="icon"
            onClick={closeMenu}
          />
        </span>
        <a href="/">Home</a>
        <a href="/filter">Filter</a>
        {CATEGORIES.map((category) => (
          <a href={category.name} key={category.name}>
            {category.name}
          </a>
        ))}
      </div>
    </>
  );
}
