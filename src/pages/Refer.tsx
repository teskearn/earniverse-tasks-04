import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Refer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Refer a Friend</h1>
            <p className="text-lg mb-6">
              Share the love and earn rewards for every friend you refer!
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            For every friend that signs up using your referral link, you will earn a bonus once they complete their first task.
          </p>
          <p className="mb-4">
            Share your unique referral link below and start earning!
          </p>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Your Referral Link</h3>
            <input
              type="text"
              value="https://earniverse.com/referral/your-unique-link"
              readOnly
              className="border border-muted-foreground rounded-md p-2 w-full"
            />
            <Button className="mt-4" onClick={() => navigator.clipboard.writeText("https://earniverse.com/referral/your-unique-link")}>
              Copy Link
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Refer;
