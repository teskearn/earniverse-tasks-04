export type TaskType = {
  title: string;
  description: string;
  reward: string;
  timeEstimate: string;
  category: "free" | "premium" | "milestone";
  isPremium?: boolean;
  isLocked?: boolean;
  limit?: string;
};

export const freeTasks: TaskType[] = [
  {
    title: "Watch Videos",
    description: "Watch short videos to earn rewards",
    reward: "$0.05",
    timeEstimate: "2-3 mins",
    limit: "10 videos/day",
    category: "free"
  },
  {
    title: "Quick Surveys",
    description: "Complete short surveys",
    reward: "$0.10",
    timeEstimate: "2-3 mins",
    category: "free"
  },
  {
    title: "Daily Check-in",
    description: "Log in daily to earn rewards",
    reward: "$0.01",
    timeEstimate: "1 min",
    category: "free"
  },
  {
    title: "Read Articles",
    description: "Read and engage with articles",
    reward: "$0.02",
    timeEstimate: "5 mins",
    limit: "5 articles/day",
    category: "free"
  },
  {
    title: "Social Media Tasks",
    description: "Follow and engage with social media",
    reward: "$0.05",
    timeEstimate: "1 min",
    category: "free"
  }
];

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

export const milestoneTasks: TaskType[] = [
  {
    title: "Task Master",
    description: "Complete 100 tasks of any type",
    reward: "$1.00 bonus",
    timeEstimate: "Ongoing",
    category: "milestone"
  },
  {
    title: "Super Referrer",
    description: "Refer 10 active users",
    reward: "$10.00 bonus",
    timeEstimate: "Ongoing",
    category: "milestone"
  },
  {
    title: "Weekly Warrior",
    description: "Maintain a 7-day login streak",
    reward: "$1.00 bonus",
    timeEstimate: "7 days",
    category: "milestone"
  }
];

export const getRandomTasks = (category: "free" | "premium" | "milestone", count: number = 3): TaskType[] => {
  const taskPool = 
    category === "free" ? freeTasks :
    category === "premium" ? premiumTasks :
    milestoneTasks;

  const shuffled = [...taskPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};