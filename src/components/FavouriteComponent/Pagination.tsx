import React from "react";
import { useTranslation } from "react-i18next";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  // getting totalPages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const { t } = useTranslation();

  // hide pagination if not needed

  if (totalPages <= 1) return null;   //// proplem

  const handleClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <nav
      className="flex justify-center items-center mt-6 gap-2"
      aria-label="Pagination Navigation"
    >
      {/* Prev */}
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border rounded  ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
        aria-label="Previous Page"
      >
        {t("Prev")}
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={`px-3 py-1 border rounded cursor-pointer ${
            currentPage === page ? "bg-black text-white" : "hover:bg-gray-200"
          }`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border rounded  ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
        aria-label="Next Page"
      >
        {t("Next")}
      </button>
    </nav>
  );
};

export default Pagination;
