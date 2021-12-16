"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeMajorVersion = void 0;
function getNodeMajorVersion() {
    return +process.version.match(/^v(\d+)/)[1];
}
exports.getNodeMajorVersion = getNodeMajorVersion;
//# sourceMappingURL=node.js.map