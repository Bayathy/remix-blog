import { memo } from "react";

import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "@remix-run/react";

export const MobileMenu = memo(() => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link to={"/home"}>Home</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link to={"/blog"}>Blog</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link to={"/other"}>Other</Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
});
