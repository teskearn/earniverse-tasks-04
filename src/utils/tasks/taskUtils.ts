import { TaskType } from "../types/taskTypes";
import { freeTasks } from "./freeTasks";
import { premiumTasks } from "./premiumTasks";
import { milestoneTasks } from "./milestoneTasks";

export const getRandomTasks = (category: "free" | "premium" | "milestone", count: number = 3): TaskType[] => {
  const taskPool = 
    category === "free" ? freeTasks :
    category === "premium" ? premiumTasks :
    milestoneTasks;

  const shuffled = [...taskPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};