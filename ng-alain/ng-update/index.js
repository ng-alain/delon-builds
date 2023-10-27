"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.updateToV16 = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const schematics_2 = require("@angular-devkit/schematics");
const upgrade_data_1 = require("./upgrade-data");
const v16_1 = require("./upgrade-rules/v16");
const migrations = [];
function updateToV16() {
    return (0, schematics_2.chain)([(0, v16_1.v16Rule)(), (0, schematics_1.createMigrationSchematicRule)(schematics_1.TargetVersion.V16, migrations, upgrade_data_1.ruleUpgradeData, postUpdate)]);
}
exports.updateToV16 = updateToV16;
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