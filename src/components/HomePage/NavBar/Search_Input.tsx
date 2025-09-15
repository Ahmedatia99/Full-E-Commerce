import { Search } from "lucide-react";
type SearchInputProps = {
  className?: string;
};
function Search_Input({ className }: SearchInputProps) {
  return (
    <div className={`search relative w-full ${className} `}>
      <input
        id="search-input"
        type="search"
        placeholder="Search..."
        className="peer bg-[#F5F5F5] rounded-sm py-3 px-4  w-full  "
      />
      <label htmlFor="search-input" className="peer-focus:hidden">
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2  "
          size={20}
        />
      </label>
    </div>
  );
}

export default Search_Input;
