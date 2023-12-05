import { memo, useReducer } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { MobileMenu } from "./mobile-menu";
import { ThemeToggleButton } from "./theme-toggle-button";

import { ThemeProvider } from "~/components/provider/theme-provider";

export const Header = memo(() => {
  const [isMenuOepn, setIsMenuOpen] = useReducer((state) => !state, false);
  return (
    <Navbar
      position="sticky"
      maxWidth="xl"
      isMenuOpen={isMenuOepn}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      disableAnimation
    >
      <NavbarBrand className="w-full">
        <h1 className="text-large md:text-3xl">Bayathy Blog</h1>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden md:flex">
        <NavbarItem>
          <Link href={"/"}>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/works"}>Works</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/blog"}>Blog</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeToggleButton />
          </ThemeProvider>
        </NavbarItem>
        <NavbarItem className="md:hidden">
          <NavbarMenuToggle
            as={Button}
            variant={"light"}
            isIconOnly
            className="text-primary"
            aria-label={isMenuOepn ? "メニューを閉じる" : "メニューを開ける"}
            icon={
              isMenuOepn ? (
                <Icon icon={"mdi:close"} width={32} height={32} />
              ) : (
                <Icon icon={"mdi:menu"} width={32} height={32} />
              )
            }
          />
        </NavbarItem>
      </NavbarContent>
      <MobileMenu setIsMenuOpen={setIsMenuOpen} />
    </Navbar>
  );
});
