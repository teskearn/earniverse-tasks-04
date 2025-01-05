import { Navigation } from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsSection } from "@/components/StatsSection";
import { TasksSection } from "@/components/TasksSection";
import { getRandomTasks } from "@/utils/taskData";
import { ListTodo } from "lucide-react";

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
        <StatsSection />

        <Tabs defaultValue="free" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="free">Free Tasks</TabsTrigger>
            <TabsTrigger value="premium">Premium Tasks</TabsTrigger>
            <TabsTrigger value="milestone">Milestones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="free">
            <TasksSection tasks={getRandomTasks("free", 6)} />
          </TabsContent>
          
          <TabsContent value="premium">
            <TasksSection tasks={getRandomTasks("premium", 5)} />
          </TabsContent>
          
          <TabsContent value="milestone">
            <TasksSection tasks={getRandomTasks("milestone", 3)} />
          </TabsContent>
        </Tabs>

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
            Complete 27 more free tasks to unlock premium tasks with higher rewards!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Earn;