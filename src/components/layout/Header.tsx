import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2" aria-label="VisionAIry home">
          <span className="font-display text-base md:text-lg">VisionAIry</span>
        </Link>

        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/#login" aria-label="Log in to VisionAIry">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/#signup" aria-label="Sign up for VisionAIry">Sign up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
