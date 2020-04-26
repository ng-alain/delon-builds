declare const _default: "#!/usr/bin/env node\n\nmodule.exports = {\n  \"src/**/*.ts\": () => [\n    \"npm run lint:ts\",\n    \"git add\"\n  ],\n  \"src/**/*.html\": [\n    \"./node_modules/.bin/prettier --write\",\n    \"git add\"\n  ],\n  \"src/**/*.less\": [\n    \"npm run lint:style\",\n    \"git add\"\n  ],\n}";
export default _default;
