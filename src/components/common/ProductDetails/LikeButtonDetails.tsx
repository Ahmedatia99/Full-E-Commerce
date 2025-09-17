import React from "react";
import { GoHeart } from "react-icons/go";

interface LikeButtonProps {
  liked: boolean;
  setLiked: (val: boolean) => void;
}

const LikeButtonDetails: React.FC<LikeButtonProps> = ({ liked, setLiked }) => {
  return (
    <button
      type="button"
      onClick={() => setLiked(!liked)}
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={liked}
      className={` cursor-pointer h-15 flex justify-center items-center rounded-[7px] w-15 border-2 border-[#00000080] transition-colors duration-200 ${
        liked ? "bg-[#DB4444] border-[#DB4444]" : "bg-white"
      }`}
    >
      <GoHeart className={`text-3xl ${liked ? "text-white" : "text-black"}`} />
    </button>
  );
};

export default LikeButtonDetails;
