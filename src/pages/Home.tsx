import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Bot, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  BarChart3,
  Zap,
  Globe,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoFull from "@/assets/logo-asset-3.svg";
import logoDark from "@/assets/logo-asset-8.svg";


const features = [
  {
    icon: Bot,
    title: "AI-Powered Collections",
    description: "Our intelligent AI agents communicate with customers at the optimal time, through their preferred channel, maximizing recovery rates.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Approach",
    description: "Maintain positive customer relationships while recovering debts. Our ethical approach ensures brand protection.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track every metric that matters. From collection rates to customer sentiment, get insights that drive decisions.",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    description: "Built-in compliance with FCA regulations, GDPR, and industry best practices. Stay protected, always.",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Recovery",
    description: "Reduce average collection time by up to 45% with automated workflows and intelligent prioritization.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Outreach",
    description: "Email, SMS, voice, and digital channels - reach customers where they are most responsive.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect Your Data",
    description: "Seamlessly integrate with your existing systems. We support all major ERPs, CRMs, and accounting platforms.",
  },
  {
    step: "02",
    title: "AI Analyzes & Prioritizes",
    description: "Our AI segments customers by likelihood to pay, optimal contact time, and preferred communication channel.",
  },
  {
    step: "03",
    title: "Automated Outreach",
    description: "Personalized, compliant communications are sent automatically, with human escalation when needed.",
  },
  {
    step: "04",
    title: "Track & Optimize",
    description: "Monitor performance in real-time. Our system continuously learns and improves collection strategies.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoFull} alt="PACE Payments" className="h-8" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/demo">
              <Button variant="ghost">Platform Demo</Button>
            </Link>
            <Link to="/demo">
              <Button>Get Started</Button>
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
                <Zap className="w-4 h-4" />
                AI-Powered Debt Collection
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We're rethinking{" "}
                <span className="text-primary">debt collection.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                PACE Payments combines artificial intelligence with ethical collection practices 
                to maximize recovery rates while preserving customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/business">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                    <Building2 className="mr-2 h-5 w-5" />
                    For Businesses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/consumer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                    <Users className="mr-2 h-5 w-5" />
                    For Consumers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-6 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">+45%</p>
                      <p className="text-sm text-muted-foreground">Recovery Rate Increase</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to collect smarter</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with proven collection strategies to deliver results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How PACE Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get up and running in days, not months. Our streamlined process ensures rapid deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to transform your collections?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 500+ enterprises who have revolutionized their debt recovery with PACE Payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-6">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Platform Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>FCA Regulated</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logoDark} alt="PACE Payments" className="h-8" />
              </div>
              <p className="text-muted-foreground">
                Rethinking debt collection with AI-powered, customer-centric solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/demo" className="hover:text-foreground transition-colors">Demo</Link></li>
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 PACE Payments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
