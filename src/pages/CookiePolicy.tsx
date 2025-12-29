import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-asset-3.svg";

const CookiePolicy = () => {
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
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. Cookies help us understand how you use our platform and enable us to improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PACE Payments uses cookies and similar technologies for several purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To enable essential features and functionality</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze how our platform is used</li>
              <li>To improve our services and user experience</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies as the website would not work without them.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use. If you do not allow these cookies, some or all of these services may not function properly.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our platform and services.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us optimize our platform and identify any issues.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Cookie Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">session_id</td>
                    <td className="py-3 px-4">Maintains your session state</td>
                    <td className="py-3 px-4">Session</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">auth_token</td>
                    <td className="py-3 px-4">Authentication and security</td>
                    <td className="py-3 px-4">30 days</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">preferences</td>
                    <td className="py-3 px-4">Stores your site preferences</td>
                    <td className="py-3 px-4">1 year</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">_analytics</td>
                    <td className="py-3 px-4">Analytics and performance tracking</td>
                    <td className="py-3 px-4">2 years</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">cookie_consent</td>
                    <td className="py-3 px-4">Remembers your cookie preferences</td>
                    <td className="py-3 px-4">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some cookies on our website are placed by third-party services that appear on our pages. We use third-party services for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Analytics (to understand user behavior)</li>
              <li>Payment processing (for secure transactions)</li>
              <li>Customer support tools (for live chat and assistance)</li>
              <li>Security services (to protect against threats)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These third parties have their own privacy policies and cookie practices. We encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have several options for managing cookies:
            </p>
            
            <h3 className="text-xl font-medium mb-3">Browser Settings</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can typically find these in the "Options" or "Preferences" menu of your browser. The following links provide information on how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">Cookie Preference Center</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can manage your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website. This allows you to adjust your consent for non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Impact of Disabling Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you choose to disable cookies, please note that some features of our platform may not function properly. Essential cookies cannot be disabled as they are required for the website to operate. Disabling other cookies may affect your user experience and limit certain functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">PACE Payments</p>
              <p className="text-muted-foreground">Email: privacy@pacepayments.com</p>
              <p className="text-muted-foreground">Phone: 0800 123 4567</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. More Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For more information about cookies and how to manage them, you can visit{" "}
              <a 
                href="https://www.aboutcookies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.aboutcookies.org
              </a>{" "}
              or{" "}
              <a 
                href="https://www.allaboutcookies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.allaboutcookies.org
              </a>.
            </p>
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

export default CookiePolicy;
