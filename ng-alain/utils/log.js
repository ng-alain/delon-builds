"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logFinished = exports.logEx = exports.logWarn = exports.logInfo = exports.logStart = void 0;
const colors = require("ansi-colors");
function logStart(context, message) {
    context.logger.info(`${colors.green('✓')} ${message}`);
}
exports.logStart = logStart;
function logInfo(context, message) {
    context.logger.info(`  ${colors.green('✓')} ${message}`);
}
exports.logInfo = logInfo;
function logWarn(context, message) {
    context.logger.info(`  ${colors.yellow(`⚠ ${message}`)}`);
}
exports.logWarn = logWarn;
function logEx(context, message) {
    context.logger.error(`  ${colors.yellow(`x ${message}`)}`);
}
exports.logEx = logEx;
function logFinished(context, message) {
    context.logger.info(`${colors.green(`✓ ${message}`)}`);
}
exports.logFinished = logFinished;
//# sourceMappingURL=log.js.map