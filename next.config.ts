import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora los errores de ESLint durante la construcción
  },
  webpack: (config, { isServer }) => {
    // Configuración para manejar archivos GLB y GLTF
    config.module.rules.push({
      test: /\.(glb|gltf)$/, // Aplica esta regla a archivos .glb y .gltf
      use: {
        loader: 'file-loader', // Usa file-loader para manejar estos archivos
        options: {
          publicPath: '/_next/static/images', // Ruta pública donde se servirán los archivos
          outputPath: 'static/images', // Ruta de salida en la carpeta .next
          name: '[name].[hash].[ext]', // Nombre del archivo con hash para evitar caché
        },
      },
    });

    return config; // Devuelve la configuración modificada
  },
};

export default nextConfig;