import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DollarSign, Clock, Star, Lock, AlertCircle, Instagram, Twitter, Send } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";

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
  socialLinks?: {
    instagram?: string[];
    twitter?: string[];
    telegram?: string[];
  };
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
  category,
  socialLinks
}: TaskCardProps) => {
  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
    toast({
      title: "Link opened",
      description: `Following ${platform} account will help you earn rewards!`,
    });
  };

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
        {socialLinks ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full text-xs sm:text-sm" size="sm">
                View Social Media Links
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Social Media Links</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 p-4">
                {socialLinks.instagram && socialLinks.instagram.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Instagram</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {socialLinks.instagram.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start text-xs"
                          onClick={() => handleSocialClick('Instagram', link)}
                        >
                          <Instagram className="mr-2 h-4 w-4" />
                          Follow Account {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {socialLinks.twitter && socialLinks.twitter.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Twitter</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {socialLinks.twitter.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start text-xs"
                          onClick={() => handleSocialClick('Twitter', link)}
                        >
                          <Twitter className="mr-2 h-4 w-4" />
                          Follow Account {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                {socialLinks.telegram && socialLinks.telegram.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Telegram</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {socialLinks.telegram.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start text-xs"
                          onClick={() => handleSocialClick('Telegram', link)}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Join Channel {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
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