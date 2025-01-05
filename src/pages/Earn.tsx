import { TaskCard } from "@/components/TaskCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { 
  ArrowRight, 
  DollarSign, 
  Trophy, 
  ChartBarIncreasing,
  ListTodo,
  Coins,
  ClipboardList
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Earn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
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

      <section className="container mx-auto px-4 py-8">
        {/* Dashboard Overview */}
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
              <h3 className="text-lg font-semibold text-muted-foreground">Tasks Completed</h3>
              <p className="text-3xl font-bold">23/50</p>
              <p className="text-sm text-muted-foreground">to unlock premium</p>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
            <Trophy className="h-10 w-10 text-primary mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground">Current Streak</h3>
              <p className="text-3xl font-bold">4 days</p>
            </div>
          </div>
        </div>

        {/* Tasks Section */}
        <Tabs defaultValue="free" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="free">Free Tasks</TabsTrigger>
            <TabsTrigger value="premium">Premium Tasks</TabsTrigger>
            <TabsTrigger value="milestone">Milestones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="free">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TaskCard
                title="Watch Videos"
                description="Watch short videos to earn rewards"
                reward="$0.05"
                timeEstimate="2-3 mins"
                limit="10 videos/day"
                category="free"
              />
              <TaskCard
                title="Quick Surveys"
                description="Complete short surveys"
                reward="$0.10"
                timeEstimate="2-3 mins"
                category="free"
              />
              <TaskCard
                title="Daily Check-in"
                description="Log in daily to earn rewards"
                reward="$0.01"
                timeEstimate="1 min"
                category="free"
              />
              <TaskCard
                title="Read Articles"
                description="Read and engage with articles"
                reward="$0.02"
                timeEstimate="5 mins"
                limit="5 articles/day"
                category="free"
              />
              <TaskCard
                title="Social Media Tasks"
                description="Follow and engage with social media"
                reward="$0.05"
                timeEstimate="1 min"
                category="free"
              />
              <TaskCard
                title="Refer Friends"
                description="Earn when referred users complete tasks"
                reward="$0.50"
                timeEstimate="Varies"
                category="free"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="premium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TaskCard
                title="Product Reviews"
                description="Write detailed product reviews"
                reward="$2.00"
                timeEstimate="15-20 mins"
                category="premium"
                isPremium
                isLocked
              />
              <TaskCard
                title="App Testing"
                description="Test and review mobile applications"
                reward="$1.50"
                timeEstimate="30 mins"
                category="premium"
                isPremium
                isLocked
              />
              <TaskCard
                title="Affiliate Sign-ups"
                description="Sign up for partner services"
                reward="$3.00"
                timeEstimate="10 mins"
                category="premium"
                isPremium
                isLocked
              />
              <TaskCard
                title="Advanced Surveys"
                description="Complete detailed market research surveys"
                reward="$2.00"
                timeEstimate="10-15 mins"
                category="premium"
                isPremium
                isLocked
              />
              <TaskCard
                title="Content Creation"
                description="Create promotional content"
                reward="$5.00"
                timeEstimate="1-2 hours"
                category="premium"
                isPremium
                isLocked
              />
            </div>
          </TabsContent>
          
          <TabsContent value="milestone">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TaskCard
                title="Task Master"
                description="Complete 100 tasks of any type"
                reward="$1.00 bonus"
                timeEstimate="Ongoing"
                category="milestone"
              />
              <TaskCard
                title="Super Referrer"
                description="Refer 10 active users"
                reward="$10.00 bonus"
                timeEstimate="Ongoing"
                category="milestone"
              />
              <TaskCard
                title="Weekly Warrior"
                description="Maintain a 7-day login streak"
                reward="$1.00 bonus"
                timeEstimate="7 days"
                category="milestone"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Progress Section */}
        <div className="bg-card rounded-lg p-6 shadow-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Premium Tasks Progress</h2>
            <div className="flex items-center text-primary">
              <ListTodo className="h-5 w-5 mr-1" />
              <span className="font-bold">23</span>
              <span className="text-muted-foreground ml-1">/ 50 tasks</span>
            </div>
          </div>
          <Progress value={46} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">
            Complete {27} more free tasks to unlock premium tasks with higher rewards!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Earn;
