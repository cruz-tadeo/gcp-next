"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../app/providers/UserProvider";
import { Link } from "../../../navigation";
import MainMenuAuth from "./auth/MainMenu";
import { desencrypt } from "../../../core/utils";
import { getUser } from "../../../core/services/getUser";

const HeaderAuth = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false);

  const { isAuth, setAuth, setUser, user } = useContext(UserContext);

  useEffect(() => {
    const params =
      typeof sessionStorage !== "undefined"
        ? sessionStorage.getItem("params") ?? ""
        : "";
    const previousUrl = document.referrer;

    if (
      !previousUrl.includes(
        "https://grupolomas--lomasadmin.sandbox.my.site.com/"
      )
    ) {
      window.location.href = "/";
      return;
    }

    async function getData(pin: string) {
      const user = await getUser(pin);

      if (user) {
        setUser(user);
        setAuth(true);
      }
    }

    if (params !== "") {
      const userData = JSON.parse(desencrypt(params));
      if (userData) {
        getData(userData.pin);
      }
    }
  }, [isAuth]);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const showOptions = () => {
    setShow(true);
  };

  const hiddenOptions = () => {
    setShow(false);
  };

  const logout = () => {
    sessionStorage.clear();
    setAuth(false);
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
        <div className="row container-fluid">
          <div className="col-2">
            <Link
              href="/"
              className="header-logo d-flex justify-content-center mt-2"
            >
              <img src="/exotic_logo-navbar.svg" alt="logo icon" />
              <img src="/exotic_logo-navbar.svg" alt="logo icon" />
            </Link>
          </div>
          <div className="col-8">
            <div className="container-menu">
              <div className="header-menu">
                <div className="header-menu__content">
                  <MainMenuAuth />
                </div>
              </div>
              {/* End header-menu */}
            </div>
            {/* End d-flex */}
          </div>
          {/* End col */}
          <div className="col-2">
            <div
              className="d-flex justify-content-center align-items-center w-100 h-100"
              onMouseLeave={hiddenOptions}
            >
              <div className="d-flex flex-column me-5">
                <p className="lh-sm text-center">
                  <strong>Bienvenido</strong> <br /> {user.name}
                </p>
                {/* <p>{user.name}</p> */}
              </div>
              <div
                className="d-flex flex-row justify-content-center colorBtnMenu align-items-center dropdown"
                onMouseEnter={showOptions}
              >
                <div className="me-1">
                  <img src="/menu_icon.svg" alt="" />
                </div>
                <div>
                  <img src="/user_icon.svg" alt="" />
                </div>
                <div
                  onMouseEnter={showOptions}
                  className={`containerList ${!show ? "d-none" : "d-block"}`}
                >
                  <ul>
                    <li className="text-14 element-list">Descargar estatus</li>
                    <li className="text-14 element-list">Configurar cuenta</li>
                    <li className="text-14 element-list">Log out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End col-auto */}
        </div>
        {/* End .row */}
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default HeaderAuth;
