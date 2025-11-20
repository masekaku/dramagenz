/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.bp.blogspot.com' },      // Blogspot lama
      { protocol: 'https', hostname: '*.googleusercontent.com' }, // Blogspot baru
      { protocol: 'https', hostname: 'qu.ax' },                   // Video/Image host
      { protocol: 'https', hostname: '**' },                      // Izinkan semua (opsional)
    ],
  },
};

export default nextConfig;
