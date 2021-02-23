"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdate = exports.updateToV12 = exports.updateToV11 = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const upgrade_data_1 = require("./upgrade-data");
const _src_to_nz_image_rule_1 = require("./upgrade-rules/checks/_src-to-nz-image-rule");
const v11_1 = require("./upgrade-rules/v11");
const migrations = [_src_to_nz_image_rule_1.SrcToNzImageRule];
function updateToV11() {
    return schematics_1.chain([v11_1.v11Rule]);
}
exports.updateToV11 = updateToV11;
function updateToV12() {
    return schematics_2.createMigrationSchematicRule(schematics_2.TargetVersion.V12, migrations, upgrade_data_1.ruleUpgradeData, postUpdate);
}
exports.updateToV12 = updateToV12;
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