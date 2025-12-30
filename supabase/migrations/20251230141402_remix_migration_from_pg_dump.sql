CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: collection_strategies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.collection_strategies (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    current_progress integer DEFAULT 0,
    target_accounts integer NOT NULL,
    expected_recovery numeric(12,2) NOT NULL,
    expected_date text NOT NULL,
    debt_classification text NOT NULL,
    status text NOT NULL,
    priority text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT collection_strategies_current_progress_check CHECK (((current_progress >= 0) AND (current_progress <= 100))),
    CONSTRAINT collection_strategies_debt_classification_check CHECK ((debt_classification = ANY (ARRAY['reminder'::text, 'pre-collection'::text, 'collection'::text, 'legal'::text]))),
    CONSTRAINT collection_strategies_priority_check CHECK ((priority = ANY (ARRAY['high'::text, 'medium'::text, 'low'::text]))),
    CONSTRAINT collection_strategies_status_check CHECK ((status = ANY (ARRAY['active'::text, 'planned'::text, 'completed'::text])))
);


--
-- Name: customers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.customers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    email text,
    phone text,
    company text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: debts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.debts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    customer_id uuid,
    invoice_number text NOT NULL,
    amount numeric(12,2) NOT NULL,
    due_date date NOT NULL,
    status text NOT NULL,
    classification text NOT NULL,
    last_contact timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT debts_classification_check CHECK ((classification = ANY (ARRAY['reminder'::text, 'pre-collection'::text, 'collection'::text, 'legal'::text]))),
    CONSTRAINT debts_status_check CHECK ((status = ANY (ARRAY['paid'::text, 'pending'::text, 'overdue'::text, 'partial'::text])))
);


--
-- Name: collection_strategies collection_strategies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collection_strategies
    ADD CONSTRAINT collection_strategies_pkey PRIMARY KEY (id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: debts debts_invoice_number_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debts
    ADD CONSTRAINT debts_invoice_number_key UNIQUE (invoice_number);


--
-- Name: debts debts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debts
    ADD CONSTRAINT debts_pkey PRIMARY KEY (id);


--
-- Name: idx_debts_customer_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_debts_customer_id ON public.debts USING btree (customer_id);


--
-- Name: idx_debts_due_date; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_debts_due_date ON public.debts USING btree (due_date);


--
-- Name: idx_debts_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_debts_status ON public.debts USING btree (status);


--
-- Name: idx_strategies_status; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_strategies_status ON public.collection_strategies USING btree (status);


--
-- Name: customers update_customers_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: debts update_debts_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_debts_updated_at BEFORE UPDATE ON public.debts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: collection_strategies update_strategies_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_strategies_updated_at BEFORE UPDATE ON public.collection_strategies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: debts debts_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.debts
    ADD CONSTRAINT debts_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON DELETE CASCADE;


--
-- Name: customers Allow public delete on customers; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public delete on customers" ON public.customers FOR DELETE USING (true);


--
-- Name: debts Allow public delete on debts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public delete on debts" ON public.debts FOR DELETE USING (true);


--
-- Name: collection_strategies Allow public delete on strategies; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public delete on strategies" ON public.collection_strategies FOR DELETE USING (true);


--
-- Name: customers Allow public insert on customers; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public insert on customers" ON public.customers FOR INSERT WITH CHECK (true);


--
-- Name: debts Allow public insert on debts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public insert on debts" ON public.debts FOR INSERT WITH CHECK (true);


--
-- Name: collection_strategies Allow public insert on strategies; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public insert on strategies" ON public.collection_strategies FOR INSERT WITH CHECK (true);


--
-- Name: customers Allow public read access on customers; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public read access on customers" ON public.customers FOR SELECT USING (true);


--
-- Name: debts Allow public read access on debts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public read access on debts" ON public.debts FOR SELECT USING (true);


--
-- Name: collection_strategies Allow public read access on strategies; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public read access on strategies" ON public.collection_strategies FOR SELECT USING (true);


--
-- Name: customers Allow public update on customers; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public update on customers" ON public.customers FOR UPDATE USING (true);


--
-- Name: debts Allow public update on debts; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public update on debts" ON public.debts FOR UPDATE USING (true);


--
-- Name: collection_strategies Allow public update on strategies; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Allow public update on strategies" ON public.collection_strategies FOR UPDATE USING (true);


--
-- Name: collection_strategies; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.collection_strategies ENABLE ROW LEVEL SECURITY;

--
-- Name: customers; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

--
-- Name: debts; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.debts ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;