import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RefreshCw, DollarSign, CalendarIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { format, subDays } from "date-fns";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const popularCurrencies = [
  // Americas
  { code: "USD", name: "US Dollar", continent: "Americas" },
  { code: "CAD", name: "Canadian Dollar", continent: "Americas" },
  { code: "BRL", name: "Brazilian Real", continent: "Americas" },
  { code: "MXN", name: "Mexican Peso", continent: "Americas" },
  { code: "ARS", name: "Argentine Peso", continent: "Americas" },
  { code: "CLP", name: "Chilean Peso", continent: "Americas" },
  
  // Europe
  { code: "EUR", name: "Euro", continent: "Europe" },
  { code: "GBP", name: "British Pound", continent: "Europe" },
  { code: "CHF", name: "Swiss Franc", continent: "Europe" },
  { code: "SEK", name: "Swedish Krona", continent: "Europe" },
  { code: "NOK", name: "Norwegian Krone", continent: "Europe" },
  { code: "DKK", name: "Danish Krone", continent: "Europe" },
  { code: "PLN", name: "Polish Zloty", continent: "Europe" },
  { code: "CZK", name: "Czech Koruna", continent: "Europe" },
  
  // Asia
  { code: "JPY", name: "Japanese Yen", continent: "Asia" },
  { code: "CNY", name: "Chinese Yuan", continent: "Asia" },
  { code: "INR", name: "Indian Rupee", continent: "Asia" },
  { code: "SGD", name: "Singapore Dollar", continent: "Asia" },
  { code: "HKD", name: "Hong Kong Dollar", continent: "Asia" },
  { code: "KRW", name: "South Korean Won", continent: "Asia" },
  { code: "THB", name: "Thai Baht", continent: "Asia" },
  { code: "IDR", name: "Indonesian Rupiah", continent: "Asia" },
  { code: "MYR", name: "Malaysian Ringgit", continent: "Asia" },
  { code: "PHP", name: "Philippine Peso", continent: "Asia" },
  
  // Oceania
  { code: "AUD", name: "Australian Dollar", continent: "Oceania" },
  { code: "NZD", name: "New Zealand Dollar", continent: "Oceania" },
  
  // Africa
  { code: "ZAR", name: "South African Rand", continent: "Africa" },
  { code: "EGP", name: "Egyptian Pound", continent: "Africa" },
  { code: "NGN", name: "Nigerian Naira", continent: "Africa" },
  { code: "KES", name: "Kenyan Shilling", continent: "Africa" },
  { code: "MAD", name: "Moroccan Dirham", continent: "Africa" },
];

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [period, setPeriod] = useState<30 | 60 | 90>(30);
  const [chartData, setChartData] = useState<Array<{ date: string; rate: number }>>([]);

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
        `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      
      if (data.rates && data.rates[toCurrency]) {
        setResult(data.rates[toCurrency]);
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
    setChartData([]);
  };

  const fetchHistoricalData = async (from: string, to: string, days: number) => {
    try {
      const endDate = format(new Date(), 'yyyy-MM-dd');
      const startDate = format(subDays(new Date(), days), 'yyyy-MM-dd');
      
      const response = await fetch(
        `https://api.frankfurter.dev/${startDate}..${endDate}?from=${from}&to=${to}`
      );
      
      if (!response.ok) throw new Error('Failed to fetch historical data');
      
      const data = await response.json();
      
      if (data.rates) {
        const formattedData = Object.entries(data.rates).map(([date, rates]: [string, any]) => ({
          date: format(new Date(date), 'MMM dd'),
          rate: rates[to]
        }));
        setChartData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && result !== null) {
      fetchHistoricalData(fromCurrency, toCurrency, period);
    }
  }, [fromCurrency, toCurrency, period, result]);

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

              <div className="grid md:grid-cols-2 gap-6">
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

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-background",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => newDate && setDate(newDate)}
                        disabled={(date) => date > new Date() || date < new Date("1999-01-01")}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-muted-foreground">Historical exchange rate date</p>
                </div>
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
                <>
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
                      Exchange rate data updated in real-time via Frankfurter API.
                    </p>
                  </div>

                  {chartData.length > 0 && (
                    <div className="mt-8 p-6 bg-card rounded-xl border-2 border-border">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-navy">
                          Exchange Rate Trend: {fromCurrency}/{toCurrency}
                        </h3>
                        <div className="flex gap-2">
                          {([30, 60, 90] as const).map((days) => (
                            <Button
                              key={days}
                              variant={period === days ? "default" : "outline"}
                              size="sm"
                              onClick={() => setPeriod(days)}
                              className={period === days ? "gradient-primary" : ""}
                            >
                              {days}D
                            </Button>
                          ))}
                        </div>
                      </div>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="date" 
                            stroke="hsl(var(--muted-foreground))"
                            style={{ fontSize: '12px' }}
                          />
                          <YAxis 
                            stroke="hsl(var(--muted-foreground))"
                            style={{ fontSize: '12px' }}
                            domain={['auto', 'auto']}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px'
                            }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="rate" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                      <p className="text-xs text-muted-foreground text-center mt-4">
                        Historical exchange rates for the last {period} days
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;