import type { DispatchWithoutAction } from "react";
import { memo } from "react";

import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

type MobileMenuProps = {
  setIsMenuOpen: DispatchWithoutAction;
};

export const MobileMenu = memo<MobileMenuProps>(({ setIsMenuOpen }) => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link href={"/"} onClick={() => setIsMenuOpen()}>
          Home
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href={"/works"} onClick={() => setIsMenuOpen()}>
          Works
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href={"/blog"} onClick={() => setIsMenuOpen()}>
          Blog
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
});
