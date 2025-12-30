import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Skeleton } from "@/components/ui/skeleton";

// Demo data for the table - German customer data
const demoDebts = [
  {
    id: "1",
    customerName: "Maximilian Berger",
    invoiceNumber: "INV-2024-001",
    amount: 1102,
    dueDate: "2024-11-20",
    status: "overdue" as const,
    classification: "collection" as const,
    lastContact: "2025-11-14",
    hasDetailPage: true,
  },
  {
    id: "2",
    customerName: "Elena Petrova",
    invoiceNumber: "INV-2024-002",
    amount: 2450,
    dueDate: "2024-12-15",
    status: "pending" as const,
    classification: "reminder" as const,
    lastContact: "2025-11-10",
    hasDetailPage: false,
  },
  {
    id: "3",
    customerName: "Jonas K.",
    invoiceNumber: "INV-2024-003",
    amount: 890,
    dueDate: "2024-11-28",
    status: "partial" as const,
    classification: "pre-collection" as const,
    lastContact: "2025-11-08",
    hasDetailPage: false,
  },
  {
    id: "4",
    customerName: "Sabine Wagner",
    invoiceNumber: "INV-2024-004",
    amount: 1750,
    dueDate: "2024-12-05",
    status: "pending" as const,
    classification: "reminder" as const,
    lastContact: "2025-11-12",
    hasDetailPage: false,
  },
  {
    id: "5",
    customerName: "Mehmet Yilmaz",
    invoiceNumber: "INV-2024-005",
    amount: 3200,
    dueDate: "2024-10-30",
    status: "overdue" as const,
    classification: "legal" as const,
    lastContact: "2025-11-05",
    hasDetailPage: false,
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

const formatDateDE = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const DebtTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const navigate = useNavigate();

  const filteredDebts = demoDebts.filter((debt) => {
    const matchesSearch =
      debt.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      debt.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || debt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewClick = (debt: typeof demoDebts[0]) => {
    if (debt.hasDetailPage) {
      navigate("/customers/maximilian-berger");
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Consumer Accounts</h2>
            <p className="text-muted-foreground">Manage and track consumer payment collection</p>
          </div>
          
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search consumers or accounts..."
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
                <TableHead className="font-semibold">Consumer</TableHead>
                <TableHead className="font-semibold">Account #</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Due Date</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Classification</TableHead>
                <TableHead className="font-semibold">Last Contact</TableHead>
                <TableHead className="text-right font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDebts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    Keine Kundenkonten gefunden
                  </TableCell>
                </TableRow>
              ) : (
                filteredDebts.map((debt) => (
                  <TableRow key={debt.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">{debt.customerName}</TableCell>
                    <TableCell className="text-muted-foreground">{debt.invoiceNumber}</TableCell>
                    <TableCell className="font-semibold text-foreground">
                      €{Number(debt.amount).toLocaleString("de-DE", { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell>{formatDateDE(debt.dueDate)}</TableCell>
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
                    <TableCell className="text-muted-foreground">
                      {formatDateDE(debt.lastContact)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary"
                        onClick={() => handleViewClick(debt)}
                      >
                        View
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {filteredDebts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No consumer accounts found matching your criteria</p>
          </div>
        )}
      </div>
    </Card>
  );
};
