import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Users, Phone, Mail, TrendingUp, CheckCircle2 } from "lucide-react";
import { useStrategies } from "@/hooks/useStrategies";
import { Skeleton } from "@/components/ui/skeleton";

interface Strategy {
  id: string;
  name: string;
  description: string;
  currentProgress: number;
  targetAccounts: number;
  expectedRecovery: number;
  expectedDate: string;
  debtClassification: "reminder" | "pre-collection" | "collection" | "legal";
  status: "active" | "planned" | "completed";
  priority: "high" | "medium" | "low";
}

const strategies: Strategy[] = [
  {
    id: "1",
    name: "High-Value Account Focus",
    description: "Intensive collection efforts on accounts over $50,000",
    currentProgress: 65,
    targetAccounts: 24,
    expectedRecovery: 285000,
    expectedDate: "Q1 2025",
    debtClassification: "collection",
    status: "active",
    priority: "high",
  },
  {
    id: "2",
    name: "Automated Reminder Campaign",
    description: "Email and SMS reminders for 30-60 day overdue accounts",
    currentProgress: 42,
    targetAccounts: 156,
    expectedRecovery: 420000,
    expectedDate: "Q4 2024",
    debtClassification: "reminder",
    status: "active",
    priority: "high",
  },
  {
    id: "3",
    name: "Personal Outreach Program",
    description: "Phone calls to top 50 customers with payment plans",
    currentProgress: 28,
    targetAccounts: 50,
    expectedRecovery: 180000,
    expectedDate: "Q1 2025",
    debtClassification: "pre-collection",
    status: "active",
    priority: "medium",
  },
  {
    id: "4",
    name: "Early Settlement Incentives",
    description: "5% discount for immediate payment on overdue accounts",
    currentProgress: 0,
    targetAccounts: 89,
    expectedRecovery: 215000,
    expectedDate: "Q2 2025",
    debtClassification: "reminder",
    status: "planned",
    priority: "medium",
  },
  {
    id: "5",
    name: "Legal Recovery Initiative",
    description: "Court proceedings for high-value non-responsive accounts",
    currentProgress: 15,
    targetAccounts: 12,
    expectedRecovery: 450000,
    expectedDate: "Q3 2025",
    debtClassification: "legal",
    status: "active",
    priority: "high",
  },
  {
    id: "6",
    name: "Q3 Recovery Sprint",
    description: "Completed intensive 60-day collection push",
    currentProgress: 100,
    targetAccounts: 67,
    expectedRecovery: 340000,
    expectedDate: "Q3 2024",
    debtClassification: "collection",
    status: "completed",
    priority: "high",
  },
];

const statusConfig = {
  active: { label: "Active", color: "bg-primary/10 text-primary hover:bg-primary/20" },
  planned: { label: "Planned", color: "bg-warning/10 text-warning hover:bg-warning/20" },
  completed: { label: "Completed", color: "bg-success/10 text-success hover:bg-success/20" },
};

const priorityConfig = {
  high: { label: "High Priority", color: "bg-destructive/10 text-destructive" },
  medium: { label: "Medium Priority", color: "bg-warning/10 text-warning" },
  low: { label: "Low Priority", color: "bg-muted text-muted-foreground" },
};

const classificationConfig = {
  reminder: { label: "Simple Debt Management", icon: "📧", color: "bg-blue-500/10 text-blue-600" },
  "pre-collection": { label: "Pre-Collection Process", icon: "📞", color: "bg-yellow-500/10 text-yellow-600" },
  collection: { label: "Collection Process", icon: "💼", color: "bg-orange-500/10 text-orange-600" },
  legal: { label: "Legal Collection Process", icon: "⚖️", color: "bg-red-500/10 text-red-600" },
};

export const CollectionStrategy = () => {
  const { strategies, isLoading } = useStrategies();
  
  const activeStrategies = strategies.filter((s) => s.status === "active");
  const totalExpectedRecovery = activeStrategies.reduce((sum, s) => sum + Number(s.expected_recovery), 0);
  const averageProgress = activeStrategies.length > 0 
    ? activeStrategies.reduce((sum, s) => sum + s.current_progress, 0) / activeStrategies.length 
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Strategies</p>
              <p className="text-3xl font-bold text-foreground">{activeStrategies.length}</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">In progress</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Target Accounts</p>
              <p className="text-3xl font-bold text-foreground">
                {activeStrategies.reduce((sum, s) => sum + s.target_accounts, 0)}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-accent/10">
              <Users className="w-6 h-6 text-accent" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Under active collection</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Expected Recovery</p>
              <p className="text-3xl font-bold text-success">${(totalExpectedRecovery / 1000).toFixed(0)}K</p>
            </div>
            <div className="p-3 rounded-lg bg-success/10">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">From active strategies</p>
        </Card>

        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avg Progress</p>
              <p className="text-3xl font-bold text-foreground">{averageProgress.toFixed(0)}%</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/10">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Across all strategies</p>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-card border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Collection Strategies</h3>
            <p className="text-muted-foreground mt-1">Manage and track your collection initiatives</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Target className="w-4 h-4 mr-2" />
            New Strategy
          </Button>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-5">
                <Skeleton className="h-32 w-full" />
              </Card>
            ))
          ) : strategies.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No collection strategies found</p>
            </Card>
          ) : (
            strategies.map((strategy) => (
            <Card key={strategy.id} className="p-5 bg-card border-border hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4 className="text-lg font-semibold text-foreground">{strategy.name}</h4>
                      <Badge variant="outline" className={statusConfig[strategy.status].color}>
                        {statusConfig[strategy.status].label}
                      </Badge>
                      <Badge variant="outline" className={priorityConfig[strategy.priority].color}>
                        {priorityConfig[strategy.priority].label}
                      </Badge>
                      <Badge variant="outline" className={classificationConfig[strategy.debt_classification].color}>
                        {classificationConfig[strategy.debt_classification].icon} {classificationConfig[strategy.debt_classification].label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{strategy.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Progress</p>
                        <div className="flex items-center gap-2">
                          <Progress value={strategy.current_progress} className="flex-1 h-2" />
                          <span className="text-sm font-semibold text-foreground">
                            {strategy.current_progress}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Target Accounts</p>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-semibold text-foreground">
                            {strategy.target_accounts}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Expected Recovery</p>
                        <span className="text-sm font-semibold text-success">
                          ${Number(strategy.expected_recovery).toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Expected By</p>
                        <span className="text-sm font-semibold text-primary">
                          {strategy.expected_date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-2">
                    {strategy.status === "active" && (
                      <>
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          Send Reminders
                        </Button>
                      </>
                    )}
                    {strategy.status === "planned" && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Launch Strategy
                      </Button>
                    )}
                    {strategy.status === "completed" && (
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))
          )}
        </div>
      </Card>
    </div>
  );
};
