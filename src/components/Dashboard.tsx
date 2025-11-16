import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Clock, Users, BarChart3, Target } from "lucide-react";
import { CashFlowManager } from "./CashFlowManager";
import { CollectionStrategy } from "./CollectionStrategy";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
}

const MetricCard = ({ title, value, change, icon, positive = true }: MetricCardProps) => (
  <Card className="p-6 transition-all duration-300 hover:shadow-md border-border bg-gradient-card">
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <div className="flex items-center gap-1">
          <span className={`text-sm font-medium ${positive ? 'text-success' : 'text-destructive'}`}>
            {change}
          </span>
          <span className="text-sm text-muted-foreground">vs last month</span>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-primary/10">
        {icon}
      </div>
    </div>
  </Card>
);

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive view of your collection performance and cash flow</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Outstanding"
          value="$1.2M"
          change="+8.3%"
          icon={<DollarSign className="w-6 h-6 text-primary" />}
        />
        <MetricCard
          title="Collection Rate"
          value="87.5%"
          change="+5.2%"
          icon={<TrendingUp className="w-6 h-6 text-primary" />}
        />
        <MetricCard
          title="Overdue Accounts"
          value="142"
          change="-12.1%"
          positive={true}
          icon={<Clock className="w-6 h-6 text-primary" />}
        />
        <MetricCard
          title="Active Customers"
          value="3,847"
          change="+3.7%"
          icon={<Users className="w-6 h-6 text-primary" />}
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-card border border-border">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="cashflow" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Optimize Priority Debt Collections
          </TabsTrigger>
          <TabsTrigger 
            value="strategy" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
          >
            <Target className="w-4 h-4 mr-2" />
            Collection Strategy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "Payment received", customer: "Acme Corporation", amount: 45000, time: "2 hours ago", type: "success" },
                  { action: "New overdue account", customer: "TechStart Inc.", amount: 28500, time: "3 hours ago", type: "warning" },
                  { action: "Payment plan created", customer: "Global Solutions", amount: 67200, time: "5 hours ago", type: "info" },
                  { action: "Review payment plan", customer: "Enterprise Systems", amount: 92300, time: "8 hours ago", type: "info" },
                  { action: "Payment plan negotiated", customer: "Innovation Labs", amount: 15800, time: "1 day ago", type: "info" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground truncate">{activity.customer}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-semibold text-foreground whitespace-nowrap">${activity.amount.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground whitespace-nowrap">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Top Priorities</h3>
              <div className="space-y-4">
                {[
                  { title: "Follow up: Enterprise Systems", priority: "high", dueDate: "Today", amount: 92300 },
                  { title: "Schedule call: Global Solutions", priority: "high", dueDate: "Tomorrow", amount: 67200 },
                  { title: "Send reminder: Acme Corp", priority: "medium", dueDate: "Nov 20", amount: 45000 },
                  { title: "Review payment plan: TechStart", priority: "medium", dueDate: "Nov 22", amount: 28500 },
                ].map((task, i) => (
                  <div key={i} className="flex items-start justify-between p-3 rounded-lg bg-card border border-border">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{task.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">Due: {task.dueDate} • ${task.amount.toLocaleString()}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'high' 
                        ? 'bg-destructive/10 text-destructive' 
                        : 'bg-warning/10 text-warning'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">This Week's Collections</h4>
              <p className="text-3xl font-bold text-foreground">$127K</p>
              <p className="text-sm text-success mt-2">+18% vs last week</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Avg Days to Collection</h4>
              <p className="text-3xl font-bold text-foreground">38 days</p>
              <p className="text-sm text-success mt-2">-4 days improvement</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Payment Plans Active</h4>
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground mt-2">$385K total value</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cashflow" className="mt-6">
          <CashFlowManager />
        </TabsContent>

        <TabsContent value="strategy" className="mt-6">
          <CollectionStrategy />
        </TabsContent>
      </Tabs>
    </div>
  );
};
