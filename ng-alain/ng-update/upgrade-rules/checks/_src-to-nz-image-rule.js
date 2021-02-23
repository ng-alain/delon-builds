"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrcToNzImageRule = void 0;
const schematics_1 = require("@angular/cdk/schematics");
class SrcToNzImageRule extends schematics_1.Migration {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V12;
    }
    visitTemplate(template) {
        const deprecatedComponent = (deprecated) => {
            schematics_1.findInputsOnElementWithAttr(template.content, '_src', [deprecated]).forEach(offset => {
                this.failures.push({
                    filePath: template.filePath,
                    position: template.getCharacterAndLineOfPosition(offset),
                    message: `Found deprecated "${deprecated}" component. Use "nz-image" to instead please.`,
                });
            });
        };
        deprecatedComponent('_src');
        deprecatedComponent('[_src]');
    }
}
exports.SrcToNzImageRule = SrcToNzImageRule;
//# sourceMappingURL=_src-to-nz-image-rule.js.map