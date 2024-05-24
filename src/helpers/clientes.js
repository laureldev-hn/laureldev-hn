import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://sgcojjqacyzgaolozmkp.supabase.co' //import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnY29qanFhY3l6Z2FvbG96bWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjYxNzUsImV4cCI6MjAzMDg0MjE3NX0.AxNIGugJgYi-OUwUFSn0bqkMXXIWDvr8QsDlhQEeTIg' //import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)