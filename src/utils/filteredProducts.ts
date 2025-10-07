import type { Product } from "@/types/product_Type";

interface Filters {
  category: string;
  brand: string[];
  priceRange: [number, number];
  search: string;
  sort: string;
  subCategory: string;
  discountOnly: boolean;
}

export function applyFilters(products: Product[], filters: Filters): Product[] {
  return products.filter((p) => {
    const matchSearch = p.title
    .toLowerCase()
    .includes(filters.search.toLowerCase());
    const matchCategory =
      filters.category === "All" || p.category === filters.category;
    const matchBrand =
      filters.brand.length === 0 || filters.brand.includes(p.brand);
    const matchPrice =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    const matchSubCategory =
      filters.subCategory === "All" || p.subCategory === filters.subCategory;
    const matchDiscount = filters.discountOnly
      ? p.discountPrice < p.price
      : true;
    return matchSearch && matchCategory && matchBrand && matchPrice ;
  });
}

export function applySorting(products: Product[], sort: string): Product[] {
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
  products: Product[],
  filters: Filters
): Product[] {
  const filtered = applyFilters(products, filters);
  return applySorting(filtered, filters.sort);
}
