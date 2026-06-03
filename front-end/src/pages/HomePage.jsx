import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import "../css/HomePage.css"
import { getFeaturedMovies, searchMovies } from "../services/api"

function HomePage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    async function loadFeatured() {
        setLoading(true)
        const data = await getFeaturedMovies()
        setMovies(data)
        setLoading(false)
    }
    loadFeatured()
}, [])  

    const handleSearch = async (e) => {
        e.preventDefault()
        if (searchQuery.trim() === "") return
        setLoading(true)
        const results = await searchMovies(searchQuery)
        setMovies(results)
        setLoading(false)
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            {loading ? (
                <p className="loading">Loading...</p>
            ) : movies.length === 0 ? (
                <div className="no-movies">
                    <h2>No Movies Found!</h2>
                    <p>Please enter a valid name or type the full word</p>
                </div>
            ) : (
                <div className="movie-grid">
                    {movies.map(movie =>
                        <MovieCard movie={movie} key={movie.imdbID} />
                    )}
                </div>
            )}
        </div>
    )
}

export default HomePage