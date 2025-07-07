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
        `angular-eslint@^20.0.0`,
        `@typescript-eslint/eslint-plugin@^8.29.1`,
        `@typescript-eslint/parser@^8.29.1`,
        `@typescript-eslint/utils@^8.29.1`,
        `eslint@^9.28.0`,
        `eslint-config-prettier@^10.1.2`,
        `eslint-plugin-import@~2.31.0`,
        `eslint-plugin-jsdoc@~51.0.3`,
        `eslint-plugin-prefer-arrow@~1.2.3`,
        `eslint-plugin-prettier@~5.5.0`,
        `eslint-plugin-unused-imports@^4.1.4`,
        `typescript-eslint@^8.34.1`,
        `prettier@^3.5.3`,
        `husky@^9.1.7`,
        `ng-alain@${version}`,
        `ng-alain-plugin-theme@^18.0.0`,
        `source-map-explorer@^2.5.3`,
        `ngx-tinymce@^20.0.0`,
        `@ng-util/monaco-editor@^20.0.0`,
        `@delon/testing@${version}`
    ], 'devDependencies');
    (0, package_1.addPackage)(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^20.0.0`]);
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