type Genre = {
    id: number,
    name: String
}

type Genres = {
    genres: Genre[]
}

type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type SearchResults = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}