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
exports.UpgradeMainVersions = UpgradeMainVersions;
exports.addESLintRule = addESLintRule;
const workspace_1 = require("@schematics/angular/utility/workspace");
const lib_versions_1 = require("./lib-versions");
const package_1 = require("./package");
const workspace_2 = require("./workspace");
/**
 * 修复主要依赖的版本号
 */
function UpgradeMainVersions(tree, version = lib_versions_1.VERSION) {
    (0, package_1.addPackage)(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`));
    (0, package_1.addPackage)(tree, [
        `angular-eslint@^22.1.0`,
        `@typescript-eslint/eslint-plugin@undefined`,
        `@typescript-eslint/parser@undefined`,
        `@typescript-eslint/utils@undefined`,
        `eslint@^10.8.1`,
        `eslint-config-prettier@undefined`,
        `eslint-plugin-import@undefined`,
        `eslint-plugin-jsdoc@^64.2.0`,
        `eslint-plugin-prefer-arrow@undefined`,
        `eslint-plugin-prettier@^5.5.6`,
        `eslint-plugin-unused-imports@^4.4.1`,
        `typescript@~6.0.2`,
        `typescript-eslint@^8.67.0`,
        `prettier@^3.9.6`,
        `husky@^9.1.7`,
        `ng-alain@${version}`,
        `ng-alain-plugin-theme@^18.0.0`,
        `source-map-explorer@^2.5.3`,
        `ngx-tinymce@^22.0.0`,
        `@ng-util/monaco-editor@^22.0.0`,
        `@delon/testing@${version}`,
        // vi test
        // `@playwright/test@undefined`,
        // `@vitest/browser-playwright@undefined`,
        // `@vitest/coverage-v8@^4.1.10`,
        // `vitest@undefined`,
        // `jsdom@undefined`,
        // When use vitest
        `@playwright/test@^1.57.0`,
        `@vitest/browser-playwright@^4.0.17`,
        `@vitest/coverage-v8@^4.0.16`,
        `vitest@^4.0.16`,
        `jsdom@^27.4.0`
    ], 'devDependencies');
    (0, package_1.addPackage)(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^22.0.1`]);
}
function addESLintRule(projectName) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = (0, workspace_2.getProjectFromWorkspace)(workspace, projectName);
        if (project == null)
            return;
        if (project.targets.has(workspace_2.BUILD_TARGET_LINT)) {
            project.targets.delete(workspace_2.BUILD_TARGET_LINT);
        }
        project.targets.set(workspace_2.BUILD_TARGET_LINT, {
            builder: '@angular-eslint/builder:lint',
            options: {
                lintFilePatterns: ['src/**/*.ts', 'src/**/*.html']
            }
        });
    }));
}
//# sourceMappingURL=versions.js.map