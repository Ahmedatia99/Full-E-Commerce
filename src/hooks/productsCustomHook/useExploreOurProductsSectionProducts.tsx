import { useState, useEffect } from "react";
import type { productObject } from "@/types/product_Type";
import { getExploreOurProuctsSectionProducts } from "@/services/productsService";

export function useExploreOurProductsSectionProducts() {
  const [products, setData] = useState<productObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getExploreOurProuctsSectionProducts()
      .then(setData)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
