import type { productObject } from "@/types/product_Type";
import type { Filters } from "@/types/product_Type";

export function applyFilters(products: productObject[], filters: Filters): productObject[] {
  return products.filter((p) => {
    const matchSearch = p.title
    .toLowerCase()
    .includes(filters.search.toLowerCase());
    const matchCategory =
      filters.category === "All" || p.category === filters.category;
    const matchBrand =
      filters.brand.length === 0 ||
  (p.brand && filters.brand.some(b => b.trim().toLowerCase() === (p.brand ?? "").trim().toLowerCase()));
    const matchPrice =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    const matchFlash = !filters.flashOnly || p.isFlash;

    return matchSearch && matchCategory && matchBrand && matchPrice && matchFlash;
  });
}

export function applySorting(products: productObject[], sort: string): productObject[] {
  switch (sort) {
    case "price-low":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-high":
      return [...products].sort((a, b) => b.price - a.price);
    case "rating":
      return [...products].sort((a, b) => b.avgRate - a.avgRate);
    default:
      return products;
  }
}

export function filterProducts(
  products: productObject[],
  filters: Filters
): productObject[] {
  const filtered = applyFilters(products, filters);
  return applySorting(filtered, filters.sort);
}
