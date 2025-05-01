import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifunhA6ltTu6tVc5-fOv2g7SwTf-dUW89c5Q5eRygq53GmBb1vm5_Kurx-Mg1NwbzREU&usqp=CAU"
      ),
    ],
  },
};

export default nextConfig;
