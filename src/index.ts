import { serve } from "https://deno.land/std@0.176.0/http/server.ts";

let port = parseInt(Deno.env.get("PORT") ?? "8000");

console.log("EXAMPLE from railway CLI", Deno.env.get("EXAMPLE"));

setTimeout(() => {
  console.log("bye bye")
}, 3000)
