import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qojcrfslvvhorarydhwr.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);
