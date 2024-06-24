import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv"
dotenv.config()
const PROJECT_URL = process.env.SUPABASE_PROJECT_URL
const PROJECT_TOKEN = process.env.SUPABASE_TOKEN;
export const supabase = createClient(PROJECT_URL!, PROJECT_TOKEN!);