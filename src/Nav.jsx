import React from "react";
import NavItems from "./NavItems";
import NavItemsDrop from "./NavItemsDrop";
function Nav() {
  let navItems = [
    { id: 1, title: "Home", aname: "nav-link active", cname: "nav-item" },
    { id: 2, title: "About", aname: "nav-link", cname: "nav-item" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand shop-title" href="">
          MilkyWay Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {navItems.map((navItem) => {
              return <NavItems navItem={navItem} key={navItem.id}></NavItems>;
            })}
            <NavItemsDrop></NavItemsDrop>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
