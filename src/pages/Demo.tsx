import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { DebtTable } from "@/components/DebtTable";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <Dashboard />
          <DebtTable />
        </div>
      </main>
    </div>
  );
};

export default Demo;
