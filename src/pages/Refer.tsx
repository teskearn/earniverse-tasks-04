import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Users, Link, Shield, Lock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Refer = () => {
  const { toast } = useToast();
  const referralLink = "https://example.com/ref/123456"; // This would be dynamic in a real app

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link copied!",
      description: "Referral link has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Invite Friends and Earn Together!
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Turn Connections into Cash
          </p>
          <p className="text-base md:text-lg mb-8">
            Why keep the rewards to yourself when you can share the earning potential with your friends? With our platform, inviting friends means everyone benefits!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <UserPlus className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Referrals</p>
                  <h3 className="text-2xl font-bold">0</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Users className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Friends</p>
                  <h3 className="text-2xl font-bold">0</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Link className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Earnings from Referrals</p>
                  <h3 className="text-2xl font-bold">$0.00</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral Link Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Referral Link</CardTitle>
            <CardDescription>
              Share this link with your friends to start earning rewards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="referral-link">Referral Link</Label>
                <Input
                  id="referral-link"
                  value={referralLink}
                  readOnly
                  className="bg-muted"
                />
              </div>
              <Button onClick={copyToClipboard} className="md:self-end">
                <Link className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* How It Works Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Refer a Friend</h3>
                <p className="text-sm text-muted-foreground">
                  Copy your unique referral code and share it with friends to join our referral program.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Friends Join and Earn</h3>
                <p className="text-sm text-muted-foreground">
                  Your friends will receive a $3 sign-up bonus when they register using your referral code.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Link className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Claim Your Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Every time your friends reach the $20 payout threshold, you'll earn $5!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Features Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ensuring Safety at Every Step</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Transparency First</h4>
                  <p className="text-sm text-muted-foreground">
                    We consistently communicate important updates with users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Data Protection Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    Your personal data is protected by industry regulations and robust security measures.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Trusted Business Partners</h4>
                  <p className="text-sm text-muted-foreground">
                    All partners are rigorously verified to ensure safety and reliability.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Zero Intrusions</h4>
                  <p className="text-sm text-muted-foreground">
                    The platform doesn't access personal data or ask for unnecessary permissions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Start Earning Effortlessly!</h2>
              <p className="text-muted-foreground mb-6">
                Invite your friends today and enjoy rewards together while making the most out of every connection.
              </p>
              <Button size="lg" onClick={copyToClipboard}>
                <UserPlus className="mr-2 h-5 w-5" />
                Refer a Friend Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Refer;