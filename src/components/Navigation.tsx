import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing in",
        description: error.message,
      });
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    } else {
      toast({
        title: "Signed out successfully",
      });
    }
  };

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
          <div className="hidden md:flex items-center space-x-4">
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
            <Button
              variant="outline"
              size="sm"
              className="ml-4"
              onClick={handleSignIn}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
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
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleSignIn}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};