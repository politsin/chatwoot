const path = require("path");
const webpack = require("webpack");
const isDevMode = process.env.NODE_ENV !== "production";
const environment = require("./config/webpack/environment");
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm =>
  crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
const configCustom = {
  mode: isDevMode ? "development" : "production"
};
// Config from @rails/webpacker
const config = environment.toWebpackConfig();

const PUBLIC_PATH = "/themes/chatwoot/public/packs/";
config.output.publicPath = PUBLIC_PATH;

module.exports = config;
