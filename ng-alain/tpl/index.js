"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const path = require("path");
const fs = require("fs");
const alain_1 = require("../utils/alain");
const project_1 = require("../utils/project");
const REFER = ', please refer to: https://ng-alain.com/cli/generate#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5';
function genFiles(options) {
    return (host, context) => {
        const project = project_1.getProject(host, options.project);
        const tplDir = path.join(process.cwd(), './_cli-tpl');
        try {
            fs.accessSync(tplDir);
        }
        catch (_a) {
            throw new schematics_1.SchematicsException(`Invalid path [${tplDir}]${REFER}`);
        }
        const names = fs.readdirSync(tplDir);
        if (names.indexOf(options.tplName) === -1) {
            throw new schematics_1.SchematicsException(`Could not find name [${options.tplName}] templates${REFER}`);
        }
        options._filesPath = path.relative(__dirname, path.join(tplDir, options.tplName));
    };
}
function default_1(options) {
    return schematics_1.chain([genFiles(options), alain_1.buildAlain(options)]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map