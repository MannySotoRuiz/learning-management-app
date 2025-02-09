"use client";

import React from "react";
import StoreProvider from "@/state/redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};
