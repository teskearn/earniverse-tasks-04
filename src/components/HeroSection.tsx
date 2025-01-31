import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Turn Spare Time Into Real Cash!
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of users earning up to $100 per withdrawal. Start with free tasks and unlock premium rewards!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-float">
              Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-200 shadow-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};