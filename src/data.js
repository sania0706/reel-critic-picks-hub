
// Movie data
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    year: 1994,
    rating: 9.3,
    category: "Hollywood",
    genres: ["Drama"],
    featured: true
  },
  {
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    year: 1972,
    rating: 9.2,
    category: "Hollywood",
    genres: ["Crime", "Drama"],
    featured: true
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    year: 2008,
    rating: 9.0,
    category: "Hollywood",
    genres: ["Action", "Crime", "Drama"],
    featured: true
  },
  {
    id: 4,
    title: "3 Idiots",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    poster: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    year: 2009,
    rating: 8.4,
    category: "Bollywood",
    genres: ["Comedy", "Drama"],
    featured: true
  },
  {
    id: 5,
    title: "Dangal",
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    year: 2016,
    rating: 8.3,
    category: "Bollywood",
    genres: ["Action", "Biography", "Drama"],
    featured: true
  },
  {
    id: 6,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    year: 1994,
    rating: 8.8,
    category: "Hollywood",
    genres: ["Drama", "Romance"],
    featured: false
  },
  {
    id: 7,
    title: "Lagaan",
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    year: 2001,
    rating: 8.1,
    category: "Bollywood",
    genres: ["Adventure", "Drama", "Musical"],
    featured: false
  },
  {
    id: 8,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    year: 2010,
    rating: 8.8,
    category: "Hollywood",
    genres: ["Action", "Adventure", "Sci-Fi"],
    featured: false
  },
  {
    id: 9,
    title: "PK",
    description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate their religious beliefs.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    year: 2014,
    rating: 8.1,
    category: "Bollywood",
    genres: ["Comedy", "Drama", "Sci-Fi"],
    featured: false
  },
  {
    id: 10,
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    year: 1999,
    rating: 8.7,
    category: "Hollywood",
    genres: ["Action", "Sci-Fi"],
    featured: false
  }
];

// Extract all unique genres
const allGenres = [...new Set(movies.flatMap(movie => movie.genres))].sort();

// Reviews data
const reviews = [
  {
    id: 1,
    author: "Roger Ebert",
    content: "The Shawshank Redemption is a movie about time, patience and loyalty -- not sexy qualities, but they grow on you during the 142-minute running time.",
    rating: 4.5
  },
  {
    id: 2,
    author: "Peter Travers",
    content: "The Dark Knight creates a place where good and evil — expected to do battle — decide instead to get it on and dance. Ledger as the Joker is a creature of disturbing mystery.",
    rating: 5
  },
  {
    id: 3,
    author: "Rajeev Masand",
    content: "3 Idiots is a film with a strong social message that's delivered with such fantastic humor that audiences will be thoroughly entertained even as they're enlightened.",
    rating: 4.5
  },
  {
    id: 4,
    author: "A.O. Scott",
    content: "Inception is a stunning piece of work. Not just visually, as the reviews have been saying, but narratively as well. And it does what most films aspire to do but can't.",
    rating: 4
  },
  {
    id: 5,
    author: "Anupama Chopra",
    content: "Dangal is a masterpiece. A film worthy of being on the world map. The performances, the writing, the pace were all impeccable.",
    rating: 4.5
  },
  {
    id: 6,
    author: "Richard Roeper",
    content: "The Godfather is a masterpiece, plain and simple. It's the first true American epic, and it changed the face of the gangster film forever.",
    rating: 5
  }
];
