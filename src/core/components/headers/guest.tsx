"use client";

import LanguageMegaMenu from "../../template/header/LanguageMegaMenu";
import MainMenu from "../../template/header/MainMenu";
import MobileMenu from "../../template/header/MobileMenu";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../app/providers/UserProvider";
import { Link } from "src/navigation";

const HeaderGuest = () => {
  const [navbar, setNavbar] = useState(false);
  const { isAuth } = useContext(UserContext);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container sm:px-20">
          <div className="row justify-between items-center">
            <div className="offset-2 col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20 pr-120">
                  <img src="/exotic_logo-navbar.svg" alt="logo icon" />
                  <img src="/exotic_logo-navbar.svg" alt="logo icon" />
                </Link>
                {/* End logo */}

                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 mr-20 is-menu-opened-hide md:d-none">
                  <Link
                    href="https://grupolomas--lomasadmin.sandbox.my.site.com/exotictravelers/s/login"
                    className="button px-30 fw-400 text-14 --border-exotic bg-white h-50 text-exotic -exotic"
                  >
                    Login
                  </Link>
                </div>
                <div className="row x-gap-20 items-center xxl:d-none">
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}

                  <div className="header-menu">
                    <div className="header-menu__content">
                      <LanguageMegaMenu textClass="text-dark-1" />
                    </div>
                  </div>

                  {/* End Megamenu for Language */}
                </div>
                {/* End language and currency selector */}
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex={-1}
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            <div className="col-3"></div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderGuest;
