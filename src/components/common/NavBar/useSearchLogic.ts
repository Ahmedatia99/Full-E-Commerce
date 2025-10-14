import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { filterProducts } from "@/utils/filteredProducts";
import type { productObject } from "@/types/product_Type";
import products from "@/product.json";

const productsData: productObject[] = products as productObject[];

//Custom hook to handle search logic with debounce
export function useSearchLogic(debounceDelay = 300) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  //Debounce effect to delay filtering
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [search, debounceDelay]);

  // Filter products after debounce
  const filtered = useMemo(() => {
    if (!debouncedSearch.trim()) return [];
    return filterProducts(productsData, {
      category: "All",
      brand: [],
      priceRange: [0, 999999],
      search: debouncedSearch,
      sort: "none",
      discountOnly: false,
    }).slice(0, 6);
  }, [debouncedSearch]);

  // Handle clicking outside search box
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ▶Navigate when product clicked
  const handleSelect = (product: productObject) => {
    const category = product.category ?? "All";
    setOpen(false);
    setSearch("");
    navigate(
      `/product?category=${encodeURIComponent(
        category
      )}&search=${encodeURIComponent(product.title)}`
    );
  };

  // Handle "Enter" key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      setOpen(false);
      navigate(`/product?search=${encodeURIComponent(search)}`);
    }
  };

  return {
    search,
    setSearch,
    open,
    setOpen,
    filtered,
    containerRef,
    handleSelect,
    handleKeyDown,
  };
}
