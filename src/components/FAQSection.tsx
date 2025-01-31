export const FAQSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">How do I earn money?</h3>
            <p className="text-muted-foreground">
              Complete simple tasks like surveys, watching videos, and testing apps. Each task has a specific reward amount, with premium tasks offering higher rewards!
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-2">When can I withdraw my earnings?</h3>
            <p className="text-muted-foreground">
              You can withdraw your earnings once you reach $100. Premium members get access to higher-paying tasks and exclusive opportunities to reach the goal faster!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};