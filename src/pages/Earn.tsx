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
      <section className="bg-primary text-white py-8 sm:py-12 mb-6 sm:mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Start Earning Today!
          </h1>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/90">
            Complete tasks and earn rewards. Track your earnings and withdraw when ready.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 space-y-8 sm:space-y-12">
        {/* Stats Section */}
        <div className="mb-8 sm:mb-12">
          <StatsSection />
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-8 sm:mb-12">
          <Tabs defaultValue="wallet" className="mb-6 sm:mb-8">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 mb-6 sm:mb-8">
              <TabsTrigger value="wallet" className="text-sm sm:text-base">Wallet</TabsTrigger>
              <TabsTrigger value="free" className="text-sm sm:text-base">Free Tasks</TabsTrigger>
              <TabsTrigger value="premium" className="text-sm sm:text-base">Premium Tasks</TabsTrigger>
              <TabsTrigger value="milestone" className="text-sm sm:text-base">Milestones</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wallet" className="mt-4 sm:mt-6">
              <WalletDashboard />
            </TabsContent>
            
            <TabsContent value="free" className="mt-4 sm:mt-6">
              <TasksSection tasks={getRandomTasks("free", 6)} />
            </TabsContent>
            
            <TabsContent value="premium" className="mt-4 sm:mt-6">
              <TasksSection tasks={getRandomTasks("premium", 5)} />
            </TabsContent>
            
            <TabsContent value="milestone" className="mt-4 sm:mt-6">
              <TasksSection tasks={getRandomTasks("milestone", 3)} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Progress Section */}
        <div className="bg-card rounded-lg p-4 sm:p-8 shadow-lg mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl font-semibold">Premium Tasks Progress</h2>
            <div className="flex items-center text-primary">
              <ListTodo className="h-4 sm:h-5 w-4 sm:w-5 mr-1" />
              <span className="font-bold">23</span>
              <span className="text-muted-foreground ml-1">/ 50 tasks</span>
            </div>
          </div>
          <Progress value={46} className="h-2 mb-3 sm:mb-4" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Complete 27 more free tasks to unlock premium tasks with higher rewards!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Earn;