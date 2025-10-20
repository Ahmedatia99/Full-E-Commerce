import { useEffect, useState } from "react";
import { getProductById } from "@/services/productsService";
import type { productObject } from "@/types/product_Type";

export function useProductByID(productId?: string) {
  const [product, setProduct] = useState<productObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    setLoading(true);
    getProductById(productId)
      .then(setProduct)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, [productId]);

  return { product, loading, error };
}
