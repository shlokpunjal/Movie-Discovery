# Movie Discovery App

A React movie discovery ap, search any film, save your favorites, they persist across sessions.

Built in one day as part of learning React.

---

## What it does

- Search any movie via OMDB API
- ee IMDB ratings on every card
- Save favorites — persists on refresh via localStorage
- Featured picks on home screen (curated by me)

---

## Stack

- React + Vite
- React Router: multi-page navigation
- Context API: global favorites state
- OMDB API: live movie data
- Vanilla CSS

---

## What I learned building this

- Components, props, JSX
- useState + useEffect
- Fetching live API data (async/await)
- Lifting state up
- React Context for global state
- localStorage persistence
- Environment variables (keeping API keys safe)

---

## Credits

Learned React following [TechWithTim](https://www.youtube.com/@TechWithTim) on YouTube.
Swapped TMDB for [OMDB API](https://www.omdbapi.com/) since TMDB wasn't loading.

---

## Run locally

```bash
git clone https://github.com/shlokpunjal/Movie-Review
cd Movie-Review/front-end
npm install
```

Create a `.env` file:
```
VITE_OMDB_KEY=your_key_here
```

Get a free key at [omdbapi.com](https://omdbapi.com)

```bash
npm run dev
```