import { useMovieContext } from "../context/MovieContext"
import "../css/MovieCard.css"

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.imdbID)

  function favClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.imdbID)
    else addToFavorites(movie)
  }

  const rating = movie.imdbRating && movie.imdbRating !== "N/A"
    ? movie.imdbRating
    : null

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Poster"}
          alt={movie.Title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={favClick}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        {rating && (
          <p className="movie-rating">⭐ {rating} / 10</p>
        )}
      </div>
    </div>
  )
}

export default MovieCard
