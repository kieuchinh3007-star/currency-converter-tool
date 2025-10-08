import { CheckCircle2, Lightbulb, Settings, TrendingUp, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Free & Accurate",
    description: "Free, accurate, and real-time exchange rates.",
  },
  {
    icon: Lightbulb,
    title: "150+ Currencies",
    description: "Supports 150+ currencies worldwide.",
  },
  {
    icon: Settings,
    title: "Easy to Use",
    description: "Easy-to-use interface — no signup required.",
  },
  {
    icon: TrendingUp,
    title: "Reliable Data",
    description: "Powered by reliable APIs for up-to-date data.",
  },
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Responsive & fast, works perfectly on mobile and desktop.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get conversion results in real-time, instantly.",
  },
];

const WhyUse = () => {
  return (
    <section className="py-16 lg:py-24 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
            Why Use Our Free Currency Converter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUse;