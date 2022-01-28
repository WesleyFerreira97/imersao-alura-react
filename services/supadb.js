import { createClient } from "@supabase/supabase-js";

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM0MDAyNiwiZXhwIjoxOTU4OTE2MDI2fQ.2nQ33SF-SqcD8fLMNEuTyNUB7Tr5iS_gwaKioUKJwPI';
const SUPABASE_URL = 'https://rgyyvvjmrbvgtwlhifnp.supabase.co';


export const supaDb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);