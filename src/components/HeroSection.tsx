
import { useState, useEffect } from "react";
import { Movie, movies } from "@/data/movies";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";

const HeroSection = () => {
  const featuredMovies = movies.filter(movie => movie.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = featuredMovies[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredMovies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
  };

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700" 
        style={{ 
          backgroundImage: `url(${currentMovie.poster})`, 
          opacity: 0.3 
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {currentMovie.title}
          </h1>
          
          <div className="mb-4 flex items-center gap-4">
            <StarRating rating={currentMovie.rating} size={24} />
            <span className="rounded-md bg-movie-primary px-3 py-0.5 text-sm font-medium">
              {currentMovie.category}
            </span>
            <span className="text-gray-300">{currentMovie.year}</span>
          </div>
          
          <div className="mb-6 flex flex-wrap gap-2">
            {currentMovie.genres.map(genre => (
              <span 
                key={genre} 
                className="rounded-md bg-gray-700/70 px-3 py-1 text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <p className="mb-6 text-lg text-gray-300">
            {currentMovie.description}
          </p>
          
          <Button className="bg-movie-primary hover:bg-movie-secondary">
            View Details
          </Button>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-700 bg-black/40 hover:bg-black/60"
          onClick={handlePrevious}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-700 bg-black/40 hover:bg-black/60"
          onClick={handleNext}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1">
        {featuredMovies.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? "bg-movie-primary" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
