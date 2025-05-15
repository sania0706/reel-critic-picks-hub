
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { allGenres } from "@/data/movies";
import { Star } from "lucide-react";

interface FilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
}

const FilterSection = ({
  selectedCategory,
  setSelectedCategory,
  selectedGenre,
  setSelectedGenre,
  selectedRating,
  setSelectedRating,
}: FilterSectionProps) => {
  const categories = ["All", "Hollywood", "Bollywood"];
  const ratings = [4, 4.5, 5];

  return (
    <section className="bg-movie-dark py-6">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="mb-3 text-lg font-medium">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`filter-btn ${
                  selectedCategory === category
                    ? "bg-movie-primary hover:bg-movie-secondary"
                    : "border-gray-600 hover:border-movie-primary"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-lg font-medium">Filter by Genre</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedGenre === "" ? "default" : "outline"}
              className={`filter-btn ${
                selectedGenre === ""
                  ? "bg-movie-primary hover:bg-movie-secondary"
                  : "border-gray-600 hover:border-movie-primary"
              }`}
              onClick={() => setSelectedGenre("")}
            >
              All
            </Button>
            {allGenres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                className={`filter-btn ${
                  selectedGenre === genre
                    ? "bg-movie-primary hover:bg-movie-secondary"
                    : "border-gray-600 hover:border-movie-primary"
                }`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium">Filter by Rating</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedRating === null ? "default" : "outline"}
              className={`filter-btn ${
                selectedRating === null
                  ? "bg-movie-primary hover:bg-movie-secondary"
                  : "border-gray-600 hover:border-movie-primary"
              }`}
              onClick={() => setSelectedRating(null)}
            >
              All
            </Button>
            {ratings.map((rating) => (
              <Button
                key={rating}
                variant={selectedRating === rating ? "default" : "outline"}
                className={`filter-btn flex items-center gap-1 ${
                  selectedRating === rating
                    ? "bg-movie-primary hover:bg-movie-secondary"
                    : "border-gray-600 hover:border-movie-primary"
                }`}
                onClick={() => setSelectedRating(rating)}
              >
                {rating}+ <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
