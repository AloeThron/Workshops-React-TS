"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  attribute: string;
  defaultTheme: string;
};

export default function ThemeProvider({ children, ...props }: Props) {
  return (
    <div>
      <NextThemeProvider {...props}>{children}</NextThemeProvider>
    </div>
  );
}
