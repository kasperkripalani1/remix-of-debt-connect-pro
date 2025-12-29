import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-asset-3.svg";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoFull} alt="PACE Payments" className="h-10" />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using PACE Payments' services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services. These Terms apply to all users, including businesses and individuals using our debt collection management platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              PACE Payments provides an AI-powered debt collection management platform designed to help businesses manage receivables efficiently while maintaining positive customer relationships. Our Services include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Automated debt collection communications</li>
              <li>Payment processing and management</li>
              <li>Customer relationship management tools</li>
              <li>Analytics and reporting features</li>
              <li>AI-powered outreach capabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-medium mb-3">3.1 Account Creation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To access certain features of our Services, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.
            </p>
            <h3 className="text-xl font-medium mb-3">3.2 Account Security</h3>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Engage in harassment, abuse, or threatening behavior</li>
              <li>Transmit malware, viruses, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our Services</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Collect or harvest user data without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Compliance with Regulations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users of our Services must comply with all applicable debt collection laws and regulations, including but not limited to the Consumer Credit Act, Financial Conduct Authority (FCA) guidelines, and any other relevant legislation. PACE Payments provides tools to assist with compliance but users remain responsible for ensuring their use of the Services complies with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Certain features of our Services may require payment of fees. You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Pay all applicable fees as described in your service agreement</li>
              <li>Provide accurate billing information</li>
              <li>Authorize us to charge your payment method for fees due</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All fees are non-refundable unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality of our Services, including but not limited to software, text, graphics, logos, and trademarks, are owned by PACE Payments or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our Services without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our collection and use of personal information is governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. By using our Services, you consent to our data practices as described in the Privacy Policy. You are responsible for ensuring that any data you provide to us or process through our Services complies with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PACE PAYMENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF OUR SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless PACE Payments and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of our Services, your violation of these Terms, or your violation of any rights of a third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your access to our Services at any time, with or without cause, with or without notice. Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our Services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">PACE Payments</p>
              <p className="text-muted-foreground">Email: legal@pacepayments.com</p>
              <p className="text-muted-foreground">Phone: 0800 123 4567</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} PACE Payments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
