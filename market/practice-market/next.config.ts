import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: (() => {
    //styledComponents 활성화
    let compilerConfig = {
      styledComponents: true,
    }

    if(process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        
      }
    }
    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUPLIC_API_BASE_PATH}/:match*`,
      },
    ]
  },
};

module.exports = nextConfig;
