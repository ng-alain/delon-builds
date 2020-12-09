"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.updateToV11 = exports.updateToV10 = exports.updateToV9 = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const v10Rule_1 = require("./upgrade-rules/v10/v10Rule");
const v11_1 = require("./upgrade-rules/v11");
const v9Rule_1 = require("./upgrade-rules/v9/v9Rule");
function updateToV9() {
    return schematics_1.chain([v9Rule_1.v9Rule]);
}
exports.updateToV9 = updateToV9;
function updateToV10() {
    return schematics_1.chain([v10Rule_1.v10Rule]);
}
exports.updateToV10 = updateToV10;
function updateToV11() {
    return schematics_1.chain([v11_1.v11Rule]);
}
exports.updateToV11 = updateToV11;
/** Post-update schematic to be called when update is finished. */
function postUpdate(context, targetVersion, hasFailures) {
    context.logger.info('');
    context.logger.info(`  ✓  Updated NG-ALAIN to ${targetVersion}`);
    context.logger.info('');
    if (hasFailures) {
        context.logger.warn('  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
            'output above and fix these issues manually.');
    }
}
exports.postUpdate = postUpdate;
//# sourceMappingURL=index.js.map