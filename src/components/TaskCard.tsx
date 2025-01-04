import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Star, Lock } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

interface TaskCardProps {
  title: string;
  reward: string;
  timeEstimate: string;
  isPremium?: boolean;
  difficulty?: "easy" | "medium" | "hard";
}

export const TaskCard = ({ 
  title, 
  reward, 
  timeEstimate, 
  isPremium = false,
  difficulty = "easy" 
}: TaskCardProps) => {
  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <div className="flex items-center gap-2">
          {difficulty === "hard" && (
            <Badge variant="outline" className="text-yellow-600">
              Advanced
            </Badge>
          )}
          {isPremium && (
            <Badge className="bg-secondary text-secondary-foreground">
              <Star className="mr-1 h-3 w-3" /> Premium
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <DollarSign className="mr-1 h-4 w-4" />
            {reward}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {timeEstimate}
          </div>
        </div>
        <Button 
          className="mt-4 w-full" 
          variant={isPremium ? "secondary" : "default"}
        >
          {isPremium ? (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Unlock Task
            </>
          ) : (
            "Start Task"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};