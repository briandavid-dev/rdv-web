const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withCSS({
  basePath: process.env.BASE_PATH,
  // assetPrefix: process.env.ASSET_PREFIX,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
});

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: "url-loader",
//             options: {
//               limit: 8192,
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// module.exports[module] = {
//   rules: [
//     {
//       test: /\.(png|jpg|gif)$/i,
//       use: [
//         {
//           loader: "url-loader",
//           options: {
//             limit: 8192,
//           },
//         },
//       ],
//     },
//   ],
// };
