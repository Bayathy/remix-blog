import { memo } from "react";

import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export const MobileMenu = memo(() => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link href={"/"}>Home</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href={"/works"}>Works</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href={"/blog"}>Blog</Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
});
