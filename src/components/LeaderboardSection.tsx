import { Trophy, Award } from "lucide-react";

interface LeaderboardEntry {
  username: string;
  earnings: number;
  tasks: number;
}

export const LeaderboardSection = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { username: "Sarah J.", earnings: 250, tasks: 45 },
    { username: "Mike D.", earnings: 200, tasks: 38 },
    { username: "Alex R.", earnings: 180, tasks: 35 },
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <h2 className="text-3xl font-bold text-center">Top Earners</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {leaderboardData.map((user, index) => (
            <div
              key={user.username}
              className="flex items-center justify-between p-4 bg-card rounded-lg mb-4 animate-fade-in hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  {index === 0 ? (
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Award className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{user.username}</p>
                  <p className="text-sm text-muted-foreground">{user.tasks} tasks completed</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">${user.earnings}</p>
                <p className="text-sm text-muted-foreground">earned</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};