
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  size?: number;
}

const StarRating = ({ rating, maxRating = 5, className, size = 18 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = Math.floor(maxRating - rating);

  return (
    <div className={cn("flex items-center", className)}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star 
          key={`full-${i}`} 
          className="text-movie-gold fill-movie-gold" 
          size={size}
        />
      ))}
      
      {/* Half star */}
      {halfStar && <StarHalf className="text-movie-gold fill-movie-gold" size={size} />}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star 
          key={`empty-${i}`} 
          className="text-gray-400" 
          size={size}
        />
      ))}
      
      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
