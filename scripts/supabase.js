// scripts/supabase.js
const SUPABASE_URL = 'https://rsgciefgsqoemdnfjcre.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ2NpZWZnc3FvZW1kbmZqY3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NjE1NzIsImV4cCI6MjA2ODEzNzU3Mn0.BguzqckGFbjHcfJw3qllP_M4i7pagBRAAH2bjmaXszw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabase = client;

// Auth helpers
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

async function signOutUser() {
    await supabase.auth.signOut();
    window.location.href = "/login.html";
}
