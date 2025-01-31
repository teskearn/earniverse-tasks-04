import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReferralDashboard } from "@/components/ReferralDashboard";
import { Shield, Gift, Trophy } from "lucide-react";

const Refer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Turn Connections into Cash!
              </h1>
              <p className="text-lg mb-6 text-white/90">
                Share Earniverse with your friends and earn 10% of their earnings forever!
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Share Your Link</h3>
                <p className="text-muted-foreground">
                  Share your unique referral link with friends to join our platform.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Friends Join & Earn</h3>
                <p className="text-muted-foreground">
                  They get a $3 bonus when they sign up and complete their first task.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Earn Together</h3>
                <p className="text-muted-foreground">
                  Get 10% of their earnings forever, plus bonus rewards for more referrals!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Dashboard */}
        <section className="py-8 sm:py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-8">Your Referral Progress</h2>
            <ReferralDashboard />
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">Safety First</h2>
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