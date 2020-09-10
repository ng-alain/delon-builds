"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries

# For the full list of supported browsers by the Angular framework, please see:
# https://angular.io/guide/browser-support

# You can see what browsers were selected by your queries by running:
#   npx browserslist

last 1 Chrome version
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
Firefox ESR
not IE 9-10 # Angular support for IE 9-10 has been deprecated and will be removed as of Angular v11. To opt-in, remove the 'not' prefix on this line.
not IE 11 # Angular supports IE 11 only as an opt-in. To opt-in, remove the 'not' prefix on this line.`;
//# sourceMappingURL=browserslistrc.js.map