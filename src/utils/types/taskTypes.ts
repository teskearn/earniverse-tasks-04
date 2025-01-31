export type TaskType = {
  title: string;
  description: string;
  reward: string;
  timeEstimate: string;
  category: "free" | "premium" | "milestone";
  isPremium?: boolean;
  isLocked?: boolean;
  limit?: string;
  socialLinks?: {
    instagram?: string[];
    twitter?: string[];
    telegram?: string[];
  };
  articleLinks?: string[];
  videoLinks?: string[];
};