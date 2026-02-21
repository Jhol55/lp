/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const longCache = 'public, max-age=31536000, immutable';

    // Evita quebrar o dev/HMR (e evita cachear bundles do /_next)
    if (process.env.NODE_ENV !== 'production') return [];

    return [
      {
        source: '/:all*(png|jpg|jpeg|webp|gif|svg|ico)',
        headers: [{ key: 'Cache-Control', value: longCache }],
      },
      {
        source: '/:all*(woff2|woff|ttf|otf)',
        headers: [{ key: 'Cache-Control', value: longCache }],
      },

      // REMOVIDO: cache longo para js/css (isso pode cachear /_next/static e quebrar updates)
      // {
      //   source: '/:all*(js|css)',
      //   headers: [{ key: 'Cache-Control', value: longCache }],
      // },
    ];
  },

  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
};

export default nextConfig;