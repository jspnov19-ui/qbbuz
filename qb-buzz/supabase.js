import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://cmuuajlnaeeczkvwyjvm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdXVhamxuYWVlY3prdnd5anZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MzMyNDIsImV4cCI6MjA5NDEwOTI0Mn0.PU_ZPMFZgqfCVgOgrYMaK6VtpJ7XXiFUXbDQ3YnZZ4E";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);