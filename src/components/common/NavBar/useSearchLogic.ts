import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSearchLogic() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Handle "Enter" key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/product?search=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return {
    search,
    setSearch,
    handleKeyDown,
};
}