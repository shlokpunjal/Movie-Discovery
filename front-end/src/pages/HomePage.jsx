import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/HomePage.css"

function HomePage() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "Iron Man", release_date: 2008 },
        { id: 2, title: "Interstellar", release_date: 2014 },
        { id: 3, title: "Bahubali 2", release_date: 2017 }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
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

            <div className="movie-grid">
                {movies.map(
                    movie =>
                        <MovieCard movie={movie} key={movie.id} />
                )}
            </div>
        </div>
    )
}

export default HomePage