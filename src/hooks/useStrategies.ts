import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Strategy {
  id: string;
  name: string;
  description: string | null;
  current_progress: number;
  target_accounts: number;
  expected_recovery: number;
  expected_date: string;
  debt_classification: "reminder" | "pre-collection" | "collection" | "legal";
  status: "active" | "planned" | "completed";
  priority: "high" | "medium" | "low";
  created_at: string;
  updated_at: string;
}

export const useStrategies = () => {
  const queryClient = useQueryClient();

  const { data: strategies = [], isLoading } = useQuery({
    queryKey: ["strategies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("collection_strategies")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Strategy[];
    },
  });

  const updateStrategy = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Strategy> }) => {
      const { error } = await supabase
        .from("collection_strategies")
        .update(updates)
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["strategies"] });
      toast.success("Strategy updated successfully");
    },
    onError: () => {
      toast.error("Failed to update strategy");
    },
  });

  return {
    strategies,
    isLoading,
    updateStrategy: updateStrategy.mutate,
  };
};
