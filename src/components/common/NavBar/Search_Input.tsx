import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
type SearchInputProps = {
  className?: string;
};
function Search_Input({ className }: SearchInputProps) {
  const { t } = useTranslation();
  return (
    <div
      className={`search relative w-full ${className} `}
      dir={document.body.dir}
    >
      <input
        id="search-input"
        type="search"
        placeholder={t("search")}
        className={`peer bg-[#F5F5F5]  rounded-sm py-1 px-4 w-full ${
          document.body.dir === "rtl" ? "text-right" : "text-left"
        }`}
      />
      <label htmlFor="search-input" className="peer-focus:hidden ">
        <Search
          className={`absolute top-1/2 -translate-y-1/2 ${
            document.body.dir === "rtl"
              ? "left-3 right-auto"
              : "right-3 left-auto"
          }`}
          size={20}
        />
      </label>
    </div>
  );
}

export default Search_Input;
