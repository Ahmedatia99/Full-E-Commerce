import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}
const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex gap-1 items-center">{stars}</div>;
};

export default StarRating;
