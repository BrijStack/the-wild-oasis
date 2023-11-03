import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mkfqhaneqzwvmfjkpzhp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZnFoYW5lcXp3dm1mamtwemhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5Nzk3MTMsImV4cCI6MjAxMzU1NTcxM30.bj6Ajlzo_A-KqejS3YPiNkSP4REmN_WWU3OitHs0Sk4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
