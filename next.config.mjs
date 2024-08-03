/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nyc3.digitaloceanspaces.com'
            }
        ]
    }
};

export default nextConfig;
