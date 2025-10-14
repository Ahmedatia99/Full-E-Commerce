import { useState, useEffect } from "react";
import type { hookProductObject } from "@/types/product_Type";
import { getHookProducts } from "@/services/productsService";

export function useHookProducts() {
  const [products, setData] = useState<hookProductObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHookProducts()
      .then(setData)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
