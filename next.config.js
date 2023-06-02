/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        urlImports: ['http://chileaccesorios.com/', 'https://cdn.skypack.dev'],
        appDir: true
    },
    reactStrictMode: true
}

module.exports = nextConfig
