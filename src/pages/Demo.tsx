import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { DebtTable } from "@/components/DebtTable";
import { PasswordProtection } from "@/components/PasswordProtection";

const Demo = () => {
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <Dashboard />
            <DebtTable />
          </div>
        </main>
      </div>
    </PasswordProtection>
  );
};

export default Demo;
