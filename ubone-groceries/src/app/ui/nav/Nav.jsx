"use client";

import { ACCOUNT, BAG, HEART, LOGO, SEARCH } from "@/app/constants/icons";
import { useState } from "react";
import Cart from "./Cart";
import Menu from "./Menu";
import Search from "./Search";

export default function Nav() {
  const [activeCart, setActiveCart] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <>
      <nav className="container">
        <div className="lines" onClick={() => setActiveMenu(true)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <img src={LOGO} alt="Logo" className="logo" />

        <div className="nav-icons">
          <div
            className="img-container mobile"
            onClick={() => setActiveSearch(true)}
          >
            <img src={SEARCH} alt="Search" className="icon" />
          </div>

          <a href="/login" className="img-container mobile">
            <img src={ACCOUNT} alt="Cart" className="icon" />
          </a>

          <a href="/wishlist" className="img-container mobile">
            <img src={HEART} alt="Cart" className="icon" />
            <p className="floating-count">3</p>
          </a>

          <div className="img-container" onClick={() => setActiveCart(true)}>
            <img src={BAG} alt="Cart" className="icon" />
            <p className="floating-count">3</p>
          </div>
        </div>
      </nav>
      <Cart active={activeCart} closeCart={() => setActiveCart(false)} />
      <Menu active={activeMenu} closeMenu={() => setActiveMenu(false)} />
      <Search active={activeSearch} closeSearch={() => setActiveSearch(false)} />
    </>
  );
}
