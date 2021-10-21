const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withCSS({
  // se comentan este para develoment
  basePath: "/qa/out",
  assetPrefix: "https://www.bmosoluciones.com/qa/out",
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
