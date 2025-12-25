// Supabase Client Initialization (Global Scope)
const supabaseUrl = 'https://xdvnweeorbuqmrgbtxuu.supabase.co';
const supabaseKey = 'sb_publishable_eHXON1ifMqmCGCqBIUd01A_WTaVq1Qu';

// supabase is provided by the CDN script in index.html
if (window.supabase) {
    window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
} else {
    console.error('Supabase SDK not loaded');
}
