
import { Movie } from "@/data/movies";
import StarRating from "@/components/StarRating";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
  className?: string;
  featured?: boolean;
}

const MovieCard = ({ movie, className, featured = false }: MovieCardProps) => {
  return (
    <div 
      className={cn(
        "movie-card relative overflow-hidden rounded-lg bg-movie-dark shadow-lg transition-all duration-300 hover:shadow-xl",
        featured ? "h-96" : "h-80",
        className
      )}
    >
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="h-full w-full object-cover"
      />
      
      <div className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-1 text-xs">
        {movie.year}
      </div>
      
      <div className="movie-overlay absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-100 transition-opacity md:opacity-90">
        <h3 className="mb-1 text-lg font-bold text-white">{movie.title}</h3>
        
        <div className="mb-2 flex items-center gap-2">
          <StarRating rating={movie.rating} />
          <span className="rounded-md bg-movie-primary px-2 py-0.5 text-xs font-medium">
            {movie.category}
          </span>
        </div>
        
        <div className="mb-2 flex flex-wrap gap-1">
          {movie.genres.map(genre => (
            <span 
              key={genre} 
              className="rounded-md bg-gray-700/70 px-2 py-0.5 text-xs"
            >
              {genre}
            </span>
          ))}
        </div>
        
        {featured && (
          <p className="text-sm text-gray-300 line-clamp-2">{movie.description}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
