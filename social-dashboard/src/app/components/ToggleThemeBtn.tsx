"use client";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { GrSun, GrMoon } from "react-icons/gr";

type Props = {
  className?: string;
};

export function ToggleThemeBtn({ className }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-none hover:bg-accent hover:text-accent-foreground p-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <GrSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <GrMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
    </div>
  );
}
