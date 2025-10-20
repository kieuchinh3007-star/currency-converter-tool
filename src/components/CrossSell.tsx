import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, DollarSign, Percent, Package, Calendar, RefreshCw } from "lucide-react";

const apps = [
  {
    name: "SyncTrack – Auto Track Order",
    icon: Package,
    description: "Automatically sync and track orders from multiple carriers. Keep customers informed with real-time updates.",
    link: "https://apps.shopify.com/synctrack",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Estimated Shipping Date",
    icon: Calendar,
    description: "Show accurate delivery estimates on product pages to build trust and boost conversions.",
    link: "https://apps.shopify.com/omega-estimated-shipping-date",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Omega Returns Drive",
    icon: RefreshCw,
    description: "Simplify your return process and increase customer satisfaction with an easy self-service return portal.",
    link: "https://apps.shopify.com/omega-returns-drive",
    color: "from-purple-500 to-purple-600"
  }
];

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
      {/* Our Apps Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Our Apps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful Shopify apps to grow your e-commerce business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {apps.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border-2 border-border hover:border-sky-blue transition-all duration-300 hover:shadow-lg group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-sky-blue transition-colors">
                    {app.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {app.description}
                  </p>
                  
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-blue font-semibold hover:gap-3 transition-all"
                  >
                    View App
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
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