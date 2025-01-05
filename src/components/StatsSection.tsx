import { DollarSign, ListTodo, Trophy } from "lucide-react";

export const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
        <DollarSign className="h-10 w-10 text-primary mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-muted-foreground">Total Earnings</h3>
          <p className="text-3xl font-bold">$15.00</p>
        </div>
      </div>
      <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
        <ListTodo className="h-10 w-10 text-primary mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-muted-foreground">Tasks Completed</h3>
          <p className="text-3xl font-bold">23/50</p>
          <p className="text-sm text-muted-foreground">to unlock premium</p>
        </div>
      </div>
      <div className="bg-card p-6 rounded-lg shadow-lg flex items-start">
        <Trophy className="h-10 w-10 text-primary mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-muted-foreground">Current Streak</h3>
          <p className="text-3xl font-bold">4 days</p>
        </div>
      </div>
    </div>
  );
};