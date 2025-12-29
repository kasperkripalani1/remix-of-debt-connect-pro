import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  Calculator,
  DollarSign,
  CheckCircle2,
  Info,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logoFull from "@/assets/logo-asset-3.svg";

const CostCalculator = () => {
  const [amount, setAmount] = useState<string>("1000");
  const [factor, setFactor] = useState<string>("0.5");

  // Fee calculation based on RVG (German Attorney Fees Act) simplified for demo
  const calculations = useMemo(() => {
    const debtAmount = parseFloat(amount) || 0;
    const feeFactor = parseFloat(factor) || 0.5;
    
    // Simplified fee calculation based on debt amount tiers
    let baseFee = 0;
    if (debtAmount <= 500) {
      baseFee = 49;
    } else if (debtAmount <= 1000) {
      baseFee = 88;
    } else if (debtAmount <= 1500) {
      baseFee = 127;
    } else if (debtAmount <= 2000) {
      baseFee = 156;
    } else if (debtAmount <= 3000) {
      baseFee = 222;
    } else if (debtAmount <= 4000) {
      baseFee = 278;
    } else if (debtAmount <= 5000) {
      baseFee = 334;
    } else if (debtAmount <= 6000) {
      baseFee = 390;
    } else if (debtAmount <= 7000) {
      baseFee = 446;
    } else if (debtAmount <= 8000) {
      baseFee = 502;
    } else if (debtAmount <= 9000) {
      baseFee = 558;
    } else if (debtAmount <= 10000) {
      baseFee = 614;
    } else {
      baseFee = 614 + Math.floor((debtAmount - 10000) / 1000) * 50;
    }

    const calculatedFee = baseFee * feeFactor;
    const expenses = 20; // Fixed expense amount
    const netSubtotal = calculatedFee + expenses;
    const vat = netSubtotal * 0.19;
    const totalGross = netSubtotal + vat;

    return {
      calculatedFee: calculatedFee.toFixed(2),
      expenses: expenses.toFixed(2),
      netSubtotal: netSubtotal.toFixed(2),
      vat: vat.toFixed(2),
      totalGross: totalGross.toFixed(2),
    };
  }, [amount, factor]);

  const factorOptions = [
    { value: "0.5", label: "0.5", description: "Usually with immediate payment" },
    { value: "0.9", label: "0.9", description: "Usually after further reminders" },
    { value: "1.1", label: "0.9 + 0.7 of 50%", description: "With installment payment agreement" },
    { value: "1.3", label: "1.3", description: "For court or complex proceedings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoFull} alt="PACE Payments" className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/demo">
              <Button>View Demo</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Cost Calculator
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Calculate Your{" "}
            <span className="text-primary">Debt Collection Costs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a transparent overview of debt collection fees. Our calculator provides 
            accurate cost estimates based on standard industry rates.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Debt Collection Fee Calculator
                </CardTitle>
                <CardDescription>
                  Enter your debt amount and select the applicable fee factor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    min="0"
                    max="1000000"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter debt amount"
                    className="text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Factor</Label>
                  <RadioGroup value={factor} onValueChange={setFactor} className="space-y-3">
                    {factorOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          factor === option.value 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setFactor(option.value)}
                      >
                        <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                        <div className="flex-1">
                          <Label htmlFor={option.value} className="font-semibold cursor-pointer">
                            {option.label}
                          </Label>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="shadow-xl border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>
                  Calculated costs based on your inputs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Calculated Fee:</span>
                    <span className="font-semibold text-lg">${calculations.calculatedFee}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Calculated Expenses:</span>
                    <span className="font-semibold text-lg">${calculations.expenses}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Net Subtotal:</span>
                    <span className="font-semibold text-lg">${calculations.netSubtotal}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">19% VAT:</span>
                    <span className="font-semibold text-lg">${calculations.vat}</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6 mt-6">
                  <p className="text-sm text-muted-foreground mb-2">Total costs (gross):</p>
                  <p className="text-4xl font-bold text-primary">${calculations.totalGross}</p>
                </div>

                <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-lg mt-4">
                  <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Additionally, interest and reminder fees may be charged on the invoice amount. 
                    The costs are to be borne by the debtor. All information without warranty.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Do you have overdue invoices?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don&apos;t lose time. We help you with the collection.
          </p>
          <Link to="/business">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How our debt collection calculator works</h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              With our interactive debt collection calculator, you can calculate the costs incurred 
              quickly and easily. Simply enter the amount of the original invoice and immediately 
              receive a detailed cost overview.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Step-by-step instructions for using the debt collection calculator
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Enter the invoice amount:</p>
                  <p className="text-muted-foreground">
                    Simply enter the amount of the outstanding debt. Any dunning costs should not be 
                    taken into account here.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Select the fee factor:</p>
                  <p className="text-muted-foreground">
                    Select the relevant fee factor. Normally this is 0.5 for the first collection 
                    reminder or 0.9 for further letters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Receive calculation:</p>
                  <p className="text-muted-foreground">
                    Based on your input, you will immediately receive the cost overview including 
                    fees, expenses, and applicable taxes.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Do I have to pay collection costs?
            </h3>
            <p>
              Collection costs are generally justified if an invoice has not been paid within the 
              set period and is therefore overdue. Depending on the type of invoice, a prior reminder 
              may be necessary. The amount of the costs is set by law. These costs are to be borne 
              by the debtor in the event of actual default.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Accurate Calculations</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Industry Standard Rates</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img src={logoFull} alt="PACE Payments" className="h-6" />
          </div>
          <p className="text-muted-foreground text-sm">© 2025 PACE Payments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CostCalculator;