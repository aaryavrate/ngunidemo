const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

var entry = {  };
fs.readdirSync(path.join(__dirname, "api/ctrls"))
  .filter((f) => path.parse(f).ext.toLowerCase() === ".js")
  .forEach((f) => {
    var name = path.parse(f).name;
    console.log(name, __dirname+"/api/ctrls/" + name,f)
    entry[__dirname+"/api/ctrls/" + name] = path.join(
      __dirname,
      "api/ctrls",
      f
    );
  });


module.exports = (config, options, targetOptions) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      entry: entry,
      output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[ext]",
      },
      target: 'node',
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              //"file-loader",
              {
                loader: "'file-loader'",
                options: {
                  name: 'api/ctrls/[name].js',
                  publicPath: (p) => p.replace("api/ctrls", ""),
                },
              },
            ]
          }
        ]
      }
    })
  );

  return config;
};
