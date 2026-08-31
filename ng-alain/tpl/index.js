"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const schematics_1 = require("@angular-devkit/schematics");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
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
        const argArr = val.substring(2).split('=');
        if (argArr.length === 2) {
            options.extraArgs[argArr[0]] = argArr[1];
        }
    });
}
function runFixJS(options) {
    parseExtraArgs(options);
    const fixScriptPath = path.join(options._tplDir, '_fix.js');
    if (fs.existsSync(fixScriptPath)) {
        return Promise.resolve(`${path.relative(__dirname, fixScriptPath)}`).then(s => __importStar(require(s))).then(a => {
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
        return runFixJS(options).then(() => (0, utils_1.buildAlain)(Object.assign({ schematicName: 'tpl' }, options)));
    };
}
//# sourceMappingURL=index.js.map