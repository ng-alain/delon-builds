"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const fs = require("fs");
const path = require("path");
const utils_1 = require("../utils");
const REFER = `, please refer to: https://ng-alain.com/cli/generate#Customtemplatepage`;
function genFiles(options) {
    options._tplDir = path.join(process.cwd(), './_cli-tpl');
    try {
        fs.accessSync(options._tplDir);
    }
    catch (_a) {
        throw new schematics_1.SchematicsException(`Invalid path [${options._tplDir}]${REFER}`);
    }
    const names = fs.readdirSync(options._tplDir);
    if (names.indexOf(options.tplName) === -1) {
        throw new schematics_1.SchematicsException(`Could not find name [${options.tplName}] templates in ${options._tplDir}${REFER}`);
    }
    options._filesPath = path.relative(__dirname, path.join(options._tplDir, options.tplName));
}
function parseExtraArgs(options) {
    const org = options['--'];
    if (!org || !Array.isArray(org)) {
        return;
    }
    options.extraArgs = {};
    org.forEach(val => {
        const argArr = val.substr(2).split('=');
        if (argArr.length === 2) {
            options.extraArgs[argArr[0]] = argArr[1];
        }
    });
}
function runFixJS(options) {
    parseExtraArgs(options);
    const fixScriptPath = path.join(options._tplDir, '_fix.js');
    if (fs.existsSync(fixScriptPath)) {
        return Promise.resolve().then(() => require(path.relative(__dirname, fixScriptPath))).then(a => {
            if (a.fix) {
                return a.fix(options);
            }
            return Promise.resolve();
        });
    }
    return Promise.resolve();
}
function default_1(options) {
    genFiles(options);
    return () => {
        return runFixJS(options).then(() => utils_1.buildAlain(Object.assign({ schematicName: 'tpl' }, options)));
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map