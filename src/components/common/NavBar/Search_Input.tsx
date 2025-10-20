import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSearchLogic } from "./useSearchLogic";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Search_Input({
  className,
  id,
  ...props
}: SearchInputProps) {
  const { t } = useTranslation();
  const { inputRef, handleKeyDown } = useSearchLogic();

  return (
    <div
      className={`relative w-full ${className || ""}`}
      dir={document.body.dir}
    >
      {/* Search Input */}
      <input
        id={id}
        ref={inputRef}
        type="search"
        placeholder={t("search")}
        onKeyDown={handleKeyDown}
        className={`peer bg-input rounded-md py-2 px-4 w-full focus:outline-none ${
          document.body.dir === "rtl" ? "text-right" : "text-left"
        }`}
        aria-label={t("search")}
        {...props}
      />

      <Search
        className={`absolute top-1/2 -translate-y-1/2 text-textLight pointer-events-none ${
          document.body.dir === "rtl" ? "left-3" : "right-3"
        }`}
        size={20}
      />
    </div>
  );
}
