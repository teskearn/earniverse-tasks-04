export const TestimonialsSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="italic mb-4">
              "I cashed out $100 in just two weeks! Premium tasks were a game changer."
            </p>
            <p className="font-semibold">- Sarah J.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="italic mb-4">
              "The tasks are simple, and the rewards are real. Highly recommend this platform!"
            </p>
            <p className="font-semibold">- Mike D.</p>
          </div>
        </div>
      </div>
    </section>
  );
};