import { TaskCard } from "@/components/TaskCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  DollarSign, 
  Trophy, 
  ChartBarIncreasing,
  ListTodo,
  Coins,
  ClipboardList
} from "lucide-react";

const Earn = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Start Earning Today!
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Complete tasks and earn rewards. Reach $100 to withdraw your earnings.
          </p>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
            <DollarSign className="h-10 w-10 text-primary mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground">Total Earnings</h3>
              <p className="text-3xl font-bold">$15.00</p>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
            <ListTodo className="h-10 w-10 text-primary mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground">Active Tasks</h3>
              <p className="text-3xl font-bold">7</p>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
            <Coins className="h-10 w-10 text-primary mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground">Rewards Balance</h3>
              <p className="text-3xl font-bold">50 pts</p>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <ListTodo className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Tasks</h3>
            </div>
            <p className="text-muted-foreground mb-4">Complete simple tasks to earn quick rewards</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">5 available</span>
              <Button variant="outline" size="sm">View Tasks</Button>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Coins className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Staking</h3>
            </div>
            <p className="text-muted-foreground mb-4">Stake your earnings to earn passive income</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">10% APY</span>
              <Button variant="outline" size="sm">Start Staking</Button>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <ClipboardList className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Surveys</h3>
            </div>
            <p className="text-muted-foreground mb-4">Share your opinion and get rewarded</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">3 available</span>
              <Button variant="outline" size="sm">Take Survey</Button>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Your Progress</h2>
            <div className="flex items-center text-primary">
              <DollarSign className="h-5 w-5 mr-1" />
              <span className="font-bold">15.00</span>
              <span className="text-muted-foreground ml-1">/ $100.00</span>
            </div>
          </div>
          <Progress value={15} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">
            Complete more tasks to reach your withdrawal goal faster!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <DollarSign className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Total Earned</h3>
            <p className="text-2xl font-bold">$15.00</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <Trophy className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Tasks Completed</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <ChartBarIncreasing className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Current Level</h3>
            <p className="text-2xl font-bold">Bronze</p>
          </div>
        </div>

        {/* Available Tasks */}
        <h2 className="text-2xl font-bold mb-6">Available Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <TaskCard
            title="Quick Survey"
            reward="$0.50"
            timeEstimate="5 mins"
            difficulty="easy"
          />
          <TaskCard
            title="Watch Videos"
            reward="$0.25"
            timeEstimate="3 mins"
            difficulty="easy"
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
            title="Focus Group"
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

        {/* Premium Upgrade CTA */}
        <div className="bg-muted p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want to Earn More?
          </h3>
          <p className="text-muted-foreground mb-6">
            Upgrade to Premium to unlock high-paying tasks and earn up to 10x more!
          </p>
          <Button size="lg">
            Upgrade Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Earn;
