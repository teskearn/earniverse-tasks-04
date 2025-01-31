import { Star, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TaskBadgesProps {
  category: "free" | "premium" | "milestone";
  isLocked?: boolean;
}

export const TaskBadges = ({ category, isLocked }: TaskBadgesProps) => {
  return (
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
        <TooltipProvider>
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
        </TooltipProvider>
      )}
    </div>
  );
};