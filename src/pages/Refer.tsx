import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ReferralDashboard } from "@/components/ReferralDashboard";
import { Share2, Shield, Gift, Trophy } from "lucide-react";

const Refer = () => {
  const referralCode = "USER123"; // In a real app, this would come from the user's profile

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Turn Connections into Cash!
              </h1>
              <p className="text-lg mb-6 text-white/90">
                Share the earning potential with your friends. When they succeed, you earn rewards!
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm mb-2">Your Referral Code</p>
                <div className="flex items-center justify-center gap-2">
                  <code className="bg-white/20 px-4 py-2 rounded text-lg font-mono">
                    {referralCode}
                  </code>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(referralCode)}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Share Your Code</h3>
                <p className="text-muted-foreground">
                  Share your unique referral code with friends to join our platform.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Friends Join & Earn</h3>
                <p className="text-muted-foreground">
                  They get a $3 bonus when they sign up and complete their first task.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Earn Together</h3>
                <p className="text-muted-foreground">
                  Get $5 when they reach their first $20 payout threshold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Dashboard */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Your Referral Progress</h2>
            <ReferralDashboard />
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Safety First</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Data Protection</h3>
                  <p className="text-muted-foreground">
                    Your personal data is protected by industry regulations and robust security measures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Transparent Rewards</h3>
                  <p className="text-muted-foreground">
                    Clear tracking of referrals and rewards, with no hidden conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Refer;