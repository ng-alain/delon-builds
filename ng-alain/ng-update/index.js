"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.updateToV13 = exports.updateToV12 = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const schematics_2 = require("@angular-devkit/schematics");
const upgrade_data_1 = require("./upgrade-data");
const _src_to_nz_image_rule_1 = require("./upgrade-rules/checks/_src-to-nz-image-rule");
const v12_1 = require("./upgrade-rules/v12");
const v13_1 = require("./upgrade-rules/v13");
const migrations = [_src_to_nz_image_rule_1.SrcToNzImageRule];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateToV12(schema) {
    const rule = (0, v12_1.v12Rule)(schema);
    return (0, schematics_2.chain)([rule, (0, schematics_1.createMigrationSchematicRule)(schematics_1.TargetVersion.V12, migrations, upgrade_data_1.ruleUpgradeData, postUpdate)]);
}
exports.updateToV12 = updateToV12;
function updateToV13() {
    return (0, schematics_2.chain)([(0, v13_1.v13Rule)(), (0, schematics_1.createMigrationSchematicRule)(schematics_1.TargetVersion.V13, migrations, upgrade_data_1.ruleUpgradeData, postUpdate)]);
}
exports.updateToV13 = updateToV13;
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