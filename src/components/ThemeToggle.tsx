
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 ease-in-out"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        {theme === "light" ? (
          <Sun className="h-4 w-4 text-primary animate-fade-in" />
        ) : (
          <Moon className="h-4 w-4 text-primary animate-fade-in" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
