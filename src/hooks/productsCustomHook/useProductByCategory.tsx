import { useEffect, useState } from "react";
import { getProductsByCategory } from "@/services/productsService";
import type { productObject } from "@/types/product_Type";

export function useProductByCategory(
  categoryName: string,
  pageSize: number = 12
) {
  const [products, setData] = useState<productObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(categoryName, pageNumber, pageSize)
      .then(setData)
      .catch(() => setError("Failed to fetch"))
      .finally(() => setLoading(false));
  }, [categoryName, pageNumber, pageSize]);

  return { products, loading, error, pageNumber, setPageNumber };
}
