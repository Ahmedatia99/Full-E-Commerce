import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster: React.FC<CustomToasterProps> = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as CustomToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "#fff",
          "--normal-text": "#000",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
