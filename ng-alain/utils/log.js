"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logStart = logStart;
exports.logInfo = logInfo;
exports.logWarn = logWarn;
exports.logEx = logEx;
exports.logFinished = logFinished;
const colors = require("ansi-colors");
function logStart(context, message) {
    context.logger.info(`${colors.green('✓')} ${message}`);
}
function logInfo(context, message) {
    context.logger.info(`  ${colors.green('✓')} ${message}`);
}
function logWarn(context, message) {
    context.logger.info(`  ${colors.yellow(`⚠ ${message}`)}`);
}
function logEx(context, message) {
    context.logger.error(`  ${colors.yellow(`x ${message}`)}`);
}
function logFinished(context, message) {
    context.logger.info(`${colors.green(`✓ ${message}`)}`);
}
//# sourceMappingURL=log.js.map