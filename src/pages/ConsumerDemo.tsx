import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

const ConsumerDemo = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  // Sample debt data
  const debtInfo = {
    creditor: "TechCorp Solutions Inc.",
    originalAmount: 2847.50,
    currentBalance: 2847.50,
    accountNumber: "****4829",
    dueDate: "January 15, 2025",
    daysPastDue: 45,
  };

  const paymentOptions = [
    {
      id: "apple-pay",
      name: "Apple Pay",
      icon: Smartphone,
      description: "Pay instantly with Apple Pay",
      available: true,
    },
    {
      id: "google-pay",
      name: "Google Pay",
      icon: Smartphone,
      description: "Pay instantly with Google Pay",
      available: true,
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, Amex accepted",
      available: true,
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Building2,
      description: "Direct ACH transfer from your bank",
      available: true,
    },
    {
      id: "payment-plan",
      name: "Payment Plan",
      icon: Calendar,
      description: "Split into manageable monthly payments",
      available: true,
    },
  ];

  const handlePayment = (method: string) => {
    setSelectedPayment(method);
    toast.success(`Processing ${method} payment...`, {
      description: "This is a demo - no actual payment will be processed.",
    });
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Header */}
        <header className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">PACE</h1>
                <p className="text-sm text-muted-foreground">Secure Payment Portal</p>
              </div>
              <Badge variant="outline" className="text-xs">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Secure Connection
              </Badge>
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
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {debtInfo.daysPastDue} Days Past Due
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Outstanding Balance</p>
                <p className="text-5xl font-bold text-foreground">
                  ${debtInfo.currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Account ending in {debtInfo.accountNumber}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-card rounded-lg p-4 border">
                  <p className="text-muted-foreground">Original Amount</p>
                  <p className="font-semibold text-lg">${debtInfo.originalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <p className="text-muted-foreground">Due Date</p>
                  <p className="font-semibold text-lg">{debtInfo.dueDate}</p>
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
                  <Button size="sm" className="gap-2">
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
