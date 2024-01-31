"use client";
import { FC, PropsWithChildren, useContext, useEffect } from "react";
import Aos from "aos";

export const AosProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  useEffect(() => {});
  return <>{children}</>;
};
