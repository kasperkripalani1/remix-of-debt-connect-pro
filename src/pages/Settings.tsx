import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bell, Mail, Shield, User, CreditCard, Building2 } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account and application preferences</p>
          </div>

          <Card className="p-6 bg-gradient-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Profile Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Company Information</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="PACE Collections" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress">Address</Label>
                <Input id="companyAddress" defaultValue="123 Business St, Suite 100" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" defaultValue="10001" />
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">Update Company Info</Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Notification Preferences</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email updates about payments and reminders</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">SMS Alerts</p>
                  <p className="text-sm text-muted-foreground">Get text messages for overdue payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Payment Confirmations</p>
                  <p className="text-sm text-muted-foreground">Notify when payments are received</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Weekly Reports</p>
                  <p className="text-sm text-muted-foreground">Receive weekly collection performance summaries</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Email Templates</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reminderTemplate">Payment Reminder Template</Label>
                <textarea
                  id="reminderTemplate"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                  defaultValue="Dear [Customer Name],&#10;&#10;This is a friendly reminder that your payment of [Amount] for invoice [Invoice Number] is due on [Due Date].&#10;&#10;Best regards,&#10;[Company Name]"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">Save Template</Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Security</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button className="bg-primary hover:bg-primary/90">Change Password</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
