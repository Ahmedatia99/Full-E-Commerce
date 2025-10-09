import { useTranslation } from "react-i18next";

type Props = {
  wishlist: number[];
  clearWishlist: () => void;
  onMoveAll: () => void;
};

function WishlistButtons({ wishlist, clearWishlist, onMoveAll }: Props) {
  const { t } = useTranslation();

  return (
    <section
      className="flex gap-4 my-10 justify-between items-center"
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
        disabled={wishlist.length === 0}
        className={`px-4 py-2 rounded transition  ${
          wishlist.length === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-black cursor-pointer hover:scale-105 hover:bg-gray-400 duration-300"
        }`}
      >
        {t("Clear Wishlist")}
      </button>

      {/* Move All to Cart */}
      <button
        type="button"
        onClick={onMoveAll}
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
  );
}

export default WishlistButtons;
