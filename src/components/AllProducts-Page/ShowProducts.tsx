"use client";

import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import CategoryFeature from "./CategoryFeature";
import { BrandFeature } from "./BrandFeature";
import { PriceRangeFeature } from "./PriceRangeFeature";
import { SortFeature } from "./SortFeature";
import { filterProducts } from "@/utils/filteredProducts";
import { useAllProducts } from "@/hooks/productsCustomHook/useAllProducts";
import type { Filters } from "@/types/product_Type";

const productCardProps = {
  hasFavouriteIcon: true,
  hasviewIcon: true,
  hasReview: true,
};

export default function ProductsPage() {
  const [filters, setFilters] = useState<Filters>({
    category: "All",
    brand: [],
    priceRange: [0, 3000],
    search: "",
    sort: "none",
    discountOnly: false,
    flashOnly: false,
  });

  const { products, loading, error } = useAllProducts();
  const location = useLocation();

  useEffect(() => {
    if (!products.length) return;
    // product/category/electronics
    const categoryFromUrl = location.pathname.split("/").pop()?.toLowerCase();
    if (!categoryFromUrl) return;

    setFilters((prev) => {
      const matchedCategory = products.find((p) =>
        p.category?.toLowerCase().includes(categoryFromUrl)
      );

      if (categoryFromUrl === "flashsales") {
        return { ...prev, flashOnly: true, category: "All" };
      }

      if (matchedCategory?.category) {
        return { ...prev, category: matchedCategory.category.toLowerCase() };
      }

      if (categoryFromUrl === "flashsales") {
        return { ...prev, discountOnly: true, category: "All" };
      }

      if (categoryFromUrl === "bestselling") {
        return { ...prev, sort: "rating", category: "All" };
      }

      return { ...prev, category: "All" };
    });
  }, [location.pathname, products]);

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [products, filters]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setFilters((prev) => ({ ...prev, search: value }));
  };
  console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 container mx-auto">
      {/* Sidebar Filters */}
      <aside className="md:col-span-2 space-y-4 md:sticky top-6 h-fit">
        <Input
          placeholder="Search products..."
          onChange={handleSearchChange}
          className="border"
        />

        <Accordion type="multiple">
          <CategoryFeature filters={filters} setFilters={setFilters} />
          <BrandFeature filters={filters} setFilters={setFilters} />
          <PriceRangeFeature filters={filters} setFilters={setFilters} />
          <SortFeature filters={filters} setFilters={setFilters} />
        </Accordion>
      </aside>

      {/* Products Section */}
      <section className="md:col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 min-h-[400px]">
        {/* Loading state */}
        {loading && (
          <p className="col-span-full text-center mt-10 text-gray-600 text-lg font-medium">
            Loading products...
          </p>
        )}

        {/* Error state */}
        {!loading && error && (
          <p className="col-span-full text-center mt-10 text-red-500 text-lg font-medium">
            Failed to load products: {error}
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && filteredProducts.length === 0 && (
          <p className="col-span-full text-center mt-10 text-gray-500 text-lg font-medium">
            No products found
          </p>
        )}

        {/* Product list */}
        {!loading &&
          !error &&
          filteredProducts.length > 0 &&
          filteredProducts.map((p) => (
            <Product_Card
              key={p.id}
              products={[p]}
              componentProps={productCardProps}
              className="shadow-sm border border-gray-200 p-2 rounded-lg overflow-hidden"
            />
          ))}
      </section>
    </div>
  );
}
