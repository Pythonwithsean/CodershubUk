import { createClient } from "@supabase/supabase-js";
const PROJECT_URL = "https://talvpjiamafodpwvpkqz.supabase.co";
const PROJECT_TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbHZwamlhbWFmb2Rwd3Zwa3F6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzg2NzQ1MCwiZXhwIjoyMDI5NDQzNDUwfQ.4aAAYjVkQwBknWxZEih8g8DHwHMuerNYas7SVAX0VSg";
export const supabase = createClient(PROJECT_URL, PROJECT_TOKEN);