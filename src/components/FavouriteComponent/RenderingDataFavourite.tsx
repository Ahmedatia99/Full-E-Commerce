import { useState } from "react";
import { useWishlist } from "../../hooks/WishListContext/useWishlist";
import { useTranslation } from "react-i18next";
import Product_Card from "@/components/common/Product_Card/Product_Card";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

function RenderingDataFavourite() {
  const { wishlist } = useWishlist();
  const { t } = useTranslation();
  const { products, loading, error } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (loading) return <p>{t("Loading...")}</p>;
  if (error)
    return <p className="text-red-500">{t("Failed to load products")}</p>;

  const favouriteProducts = products.filter((p) => wishlist.includes(p.id));


  
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = favouriteProducts.slice(indexOfFirst, indexOfLast);

  return (
    <section
      className="xl:my-20"
      aria-labelledby="wishlist-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h1
        id="wishlist-heading"
        className="text-2xl font-bold mb-6 flex items-center gap-2"
      >
        {t("My Favourites")}
        <span
          className="text-main"
          aria-label={`${favouriteProducts.length} items`}
        >
          ({favouriteProducts.length})
        </span>
      </h1>

      {favouriteProducts.length === 0 ? (
        <div className="flex justify-center items-center flex-col">
          <p className="text-gray-500 text-center my-20 text-4xl ">
            {t("No Favourite Products Yet")}
          </p>
          <Link
            className="font-semibold text-white px-10 p-6 bg-main hover:scale-105 transition duration-300 rounded-2xl"
            to={"/"}
          >
            {t("Home Page")}
          </Link>
        </div>
      ) : (
        <>
          <p className="sr-only">
            Showing {indexOfFirst + 1} to{" "}
            {Math.min(indexOfLast, favouriteProducts.length)} of{" "}
            {favouriteProducts.length} {t("favourites")}
          </p>
          <Product_Card
            className="grid grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 justify-center items-center"
            products={currentProducts}
            componentProps={{ hasDeleteIcon: true }}
          />
          <nav
            className="mt-16"
            role="navigation"
            aria-label="Wishlist pagination"
          >
            <Pagination
              currentPage={currentPage}
              totalItems={favouriteProducts.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </nav>
        </>
      )}
    </section>
  );
}

export default RenderingDataFavourite;
