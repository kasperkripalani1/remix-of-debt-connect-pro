import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft,
  Bot, 
  Shield, 
  TrendingUp, 
  BarChart3,
  Zap,
  CheckCircle2,
  Building2,
  Users,
  Clock,
  FileText,
  HeartHandshake,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Recovery Rates",
    description: "Our AI-powered approach consistently delivers 30-50% higher recovery rates compared to traditional methods.",
  },
  {
    icon: Clock,
    title: "Reduce Time to Collection",
    description: "Automated workflows and intelligent prioritization cut average collection time by up to 45%.",
  },
  {
    icon: HeartHandshake,
    title: "Preserve Customer Relationships",
    description: "Ethical, respectful communication ensures you maintain positive relationships with your customers.",
  },
  {
    icon: Shield,
    title: "Stay Fully Compliant",
    description: "Built-in compliance with FCA, GDPR, and industry regulations. Never worry about compliance again.",
  },
];

const features = [
  "AI-powered customer segmentation",
  "Multi-channel outreach (Email, SMS, Voice)",
  "Real-time analytics dashboard",
  "Automated payment plans",
  "CRM & ERP integrations",
  "White-label options available",
  "Dedicated account manager",
  "24/7 support",
];

const Home = () => {
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
            <Link to="/demo">
              <Button>View Demo</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                For Businesses
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Collect more,{" "}
                <span className="text-primary">faster.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                PACE Payments helps businesses of all sizes recover outstanding debts efficiently 
                while maintaining positive customer relationships. Our AI-powered platform 
                automates the entire collection process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Explore Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Recovery Dashboard Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Total Outstanding</span>
                      <span className="text-2xl font-bold">£2.4M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-green-500/10">
                      <span className="text-muted-foreground">Collected This Month</span>
                      <span className="text-2xl font-bold text-green-600">£847K</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-primary/10">
                      <span className="text-muted-foreground">Collection Rate</span>
                      <span className="text-2xl font-bold text-primary">98.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why businesses choose PACE</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of enterprises who have transformed their debt collection operations.
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

      {/* Features List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Everything you need in one platform</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our comprehensive platform handles every aspect of the collection process, 
                from initial contact to final payment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                  alt="Dashboard analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl opacity-90 mb-8">
            See how PACE Payments can transform your debt collection process. 
            Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Zap className="mr-2 h-5 w-5" />
                Try the Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Sales
            </Button>
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
          <p className="text-muted-foreground text-sm">© 2025 PACE Payments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
