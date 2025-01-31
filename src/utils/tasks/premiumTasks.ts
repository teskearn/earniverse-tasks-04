import { TaskType } from "../types/taskTypes";

export const premiumTasks: TaskType[] = [
  {
    title: "Product Reviews",
    description: "Write detailed product reviews",
    reward: "$2.00",
    timeEstimate: "15-20 mins",
    category: "premium",
    isPremium: true,
    isLocked: true
  },
  {
    title: "App Testing",
    description: "Test and review mobile applications",
    reward: "$1.50",
    timeEstimate: "30 mins",
    category: "premium",
    isPremium: true,
    isLocked: true
  },
  {
    title: "Affiliate Sign-ups",
    description: "Sign up for partner services",
    reward: "$3.00",
    timeEstimate: "10 mins",
    category: "premium",
    isPremium: true,
    isLocked: true
  }
];