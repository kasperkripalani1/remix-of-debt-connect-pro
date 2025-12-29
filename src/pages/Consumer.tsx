import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  Shield, 
  CreditCard,
  MessageCircle,
  Clock,
  CheckCircle2,
  Users,
  HeartHandshake,
  Phone,
  Mail,
  FileText,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const benefits = [
  {
    icon: HeartHandshake,
    title: "We're Here to Help",
    description: "We understand that financial difficulties can happen to anyone. Our team is trained to listen and find solutions that work for you.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Payment Plans",
    description: "Set up a payment plan that fits your budget. Pay what you can, when you can, with no hidden fees.",
  },
  {
    icon: Shield,
    title: "Your Data is Secure",
    description: "We use bank-level encryption to protect your personal and payment information at all times.",
  },
  {
    icon: MessageCircle,
    title: "Multiple Ways to Reach Us",
    description: "Contact us by phone, email, or through our online portal. We're available when you need us.",
  },
];

const faqs = [
  {
    question: "Why have I received a letter from PACE Payments?",
    answer: "You've received a letter because we've been asked to help collect an outstanding balance on behalf of one of our clients. Please check the letter for details about the original debt.",
  },
  {
    question: "Can I set up a payment plan?",
    answer: "Yes! We offer flexible payment plans to help you manage your debt. You can set one up online or by calling our team.",
  },
  {
    question: "What if I don't recognize this debt?",
    answer: "Please contact us immediately if you don't recognize the debt. We'll investigate and provide you with all relevant documentation.",
  },
  {
    question: "Will this affect my credit score?",
    answer: "Paying off your debt promptly or agreeing to a payment plan can help minimize any negative impact on your credit score.",
  },
];

const Consumer = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">P</span>
            </div>
            <span className="text-xl font-bold">PACE Payments</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                For Consumers
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We're here to{" "}
                <span className="text-primary">help you.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Managing debt can be stressful. At PACE Payments, we believe in treating everyone 
                with respect and finding solutions that work for your situation. Let's work together 
                to resolve your account.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Make a Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Set Up Payment Plan
                </Button>
              </div>
            </div>
            
            {/* Account Lookup Card */}
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle>Look Up Your Account</CardTitle>
                <CardDescription>
                  Enter your reference number from the letter you received
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Reference Number</label>
                  <Input placeholder="e.g. PACE-123456" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Postcode</label>
                  <Input placeholder="e.g. SW1A 1AA" />
                </div>
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Find My Account
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your information is encrypted and secure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What to expect from us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to treating you fairly and helping you find a way forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-lg">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about your account.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Our friendly team is here to help you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Mon-Fri, 8am-8pm</p>
                <p className="text-lg font-medium">0800 123 4567</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">We reply within 24 hours</p>
                <p className="text-lg font-medium">help@pacepayments.com</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Available 24/7</p>
                <Button variant="outline">Start Chat</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">P</span>
            </div>
            <span className="font-semibold">PACE Payments</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Complaints Procedure</a>
            <a href="#" className="hover:text-foreground transition-colors">Vulnerability Support</a>
          </div>
          <p className="text-muted-foreground text-sm">© 2025 PACE Payments</p>
        </div>
      </footer>
    </div>
  );
};

export default Consumer;
