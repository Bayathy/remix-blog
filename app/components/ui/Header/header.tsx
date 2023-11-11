import { memo } from "react";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link as RemixLink } from "@remix-run/react";

import { ThemeToggleButton } from "./theme-toggle-button";

import { ThemeProvider } from "~/components/ux/theme-provider";

export const Header = memo(() => {
  return (
    <Navbar position="static" maxWidth="xl">
      <NavbarBrand className="w-full">
        <h1 className="text-large md:text-3xl">Bayathy Blog</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link as={RemixLink}>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={RemixLink}>Blog</Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={RemixLink}>Other</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeToggleButton />
          </ThemeProvider>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
});
