import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, DollarSign, Percent } from "lucide-react";

const relatedTools = [
  {
    icon: Calculator,
    title: "Customer Lifetime Value Calculator",
    description: "Calculate the total value a customer brings to your business",
  },
  {
    icon: TrendingUp,
    title: "Break-even ROAS Calculator",
    description: "Find your minimum return on ad spend for profitability",
  },
  {
    icon: DollarSign,
    title: "Ad Spend Optimizer",
    description: "Optimize your advertising budget for maximum ROI",
  },
  {
    icon: Percent,
    title: "Profit Margin Checker",
    description: "Analyze your profit margins across products and services",
  },
];

const CrossSell = () => {
  return (
    <>
      {/* Synctrack App Promotion */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Boost Your Results with Synctrack App
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Simplify your eCommerce operations with Synctrack – the all-in-one solution for automated syncing, analytics, and growth tracking.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-background hover:bg-background/90 text-primary shadow-md"
              >
                Explore Synctrack App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 lg:py-24 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
              More Tools Like This
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tool.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Try Tool
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrossSell;