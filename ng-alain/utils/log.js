"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logStart = logStart;
exports.logInfo = logInfo;
exports.logWarn = logWarn;
exports.logEx = logEx;
exports.logFinished = logFinished;
const listr2_1 = require("listr2");
function logStart(context, message) {
    context.logger.info(`${listr2_1.color.green('✓')} ${message}`);
}
function logInfo(context, message) {
    context.logger.info(`  ${listr2_1.color.green('✓')} ${message}`);
}
function logWarn(context, message) {
    context.logger.info(`  ${listr2_1.color.yellow(`⚠ ${message}`)}`);
}
function logEx(context, message) {
    context.logger.error(`  ${listr2_1.color.yellow(`x ${message}`)}`);
}
function logFinished(context, message) {
    context.logger.info(`${listr2_1.color.green(`✓ ${message}`)}`);
}
//# sourceMappingURL=log.js.map