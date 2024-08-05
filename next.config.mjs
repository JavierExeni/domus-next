/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyc3.digitaloceanspaces.com",
        // port: "",
        // pathname: "/firmacasas/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "nyc3.digitaloceanspaces.com",
      //   port: "",
      //   pathname: "/firmacasas/domus/public/employee/image_profile/**",
      // },
    ],
  },
};

export default nextConfig;
