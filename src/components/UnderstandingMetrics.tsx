const UnderstandingMetrics = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
            Understanding Currency Conversion Metrics
          </h2>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Exchange Rate
              </h3>
              <p className="text-foreground mb-2">
                The value of one currency in terms of another.
              </p>
              <div className="bg-light-bg p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Example:</strong> 1 USD = 0.92 EUR
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Amount
              </h3>
              <p className="text-foreground mb-2">
                The quantity you wish to convert.
              </p>
              <div className="bg-light-bg p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Example:</strong> $100
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Total
              </h3>
              <p className="text-foreground mb-2">
                Final converted value = Exchange Rate × Amount
              </p>
              <div className="bg-light-bg p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Example:</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  If 1 USD = 0.92 EUR and you enter 100 USD,
                  <br />
                  → Total = 100 × 0.92 = <strong className="text-primary">92 EUR</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingMetrics;