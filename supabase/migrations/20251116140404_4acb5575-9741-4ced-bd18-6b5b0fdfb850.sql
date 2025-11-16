-- Create customers table
CREATE TABLE IF NOT EXISTS public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create debts table
CREATE TABLE IF NOT EXISTS public.debts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  invoice_number TEXT NOT NULL UNIQUE,
  amount DECIMAL(12, 2) NOT NULL,
  due_date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('paid', 'pending', 'overdue', 'partial')),
  classification TEXT NOT NULL CHECK (classification IN ('reminder', 'pre-collection', 'collection', 'legal')),
  last_contact TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create collection strategies table
CREATE TABLE IF NOT EXISTS public.collection_strategies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  current_progress INTEGER DEFAULT 0 CHECK (current_progress >= 0 AND current_progress <= 100),
  target_accounts INTEGER NOT NULL,
  expected_recovery DECIMAL(12, 2) NOT NULL,
  expected_date TEXT NOT NULL,
  debt_classification TEXT NOT NULL CHECK (debt_classification IN ('reminder', 'pre-collection', 'collection', 'legal')),
  status TEXT NOT NULL CHECK (status IN ('active', 'planned', 'completed')),
  priority TEXT NOT NULL CHECK (priority IN ('high', 'medium', 'low')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.debts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_strategies ENABLE ROW LEVEL SECURITY;

-- Create policies (public access for demo - in production you'd want user-specific policies)
CREATE POLICY "Allow public read access on customers" ON public.customers FOR SELECT USING (true);
CREATE POLICY "Allow public insert on customers" ON public.customers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on customers" ON public.customers FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on customers" ON public.customers FOR DELETE USING (true);

CREATE POLICY "Allow public read access on debts" ON public.debts FOR SELECT USING (true);
CREATE POLICY "Allow public insert on debts" ON public.debts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on debts" ON public.debts FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on debts" ON public.debts FOR DELETE USING (true);

CREATE POLICY "Allow public read access on strategies" ON public.collection_strategies FOR SELECT USING (true);
CREATE POLICY "Allow public insert on strategies" ON public.collection_strategies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on strategies" ON public.collection_strategies FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on strategies" ON public.collection_strategies FOR DELETE USING (true);

-- Create indexes for better performance
CREATE INDEX idx_debts_customer_id ON public.debts(customer_id);
CREATE INDEX idx_debts_status ON public.debts(status);
CREATE INDEX idx_debts_due_date ON public.debts(due_date);
CREATE INDEX idx_strategies_status ON public.collection_strategies(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON public.customers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_debts_updated_at BEFORE UPDATE ON public.debts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_strategies_updated_at BEFORE UPDATE ON public.collection_strategies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();