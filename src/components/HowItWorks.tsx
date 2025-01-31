import { ArrowRight, Trophy, DollarSign } from "lucide-react";

const steps = [
  {
    title: "Complete Tasks",
    description: "Start with simple tasks and surveys",
    icon: ArrowRight,
  },
  {
    title: "Earn Rewards",
    description: "Accumulate earnings with each task",
    icon: Trophy,
  },
  {
    title: "Cash Out",
    description: "Withdraw when you reach $100",
    icon: DollarSign,
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-12 sm:py-16 bg-muted">
      <div className="container px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <step.icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};