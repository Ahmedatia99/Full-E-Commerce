import { useWishlist } from "@/hooks/WishListContext/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../hooks/useProducts";
import type { cartProduct } from "@/types/cart";

function FavouriteActions() {
  const { wishlist, clearWishlist } = useWishlist();
  const { addManyToCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { products, loading, error } = useProducts();
  if (loading) return <p>{t("Loading...")}</p>;
  if (error)
    return <p className="text-red-500">{t("Failed to load products")}</p>;
  const favouriteProducts = products.filter((p) => wishlist.includes(p.id));

  const handleConfirm = () => {
    if (favouriteProducts.length === 0) return;

    const productsToAdd: cartProduct[] = favouriteProducts.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.discountPrice ?? product.price,
      quantity: 1,
      color: product.colors[0]?.color,
      key: `${product.id}-${product.colors[0]?.color || "default"}`,
      mainImage: product.mainImgSRC,
    }));

    addManyToCart(productsToAdd);
    clearWishlist();
    setShowModal(false);
    navigate("/cart");
  };

  return (
    <>
      <section
        className="flex gap-4 my-10 justify-between items-center "
        role="region"
        aria-labelledby="favourite-actions-heading"
      >
        <h2 id="favourite-actions-heading" className="sr-only">
          {t("Wishlist actions")}
        </h2>

        {/* Clear Wishlist */}
        <button
          type="button"
          onClick={clearWishlist}
          aria-label="Clear all items from wishlist"
          disabled={wishlist.length === 0}
          className={`px-4 py-2 rounded transition cursor-pointer ${
            wishlist.length === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-black hover:scale-105 hover:bg-gray-400 duration-300"
          }`}
        >
          {t("Clear Wishlist")}
        </button>

        {/* Move All to Cart */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          aria-label="Move all wishlist items to shopping cart"
          disabled={wishlist.length === 0}
          className={`px-4 py-2 rounded transition ${
            wishlist.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:scale-105 hover:bg-main cursor-pointer duration-300"
          }`}
        >
          {t("Move All to Cart")}
        </button>
      </section>

      {/* Confirmation Modal adde dilog */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">
              {t("Confirm Action")}
            </h3>
            <p className="mb-6 text-gray-700">
              {t("Are you sure you want to move")}{" "}
              <span className="font-bold text-main">
                {favouriteProducts.length}
              </span>{" "}
              {t("items to the cart?")}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded cursor-pointer bg-gray-300 hover:bg-gray-400 transition"
              >
                {t("Cancel")}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded cursor-pointer bg-black text-white hover:bg-main transition"
              >
                {t("Confirm")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FavouriteActions;
