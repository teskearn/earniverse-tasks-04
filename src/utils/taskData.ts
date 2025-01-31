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
    category: "free",
    articleLinks: [
      "https://www.teachermagazine.com/sea_en/articles/a-student-diary-project-improving-literacy-skills-and-wellbeing",
      "https://the-magazine.org/36/ramen-fever/index.html",
      "https://the-magazine.org/34/new-disruptors-56-and-57/index.html",
      "https://the-magazine.org/33/unipiper/index.html"
    ]
  },
  {
    title: "Social Media Tasks",
    description: "Follow and engage with our partner social media accounts to earn rewards. Complete all follows for maximum earnings!",
    reward: "$0.05",
    timeEstimate: "5-10 mins",
    category: "free",
    socialLinks: {
      instagram: [
        "https://www.instagram.com/gameplugug",
        "https://www.instagram.com/sailyworld",
        "https://www.instagram.com/centonomyig",
        "https://www.instagram.com/theee_watchplug",
        "https://www.instagram.com/middleeastresturant",
        "https://www.instagram.com/numeroglobal",
        "https://www.instagram.com/vibaeofficial",
        "https://www.instagram.com/kcbbankug",
        "https://www.instagram.com/homart_group_uganda",
        "https://www.instagram.com/nyemba.natasha",
        "https://www.instagram.com/goldinvestpro",
        "https://www.instagram.com/ms_sassy19",
        "https://www.instagram.com/pesh_love",
        "https://www.instagram.com/jacquejaris",
        "https://www.instagram.com/hands_of_hope__uganda",
        "https://www.instagram.com/bloomingtrendzz",
        "https://www.instagram.com/speke_apartments_wampewo",
        "https://www.instagram.com/centonomyig"
      ],
      twitter: [
        "https://x.com/SGabardi1111",
        "https://x.com/DeribitExchange",
        "https://x.com/Ian_ifb"
      ],
      telegram: [
        "https://t.me/roticuganda",
        "https://t.me/eroticuganda"
      ]
    }
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
