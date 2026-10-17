import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pure static site: no server, no runtime APIs; deploy the `out/` folder anywhere
  output: "export",
};

export default nextConfig;
