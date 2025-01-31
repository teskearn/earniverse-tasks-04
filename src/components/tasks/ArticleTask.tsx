import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ArticleTaskProps {
  articleLinks: string[];
}

export const ArticleTask = ({ articleLinks }: ArticleTaskProps) => {
  const handleArticleClick = (url: string) => {
    window.open(url, '_blank');
    toast({
      title: "Article opened",
      description: "Reading and engaging with the article will help you earn rewards!",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full text-xs sm:text-sm" size="sm">
          View Articles
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Available Articles</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-1 gap-2">
            {articleLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-xs"
                onClick={() => handleArticleClick(link)}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Read Article {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};