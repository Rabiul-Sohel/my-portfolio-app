/** @type {import('next').NextConfig} */
const nextConfig = {
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
