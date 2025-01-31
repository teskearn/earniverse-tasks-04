import { useState, useEffect } from "react";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VideoTaskProps {
  videoLinks: string[];
  reward: string;
}

export const VideoTask = ({ videoLinks, reward }: VideoTaskProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [isWatching, setIsWatching] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isWatching && timeLeft > 0 && !taskCompleted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTaskCompletion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWatching, timeLeft]);

  const handleTaskCompletion = () => {
    setTaskCompleted(true);
    setDialogOpen(false);
    toast({
      title: "Task Completed!",
      description: `You've earned ${reward} for completing this task!`,
    });
  };

  const handleVideoWatch = () => {
    if (!isWatching) {
      setIsWatching(true);
      toast({
        title: "Video started",
        description: "Watch for 3 minutes to earn rewards!",
      });
    }
  };

  const getRandomVideoIndex = (currentIndex: number, totalVideos: number) => {
    if (totalVideos <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * totalVideos);
    } while (newIndex === currentIndex);
    return newIndex;
  };

  const handleVideoEnd = () => {
    if (videoLinks && !taskCompleted) {
      const newIndex = getRandomVideoIndex(currentVideoIndex, videoLinks.length);
      setCurrentVideoIndex(newIndex);
      handleVideoWatch();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          className="w-full text-xs sm:text-sm" 
          size="sm"
          disabled={taskCompleted}
        >
          <Video className="mr-2 h-4 w-4" />
          {taskCompleted ? "Task Completed" : "Watch Videos"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Watch Video to Earn Rewards</DialogTitle>
          <DialogDescription>
            Watch the video for 3 minutes to earn your reward. Videos will play randomly.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 p-4">
          {isWatching && !taskCompleted && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Time Remaining:</span>
                <span>{formatTime(timeLeft)}</span>
              </div>
              <Progress value={(180 - timeLeft) / 180 * 100} />
            </div>
          )}
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`${videoLinks[currentVideoIndex]}&autoplay=1`}
                title={`Video ${currentVideoIndex + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
                onEnded={handleVideoEnd}
                onPlay={handleVideoWatch}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};