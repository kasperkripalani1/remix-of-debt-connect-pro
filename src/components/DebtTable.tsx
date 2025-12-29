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
import { useDebts } from "@/hooks/useDebts";
import { Skeleton } from "@/components/ui/skeleton";

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
  const { debts, isLoading } = useDebts();

  const filteredDebts = debts.filter((debt) => {
    const customerName = debt.customers?.name || "";
    const matchesSearch =
      customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      debt.invoice_number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || debt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={8}>
                      <Skeleton className="h-8 w-full" />
                    </TableCell>
                  </TableRow>
                ))
              ) : filteredDebts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No consumer accounts found
                  </TableCell>
                </TableRow>
              ) : (
                filteredDebts.map((debt) => (
                  <TableRow key={debt.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">{debt.customers?.name || "N/A"}</TableCell>
                    <TableCell className="text-muted-foreground">{debt.invoice_number}</TableCell>
                    <TableCell className="font-semibold text-foreground">
                      ${Number(debt.amount).toLocaleString()}
                    </TableCell>
                    <TableCell>{new Date(debt.due_date).toLocaleDateString()}</TableCell>
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
                      {debt.last_contact ? new Date(debt.last_contact).toLocaleDateString() : "Never"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
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
