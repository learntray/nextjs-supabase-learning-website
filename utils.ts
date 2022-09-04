export const isSsr = typeof window === "undefined";

export type EnvVar = "appUrl";
export type EnvVars = Record<EnvVar, string>;

// Need to use `var variable = process.env.VARIABLE;`, not `var env = process.env; var variable = env.VARIABLE;`
// https://github.com/vercel/next.js/issues/19420
export const envVars: EnvVars = {
  appUrl: process.env["NEXT_PUBLIC_VERCEL_URL"]!,
};
