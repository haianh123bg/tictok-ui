const { override, useBabelRc } = require("customize-cra");


module.exports = override(// config-overrides.js
    useBabelRc()
);