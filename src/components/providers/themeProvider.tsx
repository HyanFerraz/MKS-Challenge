'use client';

import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";
import { ThemeProvider } from "styled-components";

export default function ThemeProviderWrapper({
  children
} : {
  children : React.ReactNode
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
