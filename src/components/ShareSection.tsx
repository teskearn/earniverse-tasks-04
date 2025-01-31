import { Copy, Facebook, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export const ShareSection = () => {
  const referralCode = ""; // Will be populated from user's profile
  const referralLink = `https://earniverse.com/signup?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const shareViaEmail = () => {
    const subject = "Join Earniverse - Earn rewards together!";
    const body = `Hey! I thought you might be interested in joining Earniverse. Use my referral link to get started: ${referralLink}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareViaFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`, '_blank');
  };

  const shareViaTwitter = () => {
    const text = "Join me on Earniverse and start earning rewards! Use my referral link:";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(referralLink)}`, '_blank');
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg space-y-4">
      <h3 className="text-lg font-semibold mb-4">Share Your Referral Link</h3>
      
      <div className="flex flex-col sm:flex-row items-center gap-2 p-3 bg-muted rounded-lg">
        <code className="flex-1 text-sm break-all">{referralLink}</code>
        <Button variant="secondary" size="sm" onClick={copyToClipboard}>
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        <Button variant="outline" size="sm" onClick={shareViaEmail}>
          <Mail className="h-4 w-4 mr-2" />
          Email
        </Button>
        <Button variant="outline" size="sm" onClick={shareViaFacebook}>
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        <Button variant="outline" size="sm" onClick={shareViaTwitter}>
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>
      </div>
    </div>
  );
};