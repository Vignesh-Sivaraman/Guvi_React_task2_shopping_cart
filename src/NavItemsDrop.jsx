import React from "react";
import NavItems from "./NavItems";

function NavItemsDrop() {
  let ItemsDrop = [
    { id: 1, title: "Popular Items", aname: "dropdown-item", cname: "" },
    { id: 2, title: "New Arrivals", aname: "dropdown-item", cname: "" },
  ];
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Shop
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" href="#!">
            All Products
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        {ItemsDrop.map((itemdrop) => {
          return <NavItems navItem={itemdrop} key={itemdrop.id}></NavItems>;
        })}
      </ul>
    </li>
  );
}

export default NavItemsDrop;
