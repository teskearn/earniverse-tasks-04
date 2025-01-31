import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WalletDashboard } from "@/components/WalletDashboard";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <section className="py-16 container bg-white shadow-lg rounded-lg my-8">
          <h2 className="text-3xl font-bold text-center mb-12">Your Wallet</h2>
          <div className="max-w-4xl mx-auto">
            <WalletDashboard />
          </div>
        </section>
        <LeaderboardSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;