import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const collectionTrendData = [
  { month: "Jan", collected: 245000, outstanding: 180000 },
  { month: "Feb", collected: 268000, outstanding: 165000 },
  { month: "Mar", collected: 290000, outstanding: 145000 },
  { month: "Apr", collected: 315000, outstanding: 135000 },
  { month: "May", collected: 342000, outstanding: 125000 },
  { month: "Jun", collected: 358000, outstanding: 115000 },
];

const statusDistributionData = [
  { name: "Paid", value: 65, color: "hsl(145, 65%, 50%)" },
  { name: "Pending", value: 20, color: "hsl(35, 90%, 55%)" },
  { name: "Overdue", value: 15, color: "hsl(0, 75%, 55%)" },
];

const agingReportData = [
  { range: "0-30 days", amount: 245000 },
  { range: "31-60 days", amount: 180000 },
  { range: "61-90 days", amount: 125000 },
  { range: "90+ days", amount: 95000 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Analytics</h1>
            <p className="text-muted-foreground">Track collection trends and performance metrics</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Collection Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={collectionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 18%)" />
                  <XAxis dataKey="month" stroke="hsl(215, 15%, 65%)" />
                  <YAxis stroke="hsl(215, 15%, 65%)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220, 25%, 10%)",
                      border: "1px solid hsl(220, 20%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 20%, 98%)",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="collected" stroke="hsl(210, 100%, 50%)" strokeWidth={2} name="Collected" />
                  <Line type="monotone" dataKey="outstanding" stroke="hsl(0, 75%, 55%)" strokeWidth={2} name="Outstanding" />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Payment Status Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220, 25%, 10%)",
                      border: "1px solid hsl(220, 20%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 20%, 98%)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 bg-gradient-card border-border md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-4">Days Receivables Outstanding (DRO) Report</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={agingReportData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 18%)" />
                  <XAxis dataKey="range" stroke="hsl(215, 15%, 65%)" />
                  <YAxis stroke="hsl(215, 15%, 65%)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220, 25%, 10%)",
                      border: "1px solid hsl(220, 20%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 20%, 98%)",
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(210, 100%, 50%)" name="Amount ($)" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Days Receivables Outstanding (DRO)</h4>
              <p className="text-3xl font-bold text-foreground">42 days</p>
              <p className="text-sm text-success mt-2">-5 days vs last quarter</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Days Sales Outstanding (DSO)</h4>
              <p className="text-3xl font-bold text-foreground">38 days</p>
              <p className="text-sm text-success mt-2">-3 days vs last quarter</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Collection Effectiveness Index (CEI)</h4>
              <p className="text-3xl font-bold text-foreground">87.5%</p>
              <p className="text-sm text-success mt-2">+3.2% vs last quarter</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Average Days to Payment</h4>
              <p className="text-3xl font-bold text-foreground">35 days</p>
              <p className="text-sm text-success mt-2">-4 days vs last quarter</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Roll Rate</h4>
              <p className="text-3xl font-bold text-foreground">12.3%</p>
              <p className="text-sm text-success mt-2">-2.1% vs last quarter</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
