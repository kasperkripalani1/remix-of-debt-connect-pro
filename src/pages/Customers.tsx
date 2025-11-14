import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Mail, Phone, Building2 } from "lucide-react";
import { useState } from "react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  totalDebt: number;
  status: "good" | "warning" | "critical";
  lastPayment: string;
}

const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@acmecorp.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corporation",
    totalDebt: 45000,
    status: "critical",
    lastPayment: "2024-09-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@techstart.io",
    phone: "+1 (555) 234-5678",
    company: "TechStart Inc.",
    totalDebt: 28500,
    status: "warning",
    lastPayment: "2024-10-22",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "e.rodriguez@globalsol.com",
    phone: "+1 (555) 345-6789",
    company: "Global Solutions Ltd",
    totalDebt: 67200,
    status: "warning",
    lastPayment: "2024-10-28",
  },
  {
    id: "4",
    name: "David Park",
    email: "d.park@innolabs.com",
    phone: "+1 (555) 456-7890",
    company: "Innovation Labs",
    totalDebt: 15800,
    status: "good",
    lastPayment: "2024-11-05",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "l.anderson@enterprise.com",
    phone: "+1 (555) 567-8901",
    company: "Enterprise Systems",
    totalDebt: 92300,
    status: "critical",
    lastPayment: "2024-08-30",
  },
];

const statusConfig = {
  good: { label: "Good Standing", className: "bg-success/10 text-success hover:bg-success/20" },
  warning: { label: "Payment Due", className: "bg-warning/10 text-warning hover:bg-warning/20" },
  critical: { label: "Overdue", className: "bg-destructive/10 text-destructive hover:bg-destructive/20" },
};

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Customers</h1>
              <p className="text-muted-foreground">Manage customer relationships and contact information</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Customer
            </Button>
          </div>

          <Card className="p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {filteredCustomers.map((customer) => (
                <Card key={customer.id} className="p-6 hover:shadow-md transition-all duration-200 bg-gradient-card border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{customer.name}</h3>
                          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span>{customer.company}</span>
                          </div>
                        </div>
                        <Badge className={statusConfig[customer.status].className}>
                          {statusConfig[customer.status].label}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{customer.phone}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Outstanding</p>
                          <p className="text-2xl font-bold text-foreground">${customer.totalDebt.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Last Payment</p>
                          <p className="text-sm font-medium text-foreground">
                            {new Date(customer.lastPayment).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredCustomers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No customers found matching your search</p>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Customers;
