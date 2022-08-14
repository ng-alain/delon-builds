"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarn = exports.logInfo = exports.logStart = void 0;
const colors = require("ansi-colors");
function logStart(context, message) {
    context.logger.info(`  ${colors.green('✓')} ${message}`);
}
exports.logStart = logStart;
function logInfo(context, message) {
    context.logger.info(`    ${colors.green('✓')} ${message}`);
}
exports.logInfo = logInfo;
function logWarn(context, message) {
    context.logger.info(`    ${colors.yellow('✓')} ${message}`);
}
exports.logWarn = logWarn;
//# sourceMappingURL=log.js.map