"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import products from "../../product.json";
import { Accordion } from "@/components/ui/accordion";
import { useMemo } from "react";
import type { productObject } from "@/types/product_Type";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import CategoryFeature from "./CategoryFeature";
import { BrandFeature } from "./BrandFeature";
import { PriceRangeFeature } from "./PriceRangeFeature";
import { SortFeature } from "./SortFeature";
import { filterProducts } from "@/utils/filteredProducts";
// products data
const productsData = products as productObject[];

const productCardProps = {
  hasFavouriteIcon: true,
  hasviewIcon: true,
  hasReview: true,
};

// sub Category
// const subCategories = [
//   "All",
//   ...Array.from(new Set(productsData.map((p) => p.subCategory))),
// ];

export default function ProductsPage() {
  // Filters
  const [filters, setFilters] = useState<{
    category: string;
    brand: string[];
    priceRange: [number, number];
    search: string;
    sort: string;
    discountOnly: boolean;
  }>({
    category: "All",
    brand: [],
    priceRange: [0, 3000],
    search: "",
    sort: "none",
    discountOnly: false,
  });

  // filtering Logic
  const filtrationProducts = useMemo(
    () => filterProducts(productsData, filters),
    [filters]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 container mx-auto">
      {/* Sidebar Filters */}
      <aside className="md:col-span-2 space-y-4 md:sticky top-6 h-fit">
        {/*Search */}
        <Input
          placeholder="Search products..."
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="border"
        />

        <Accordion type="multiple">
          {/* Category */}
          <CategoryFeature
            selectValue={filters.category}
            setFilters={(v) => setFilters({ ...filters, category: v })}
          />

          {/* Brand */}
          <BrandFeature filters={filters} setFilters={setFilters} />

          {/*  Price Range */}
          <PriceRangeFeature filters={filters} setFilters={setFilters} />

          {/*  Sort */}
          <SortFeature filters={filters} setFilters={setFilters} />

          {/* <DiscountFeature filters={filters} setFilters={setFilters} /> */}
        </Accordion>
      </aside>

      {/* Product List */}
      <section className="md:col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filtrationProducts.length > 0 ? (
          filtrationProducts.map((p) => (
            <Product_Card
              key={p.id}
              products={[p]}
              componentProps={productCardProps}
              className="shadow-sm border border-gray-200 p-2 rounded-lg overflow-hidden"
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found ("_____")
          </div>
        )}
      </section>
    </div>
  );
}