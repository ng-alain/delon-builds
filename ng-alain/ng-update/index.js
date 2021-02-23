"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.updateToV11 = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const v11_1 = require("./upgrade-rules/v11");
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