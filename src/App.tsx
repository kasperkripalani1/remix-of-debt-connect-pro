import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Consumer from "./pages/Consumer";
import Demo from "./pages/Demo";
import ConsumerDemo from "./pages/ConsumerDemo";
import Debts from "./pages/Debts";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Reminders from "./pages/Reminders";
import AIBotConfig from "./pages/AIBotConfig";
import Settings from "./pages/Settings";
import CostCalculator from "./pages/CostCalculator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/consumer-demo" element={<ConsumerDemo />} />
          <Route path="/debts" element={<Debts />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ai-bot" element={<AIBotConfig />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
