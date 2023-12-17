import ThemeContext from "@/contexts/ThemeContext";
import React, { useContext } from "react";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  const isClient = typeof window !== "undefined";
  if (!isClient && !theme) return {};
  if (!theme) {
    throw new Error(
      "You must wrap up all components that allow theme nav or provide a theme context"
    );
  }
  return theme;
};

export default useTheme;
