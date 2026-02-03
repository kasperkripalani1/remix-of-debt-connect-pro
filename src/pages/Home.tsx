import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CreditCard, 
  Building2, 
  Sparkles, 
  Wallet,
  Terminal,
  Webhook,
  Code2,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Percent
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">P</span>
              </div>
              <span className="font-bold text-foreground">PACE_OS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Products <ChevronDown className="w-3 h-3" />
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Solutions <ChevronDown className="w-3 h-3" />
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Developers
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" className="gap-2">
              Start Building <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            v4.2 LIVE: NEW TREASURY API
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Financial
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Operating System
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A unified platform for money movement. Orchestrate payments, manage treasury, automate collections, and reconcile everything in real-time.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="gap-2">
              Start Integration <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="ghost">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-border bg-card p-1">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">api.pace.io/v4/transactions</span>
            </div>
            <div className="p-8 relative min-h-[280px] bg-gradient-to-b from-card to-background/50">
              {/* Central visualization */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-violet-400" />
                </div>
              </div>
              
              {/* Money In Card */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2">
                <div className="rounded-lg border border-success/30 bg-card p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-xs text-muted-foreground">Money In</span>
                  </div>
                  <span className="text-lg font-semibold text-success">+$184.8k</span>
                </div>
              </div>

              {/* Treasury Card */}
              <div className="absolute right-8 top-8">
                <div className="rounded-lg border border-violet-500/30 bg-card p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Percent className="w-4 h-4 text-violet-400" />
                    <span className="text-xs text-muted-foreground">Treasury</span>
                  </div>
                  <span className="text-lg font-semibold text-violet-400">4.2% APY</span>
                </div>
              </div>

              {/* Money Out Card */}
              <div className="absolute right-8 bottom-8">
                <div className="rounded-lg border border-destructive/30 bg-card p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingDown className="w-4 h-4 text-destructive" />
                    <span className="text-xs text-muted-foreground">Money Out</span>
                  </div>
                  <span className="text-lg font-semibold text-destructive">-$42.1k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Bar */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center py-6 border-y border-border">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">System Status</span>
              <p className="text-sm font-medium text-success mt-1">OPERATIONAL</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Uptime</span>
              <p className="text-sm font-medium text-foreground mt-1">99.998%</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">API Latency</span>
              <p className="text-sm font-medium text-foreground mt-1">24ms</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Transactions/Sec</span>
              <p className="text-sm font-medium text-foreground mt-1">4,200+</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Currencies</span>
              <p className="text-sm font-medium text-foreground mt-1">135+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Money In, Money Out, and
              <br />
              <span className="text-muted-foreground">Everything In Between.</span>
            </h2>
            <p className="text-muted-foreground">
              A complete suite of financial tools designed to work together seamlessly. No more fragmented systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Payments</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Accept payments from anywhere. Cards, wallets, bank transfers, and local methods via a single API.
                </p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  API <span className="text-muted-foreground">/v4/charges</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2">Treasury Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Optimize working capital. Move funds between accounts, hedge currency risk, and earn yield automatically.
                </p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  POST <span className="text-muted-foreground">/v4/transfers</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="font-semibold mb-2">Smart Collections</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recover revenue intelligently. AI-driven dunning and collections that preserve customer relationships.
                </p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  POST <span className="text-muted-foreground">/v4/recovery</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold mb-2">Card Issuing</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Programmatically create virtual and physical cards for expense management or payouts.
                </p>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  POST <span className="text-muted-foreground">/v4/issuing/cards</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="px-6 py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary mb-4 block">Developer First</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for developers,
                <br />
                trusted by finance.
              </h2>
              <p className="text-muted-foreground mb-8">
                Our API is designed with developer experience at its core. Predictable resource-oriented URLs, standard HTTP response codes, and authentication via API keys.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Sandbox Environment</h4>
                    <p className="text-sm text-muted-foreground">Test everything without touching real money. Instant provisioning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Webhook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Webhooks & Events</h4>
                    <p className="text-sm text-muted-foreground">Real-time notifications for every transaction status change.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">SDKs in 6 Languages</h4>
                    <p className="text-sm text-muted-foreground">Node, Python, Ruby, PHP, Go, and Java libraries available.</p>
                  </div>
                </div>
              </div>

              <Button variant="link" className="mt-8 p-0 gap-2">
                Read the API Docs <ChevronDown className="w-4 h-4" />
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <span className="text-xs text-muted-foreground">create_payment_intent.js</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`const pace = require('pace-node')('sk_test_...');

const paymentIntent = await pace.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card', 'ach'],
  automatic_payment_methods: {
    enabled: true,
  },
  flow_config: {
    smart_routing: true // Optimize for acceptance
  },
});

// Log success
console.log(paymentIntent.client_secret);`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Global Infrastructure</h2>
          <p className="text-muted-foreground mb-16">Designed for scale, reliability, and security from day one.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">99.999%</p>
              <p className="text-sm text-primary uppercase tracking-wider mb-2">Availability</p>
              <p className="text-sm text-muted-foreground">Redundant infrastructure across multiple availability zones and regions.</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">135+</p>
              <p className="text-sm text-primary uppercase tracking-wider mb-2">Currencies</p>
              <p className="text-sm text-muted-foreground">Native support for global currencies and local payment methods.</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">250ms</p>
              <p className="text-sm text-primary uppercase tracking-wider mb-2">Avg. Latency</p>
              <p className="text-sm text-muted-foreground">Lightning-fast processing speed for high-volume transaction environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to modernize your
            <br />
            financial stack?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the forward-thinking companies running on the PACE Financial Operating System.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">P</span>
                </div>
                <span className="font-bold text-foreground">PACE_OS</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                The Financial Operating System for Global Business. Building the future of money movement infrastructure.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Products</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Payments</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Treasury</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Capital</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Issuing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2025 PACE Financial Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
