import { memo } from "react";

import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

import { ThemeToggleButton } from "./theme-toggle-button";

import { ThemeProvider } from "~/components/ux/theme-provider";

export const Header = memo(() => {
  return (
    <Navbar position="static">
      <NavbarContent justify="center" className="w-full">
        <NavbarItem>
          <Link>Features</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link>Customers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link>Integrations</Link>
        </NavbarItem>
      </NavbarContent>
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
