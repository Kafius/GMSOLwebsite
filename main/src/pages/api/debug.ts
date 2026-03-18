export const prerender = false;
import type { APIContext } from 'astro';

export function GET(context: APIContext) {
  return new Response(JSON.stringify({
    clientId: !!import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: !!import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: !!import.meta.env.KEYSTATIC_SECRET,
    processClientId: !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    processSecret: !!process.env.KEYSTATIC_SECRET,
  }), { headers: { 'Content-Type': 'application/json' } });
}
