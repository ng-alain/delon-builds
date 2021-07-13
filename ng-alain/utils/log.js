"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarn = exports.logInfo = exports.logStart = void 0;
const color_1 = require("@angular/cli/utilities/color");
function logStart(context, message) {
    context.logger.info(`    ${color_1.colors.green('✓')} ${message}`);
}
exports.logStart = logStart;
function logInfo(context, message) {
    context.logger.info(`        ${color_1.colors.green('✓')} ${message}`);
}
exports.logInfo = logInfo;
function logWarn(context, message) {
    context.logger.info(`        ${color_1.colors.yellow('✓')} ${message}`);
}
exports.logWarn = logWarn;
//# sourceMappingURL=log.js.map