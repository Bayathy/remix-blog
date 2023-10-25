import { Button } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      aria-label="Toggle theme"
      color="primary"
      variant="flat"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
