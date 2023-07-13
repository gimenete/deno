import { serve } from "https://deno.land/std@0.176.0/http/server.ts";

let port = parseInt(Deno.env.get("PORT") ?? "8000");

console.log("EXAMPLE env variable:", Deno.env.get("EXAMPLE"));
