import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Esto ignora los errores de ESLint durante la construcción
  },
};

export default nextConfig;
