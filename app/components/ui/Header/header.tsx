import { memo } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ThemeToggleButton } from "./theme-toggle-button";

import { ThemeProvider } from "~/components/ux/theme-provider";

export const Header = memo(() => {
  return (
    <Navbar position="static">
      <NavbarBrand className="w-full">
        <h1 className="text-3xl">Bayathy Blog</h1>
      </NavbarBrand>
      <NavbarContent className="absolute right-4">
        <NavbarItem>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeToggleButton />
          </ThemeProvider>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
});
