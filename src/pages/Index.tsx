import { Button } from "@/components/ui/button";
import { TaskCard } from "@/components/TaskCard";
import { HowItWorks } from "@/components/HowItWorks";
import { ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Earn Money by Completing Simple Tasks!
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Start earning today and unlock premium rewards to cash out faster.
            </p>
            <Button size="lg" variant="secondary" className="animate-float">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Tasks Preview Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Available Tasks</h2>
        
        {/* Example Progress */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Current Balance: $15</span>
            <span>Withdrawal Goal: $100</span>
          </div>
          <Progress value={15} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskCard
            title="Quick Survey"
            reward="$0.50"
            timeEstimate="5 mins"
            difficulty="easy"
          />
          <TaskCard
            title="Watch Videos"
            reward="$1"
            timeEstimate="15 mins"
            difficulty="medium"
          />
          <TaskCard
            title="Market Research"
            reward="$10"
            timeEstimate="20 mins"
            isPremium
            difficulty="hard"
          />
          <TaskCard
            title="App Testing"
            reward="$0.75"
            timeEstimate="10 mins"
            difficulty="medium"
          />
          <TaskCard
            title="Premium Survey"
            reward="$8"
            timeEstimate="15 mins"
            isPremium
            difficulty="hard"
          />
          <TaskCard
            title="Content Review"
            reward="$0.25"
            timeEstimate="3 mins"
            difficulty="easy"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">How do I earn money?</h3>
              <p className="text-muted-foreground">
                Complete simple tasks like surveys, watching videos, and testing apps. Each task has a specific reward amount, with premium tasks offering higher rewards!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">When can I withdraw my earnings?</h3>
              <p className="text-muted-foreground">
                You can withdraw your earnings once you reach $100. Premium members get access to higher-paying tasks and exclusive opportunities to reach the goal faster!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;