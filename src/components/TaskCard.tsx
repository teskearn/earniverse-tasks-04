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
  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base sm:text-lg font-bold line-clamp-1">{title}</CardTitle>
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {category === "milestone" && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
              Milestone
            </Badge>
          )}
          {category === "premium" && (
            <Badge className="bg-secondary text-secondary-foreground text-xs">
              <Star className="mr-1 h-3 w-3" /> Premium
            </Badge>
          )}
          {isLocked && (
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="outline" className="text-yellow-600 text-xs">
                  <Lock className="mr-1 h-3 w-3" /> Locked
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                Complete 50 free tasks to unlock
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <DollarSign className="mr-1 h-3 sm:h-4 w-3 sm:w-4" />
            {reward}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 sm:h-4 w-3 sm:w-4" />
            {timeEstimate}
          </div>
          {limit && (
            <div className="flex items-center">
              <AlertCircle className="mr-1 h-3 sm:h-4 w-3 sm:w-4" />
              {limit}
            </div>
          )}
        </div>
        <Button 
          className="w-full text-xs sm:text-sm" 
          variant={isPremium ? "secondary" : "default"}
          disabled={isLocked}
          size="sm"
        >
          {isLocked ? (
            <>
              <Lock className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
              Locked
            </>
          ) : isPremium ? (
            <>
              <Star className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
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