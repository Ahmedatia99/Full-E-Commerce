import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";
import { getAllProducts } from "@/services/productsService";

export function useAllProducts() {
  const [products, setData] = useState<productObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllProducts()
      .then(setData)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
