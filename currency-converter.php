<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter – Calculator | Synctrack</title>
    <meta name="description" content="Convert any currency instantly with our free, accurate, real-time Currency Converter. Supports 150+ currencies worldwide. Fast, easy, and completely free.">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Inter', sans-serif;
        }
        
        :root {
            --background: 0 0% 100%;
            --foreground: 228 47% 15%;
            --card: 0 0% 100%;
            --card-foreground: 228 47% 15%;
            --primary: 228 47% 15%;
            --primary-foreground: 0 0% 100%;
            --secondary: 207 65% 52%;
            --muted: 215 25% 96%;
            --muted-foreground: 215 16% 47%;
            --border: 215 20% 90%;
            --destructive: 0 84% 60%;
            --navy: 228 47% 15%;
            --sky-blue: 207 65% 52%;
            --light-bg: 215 40% 98%;
        }
        
        .gradient-primary {
            background: linear-gradient(135deg, hsl(228 47% 15%), hsl(207 65% 52%));
        }
        
        .text-primary {
            color: hsl(var(--primary));
        }
        
        .bg-background {
            background-color: hsl(var(--background));
        }
        
        .text-foreground {
            color: hsl(var(--foreground));
        }
        
        .text-muted-foreground {
            color: hsl(var(--muted-foreground));
        }
        
        .bg-muted {
            background-color: hsl(var(--muted));
        }
        
        .bg-light-bg {
            background-color: hsl(var(--light-bg));
        }
        
        .bg-card {
            background-color: hsl(var(--card));
        }
        
        .border-border {
            border-color: hsl(var(--border));
        }
        
        .text-sky-blue {
            color: hsl(var(--sky-blue));
        }
        
        .text-navy {
            color: hsl(var(--navy));
        }
        
        .border-sky-blue {
            border-color: hsl(var(--sky-blue));
        }
        
        .btn-primary {
            background: linear-gradient(135deg, hsl(228 47% 15%), hsl(207 65% 52%));
            color: white;
        }
        
        .btn-primary:hover {
            opacity: 0.9;
        }
        
        .btn-outline {
            border: 2px solid hsl(var(--border));
            background: transparent;
        }
        
        .btn-outline:hover {
            background: hsl(var(--muted));
        }
        
        .btn-period {
            padding: 0.5rem 1rem;
            border: 1px solid hsl(var(--border));
            background: white;
            border-radius: 0.5rem;
            cursor: pointer;
        }
        
        .btn-period:hover {
            background: hsl(var(--muted));
        }
        
        .btn-period.active {
            background: linear-gradient(135deg, hsl(228 47% 15%), hsl(207 65% 52%));
            color: white;
        }
    </style>
</head>
<body class="bg-background">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <a href="#" class="flex items-center space-x-2">
                    <div class="w-8 h-8 gradient-primary rounded-lg"></div>
                    <span class="text-xl lg:text-2xl font-bold text-primary">Synctrack</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="pt-24 pb-16">
        <!-- Hero Section -->
        <section class="py-16 bg-background">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl lg:text-5xl font-bold text-primary mb-4">
                    Currency Converter – Exchange Rate Calculator
                </h1>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Easily convert any currency at live exchange rates. Fast, accurate, and completely free.
                </p>
            </div>
        </section>

        <!-- Converter Tool -->
        <section id="converter-tool" class="py-16 bg-light-bg">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto">
                    <div class="bg-card rounded-2xl shadow-lg p-8 lg:p-10">
                        <h2 class="text-3xl font-bold text-primary mb-8 text-center">
                            Currency Converter Tool
                        </h2>

                        <div id="converter-form">
                            <div class="grid md:grid-cols-2 gap-6 mb-6">
                                <!-- Currency From -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-semibold text-foreground">
                                        Currency From <span style="color: hsl(var(--destructive))">*</span>
                                    </label>
                                    <select id="fromCurrency" class="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background">
                                        <option value="">Select base currency (e.g. USD)</option>
                                        <!-- Americas -->
                                        <option value="USD">USD - US Dollar</option>
                                        <option value="CAD">CAD - Canadian Dollar</option>
                                        <option value="BRL">BRL - Brazilian Real</option>
                                        <option value="MXN">MXN - Mexican Peso</option>
                                        <option value="ARS">ARS - Argentine Peso</option>
                                        <option value="CLP">CLP - Chilean Peso</option>
                                        <!-- Europe -->
                                        <option value="EUR">EUR - Euro</option>
                                        <option value="GBP">GBP - British Pound</option>
                                        <option value="CHF">CHF - Swiss Franc</option>
                                        <option value="SEK">SEK - Swedish Krona</option>
                                        <option value="NOK">NOK - Norwegian Krone</option>
                                        <option value="DKK">DKK - Danish Krone</option>
                                        <option value="PLN">PLN - Polish Zloty</option>
                                        <option value="CZK">CZK - Czech Koruna</option>
                                        <!-- Asia -->
                                        <option value="JPY">JPY - Japanese Yen</option>
                                        <option value="CNY">CNY - Chinese Yuan</option>
                                        <option value="INR">INR - Indian Rupee</option>
                                        <option value="SGD">SGD - Singapore Dollar</option>
                                        <option value="HKD">HKD - Hong Kong Dollar</option>
                                        <option value="KRW">KRW - South Korean Won</option>
                                        <option value="THB">THB - Thai Baht</option>
                                        <option value="IDR">IDR - Indonesian Rupiah</option>
                                        <option value="MYR">MYR - Malaysian Ringgit</option>
                                        <option value="PHP">PHP - Philippine Peso</option>
                                        <!-- Oceania -->
                                        <option value="AUD">AUD - Australian Dollar</option>
                                        <option value="NZD">NZD - New Zealand Dollar</option>
                                        <!-- Africa -->
                                        <option value="ZAR">ZAR - South African Rand</option>
                                        <option value="EGP">EGP - Egyptian Pound</option>
                                        <option value="NGN">NGN - Nigerian Naira</option>
                                        <option value="KES">KES - Kenyan Shilling</option>
                                        <option value="MAD">MAD - Moroccan Dirham</option>
                                    </select>
                                    <p class="text-xs text-muted-foreground">Currency to convert from</p>
                                </div>

                                <!-- Currency To -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-semibold text-foreground">
                                        Currency To <span style="color: hsl(var(--destructive))">*</span>
                                    </label>
                                    <select id="toCurrency" class="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background">
                                        <option value="">Select target currency (e.g. EUR)</option>
                                        <!-- Americas -->
                                        <option value="USD">USD - US Dollar</option>
                                        <option value="CAD">CAD - Canadian Dollar</option>
                                        <option value="BRL">BRL - Brazilian Real</option>
                                        <option value="MXN">MXN - Mexican Peso</option>
                                        <option value="ARS">ARS - Argentine Peso</option>
                                        <option value="CLP">CLP - Chilean Peso</option>
                                        <!-- Europe -->
                                        <option value="EUR">EUR - Euro</option>
                                        <option value="GBP">GBP - British Pound</option>
                                        <option value="CHF">CHF - Swiss Franc</option>
                                        <option value="SEK">SEK - Swedish Krona</option>
                                        <option value="NOK">NOK - Norwegian Krone</option>
                                        <option value="DKK">DKK - Danish Krone</option>
                                        <option value="PLN">PLN - Polish Zloty</option>
                                        <option value="CZK">CZK - Czech Koruna</option>
                                        <!-- Asia -->
                                        <option value="JPY">JPY - Japanese Yen</option>
                                        <option value="CNY">CNY - Chinese Yuan</option>
                                        <option value="INR">INR - Indian Rupee</option>
                                        <option value="SGD">SGD - Singapore Dollar</option>
                                        <option value="HKD">HKD - Hong Kong Dollar</option>
                                        <option value="KRW">KRW - South Korean Won</option>
                                        <option value="THB">THB - Thai Baht</option>
                                        <option value="IDR">IDR - Indonesian Rupiah</option>
                                        <option value="MYR">MYR - Malaysian Ringgit</option>
                                        <option value="PHP">PHP - Philippine Peso</option>
                                        <!-- Oceania -->
                                        <option value="AUD">AUD - Australian Dollar</option>
                                        <option value="NZD">NZD - New Zealand Dollar</option>
                                        <!-- Africa -->
                                        <option value="ZAR">ZAR - South African Rand</option>
                                        <option value="EGP">EGP - Egyptian Pound</option>
                                        <option value="NGN">NGN - Nigerian Naira</option>
                                        <option value="KES">KES - Kenyan Shilling</option>
                                        <option value="MAD">MAD - Moroccan Dirham</option>
                                    </select>
                                    <p class="text-xs text-muted-foreground">Currency to convert to</p>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-6 mb-6">
                                <!-- Amount -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-semibold text-foreground">
                                        Amount <span style="color: hsl(var(--destructive))">*</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        id="amount" 
                                        value=""
                                        min="0"
                                        step="0.01"
                                        class="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                                        placeholder="Enter amount (e.g. 100)"
                                    />
                                    <p class="text-xs text-muted-foreground">Amount in base currency</p>
                                </div>

                                <!-- Date -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-semibold text-foreground">Date</label>
                                    <input 
                                        type="date" 
                                        id="date"
                                        max="<?php echo date('Y-m-d'); ?>"
                                        min="1999-01-01"
                                        class="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background"
                                    />
                                    <p class="text-xs text-muted-foreground">Historical exchange rate date</p>
                                </div>
                            </div>

                            <!-- Convert Button -->
                            <button 
                                id="convertBtn"
                                class="w-full btn-primary font-semibold py-3 px-6 rounded-lg transition-opacity text-lg"
                            >
                                <span class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Convert
                                </span>
                            </button>
                        </div>

                        <!-- Result -->
                        <div id="result" class="hidden mt-8">
                            <div class="p-6 bg-light-bg rounded-xl border-2 border-sky-blue">
                                <div class="flex items-center justify-center gap-3">
                                    <svg class="h-8 w-8 text-sky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div class="text-center">
                                        <p class="text-sm text-muted-foreground mb-1">Total:</p>
                                        <p id="resultAmount" class="text-3xl lg:text-4xl font-bold text-navy"></p>
                                    </div>
                                </div>
                                <p class="text-xs text-muted-foreground text-center mt-4">
                                    Exchange rate data updated in real-time via Frankfurter API.
                                </p>
                            </div>

                            <!-- Chart -->
                            <div class="mt-8 p-6 bg-card rounded-xl border-2 border-border">
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                                    <h3 class="text-lg font-semibold text-navy" id="chartTitle">
                                        Exchange Rate Trend
                                    </h3>
                                    <div class="flex gap-2">
                                        <button class="btn-period active" data-days="30">30D</button>
                                        <button class="btn-period" data-days="60">60D</button>
                                        <button class="btn-period" data-days="90">90D</button>
                                    </div>
                                </div>
                                <div class="bg-white p-4 rounded-lg">
                                    <canvas id="rateChart"></canvas>
                                </div>
                                <p class="text-xs text-muted-foreground text-center mt-4" id="chartDescription">
                                    Historical exchange rates for the last 30 days
                                </p>
                            </div>

                            <button 
                                id="resetBtn"
                                class="w-full mt-6 btn-outline font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                Convert Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script>
        let chart = null;
        let currentPeriod = 30;

        // Set today's date as default
        document.getElementById('date').valueAsDate = new Date();

        // Convert button handler
        document.getElementById('convertBtn').addEventListener('click', async () => {
            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;
            const amount = parseFloat(document.getElementById('amount').value);
            const date = document.getElementById('date').value;

            if (!fromCurrency || !toCurrency) {
                alert('Please fill all required fields before proceeding.');
                return;
            }

            if (!amount || amount <= 0) {
                alert('Amount must be greater than zero.');
                return;
            }

            const btn = document.getElementById('convertBtn');
            btn.disabled = true;
            btn.innerHTML = '<span class="flex items-center justify-center"><svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Converting...</span>';

            try {
                const response = await fetch(`https://api.frankfurter.dev/v1/${date}?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch exchange rates');
                }
                
                const data = await response.json();

                if (data.rates && data.rates[toCurrency]) {
                    const result = data.rates[toCurrency];
                    
                    document.getElementById('resultAmount').textContent = `${result.toFixed(2)} ${toCurrency}`;
                    document.getElementById('chartTitle').textContent = `Exchange Rate Trend: ${fromCurrency}/${toCurrency}`;
                    
                    document.getElementById('converter-form').classList.add('hidden');
                    document.getElementById('result').classList.remove('hidden');

                    await fetchHistoricalData(fromCurrency, toCurrency, currentPeriod);
                } else {
                    throw new Error('Invalid response from API');
                }
            } catch (error) {
                alert('Unable to fetch exchange rates. Please try again.');
                console.error(error);
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Convert</span>';
            }
        });

        // Reset button handler
        document.getElementById('resetBtn').addEventListener('click', () => {
            document.getElementById('converter-form').classList.remove('hidden');
            document.getElementById('result').classList.add('hidden');
            if (chart) {
                chart.destroy();
                chart = null;
            }
        });

        // Period buttons handler
        document.querySelectorAll('.btn-period').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const days = parseInt(e.target.dataset.days);
                currentPeriod = days;
                
                // Update active state
                document.querySelectorAll('.btn-period').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const fromCurrency = document.getElementById('fromCurrency').value;
                const toCurrency = document.getElementById('toCurrency').value;
                await fetchHistoricalData(fromCurrency, toCurrency, days);
            });
        });

        async function fetchHistoricalData(fromCurrency, toCurrency, days) {
            try {
                // Fetch latest available date first
                const latestResponse = await fetch(`https://api.frankfurter.dev/v1/latest?from=${fromCurrency}&to=${toCurrency}`);
                
                if (!latestResponse.ok) throw new Error('Failed to fetch latest data');
                const latestData = await latestResponse.json();
                const endDate = latestData.date;
                
                const end = new Date(endDate);
                const start = new Date(end);
                start.setDate(start.getDate() - days);
                
                const formattedStartDate = start.toISOString().split('T')[0];
                const formattedEndDate = endDate;

                const response = await fetch(
                    `https://api.frankfurter.dev/v1/${formattedStartDate}..${formattedEndDate}?from=${fromCurrency}&to=${toCurrency}`
                );
                
                if (!response.ok) throw new Error('Failed to fetch historical data');
                
                const data = await response.json();

                if (data.rates) {
                    const chartData = Object.entries(data.rates).map(([date, rates]) => ({
                        date: formatDate(date),
                        rate: rates[toCurrency]
                    }));

                    renderChart(chartData, fromCurrency, toCurrency);
                    document.getElementById('chartDescription').textContent = `Historical exchange rates for the last ${days} days`;
                }
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        }

        function formatDate(dateStr) {
            const date = new Date(dateStr);
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${months[date.getMonth()]} ${date.getDate()}`;
        }

        function renderChart(data, fromCurrency, toCurrency) {
            const ctx = document.getElementById('rateChart').getContext('2d');

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.date),
                    datasets: [{
                        label: `${fromCurrency} to ${toCurrency}`,
                        data: data.map(d => d.rate),
                        borderColor: 'hsl(228, 47%, 15%)',
                        backgroundColor: 'hsla(228, 47%, 15%, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'hsl(0, 0%, 100%)',
                            titleColor: 'hsl(228, 47%, 15%)',
                            bodyColor: 'hsl(228, 47%, 15%)',
                            borderColor: 'hsl(215, 20%, 90%)',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                color: 'hsl(215, 20%, 90%)'
                            },
                            ticks: {
                                color: 'hsl(215, 16%, 47%)',
                                font: {
                                    size: 12
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                maxTicksLimit: 8,
                                color: 'hsl(215, 16%, 47%)',
                                font: {
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });
        }
    </script>
</body>
</html>