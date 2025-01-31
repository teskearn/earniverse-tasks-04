import { CheckCircle, Star, Shield, TrendingUp } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <CheckCircle className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy to Start</h3>
            <p className="text-muted-foreground">Free tasks that anyone can complete</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <Star className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Earn More</h3>
            <p className="text-muted-foreground">Unlock premium tasks for higher payouts</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <Shield className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">Withdrawals directly to your account</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progression</h3>
            <p className="text-muted-foreground">Level up and unlock more opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};