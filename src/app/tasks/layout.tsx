"use client";
import { ReactNode, useState } from "react";
import { ThemeProvider, CssBaseline, IconButton, Box } from "@mui/material";
import { darkTheme, lightTheme } from "@/features/themeToggle/lib/constants";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "fixed", top: 10, right: 10, zIndex: 999 }}>
        <IconButton onClick={toggleTheme} title="Переключить тему">
          <Brightness4Icon />
        </IconButton>
      </Box>
      {children}
    </ThemeProvider>
  );
}
