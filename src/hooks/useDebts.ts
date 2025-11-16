import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Debt {
  id: string;
  customer_id: string | null;
  invoice_number: string;
  amount: number;
  due_date: string;
  status: "paid" | "pending" | "overdue" | "partial";
  classification: "reminder" | "pre-collection" | "collection" | "legal";
  last_contact: string | null;
  created_at: string;
  updated_at: string;
  customers?: {
    id: string;
    name: string;
    company: string | null;
  };
}

export const useDebts = () => {
  const queryClient = useQueryClient();

  const { data: debts = [], isLoading } = useQuery({
    queryKey: ["debts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("debts")
        .select(`
          *,
          customers (
            id,
            name,
            company
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Debt[];
    },
  });

  const updateDebtStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from("debts")
        .update({ status })
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debts"] });
      toast.success("Debt status updated successfully");
    },
    onError: () => {
      toast.error("Failed to update debt status");
    },
  });

  return {
    debts,
    isLoading,
    updateDebtStatus: updateDebtStatus.mutate,
  };
};
