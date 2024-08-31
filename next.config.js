/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true // Habilita Server Actions (aunque debería estar habilitado por defecto en versiones recientes)
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com'
      }
    ]
  }
};

module.exports = nextConfig;
