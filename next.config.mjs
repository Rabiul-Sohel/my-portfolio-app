/** @type {import('next').NextConfig} */
const nextConfig = {
  // exportPathMap: async function () {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/contact': { page: '/contact' },
  //     '/blog': { page: '/blog' },
  //   };
  // },
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js',
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**' ,
           
          },
        ],
      },
    //   images: {
            
    //       },
      output: 'export',
};

export default nextConfig;
