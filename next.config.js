/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images-platform.99static.com", // uploadthing
      },
      {
        protocol: 'https',
        hostname: "*ipfs.com" // uploadthing
      },
      {
        protocol: 'https',
        hostname: "*utfs.io" // uploadthing
      },
      {
        protocol: "https",
        hostname: "*githubusercontent.com", // avatar
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      }
    ],
  },
};

export default config;
