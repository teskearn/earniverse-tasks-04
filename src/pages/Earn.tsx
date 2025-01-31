import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsSection } from "@/components/StatsSection";
import { TasksSection } from "@/components/TasksSection";
import { WalletDashboard } from "@/components/WalletDashboard";
import { getRandomTasks } from "@/utils/taskData";
import { ListTodo } from "lucide-react";

const Earn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Start Earning Today!
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Complete tasks and earn rewards. Track your earnings and withdraw when ready.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 space-y-12">
        {/* Stats Section */}
        <div className="mb-12">
          <StatsSection />
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <Tabs defaultValue="wallet" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
              <TabsTrigger value="free">Free Tasks</TabsTrigger>
              <TabsTrigger value="premium">Premium Tasks</TabsTrigger>
              <TabsTrigger value="milestone">Milestones</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wallet" className="mt-6">
              <WalletDashboard />
            </TabsContent>
            
            <TabsContent value="free" className="mt-6">
              <TasksSection tasks={getRandomTasks("free", 6)} />
            </TabsContent>
            
            <TabsContent value="premium" className="mt-6">
              <TasksSection tasks={getRandomTasks("premium", 5)} />
            </TabsContent>
            
            <TabsContent value="milestone" className="mt-6">
              <TasksSection tasks={getRandomTasks("milestone", 3)} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Progress Section */}
        <div className="bg-card rounded-lg p-8 shadow-lg mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Premium Tasks Progress</h2>
            <div className="flex items-center text-primary">
              <ListTodo className="h-5 w-5 mr-1" />
              <span className="font-bold">23</span>
              <span className="text-muted-foreground ml-1">/ 50 tasks</span>
            </div>
          </div>
          <Progress value={46} className="h-2 mb-4" />
          <p className="text-sm text-muted-foreground">
            Complete 27 more free tasks to unlock premium tasks with higher rewards!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Earn;