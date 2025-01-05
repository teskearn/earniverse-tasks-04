import { Navigation } from "@/components/Navigation";
import { TasksSection } from "@/components/TasksSection";
import { RewardsProgress } from "@/components/RewardsProgress";
import { getRandomTasks } from "@/utils/taskData";

const Index = () => {
  const featuredTasks = getRandomTasks("free", 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold animate-fade-in">Welcome to Task Rewards</h1>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Complete tasks, earn rewards, and withdraw your earnings!
          </p>
          
          <RewardsProgress />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold animate-fade-in">Featured Tasks</h2>
            <TasksSection tasks={featuredTasks} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;