import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export const RewardsProgress = () => {
  const currentEarnings = 15.00;
  const withdrawalThreshold = 100.00;
  const progress = (currentEarnings / withdrawalThreshold) * 100;

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          Earnings Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${currentEarnings.toFixed(2)} earned</span>
            <span>${withdrawalThreshold.toFixed(2)} needed to withdraw</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};