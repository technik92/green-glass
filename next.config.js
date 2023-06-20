/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/efziyactlz5m/**",
      },
    ],
  },

  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "max-snippet:-1",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

module.exports = nextConfig;
