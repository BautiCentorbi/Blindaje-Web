/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cotizaciones",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
