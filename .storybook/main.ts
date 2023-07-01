import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Initialize config.resolve if it is undefined
    if (!config.resolve) {
      config.resolve = {
        extensions: [],
        alias: {},
      };
    }

    // Add the TypeScript paths to Webpack's resolver
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@lib": path.resolve(__dirname, "../src/components/lib"),
    };

    return config;
  },
};

export default config;
