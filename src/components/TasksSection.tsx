import { TaskCard } from "@/components/TaskCard";
import { TaskType } from "@/utils/taskData";

interface TasksSectionProps {
  tasks: TaskType[];
}

export const TasksSection = ({ tasks }: TasksSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task, index) => (
        <TaskCard key={`${task.title}-${index}`} {...task} />
      ))}
    </div>
  );
};