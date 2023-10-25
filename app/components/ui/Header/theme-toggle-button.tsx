import { memo } from "react";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

export const ThemeToggleButton = memo(() => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      aria-label="Toggle theme"
      color="primary"
      variant="flat"
    >
      {theme === "light" ? (
        <Icon icon={"tabler:sun-high"} width={32} height={32} />
      ) : (
        <Icon icon={"tabler:moon"} width={32} height={32} />
      )}
    </Button>
  );
});
