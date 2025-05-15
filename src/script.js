
// DOM elements
const heroBackdrop = document.getElementById('heroBackdrop');
const heroContent = document.getElementById('heroContent');
const heroIndicators = document.getElementById('heroIndicators');
const prevHeroBtn = document.getElementById('prevHeroBtn');
const nextHeroBtn = document.getElementById('nextHeroBtn');
const categoryFilter = document.getElementById('categoryFilter');
const genreFilter = document.getElementById('genreFilter');
const ratingFilter = document.getElementById('ratingFilter');
const moviesGrid = document.getElementById('moviesGrid');
const movieSectionTitle = document.getElementById('movieSectionTitle');
const movieSectionSubtitle = document.getElementById('movieSectionSubtitle');
const reviewsGrid = document.getElementById('reviewsGrid');
const addReviewBtn = document.getElementById('addReviewBtn');
const reviewForm = document.getElementById('reviewForm');
const newReviewForm = document.getElementById('newReviewForm');
const reviewAuthor = document.getElementById('reviewAuthor');
const reviewContent = document.getElementById('reviewContent');
const reviewRatingStars = document.getElementById('reviewRatingStars');
const cancelReviewBtn = document.getElementById('cancelReviewBtn');
const formError = document.getElementById('formError');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// State
let currentHeroIndex = 0;
let selectedCategory = 'All';
let selectedGenre = '';
let selectedRating = null;
let newReviewRating = 5;
let currentReviews = [...reviews];
const featuredMovies = movies.filter(movie => movie.featured);

// Initialize Bootstrap toast
const bsToast = new bootstrap.Toast(toast);

// Initialize the page
function initPage() {
  renderHeroSection();
  renderFilters();
  renderMovies();
  renderReviews();
  setupReviewForm();
}

// Hero Section Functions
function renderHeroSection() {
  const currentMovie = featuredMovies[currentHeroIndex];
  
  // Set the backdrop image
  heroBackdrop.style.backgroundImage = `url(${currentMovie.poster})`;
  
  // Create the hero content
  heroContent.innerHTML = `
    <h1 class="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
      ${currentMovie.title}
    </h1>
    
    <div class="mb-4 d-flex align-items-center gap-4">
      <div class="stars-container">
        ${renderStars(currentMovie.rating)}
        <span class="ms-1 text-sm font-medium">${currentMovie.rating.toFixed(1)}</span>
      </div>
      <span class="rounded-md bg-movie-primary px-3 py-1 text-sm font-medium">
        ${currentMovie.category}
      </span>
      <span class="text-gray-300">${currentMovie.year}</span>
    </div>
    
    <div class="mb-4 d-flex flex-wrap gap-2">
      ${currentMovie.genres.map(genre => `
        <span class="rounded-md bg-gray-700/70 px-3 py-1 text-sm">
          ${genre}
        </span>
      `).join('')}
    </div>
    
    <p class="mb-4 text-lg text-gray-300">
      ${currentMovie.description}
    </p>
    
    <button class="btn bg-movie-primary text-white hover:bg-movie-secondary">
      View Details
    </button>
  `;
  
  // Update the indicators
  heroIndicators.innerHTML = '';
  featuredMovies.forEach((_, i) => {
    const indicator = document.createElement('button');
    indicator.className = `hero-indicator ${i === currentHeroIndex ? 'active' : ''}`;
    indicator.addEventListener('click', () => {
      currentHeroIndex = i;
      renderHeroSection();
    });
    heroIndicators.appendChild(indicator);
  });
}

// Filter Functions
function renderFilters() {
  // Category filters
  const categories = ["All", "Hollywood", "Bollywood"];
  categoryFilter.innerHTML = categories.map(category => `
    <button
      class="btn ${selectedCategory === category ? 'btn-primary active' : 'btn-outline-secondary'} filter-btn"
      data-category="${category}"
    >
      ${category}
    </button>
  `).join('');
  
  // Add event listeners to category buttons
  categoryFilter.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      renderFilters();
      renderMovies();
    });
  });
  
  // Genre filters
  genreFilter.innerHTML = `
    <button
      class="btn ${selectedGenre === '' ? 'btn-primary active' : 'btn-outline-secondary'} filter-btn"
      data-genre=""
    >
      All
    </button>
    ${allGenres.map(genre => `
      <button
        class="btn ${selectedGenre === genre ? 'btn-primary active' : 'btn-outline-secondary'} filter-btn"
        data-genre="${genre}"
      >
        ${genre}
      </button>
    `).join('')}
  `;
  
  // Add event listeners to genre buttons
  genreFilter.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      selectedGenre = button.dataset.genre;
      renderFilters();
      renderMovies();
    });
  });
  
  // Rating filters
  const ratings = [4, 4.5, 5];
  ratingFilter.innerHTML = `
    <button
      class="btn ${selectedRating === null ? 'btn-primary active' : 'btn-outline-secondary'} filter-btn"
      data-rating="null"
    >
      All
    </button>
    ${ratings.map(rating => `
      <button
        class="btn ${selectedRating === rating ? 'btn-primary active' : 'btn-outline-secondary'} filter-btn d-flex align-items-center gap-1"
        data-rating="${rating}"
      >
        ${rating}+ <i class="fas fa-star text-yellow-400 ms-1"></i>
      </button>
    `).join('')}
  `;
  
  // Add event listeners to rating buttons
  ratingFilter.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      selectedRating = button.dataset.rating === 'null' ? null : parseFloat(button.dataset.rating);
      renderFilters();
      renderMovies();
    });
  });
}

// Movies Grid Function
function renderMovies() {
  // Filter movies based on selected filters
  const filteredMovies = movies.filter(movie => {
    // Filter by category
    if (selectedCategory !== 'All' && movie.category !== selectedCategory) {
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
  
  // Update section title and subtitle
  movieSectionTitle.textContent = `${selectedCategory === 'All' ? 'All' : selectedCategory} Movies`;
  
  if (filteredMovies.length > 0) {
    movieSectionSubtitle.textContent = `Found ${filteredMovies.length} movies matching your criteria`;
    
    // Render the movies grid
    moviesGrid.innerHTML = filteredMovies.map(movie => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
        <div class="movie-card animate-scale-in">
          <img 
            src="${movie.poster}" 
            alt="${movie.title}" 
            class="movie-poster"
          />
          
          <div class="movie-year">${movie.year}</div>
          
          <div class="movie-overlay">
            <h3 class="mb-1 text-lg fw-bold text-white">${movie.title}</h3>
            
            <div class="mb-2 d-flex align-items-center gap-2">
              <div class="stars-container">
                ${renderStars(movie.rating)}
                <span class="ms-1 text-sm font-medium">${movie.rating.toFixed(1)}</span>
              </div>
              <span class="category-tag">
                ${movie.category}
              </span>
            </div>
            
            <div class="mb-2 d-flex flex-wrap gap-1">
              ${movie.genres.map(genre => `
                <span class="genre-tag">${genre}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  } else {
    movieSectionSubtitle.textContent = 'Try adjusting your filters to find movies';
    moviesGrid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fas fa-film fa-3x mb-3 text-gray-400"></i>
        <h3 class="text-xl font-medium">No movies found</h3>
        <p class="text-gray-400">Try adjusting your filters to see more results</p>
      </div>
    `;
  }
}

// Reviews Functions
function renderReviews() {
  reviewsGrid.innerHTML = currentReviews.map(review => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="review-card p-4 h-100">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h4 class="fw-bold mb-0">${review.author}</h4>
          <div class="stars-container">
            ${renderStars(review.rating)}
            <span class="ms-1 text-sm font-medium">${review.rating.toFixed(1)}</span>
          </div>
        </div>
        <p class="text-gray-300">${review.content}</p>
      </div>
    </div>
  `).join('');
}

// Review Form functions
function setupReviewForm() {
  // Add click event for add review button
  addReviewBtn.addEventListener('click', () => {
    reviewForm.classList.toggle('d-none');
    reviewAuthor.focus();
  });
  
  // Cancel button
  cancelReviewBtn.addEventListener('click', () => {
    reviewForm.classList.add('d-none');
    resetReviewForm();
  });
  
  // Set up the rating stars
  renderRatingInput();
  
  // Form submission
  newReviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!reviewAuthor.value.trim() || !reviewContent.value.trim()) {
      formError.textContent = "Please fill out all fields";
      return;
    }
    
    const newReview = {
      id: `user-review-${Date.now()}`,
      author: reviewAuthor.value,
      content: reviewContent.value,
      rating: newReviewRating
    };
    
    currentReviews = [newReview, ...currentReviews];
    renderReviews();
    
    reviewForm.classList.add('d-none');
    resetReviewForm();
    
    // Show toast
    toastMessage.textContent = "Review submitted successfully!";
    bsToast.show();
  });
}

function renderRatingInput() {
  reviewRatingStars.innerHTML = '';
  
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('i');
    star.className = `fas fa-star fa-lg mx-1 star-icon ${i <= newReviewRating ? 'star-filled' : ''}`;
    star.style.color = i <= newReviewRating ? '#FFC107' : '#cccccc';
    
    star.addEventListener('click', () => {
      newReviewRating = i;
      renderRatingInput();
    });
    
    star.addEventListener('mouseover', () => {
      // Highlight stars up to the hovered one
      const stars = reviewRatingStars.querySelectorAll('.star-icon');
      stars.forEach((s, index) => {
        s.style.color = index < i ? '#FFC107' : '#cccccc';
      });
    });
    
    star.addEventListener('mouseout', () => {
      // Reset to the selected rating
      const stars = reviewRatingStars.querySelectorAll('.star-icon');
      stars.forEach((s, index) => {
        s.style.color = index < newReviewRating ? '#FFC107' : '#cccccc';
      });
    });
    
    reviewRatingStars.appendChild(star);
  }
  
  const ratingText = document.createElement('span');
  ratingText.className = 'ms-2';
  ratingText.textContent = `(${newReviewRating})`;
  reviewRatingStars.appendChild(ratingText);
}

function resetReviewForm() {
  reviewAuthor.value = '';
  reviewContent.value = '';
  newReviewRating = 5;
  renderRatingInput();
  formError.textContent = '';
}

// Utility Functions
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = Math.floor(5 - rating);
  
  let starsHTML = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star star-gold"></i>';
  }
  
  // Half star
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt star-gold"></i>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star text-gray-400"></i>';
  }
  
  return starsHTML;
}

// Hero navigation
prevHeroBtn.addEventListener('click', () => {
  currentHeroIndex = (currentHeroIndex === 0) ? featuredMovies.length - 1 : currentHeroIndex - 1;
  renderHeroSection();
});

nextHeroBtn.addEventListener('click', () => {
  currentHeroIndex = (currentHeroIndex + 1) % featuredMovies.length;
  renderHeroSection();
});

// Auto slide for hero section
setInterval(() => {
  currentHeroIndex = (currentHeroIndex + 1) % featuredMovies.length;
  renderHeroSection();
}, 5000);

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
