import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSearchLogic } from "./useSearchLogic";
import React from "react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Search_Input({
  className,
  id,
  ...props
}: SearchInputProps) {
  const { t } = useTranslation();
  const {
    search,
    setSearch,
    open,
    setOpen,
    filtered,
    containerRef,
    handleSelect,
    handleKeyDown,
  } = useSearchLogic(300);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className || ""}`}
      dir={document.body.dir}
    >
      {/* Search Input */}
      <input
        id={id}
        type="search"
        placeholder={t("search")}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
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

      {/* Dropdown Results */}
      {open && search.trim() && (
        <div
          role="listbox"
          className="absolute z-50 mt-2 w-full p-2 bg-bgLight shadow-lg rounded-md border border-bgLight max-h-60 overflow-y-auto"
        >
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                role="option"
                className="w-full text-left cursor-pointer p-2 hover:bg-shadowLight transition text-sm text-textLight"
                onClick={() => handleSelect(item)}
              >
                {item.title}
              </button>
            ))
          ) : (
            <div
              className="p-3 text-center text-textLight text-sm"
              aria-live="polite"
            >
              {t("no_results")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
