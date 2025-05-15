
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-movie-dark/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Film className="h-8 w-8 text-movie-primary" />
          <h1 className="text-xl font-bold">Reel Critic Picks</h1>
        </div>
        
        <div className="hidden md:flex md:w-1/3">
          <Input
            type="search"
            placeholder="Search movies..."
            className="border-gray-700 bg-gray-800"
          />
        </div>
        
        <nav>
          <ul className="flex items-center gap-4">
            <li className="hidden md:block">
              <Button variant="link">Home</Button>
            </li>
            <li className="hidden md:block">
              <Button variant="link">Top Rated</Button>
            </li>
            <li className="hidden md:block">
              <Button variant="link">New Releases</Button>
            </li>
            <li>
              <Button className="bg-movie-primary hover:bg-movie-secondary">
                Sign In
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
