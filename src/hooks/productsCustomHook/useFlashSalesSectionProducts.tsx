import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";
import { getFlashSalesSectionProducts } from "@/services/productsService";

export function useFlashSalesSectionProducts() {
  const [products, setData] = useState<productObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getFlashSalesSectionProducts()
      .then(setData)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
