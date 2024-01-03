/** @format */
"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { ToggleThemeBtn } from "./ToggleThemeBtn";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <nav
      className={cn(
        "flex w-full flex-row justify-between gap-3  transition-all dark:text-white",
        className
      )}
    >
      {/* left heading */}
      <div className="font-semibold">
        <h2 className="text-2xl text-very-dark-blue-text dark:text-white md:text-3xl">
          Social Media Dashboard
        </h2>
        <p className=" text-sm text-dark-grayish-blue-text dark:text-desaturated-blue-text">
          Total Followers: 22,470
        </p>
      </div>

      {/* rigth  */}
      {/* dark mode */}
      <div className="  flex items-center justify-between gap-4 md:w-auto ">
        <ToggleThemeBtn />
      </div>
    </nav>
  );
}
