"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginIE = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const colors = require("ansi-colors");
const utils_1 = require("../utils");
const tsconfig_es5_app_1 = require("./files/ie/tsconfig-es5.app");
const tsconfig_es5_spec_1 = require("./files/ie/tsconfig-es5.spec");
let project;
function setAngularJson(options) {
    return workspace_1.updateWorkspace((workspace) => __awaiter(this, void 0, void 0, function* () {
        const p = utils_1.getProjectFromWorkspace(workspace, options.project);
        if (options.type === 'add') {
            p.targets.get(utils_1.BUILD_TARGET_BUILD).configurations.es5 = { tsConfig: './tsconfig-es5.app.json' };
            p.targets.get(utils_1.BUILD_TARGET_SERVE).configurations.es5 = { browserTarget: `${options.project}:${utils_1.BUILD_TARGET_BUILD}:es5` };
            p.targets.get(utils_1.BUILD_TARGET_TEST).configurations = {
                es5: { tsConfig: './tsconfig-es5.app.json' },
            };
            p.targets.get(utils_1.BUILD_TARGET_E2E).configurations.es5 = { browserTarget: `${options.project}:${utils_1.BUILD_TARGET_BUILD}:es5` };
        }
        else {
            [utils_1.BUILD_TARGET_BUILD, utils_1.BUILD_TARGET_SERVE, utils_1.BUILD_TARGET_TEST, utils_1.BUILD_TARGET_E2E]
                .map(key => p.targets.get(key))
                .filter(item => !!item)
                .forEach(item => {
                delete item.configurations.es5;
            });
        }
    }));
}
function setBrowserslist(options) {
    return (tree) => {
        const filePath = `${options.root}/.browserslistrc`;
        let content = utils_1.readContent(tree, filePath);
        if (options.type === 'add') {
            content = content.replace(`not IE 11`, `IE 11`);
        }
        else {
            content = content.replace(`IE 11`, `not IE 11`);
        }
        utils_1.overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
    };
}
function setPackage(options) {
    return (tree) => {
        // libs
        (options.type === 'add' ? utils_1.addPackage : utils_1.removePackage)(tree, ['classlist.js@^1.1.0', 'web-animations-js@^2.3.2'], 'dependencies');
        // scripts
        (options.type === 'add' ? utils_1.addPackage : utils_1.removePackage)(tree, ['ie:start@ng serve -o --configuration es5', 'ie:hmr@ng serve --hmr --configuration es5'], 'scripts');
    };
}
function setPolyfills(options) {
    return (tree) => {
        const filePath = `${project.sourceRoot}/polyfills.ts`;
        let content = '';
        if (options.type === 'add') {
            content = `import 'core-js/modules/es.array.includes';
import 'classlist.js';
import 'web-animations-js';
import 'zone.js/dist/zone';`;
        }
        else {
            content = `import 'zone.js/dist/zone';`;
        }
        utils_1.overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
    };
}
function setTsConfig(options) {
    return (tree) => {
        const buildFilePath = `${options.root}/tsconfig-es5.app.json`;
        if (tree.exists(buildFilePath)) {
            tree.delete(buildFilePath);
        }
        if (options.type === 'add') {
            utils_1.overwriteFile({
                tree,
                filePath: buildFilePath,
                content: JSON.stringify(tsconfig_es5_app_1.default, null, 2),
                overwrite: true,
                contentIsString: true,
            });
        }
        // spec
        const specFilePath = `${options.root}/tsconfig-es5.spec.json`;
        if (tree.exists(specFilePath))
            tree.delete(specFilePath);
        if (options.type === 'add') {
            utils_1.overwriteFile({
                tree,
                filePath: specFilePath,
                content: JSON.stringify(tsconfig_es5_spec_1.default, null, 2),
                overwrite: true,
                contentIsString: true,
            });
        }
    };
}
function finished() {
    return (_, context) => {
        context.logger.info(colors.yellow(`  ⚠  If you encounter [No provider for AlainConfigService], please refer to https://github.com/ng-alain/ng-alain/issues/1624#issuecomment-623071468`));
    };
}
function pluginIE(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        project = (yield utils_1.getProject(tree, options.project)).project;
        return schematics_1.chain([
            setAngularJson(options),
            setBrowserslist(options),
            setPackage(options),
            setPolyfills(options),
            setTsConfig(options),
            finished(),
        ]);
    });
}
exports.pluginIE = pluginIE;
//# sourceMappingURL=plugin.ie.js.map