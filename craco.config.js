const CracoLessPlugin = require("craco-less");
const path = require("path");

const resolvePath = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("src"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
