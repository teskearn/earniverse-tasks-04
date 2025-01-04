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
    <div className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};