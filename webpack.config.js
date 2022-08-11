const path = require("path");
const webpack = require("webpack");
const isDevMode = process.env.NODE_ENV !== "production";
const environment = require("./config/webpack/environment");
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm =>
  crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
const config = {
  mode: isDevMode ? "development" : "production"
};
// module.exports = config;
module.exports = environment.toWebpackConfig();
