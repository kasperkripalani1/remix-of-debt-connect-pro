import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Clock, Users } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
}

const MetricCard = ({ title, value, change, icon, positive = true }: MetricCardProps) => (
  <Card className="p-6 transition-all duration-300 hover:shadow-md border-border bg-card">
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
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Track your debt collection performance and outstanding payments</p>
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
    </div>
  );
};
