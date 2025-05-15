
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import MovieCard from "@/components/MovieCard";
import ReviewSection from "@/components/ReviewSection";
import { movies } from "@/data/movies";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Filter movies based on selected filters
  const filteredMovies = movies.filter(movie => {
    // Filter by category
    if (selectedCategory !== "All" && movie.category !== selectedCategory) {
      return false;
    }
    
    // Filter by genre
    if (selectedGenre && !movie.genres.includes(selectedGenre)) {
      return false;
    }
    
    // Filter by rating
    if (selectedRating !== null && movie.rating < selectedRating) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="flex min-h-screen flex-col bg-movie-dark text-white">
      <Navbar />
      <HeroSection />
      
      <FilterSection 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold">
            {filteredMovies.length > 0 
              ? `${selectedCategory === "All" ? "All" : selectedCategory} Movies`
              : "No Movies Found"}
          </h2>
          <p className="mb-8 text-gray-400">
            {filteredMovies.length > 0 
              ? `Found ${filteredMovies.length} movies matching your criteria`
              : "Try adjusting your filters to find movies"}
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
      
      <ReviewSection />
      
      <footer className="border-t border-gray-800 bg-movie-dark py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Reel Critic Picks. All rights reserved.</p>
          <p className="mt-2 text-sm">The ultimate destination for movie reviews and ratings</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
