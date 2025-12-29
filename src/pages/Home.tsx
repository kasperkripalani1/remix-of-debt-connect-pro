import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 bg-background">
        <div className="max-w-lg mx-auto lg:mx-0">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-primary">PACE</span>{" "}
              <span className="text-foreground/80">Payments</span>
            </h1>
          </div>

          {/* Headline */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-muted-foreground leading-tight mb-2">
              We're rethinking
            </h2>
            <h2 className="text-4xl lg:text-5xl font-light text-muted-foreground leading-tight mb-2">
              debt collection.
            </h2>
            <p className="text-4xl lg:text-5xl font-semibold text-foreground italic">
              efficiently.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/demo" className="group">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg px-6 py-6 border-b-2 border-primary rounded-none bg-transparent hover:bg-primary/5 transition-all"
              >
                <Building2 className="mr-2 h-5 w-5" />
                For Businesses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/customers" className="group">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg px-6 py-6 border-b-2 border-accent rounded-none bg-transparent hover:bg-accent/5 transition-all"
              >
                <Users className="mr-2 h-5 w-5" />
                For Consumers
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground">
            <p>© 2025 PACE Payments</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 relative min-h-[400px] lg:min-h-screen">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Home;
