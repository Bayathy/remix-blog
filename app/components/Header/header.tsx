import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

export const Header = () => {
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
    </Navbar>
  );
};
