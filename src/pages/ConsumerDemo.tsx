import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordProtection } from "@/components/PasswordProtection";
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MessageSquare,
  Settings2
} from "lucide-react";
import { toast } from "sonner";

type Step = "config" | "portal" | "payment-plan";

interface DebtInfo {
  creditor: string;
  originalAmount: number;
  currentBalance: number;
  accountNumber: string;
  dueDate: string;
  daysPastDue: number;
}

const ConsumerDemo = () => {
  const [step, setStep] = useState<Step>("config");
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedPlanMonths, setSelectedPlanMonths] = useState<number | null>(null);
  
  const [debtInfo, setDebtInfo] = useState<DebtInfo>({
    creditor: "TechCorp Solutions Inc.",
    originalAmount: 2847.50,
    currentBalance: 2847.50,
    accountNumber: "4829",
    dueDate: "2025-01-15",
    daysPastDue: 45,
  });

  const paymentOptions = [
    {
      id: "apple-pay",
      name: "Apple Pay",
      icon: Smartphone,
      description: "Pay instantly with Apple Pay",
    },
    {
      id: "google-pay",
      name: "Google Pay",
      icon: Smartphone,
      description: "Pay instantly with Google Pay",
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, Amex accepted",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Building2,
      description: "Direct ACH transfer from your bank",
    },
    {
      id: "payment-plan",
      name: "Payment Plan",
      icon: Calendar,
      description: "Split into manageable monthly payments",
    },
  ];

  const paymentPlanOptions = [3, 6, 9, 12];

  const handlePayment = (method: string) => {
    if (method === "Payment Plan") {
      setStep("payment-plan");
    } else {
      setSelectedPayment(method);
      toast.success(`Processing ${method} payment...`, {
        description: "This is a demo - no actual payment will be processed.",
      });
    }
  };

  const handleConfirmPlan = () => {
    if (selectedPlanMonths) {
      toast.success(`Payment plan confirmed!`, {
        description: `${selectedPlanMonths} monthly payments of $${(debtInfo.currentBalance / selectedPlanMonths).toFixed(2)}`,
      });
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Configuration Screen
  if (step === "config") {
    return (
      <PasswordProtection>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
          <header className="bg-card border-b border-border">
            <div className="max-w-2xl mx-auto px-4 py-6">
              <div className="flex items-center gap-3">
                <Settings2 className="w-6 h-6 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Demo Configuration</h1>
                  <p className="text-sm text-muted-foreground">Set up sample data for the consumer portal</p>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-2xl mx-auto px-4 py-8">
            <Card>
              <CardHeader>
                <CardTitle>Sample Debt Information</CardTitle>
                <CardDescription>
                  Enter the details that will appear on the consumer payment portal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="creditor">Creditor / Company Name</Label>
                  <Input
                    id="creditor"
                    value={debtInfo.creditor}
                    onChange={(e) => setDebtInfo({ ...debtInfo, creditor: e.target.value.slice(0, 100) })}
                    placeholder="Company name"
                    maxLength={100}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="originalAmount">Original Amount ($)</Label>
                    <Input
                      id="originalAmount"
                      type="number"
                      min="0"
                      max="999999999"
                      step="0.01"
                      value={debtInfo.originalAmount}
                      onChange={(e) => {
                        const val = Math.min(999999999, Math.max(0, parseFloat(e.target.value) || 0));
                        setDebtInfo({ ...debtInfo, originalAmount: val });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentBalance">Current Balance ($)</Label>
                    <Input
                      id="currentBalance"
                      type="number"
                      min="0"
                      max="999999999"
                      step="0.01"
                      value={debtInfo.currentBalance}
                      onChange={(e) => {
                        const val = Math.min(999999999, Math.max(0, parseFloat(e.target.value) || 0));
                        setDebtInfo({ ...debtInfo, currentBalance: val });
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number (last 4 digits)</Label>
                    <Input
                      id="accountNumber"
                      value={debtInfo.accountNumber}
                      onChange={(e) => setDebtInfo({ ...debtInfo, accountNumber: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                      placeholder="1234"
                      maxLength={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={debtInfo.dueDate}
                      onChange={(e) => setDebtInfo({ ...debtInfo, dueDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="daysPastDue">Days Past Due</Label>
                  <Input
                    id="daysPastDue"
                    type="number"
                    min="0"
                    max="9999"
                    value={debtInfo.daysPastDue}
                    onChange={(e) => {
                      const val = Math.min(9999, Math.max(0, parseInt(e.target.value) || 0));
                      setDebtInfo({ ...debtInfo, daysPastDue: val });
                    }}
                  />
                </div>

                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={() => setStep("portal")}
                >
                  Launch Consumer Portal
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </PasswordProtection>
    );
  }

  // Payment Plan Screen
  if (step === "payment-plan") {
    return (
      <PasswordProtection>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
          <header className="bg-card border-b border-border">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">PACE</h1>
                  <p className="text-sm text-muted-foreground">Payment Plan Setup</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Secure Connection
                </Badge>
              </div>
            </div>
          </header>

          <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
            <Button 
              variant="ghost" 
              className="gap-2 mb-4"
              onClick={() => setStep("portal")}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Payment Options
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Choose Your Payment Plan
                </CardTitle>
                <CardDescription>
                  Select a plan that works for your budget. No additional fees or interest.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center mb-6">
                  <p className="text-sm text-muted-foreground">Total Balance</p>
                  <p className="text-3xl font-bold text-foreground">
                    ${debtInfo.currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {paymentPlanOptions.map((months) => {
                    const monthlyPayment = debtInfo.currentBalance / months;
                    return (
                      <button
                        key={months}
                        onClick={() => setSelectedPlanMonths(months)}
                        className={`p-6 rounded-xl border-2 transition-all duration-200 text-center ${
                          selectedPlanMonths === months
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <p className="text-3xl font-bold text-foreground">{months}</p>
                        <p className="text-sm text-muted-foreground mb-2">months</p>
                        <p className="text-xl font-semibold text-primary">
                          ${monthlyPayment.toFixed(2)}/mo
                        </p>
                      </button>
                    );
                  })}
                </div>

                {selectedPlanMonths && (
                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <h4 className="font-semibold mb-2">Your Plan Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment</span>
                        <span className="font-medium">${(debtInfo.currentBalance / selectedPlanMonths).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Number of Payments</span>
                        <span className="font-medium">{selectedPlanMonths}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Amount</span>
                        <span className="font-medium">${debtInfo.currentBalance.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-primary">
                        <span>Interest/Fees</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full gap-2 mt-4" 
                  size="lg"
                  disabled={!selectedPlanMonths}
                  onClick={handleConfirmPlan}
                >
                  Confirm Payment Plan
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </PasswordProtection>
    );
  }

  // Main Portal Screen
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <header className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">PACE</h1>
                <p className="text-sm text-muted-foreground">Secure Payment Portal</p>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setStep("config")}
                  className="gap-1"
                >
                  <Settings2 className="w-4 h-4" />
                  Edit Data
                </Button>
                <Badge variant="outline" className="text-xs">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          {/* Account Summary */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardDescription className="text-sm">Amount Due To</CardDescription>
                  <CardTitle className="text-xl mt-1">{debtInfo.creditor}</CardTitle>
                </div>
                {debtInfo.daysPastDue > 0 && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {debtInfo.daysPastDue} Days Past Due
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Outstanding Balance</p>
                <p className="text-5xl font-bold text-foreground">
                  ${debtInfo.currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Account ending in ****{debtInfo.accountNumber}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-card rounded-lg p-4 border">
                  <p className="text-muted-foreground">Original Amount</p>
                  <p className="font-semibold text-lg">${debtInfo.originalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <p className="text-muted-foreground">Due Date</p>
                  <p className="font-semibold text-lg">{formatDate(debtInfo.dueDate)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Choose Payment Method
              </CardTitle>
              <CardDescription>
                Select your preferred way to pay. All transactions are secure and encrypted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handlePayment(option.name)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between hover:border-primary hover:bg-primary/5 ${
                    selectedPayment === option.name
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{option.name}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>
                Our team is here to help you find a solution that works for your situation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">Call Us</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email Support</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">Live Chat</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Plan Option Highlight */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Can't pay in full?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We offer flexible payment plans starting as low as ${Math.ceil(debtInfo.currentBalance / 12)}/month. 
                    No additional fees or interest.
                  </p>
                  <Button size="sm" className="gap-2" onClick={() => setStep("payment-plan")}>
                    Set Up Payment Plan
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground pt-4 pb-8 space-y-2">
            <p>🔒 Your payment information is encrypted and secure</p>
            <p>This is a demo portal. No actual payments will be processed.</p>
          </div>
        </main>
      </div>
    </PasswordProtection>
  );
};

export default ConsumerDemo;
