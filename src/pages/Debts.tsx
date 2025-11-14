import { Sidebar } from "@/components/Sidebar";
import { DebtTable } from "@/components/DebtTable";

const Debts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <DebtTable />
        </div>
      </main>
    </div>
  );
};

export default Debts;
