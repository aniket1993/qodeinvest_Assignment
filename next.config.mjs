/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        
    },
    reactStrictMode: false,
    async headers() {
        return [{
            source: '/(.*)',
            headers: securityHeaders,
        }]
    },
    images: {
        domains: [],
    },
};
//Added for clickjacking 
const securityHeaders = [
    {
        key: 'X-Frame-Options',
        value: "SAMEORIGIN"
    },
    {
        key: 'Cache-Control',
        value: 'public, max-age=9999999999, must-revalidate',
    }
]
export default nextConfig;
