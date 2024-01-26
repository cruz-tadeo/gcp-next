import { resortsItems } from "@template/data/mainMenuData";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useState } from "react";
import { montserrat } from "../../utils/fonts";
import { Link   } from "../../../navigation";
import {useSelectedLayoutSegment} from "next/navigation";

const MainMenu = ({ style = "" }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  return (
    <nav className={`${montserrat.className} menu js-navList`}>
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`text-exotic-text ${
            pathname === "/benefits" ? "current" : ""
          }`}
        >
          <Link href="/benefits" className="text-18">
            Benefits
          </Link>
        </li>
        <li
          className={`${
            isActiveParentChaild(resortsItems, pathname) ? "current" : ""
          } menu-item-has-children text-exotic-text`}
        >
          <a href="#">
            <span className="mr-10 text-18">Resorts</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {resortsItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End (home) page menu */}
        <li
          className={`text-exotic-text ${
            pathname === "/events" ? "current" : ""
          }`}
        >
          <Link href="/events" className="text-18">
            Events
          </Link>
        </li>
        <li
          className={`text-exotic-text ${
            pathname === "/blogs" ? "current" : ""
          }`}
        >
          <Link href="/blogs" className="text-18">
            Blogs
          </Link>
        </li>
        <li
          className={`text-exotic-text ${pathname === "/faq" ? "current" : ""}`}
        >
          <Link href="/faq" className="text-18">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
