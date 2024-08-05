"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeMajorVersion = getNodeMajorVersion;
function getNodeMajorVersion() {
    return +process.version.match(/^v(\d+)/)[1];
}
//# sourceMappingURL=node.js.map