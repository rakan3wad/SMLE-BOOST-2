import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lrgxiqtihgjpydfklhak.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZ3hpcXRpaGdqcHlkZmtsaGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMzQ4NDgsImV4cCI6MjA0MjcxMDg0OH0.AwzMxYOBZZXXZZMZZZZZZZZZZZZZZZZZZZZZZZZZZZZ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)