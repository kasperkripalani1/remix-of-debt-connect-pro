import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, TrendingDown, DollarSign, AlertTriangle } from "lucide-react";

interface DebtPayable {
  id: string;
  creditor: string;
  amount: number;
  dueDate: string;
  priority: "high" | "medium" | "low";
  minimumPayment: number;
}

const mockDebtsPayable: DebtPayable[] = [
  { id: "1", creditor: "Supplier A", amount: 125000, dueDate: "2024-11-30", priority: "high", minimumPayment: 25000 },
  { id: "2", creditor: "Vendor B", amount: 85000, dueDate: "2024-12-15", priority: "medium", minimumPayment: 17000 },
  { id: "3", creditor: "Service Provider C", amount: 45000, dueDate: "2024-12-20", priority: "low", minimumPayment: 9000 },
  { id: "4", creditor: "Contractor D", amount: 67000, dueDate: "2024-12-10", priority: "medium", minimumPayment: 13400 },
];

export const CashFlowManager = () => {
  const [allocations, setAllocations] = useState<Record<string, number>>(
    mockDebtsPayable.reduce((acc, debt) => ({ ...acc, [debt.id]: debt.minimumPayment }), {})
  );

  const totalReceivable = 1200000; // Total debt receivable
  const baseCollectionRate = 87.5;
  
  const totalAllocated = Object.values(allocations).reduce((sum, val) => sum + val, 0);
  const cashAvailable = totalReceivable * (baseCollectionRate / 100);
  const remainingCash = cashAvailable - totalAllocated;
  
  // Calculate improved collection rate based on cash freed up
  const cashFreedUp = mockDebtsPayable.reduce((sum, debt) => sum + (debt.amount - allocations[debt.id]), 0);
  const collectionRateBoost = Math.min((cashFreedUp / 100000) * 2, 15); // 2% per 100k freed, max 15%
  const projectedCollectionRate = baseCollectionRate + collectionRateBoost;

  const handleAllocationChange = (id: string, value: number[]) => {
    setAllocations((prev) => ({ ...prev, [id]: value[0] }));
  };

  const priorityConfig = {
    high: { color: "bg-destructive/10 text-destructive", label: "High Priority" },
    medium: { color: "bg-warning/10 text-warning", label: "Medium Priority" },
    low: { color: "bg-muted text-muted-foreground", label: "Low Priority" },
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Available Cash</p>
              <p className="text-3xl font-bold text-foreground">${cashAvailable.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Cash collected through PACE</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/10">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">From {baseCollectionRate}% collection rate</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Remaining After Allocations</p>
              <p className={`text-3xl font-bold ${remainingCash >= 0 ? 'text-success' : 'text-destructive'}`}>
                ${remainingCash.toLocaleString()}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${remainingCash >= 0 ? 'bg-success/10' : 'bg-destructive/10'}`}>
              {remainingCash >= 0 ? (
                <TrendingUp className="w-6 h-6 text-success" />
              ) : (
                <TrendingDown className="w-6 h-6 text-destructive" />
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {remainingCash >= 0 ? 'Positive cash position' : 'Over allocated'}
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-primary/20 border-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Projected Collection Rate</p>
                <p className="text-3xl font-bold text-primary">{projectedCollectionRate.toFixed(1)}%</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-success/10 text-success hover:bg-success/20">
                +{collectionRateBoost.toFixed(1)}%
              </Badge>
              <span className="text-xs text-muted-foreground">improvement</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-card border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Optimize Debt Payments</h3>
            <p className="text-muted-foreground mt-1">
              Reduce payments to free up cash and improve collection capacity
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Apply Strategy
          </Button>
        </div>

        <div className="space-y-6">
          {mockDebtsPayable.map((debt) => {
            const allocation = allocations[debt.id];
            const reduction = debt.amount - allocation;
            const reductionPercent = (reduction / debt.amount) * 100;

            return (
              <Card key={debt.id} className="p-5 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{debt.creditor}</h4>
                        <Badge className={priorityConfig[debt.priority].color}>
                          {priorityConfig[debt.priority].label}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Total Due</p>
                          <p className="font-semibold text-foreground">${debt.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Due Date</p>
                          <p className="font-semibold text-foreground">
                            {new Date(debt.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Minimum Required</p>
                          <p className="font-semibold text-foreground">${debt.minimumPayment.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Cash Freed</p>
                          <p className="font-semibold text-success">${reduction.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm text-muted-foreground">Payment Amount</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={allocation}
                          onChange={(e) => handleAllocationChange(debt.id, [Number(e.target.value)])}
                          className="w-32 h-8 text-right"
                          min={debt.minimumPayment}
                          max={debt.amount}
                        />
                        <span className="text-sm font-medium text-foreground">
                          ({reductionPercent.toFixed(0)}% reduction)
                        </span>
                      </div>
                    </div>
                    <Slider
                      value={[allocation]}
                      onValueChange={(value) => handleAllocationChange(debt.id, value)}
                      min={debt.minimumPayment}
                      max={debt.amount}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Min: ${debt.minimumPayment.toLocaleString()}</span>
                      <span>Full: ${debt.amount.toLocaleString()}</span>
                    </div>
                  </div>

                  {allocation < debt.amount * 0.5 && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-warning">
                        Low payment may impact relationship with {debt.creditor}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-primary border-primary">
        <div className="flex items-center justify-between text-primary-foreground">
          <div>
            <h4 className="text-lg font-semibold mb-1">Collection Rate Impact</h4>
            <p className="text-sm opacity-90">
              By freeing up ${cashFreedUp.toLocaleString()}, you can deploy more resources to debt collection
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm opacity-75">Current</p>
                <p className="text-2xl font-bold">{baseCollectionRate}%</p>
              </div>
              <ArrowRight className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-75">Projected</p>
                <p className="text-2xl font-bold">{projectedCollectionRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
