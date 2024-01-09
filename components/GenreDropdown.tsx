import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

async function GenreDropdown() {
  // URL
  const url = "https://api.themoviedb.org/3/genre/movie/list";
  // API Header
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    // Caching 24 hours
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  // response
  const response = await fetch(url, options);
  const { genres } = (await response.json()) as Genres;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="capitalize flex gap-3.5 items-center">
          genre
          <ChevronDown size={15}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="capitalize">
            select genre
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {genres.map((genre) => {
            return (
              <DropdownMenuItem className="capitalize" key={genre.id}>
                {genre.name}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default GenreDropdown;
