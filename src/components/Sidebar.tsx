import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, FileText, BarChart3, Settings, Bell, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Debts", path: "/debts" },
  { icon: Users, label: "Customers", path: "/customers" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Bot, label: "AI Bot", path: "/ai-bot" },
  { icon: Bell, label: "Reminders", path: "/reminders" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card shadow-sm">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PACE</h1>
              <p className="text-xs text-muted-foreground">Payments Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  isActive && "bg-primary/10 text-primary font-medium hover:bg-primary/15 hover:text-primary"
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
