require("@babel/register")({
    presets: ["@babel/preset-env"]
  });
  
  // Import main file
  module.exports = require('./index.js')