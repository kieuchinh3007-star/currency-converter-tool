import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const popularCurrencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
];

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency || !amount) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields before proceeding.",
        variant: "destructive",
      });
      return;
    }

    if (parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Amount must be greater than zero.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      
      if (data.result) {
        setResult(data.result);
        toast({
          title: "Conversion Successful",
          description: "Exchange rate data updated in real-time.",
        });
      } else {
        throw new Error('Invalid response from API');
      }
    } catch (error) {
      toast({
        title: "Conversion Failed",
        description: "Unable to fetch exchange rates. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFromCurrency("");
    setToCurrency("");
    setAmount("");
    setResult(null);
  };

  return (
    <section id="converter-tool" className="py-16 lg:py-24 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Currency Converter Tool
            </h2>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from-currency" className="text-foreground font-medium">
                    Currency From <span className="text-destructive">*</span>
                  </Label>
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger id="from-currency" className="bg-background">
                      <SelectValue placeholder="Select base currency (e.g. USD)" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {popularCurrencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Currency to convert from</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to-currency" className="text-foreground font-medium">
                    Currency To <span className="text-destructive">*</span>
                  </Label>
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger id="to-currency" className="bg-background">
                      <SelectValue placeholder="Select target currency (e.g. EUR)" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {popularCurrencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Currency to convert to</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-foreground font-medium">
                  Amount <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount (e.g. 100)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-background"
                  min="0"
                  step="0.01"
                />
                <p className="text-xs text-muted-foreground">Amount in base currency</p>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleConvert}
                  disabled={loading}
                  className="flex-1 gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    <>
                      <DollarSign className="mr-2 h-5 w-5" />
                      Convert
                    </>
                  )}
                </Button>
                
                {result !== null && (
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="border-2"
                  >
                    Convert Again
                  </Button>
                )}
              </div>

              {result !== null && (
                <div className="mt-8 p-6 bg-light-bg rounded-xl border-2 border-sky-blue">
                  <div className="flex items-center justify-center gap-3">
                    <DollarSign className="h-8 w-8 text-sky-blue" />
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Total:</p>
                      <p className="text-3xl lg:text-4xl font-bold text-navy">
                        {result.toFixed(2)} {toCurrency}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Exchange rate data updated in real-time via ExchangeRate.host API.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;