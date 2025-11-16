import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, ChevronRight } from "lucide-react";

interface Debt {
  id: string;
  customer: string;
  invoiceNumber: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue" | "partial";
  classification: "reminder" | "pre-collection" | "collection" | "legal";
  lastContact: string;
}

const mockDebts: Debt[] = [
  {
    id: "1",
    customer: "Acme Corporation",
    invoiceNumber: "INV-2024-001",
    amount: 45000,
    dueDate: "2024-11-20",
    status: "overdue",
    classification: "collection",
    lastContact: "2 days ago",
  },
  {
    id: "2",
    customer: "TechStart Inc.",
    invoiceNumber: "INV-2024-002",
    amount: 28500,
    dueDate: "2024-11-25",
    status: "pending",
    classification: "reminder",
    lastContact: "5 days ago",
  },
  {
    id: "3",
    customer: "Global Solutions Ltd",
    invoiceNumber: "INV-2024-003",
    amount: 67200,
    dueDate: "2024-11-15",
    status: "partial",
    classification: "pre-collection",
    lastContact: "1 day ago",
  },
  {
    id: "4",
    customer: "Innovation Labs",
    invoiceNumber: "INV-2024-004",
    amount: 15800,
    dueDate: "2024-11-30",
    status: "pending",
    classification: "reminder",
    lastContact: "1 week ago",
  },
  {
    id: "5",
    customer: "Enterprise Systems",
    invoiceNumber: "INV-2024-005",
    amount: 92300,
    dueDate: "2024-11-10",
    status: "overdue",
    classification: "legal",
    lastContact: "3 days ago",
  },
];

const statusConfig = {
  paid: { label: "Paid", className: "bg-success/10 text-success hover:bg-success/20" },
  pending: { label: "Pending", className: "bg-warning/10 text-warning hover:bg-warning/20" },
  overdue: { label: "Overdue", className: "bg-destructive/10 text-destructive hover:bg-destructive/20" },
  partial: { label: "Partial", className: "bg-accent/10 text-accent hover:bg-accent/20" },
};

const classificationConfig = {
  reminder: { label: "Simple Debt Management", icon: "📧", className: "bg-blue-500/10 text-blue-600" },
  "pre-collection": { label: "Pre-Collection", icon: "📞", className: "bg-yellow-500/10 text-yellow-600" },
  collection: { label: "Collection", icon: "💼", className: "bg-orange-500/10 text-orange-600" },
  legal: { label: "Legal Collection", icon: "⚖️", className: "bg-red-500/10 text-red-600" },
};

export const DebtTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredDebts = mockDebts.filter((debt) => {
    const matchesSearch =
      debt.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      debt.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || debt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Outstanding Debts</h2>
            <p className="text-muted-foreground">Manage and track payment collection</p>
          </div>
          
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search customers or invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Customer</TableHead>
                <TableHead className="font-semibold">Invoice</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Due Date</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Classification</TableHead>
                <TableHead className="font-semibold">Last Contact</TableHead>
                <TableHead className="text-right font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDebts.map((debt) => (
                <TableRow key={debt.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">{debt.customer}</TableCell>
                  <TableCell className="text-muted-foreground">{debt.invoiceNumber}</TableCell>
                  <TableCell className="font-semibold text-foreground">
                    ${debt.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>{new Date(debt.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge className={statusConfig[debt.status].className}>
                      {statusConfig[debt.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={classificationConfig[debt.classification].className}>
                      {classificationConfig[debt.classification].icon} {classificationConfig[debt.classification].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{debt.lastContact}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      View
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredDebts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No debts found matching your criteria</p>
          </div>
        )}
      </div>
    </Card>
  );
};
