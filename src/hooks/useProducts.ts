import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";
import productsData from "@/product.json";

/**
 * Custom hook to load products (local JSON for now, API-ready later).
 */
export function useProducts() {
  const [products, setProducts] = useState<productObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setProducts(productsData as productObject[]); // load products
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
}
