const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '',

  devServer: {
    port: 8080,
    host: "172.16.10.133",
    https: false,
    open: true,
    proxy: {
      'wx://api.com': {
        target: 'wx://api.com',
        ws: true
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("src/base"))
      .set("static", resolve("src/static"));
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },

  assetsDir: "static",
  productionSourceMap: false,
  runtimeCompiler: false,
  filenameHashing: false
};
