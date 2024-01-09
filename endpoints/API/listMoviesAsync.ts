async function fetchData(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("page", "1");

  // API Header
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    // Caching 24 hours
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const list = await response.json() as SearchResults;

  return list;
}


export async function listUpcomingMovies() {
  // get the url 
  const url = 'https://api.themoviedb.org/3/movie/upcoming';
  // pass the url to parent function
  const data = await fetchData(new URL(url));
  // return data
  return data.results;
}

export async function listTopRatedMovies() {

}

export async function listPopularMovies() {

}

