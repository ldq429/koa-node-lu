const fs = require("fs");

const strConfig = fs.readFileSync(__dirname + "/config.json");

module.exports = JSON.parse(strConfig);