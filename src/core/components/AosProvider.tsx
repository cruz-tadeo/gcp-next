"use client";
import { FC, PropsWithChildren, useContext, useEffect } from "react";
import Aos from "aos";
import { UserContext } from "src/app/providers/UserProvider";

export const AosProvider: FC<PropsWithChildren> = ({ children }) => {
  const { coords } = useContext(UserContext);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  useEffect(() => {
    console.log(coords);
  });
  return <>{children}</>;
};
