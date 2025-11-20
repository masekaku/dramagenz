/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Tanda ** artinya BOLEH SEMUA DOMAIN (agar gambar tidak error)
      },
    ],
  },
};

export default nextConfig;
