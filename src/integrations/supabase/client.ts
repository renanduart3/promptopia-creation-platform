// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qdkpnaplfptttymgsdco.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFka3BuYXBsZnB0dHR5bWdzZGNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MjAyNTAsImV4cCI6MjA1NTI5NjI1MH0.GfzaZwkLCptzzNY-QCABsrvh4_TkohHr2S0LuGcsufc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);