/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"lh3.googleusercontent.com",
            },
            {
                protocol:"https",
                hostname:"i.ibb.co"
            },
            {
                protocol:"https",
                hostname:"encrypted-tbn0.gstatic.com"
            }
        ]
    }
}

module.exports = nextConfig
