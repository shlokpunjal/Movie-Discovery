const API_KEY = import.meta.env.VITE_OMDB_KEY
const BASE_URL = "https://www.omdbapi.com"

export const searchMovies = async (query) => {
    const response = await fetch (
        `${BASE_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
    )

    const data = await response.json()
    if(data.response === "False") return []
    
    return data.Search || []
}

export const getMovieDetails = async(imdbID) => {
    const response = await fetch (
        `${BASE_URL}/?i=${imdbID}&apikey=${API_KEY}`
    )

    const data = await response.json()
    return data
}

export const getFeaturedMovies = async() => {
    const ids = [
        "tt0816692", "tt1375666", "tt8178634", 
        "tt1877830", "tt0371746",  "tt15398776", 
        "tt4849438", "tt0145487", "tt9389998", "tt0241527"
    ]

    const movies = await Promise.all(
        ids.map(getMovieDetails)
    )

    return movies
}