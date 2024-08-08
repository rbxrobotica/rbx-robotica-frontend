/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.cromofinanciamentos.com.br",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
