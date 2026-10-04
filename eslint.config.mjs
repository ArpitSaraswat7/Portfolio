import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "reference/**",
      "components/ui/AeroShards.jsx",
    ],
  },
];

export default config;
