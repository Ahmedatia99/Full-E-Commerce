import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";
import { getBestSellingSectionProducts } from "@/services/productsService";

export function useBestSellingSectionProducts() {
  const [products, setData] = useState<productObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBestSellingSectionProducts()
      .then(setData)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
