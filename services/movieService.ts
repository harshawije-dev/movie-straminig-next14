import { listUpcomingMovies } from "@/endpoints/API/listMoviesAsync";

export async function getAllGenres() {
    try {
        return listUpcomingMovies();
    } catch (error) {
        return error;
    }
}