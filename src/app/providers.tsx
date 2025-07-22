'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

// Изменили именованный экспорт на экспорт по умолчанию
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <MuiThemeProvider theme={createTheme()}>{children}</MuiThemeProvider>
    </NextThemesProvider>
  );
}
