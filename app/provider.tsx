"use client";

import { ThemeProvider } from "next-themes";
import {NextUIProvider} from "@nextui-org/react";
import { Props } from "./layout";

export function Providers({ children } : Props) {
  return (
    <>
      <NextUIProvider>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}