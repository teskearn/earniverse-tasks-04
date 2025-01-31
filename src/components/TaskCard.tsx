import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, AlertCircle, Lock, Star } from "lucide-react";
import { VideoTask } from "./tasks/VideoTask";
import { SocialTask } from "./tasks/SocialTask";
import { ArticleTask } from "./tasks/ArticleTask";
import { TaskBadges } from "./tasks/TaskBadges";
import { TaskType } from "@/utils/taskData";

export const TaskCard = ({ 
  title, 
  reward, 
  timeEstimate, 
  isPremium = false,
  isLocked = false,
  description,
  limit,
  category,
  socialLinks,
  articleLinks,
  videoLinks
}: TaskType) => {
  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base sm:text-lg font-bold line-clamp-1">
          {title}
        </CardTitle>
        <TaskBadges category={category} isLocked={isLocked} />
      </CardHeader>
      <CardContent>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
          {description}
        </p>
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
        
        {videoLinks ? (
          <VideoTask videoLinks={videoLinks} reward={reward} />
        ) : socialLinks ? (
          <SocialTask socialLinks={socialLinks} />
        ) : articleLinks ? (
          <ArticleTask articleLinks={articleLinks} />
        ) : (
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
        )}
      </CardContent>
    </Card>
  );
};