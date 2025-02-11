// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "api.imgflip.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "i.imgflip.com",
          port: "",
          pathname: "**",
        },
      ],
    },
  };
  
  export default nextConfig;