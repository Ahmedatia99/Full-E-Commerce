import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";
import { getProductsByCategory } from "@/services/productsService";

/**
 * Custom hook to fetch products by category from the API.
 * Supports pagination and handles loading/error states.
 */
export function useProductByCategory(
  category: string,
  pageNumber: number = 1,
  pageSize: number = 24
) {
  // Products state
  const [products, setProducts] = useState<productObject[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return; // prevent fetching if category is empty

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch products from API
        const data = await getProductsByCategory(
          category,
          pageNumber,
          pageSize
        );

        // Update state with fetched products
        setProducts(data);
      } catch (err: unknown) {
        // Catch and handle any errors
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        // Always stop loading, even if an error happens
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, pageNumber, pageSize]);

  // Return data and states for component usage
  return { products, loading, error };
}
