"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import CategoryFeature from "./CategoryFeature";
import { BrandFeature } from "./BrandFeature";
import { PriceRangeFeature } from "./PriceRangeFeature";
import { SortFeature } from "./SortFeature";
import { filterProducts } from "@/utils/filteredProducts";
import type { Filters, productObject } from "@/types/product_Type";

import axios, { AxiosError, type CancelTokenSource } from "axios";

// Component-level props
const productCardProps = {
  hasFavouriteIcon: true,
  hasviewIcon: true,
  hasReview: true,
};

export default function ProductsPage() {
  // Filters state
  const [filters, setFilters] = useState<Filters>({
    category: "All",
    brand: [],
    priceRange: [0, 3000],
    search: "",
    sort: "none",
    discountOnly: false,
  });

  // Products state
  const [productsData, setProductsData] = useState<productObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API
  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get<productObject[]>(
          "https://exclusive-products-api-production.up.railway.app/products",
          { cancelToken: source.token }
        );
        console.log(res);
        setProductsData(res.data);
      } catch (err: unknown) {
        const axiosError = err as AxiosError;
        if (axios.isCancel(err)) {
          console.log("Request canceled", axiosError.message);
        } else {
          setError(axiosError.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      source.cancel("Component unmounted, request canceled");
    };
  }, []);

  // Filtering logic
  const filteredProducts = useMemo(
    () => filterProducts(productsData, filters),
    [productsData, filters]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 container mx-auto">
      {/* Sidebar Filters */}
      <aside className="md:col-span-2 space-y-4 md:sticky top-6 h-fit">
        <Input
          placeholder="Search products..."
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="border"
        />

        <Accordion type="multiple">
          <CategoryFeature filters={filters} setFilters={setFilters} />
          <BrandFeature filters={filters} setFilters={setFilters} />
          <PriceRangeFeature filters={filters} setFilters={setFilters} />
          <SortFeature filters={filters} setFilters={setFilters} />
        </Accordion>
      </aside>

      {/* Product List */}
      <section className="md:col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {loading && (
          <p className="col-span-full text-center mt-10">Loading...</p>
        )}
        {error && (
          <p className="col-span-full text-center mt-10 text-red-500">
            Error: {error}
          </p>
        )}
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
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No products found ("_____")
          </div>
        )}
      </section>
    </div>
  );
}
