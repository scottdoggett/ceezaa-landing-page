import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bl974d7s47.ufs.sh",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
};

export default config;
