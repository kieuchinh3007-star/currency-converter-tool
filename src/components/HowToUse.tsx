import { CheckCircle2 } from "lucide-react";

const steps = [
  "Select your base currency ('Currency From').",
  "Choose the currency you want to convert to ('Currency To').",
  "Enter the amount you want to convert.",
  "Click 'Convert' to get the real-time result instantly.",
];

const HowToUse = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-center">
            How to Use the Currency Converter
          </h2>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-light-bg rounded-xl border border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-sky-blue flex-shrink-0 mt-1" />
              <p className="text-foreground">
                The tool fetches the latest exchange rate automatically and displays your total in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;