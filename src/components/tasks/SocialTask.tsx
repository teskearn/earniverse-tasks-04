import { Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SocialTaskProps {
  socialLinks: {
    instagram?: string[];
    twitter?: string[];
    telegram?: string[];
  };
}

export const SocialTask = ({ socialLinks }: SocialTaskProps) => {
  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
    toast({
      title: "Link opened",
      description: `Following ${platform} account will help you earn rewards!`,
    });
  };

  return (
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
  );
};