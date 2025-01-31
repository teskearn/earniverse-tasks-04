import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Earniverse
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/")
                  ? "bg-primary-foreground text-primary"
                  : "hover:bg-primary-foreground/10"
              )}
            >
              Home
            </Link>
            <Link
              to="/earn"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/earn")
                  ? "bg-primary-foreground text-primary"
                  : "hover:bg-primary-foreground/10"
              )}
            >
              Earn
            </Link>
            <Link
              to="/refer"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/refer")
                  ? "bg-primary-foreground text-primary"
                  : "hover:bg-primary-foreground/10"
              )}
            >
              Refer
            </Link>
            <Link
              to="/profile"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive("/profile")
                  ? "bg-primary-foreground text-primary"
                  : "hover:bg-primary-foreground/10"
              )}
            >
              Profile
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive("/")
                    ? "bg-primary-foreground text-primary"
                    : "hover:bg-primary-foreground/10"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/earn"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive("/earn")
                    ? "bg-primary-foreground text-primary"
                    : "hover:bg-primary-foreground/10"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Earn
              </Link>
              <Link
                to="/refer"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive("/refer")
                    ? "bg-primary-foreground text-primary"
                    : "hover:bg-primary-foreground/10"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Refer
              </Link>
              <Link
                to="/profile"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive("/profile")
                    ? "bg-primary-foreground text-primary"
                    : "hover:bg-primary-foreground/10"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};