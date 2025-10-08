import { useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import SidebarCategories from "@/components/Home-Page/Hero-Section.tsx/SidebarCategories";
import { ShadPagination } from "../FavouriteComponent/usePagination";

export default function CategroyDataRendering() {
  const { categoryName } = useParams();
  const { products, loading, error } = useProducts();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const productCardProps = {
    hasFavouriteIcon: true,
    hasviewIcon: true,
    hasReview: true,
  };

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  // Filter products by category (or show all if no category)
  const filteredProducts = useMemo(() => {
    if (!categoryName) return products;
    return products.filter(
      (p) => p.category?.toLowerCase() === categoryName.toLowerCase()
    );
  }, [products, categoryName]);

  // Pagination logic
  const totalItems = filteredProducts.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle loading & error states
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <p className="p-6 text-red-600">Error: {error}</p>;
  }

  return (
    <div className="">
      <div className="flex justify-between md:flex-row flex-col gap-5 items-center sm:items-start ">
        <SidebarCategories />

        <div className="flex">
          {paginatedProducts.length > 0 ? (
            <Product_Card
              className="grid grid-cols-2  max-sm:grid-cols-1 xl:grid-cols-4 lg:grid-cols-4  justify-center items-center"
              products={paginatedProducts}
              componentProps={productCardProps}
            />
          ) : (
            <p className="text-gray-600 flex justify-center items-center">
              No products found in this category.
            </p>
          )}
        </div>
      </div>

      {/* Pagination Component */}
      {totalItems > itemsPerPage && (
        <div className="flex justify-center  mt-15">
          <ShadPagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
