"use client";

import Link from "next/link";

import {
  categorieMegaMenuItems,
  resortsItems,
} from "../../../core/template/data/mainMenuData";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { isActiveLink } from "../../utils/linkActiveChecker";
import Social from "../../../core/template/common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState<
    boolean | string
  >(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState<
    boolean | number
  >(false);

  const router = useRouter();

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu) => {
      megaMenu?.menuCol?.map((megaCol) => {
        megaCol?.menuItems?.map((item) => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split("/")[1] == pathname.split("/")[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        });
      });
    });
  }, []);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light bg-exotic">
        <Link href="/home">
          <img src="/exotic_logo-navbar.svg" alt="logo" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => router.push("/benefits")}
            className={pathname === "/benefits" ? "menu-active-link" : ""}
          >
            Benefits
          </MenuItem>
          <SubMenu
            label="Resorts"
            className={
              resortsItems.some(
                (item) =>
                  item.routePath?.split("/")[1] == pathname.split("/")[1],
              )
                ? "menu-active-link"
                : ""
            }
          >
            {resortsItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => router.push(item.routePath)}
                className={
                  isActiveLink(item.routePath, pathname)
                    ? "menu-active-link"
                    : "inactive-menu"
                }
              >
                {item.name}
              </MenuItem>
            ))}
          </SubMenu>
          {/* End  All Home Menu */}

          <MenuItem
            onClick={() => router.push("/events")}
            className={pathname === "/events" ? "menu-active-link" : ""}
          >
            Events
          </MenuItem>
          {/* End  Events Menu */}

          <MenuItem
            onClick={() => router.push("/blog")}
            className={pathname === "/blog" ? "menu-active-link" : ""}
          >
            Blog
          </MenuItem>
          {/* End Contact  Menu */}

          <MenuItem
            onClick={() => router.push("/FAQ")}
            className={pathname === "/FAQ" ? "menu-active-link" : ""}
          >
            FAQ
          </MenuItem>
          {/* End  Events Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/login"
          >
            Become An Expert
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
