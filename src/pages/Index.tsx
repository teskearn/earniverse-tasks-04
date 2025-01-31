import { Button } from "@/components/ui/button";
import { TaskCard } from "@/components/TaskCard";
import { HowItWorks } from "@/components/HowItWorks";
import { ArrowRight, Star, CheckCircle, Shield, TrendingUp, Trophy, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WalletDashboard } from "@/components/WalletDashboard";

const Index = () => {
  const leaderboardData = [
    { username: "Sarah J.", earnings: 250, tasks: 45 },
    { username: "Mike D.", earnings: 200, tasks: 38 },
    { username: "Alex R.", earnings: 180, tasks: 35 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
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

        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy to Start</h3>
                <p className="text-muted-foreground">Free tasks that anyone can complete</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Star className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Earn More</h3>
                <p className="text-muted-foreground">Unlock premium tasks for higher payouts</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-muted-foreground">Withdrawals directly to your account</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Progression</h3>
                <p className="text-muted-foreground">Level up and unlock more opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Wallet Dashboard Section */}
        <section className="py-16 container bg-white shadow-lg rounded-lg my-8">
          <h2 className="text-3xl font-bold text-center mb-12">Your Wallet</h2>
          <div className="max-w-4xl mx-auto">
            <WalletDashboard />
          </div>
        </section>

        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">Available Tasks</h2>
          
          {/* Example Progress */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Current Balance: $15</span>
            <span>Withdrawal Goal: $100</span>
          </div>
          <Progress value={15} className="h-2" />
          <p className="text-sm text-center mt-2 text-muted-foreground">
            Complete more tasks to reach your withdrawal goal faster!
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskCard
            title="Quick Survey"
            reward="$0.50"
            timeEstimate="5 mins"
            difficulty="easy"
            category="free"
            description="Complete a short survey"
          />
          <TaskCard
            title="Watch Videos"
            reward="$0.25"
            timeEstimate="3 mins"
            difficulty="easy"
            category="free"
            description="Watch and rate videos"
          />
          <TaskCard
            title="Market Research"
            reward="$10"
            timeEstimate="20 mins"
            isPremium
            difficulty="hard"
            category="premium"
            description="Participate in market research"
          />
          <TaskCard
            title="App Testing"
            reward="$0.75"
            timeEstimate="10 mins"
            difficulty="medium"
            category="free"
            description="Test new applications"
          />
          <TaskCard
            title="Focus Group"
            reward="$8"
            timeEstimate="15 mins"
            isPremium
            difficulty="hard"
            category="premium"
            description="Join online focus groups"
          />
          <TaskCard
            title="Content Review"
            reward="$0.25"
            timeEstimate="3 mins"
            difficulty="easy"
            category="free"
            description="Review website content"
          />
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-center">Top Earners</h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              {leaderboardData.map((user, index) => (
                <div
                  key={user.username}
                  className="flex items-center justify-between p-4 bg-card rounded-lg mb-4 animate-fade-in hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      {index === 0 ? (
                        <Trophy className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Award className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{user.username}</p>
                      <p className="text-sm text-muted-foreground">{user.tasks} tasks completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${user.earnings}</p>
                    <p className="text-sm text-muted-foreground">earned</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "I cashed out $100 in just two weeks! Premium tasks were a game changer."
              </p>
              <p className="font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "The tasks are simple, and the rewards are real. Highly recommend this platform!"
              </p>
              <p className="font-semibold">- Mike D.</p>
            </div>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">How do I earn money?</h3>
              <p className="text-muted-foreground">
                Complete simple tasks like surveys, watching videos, and testing apps. Each task has a specific reward amount, with premium tasks offering higher rewards!
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">When can I withdraw my earnings?</h3>
              <p className="text-muted-foreground">
                You can withdraw your earnings once you reach $100. Premium members get access to higher-paying tasks and exclusive opportunities to reach the goal faster!
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
