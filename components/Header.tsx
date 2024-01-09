import GenreDropdown from "@/components/GenreDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <div className="flex flex-row items-center h-20 px-5 gap-3 sticky top-1">
      <div className="flex flex-1">
        <h2>Disney Plus</h2>
      </div>
      <div className="flex items-center flex-row space-x-4">
        <GenreDropdown />
        <Input type="search" className="px-5" />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
