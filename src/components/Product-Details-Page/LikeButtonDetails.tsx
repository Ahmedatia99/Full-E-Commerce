import React from "react";
import { GoHeart } from "react-icons/go";
import { Button } from "@/components/ui/button";

// Define the props for the LikeButtonDetails component
interface LikeButtonProps {
  liked: boolean; // Indicates if the item is liked
  setLiked: (val: boolean) => void; // Function to update liked state
}

// LikeButtonDetails component for toggling wishlist status
const LikeButtonDetails: React.FC<LikeButtonProps> = ({ liked, setLiked }) => {
  return (
    // Button toggles liked state when clicked
    <Button
      type="button"
      onClick={() => setLiked(!liked)} // Toggle liked state
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"} // Accessibility label
      aria-pressed={liked} // Accessibility pressed state
      className={`w-fit h-fit border ring-2 ring-gray-300 
        ${liked ? "bg-main border-main " : "bg-white"}
      `}
    >
      {/* Heart icon changes color based on liked state */}
      <GoHeart
        className={`text-3xl ${
          liked ? "text-white" : "text-black"
        }`}
      />
    </Button>
  );
};

export default LikeButtonDetails;
