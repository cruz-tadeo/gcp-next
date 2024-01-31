"use client";

import UserProvider from "../../app/providers/UserProvider";
import { AosProvider } from "./AosProvider";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <AosProvider>{children}</AosProvider>
    </UserProvider>
  );
};
