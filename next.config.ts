import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import path from "path";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: ["192.168.88.79", "192.168.1.8", "localhost:3000"],
};

export default withNextIntl(nextConfig);
