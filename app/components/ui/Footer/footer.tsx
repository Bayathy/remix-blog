import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Link } from "@nextui-org/react";

export const Footer = () => {
  return (
    <footer className="mt-16 grid h-16 place-items-center">
      <div>
        <Button
          as={Link}
          isIconOnly
          color="primary"
          variant="light"
          href="https://twitter.com/Bayathy"
          target="_blank"
        >
          <Icon icon={"mdi:twitter"} width={32} height={32} />
        </Button>
        <Button
          as={Link}
          isIconOnly
          target="_blank"
          color="primary"
          variant="light"
          href="https://github.com/Bayathy"
        >
          <Icon icon={"mdi:github"} width={32} height={32} />
        </Button>
      </div>
    </footer>
  );
};
