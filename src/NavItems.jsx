import React from "react";

function NavItems({ navItem }) {
  return (
    <li className={`${navItem.cname}`}>
      <a className={`${navItem.aname}`} aria-current="page" href="">
        {navItem.title}
      </a>
    </li>
  );
}

export default NavItems;
