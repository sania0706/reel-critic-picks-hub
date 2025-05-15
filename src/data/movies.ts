
export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  rating: number;
  category: "Hollywood" | "Bollywood";
  genres: string[];
  description: string;
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1887&auto=format&fit=crop",
    year: 2010,
    rating: 4.8,
    category: "Hollywood",
    genres: ["Sci-Fi", "Action", "Thriller"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    featured: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1887&auto=format&fit=crop",
    year: 2008,
    rating: 5.0,
    category: "Hollywood",
    genres: ["Action", "Crime", "Drama"],
    description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
    id: 3,
    title: "3 Idiots",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    year: 2009,
    rating: 4.7,
    category: "Bollywood",
    genres: ["Comedy", "Drama"],
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    featured: true
  },
  {
    id: 4,
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1994&auto=format&fit=crop",
    year: 2014,
    rating: 4.9,
    category: "Hollywood",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 5,
    title: "Dangal",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1887&auto=format&fit=crop",
    year: 2016,
    rating: 4.6,
    category: "Bollywood",
    genres: ["Biography", "Drama", "Sport"],
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers."
  },
  {
    id: 6,
    title: "Whiplash",
    poster: "https://images.unsplash.com/photo-1514533212735-5df27d970db9?q=80&w=1887&auto=format&fit=crop",
    year: 2014,
    rating: 4.7,
    category: "Hollywood",
    genres: ["Drama", "Music"],
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
  },
  {
    id: 7,
    title: "PK",
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1925&auto=format&fit=crop",
    year: 2014,
    rating: 4.4,
    category: "Bollywood",
    genres: ["Comedy", "Drama", "Sci-Fi"],
    description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate their religious beliefs and customs."
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1970&auto=format&fit=crop",
    year: 1994,
    rating: 4.9,
    category: "Hollywood",
    genres: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    featured: true
  },
  {
    id: 9,
    title: "Lagaan",
    poster: "https://images.unsplash.com/photo-1502137836532-85ce17d74ab4?q=80&w=1884&auto=format&fit=crop",
    year: 2001,
    rating: 4.5,
    category: "Bollywood",
    genres: ["Drama", "Sport"],
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers."
  },
  {
    id: 10,
    title: "The Matrix",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    year: 1999,
    rating: 4.7,
    category: "Hollywood",
    genres: ["Action", "Sci-Fi"],
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  }
];

export const allGenres = Array.from(
  new Set(movies.flatMap(movie => movie.genres))
).sort();

export const reviews = [
  {
    id: 1,
    movieId: 1,
    author: "Sarah Johnson",
    rating: 4.5,
    content: "Mind-bending and visually stunning. Nolan at his absolute best with a concept that keeps you thinking long after the credits roll."
  },
  {
    id: 2,
    movieId: 8,
    author: "Michael Reynolds",
    rating: 5,
    content: "A masterpiece in every sense of the word. The acting, direction, and story come together perfectly to create one of the greatest films ever made."
  },
  {
    id: 3,
    movieId: 3,
    author: "Raj Patel",
    rating: 4.8,
    content: "Not just funny but deeply meaningful. This film perfectly captures the pressure of education systems while making you laugh and cry."
  }
];
