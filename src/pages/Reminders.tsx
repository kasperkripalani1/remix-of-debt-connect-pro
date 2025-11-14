import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Clock, CheckCircle2, AlertCircle, Calendar } from "lucide-react";

interface Reminder {
  id: string;
  customer: string;
  type: "email" | "sms" | "call";
  status: "pending" | "sent" | "failed";
  scheduledDate: string;
  amount: number;
  invoiceNumber: string;
}

const mockReminders: Reminder[] = [
  {
    id: "1",
    customer: "Acme Corporation",
    type: "email",
    status: "sent",
    scheduledDate: "2024-11-14",
    amount: 45000,
    invoiceNumber: "INV-2024-001",
  },
  {
    id: "2",
    customer: "TechStart Inc.",
    type: "sms",
    status: "pending",
    scheduledDate: "2024-11-15",
    amount: 28500,
    invoiceNumber: "INV-2024-002",
  },
  {
    id: "3",
    customer: "Global Solutions Ltd",
    type: "call",
    status: "pending",
    scheduledDate: "2024-11-16",
    amount: 67200,
    invoiceNumber: "INV-2024-003",
  },
  {
    id: "4",
    customer: "Enterprise Systems",
    type: "email",
    status: "failed",
    scheduledDate: "2024-11-13",
    amount: 92300,
    invoiceNumber: "INV-2024-005",
  },
  {
    id: "5",
    customer: "Innovation Labs",
    type: "sms",
    status: "sent",
    scheduledDate: "2024-11-14",
    amount: 15800,
    invoiceNumber: "INV-2024-004",
  },
];

const statusConfig = {
  pending: { label: "Pending", icon: Clock, className: "bg-warning/10 text-warning hover:bg-warning/20" },
  sent: { label: "Sent", icon: CheckCircle2, className: "bg-success/10 text-success hover:bg-success/20" },
  failed: { label: "Failed", icon: AlertCircle, className: "bg-destructive/10 text-destructive hover:bg-destructive/20" },
};

const typeConfig = {
  email: { label: "Email", color: "text-primary" },
  sms: { label: "SMS", color: "text-accent" },
  call: { label: "Call", color: "text-warning" },
};

const Reminders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Payment Reminders</h1>
              <p className="text-muted-foreground">Schedule and track automated payment reminders</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Reminder
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-warning/10">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-success/10">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sent Today</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-destructive/10">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Failed</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-card border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Reminders</h2>
            <div className="space-y-4">
              {mockReminders.map((reminder) => {
                const StatusIcon = statusConfig[reminder.status].icon;
                return (
                  <Card key={reminder.id} className="p-4 bg-card border-border hover:shadow-md transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{reminder.customer}</h3>
                          <Badge className={statusConfig[reminder.status].className}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig[reminder.status].label}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Type</p>
                            <p className={`font-medium ${typeConfig[reminder.type].color}`}>
                              {typeConfig[reminder.type].label}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Invoice</p>
                            <p className="font-medium text-foreground">{reminder.invoiceNumber}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Amount</p>
                            <p className="font-medium text-foreground">${reminder.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Scheduled</p>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-muted-foreground" />
                              <p className="font-medium text-foreground">
                                {new Date(reminder.scheduledDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reminders;
