// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://twdrwramsqtotpguwulx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZHJ3cmFtc3F0b3RwZ3V3dWx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyOTQyNDgsImV4cCI6MjA1Mzg3MDI0OH0.En__0ASNbn7fmo2isvSVw1z2hNURBGgDwFTYUiSetVc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);