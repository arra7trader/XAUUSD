import { createClient } from "next-sanity";

const apiVersion = "2026-03-01";

export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiToken: process.env.SANITY_API_TOKEN || "",
};

export function isSanityConfigured() {
  return Boolean(sanityEnv.projectId && sanityEnv.dataset);
}

let cachedClient: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
  if (!isSanityConfigured()) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion,
      useCdn: true,
      token: sanityEnv.apiToken || undefined,
      perspective: "published",
    });
  }

  return cachedClient;
}
