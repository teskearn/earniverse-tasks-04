import { DollarSign, ListTodo, Trophy } from "lucide-react";

export const StatsSection = () => {
  // In a real app, these would come from your backend
  const taskEarnings = 15.00;
  const referralEarnings = 15.00;
  const totalEarnings = taskEarnings + referralEarnings;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg flex items-start">
        <DollarSign className="h-8 sm:h-10 w-8 sm:w-10 text-primary mr-3 sm:mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-muted-foreground">Total Earnings</h3>
          <p className="text-2xl sm:text-3xl font-bold">${totalEarnings.toFixed(2)}</p>
          <div className="text-xs sm:text-sm text-muted-foreground">
            <span>Tasks: ${taskEarnings.toFixed(2)}</span>
            <span className="mx-2">•</span>
            <span>Referrals: ${referralEarnings.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg flex items-start">
        <ListTodo className="h-8 sm:h-10 w-8 sm:w-10 text-primary mr-3 sm:mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-muted-foreground">Tasks Completed</h3>
          <p className="text-2xl sm:text-3xl font-bold">23/50</p>
          <p className="text-xs sm:text-sm text-muted-foreground">to unlock premium</p>
        </div>
      </div>
      <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg flex items-start sm:col-span-2 lg:col-span-1">
        <Trophy className="h-8 sm:h-10 w-8 sm:w-10 text-primary mr-3 sm:mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-muted-foreground">Current Streak</h3>
          <p className="text-2xl sm:text-3xl font-bold">4 days</p>
        </div>
      </div>
    </div>
  );
};