"use client";
import { FC, PropsWithChildren, useEffect } from "react";
import Aos from "aos";

export const AosProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return <>{children}</>;
};
