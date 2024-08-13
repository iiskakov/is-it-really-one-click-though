import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.kz',
      },
    ],
  },
  experimental: {
    ppr: true,
    reactCompiler: true
  },

};


export default withPayload(nextConfig);
