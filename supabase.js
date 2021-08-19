import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rctsupudaxdmomjrdwwf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTM5MzM3OSwiZXhwIjoxOTQ0OTY5Mzc5fQ.1AqO-e3uJMlMnq87hrav1B2NtfkBIefgNCUHJ4d2QlQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
