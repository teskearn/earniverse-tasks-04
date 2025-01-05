import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Star, Lock, AlertCircle } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

interface TaskCardProps {
  title: string;
  reward: string;
  timeEstimate: string;
  isPremium?: boolean;
  isLocked?: boolean;
  difficulty?: "easy" | "medium" | "hard";
  description?: string;
  limit?: string;
  category: "free" | "premium" | "milestone";
}

export const TaskCard = ({ 
  title, 
  reward, 
  timeEstimate, 
  isPremium = false,
  isLocked = false,
  difficulty = "easy",
  description,
  limit,
  category
}: TaskCardProps) => {
  const { toast } = useToast();

  const handleStartTask = () => {
    if (isLocked) {
      toast({
        title: "Task Locked",
        description: "Complete more free tasks to unlock premium content!",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Task Started",
      description: `Starting task: ${title}`,
    });
  };

  return (
    <Card className="w-full transition-all hover:shadow-lg hover:scale-105 duration-300 animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <div className="flex items-center gap-2">
          {category === "milestone" && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 animate-pulse">
              Milestone
            </Badge>
          )}
          {category === "premium" && (
            <Badge className="bg-secondary text-secondary-foreground animate-float">
              <Star className="mr-1 h-3 w-3" /> Premium
            </Badge>
          )}
          {isLocked && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="text-yellow-600">
                    <Lock className="mr-1 h-3 w-3" /> Locked
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  Complete 50 free tasks to unlock
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center hover:text-primary transition-colors">
            <DollarSign className="mr-1 h-4 w-4" />
            {reward}
          </div>
          <div className="flex items-center hover:text-primary transition-colors">
            <Clock className="mr-1 h-4 w-4" />
            {timeEstimate}
          </div>
          {limit && (
            <div className="flex items-center hover:text-primary transition-colors">
              <AlertCircle className="mr-1 h-4 w-4" />
              {limit}
            </div>
          )}
        </div>
        <Button 
          className="mt-4 w-full transition-all hover:scale-105 active:scale-95" 
          variant={isPremium ? "secondary" : "default"}
          disabled={isLocked}
          onClick={handleStartTask}
        >
          {isLocked ? (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Locked
            </>
          ) : isPremium ? (
            <>
              <Star className="mr-2 h-4 w-4" />
              Start Premium Task
            </>
          ) : (
            "Start Task"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};