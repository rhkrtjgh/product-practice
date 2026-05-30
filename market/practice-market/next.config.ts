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
};

module.exports = nextConfig;
