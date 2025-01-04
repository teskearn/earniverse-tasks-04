import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Earniverse
          </Link>
          
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  );
};