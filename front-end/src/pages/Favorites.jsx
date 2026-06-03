import "../css/Favorites.css"
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {
  const { favorites } = useMovieContext()

  if (favorites.length > 0) {
    return <>
      <h2 className="fav-heading">Your Favorites</h2>
      <div className="movie-grid">
        {favorites.map(movie =>
          <MovieCard movie={movie} key={movie.imdbID} />
        )}
      </div>
    </>
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorites yet</h2>
      <p>Start adding movies to your favorites, they'll appear here</p>
    </div>
  )
}

export default Favorites