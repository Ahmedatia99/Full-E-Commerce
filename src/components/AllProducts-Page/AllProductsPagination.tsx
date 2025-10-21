import { ShadPagination } from "../FavouriteComponent/usePagination";

interface AllProductsPaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalItems: number;
}

export default function AllProductsPagination({
  currentPage,
  onPageChange,
  totalItems,
}: AllProductsPaginationProps) {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Boundary protection
  const safeCurrentPage =
    currentPage > totalPages ? totalPages || 1 : currentPage;

  return (
    <>
      {totalItems > itemsPerPage && (
        <div className="flex justify-center mt-10">
          <ShadPagination
            currentPage={safeCurrentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </>
  );
}
