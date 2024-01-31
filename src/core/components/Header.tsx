"use client";

import { use, useContext, useEffect } from "react";
import { UserContext } from "src/app/providers/UserProvider";
import HeaderGuest from "./headers/guest";
import HeaderAuth from "./headers/auth";
import { desencrypt } from "../utils";
import { getUser } from "../services/getUser";

export const Header = () => {
  const { isAuth, setAuth, setUser, user } = useContext(UserContext);

  useEffect(() => {
    const params =
      typeof sessionStorage !== "undefined"
        ? sessionStorage.getItem("params") ?? ""
        : "";

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

  return <>{!isAuth ? <HeaderGuest /> : <HeaderAuth />}</>;
};
