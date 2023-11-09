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
exports.addESLintRule = exports.UpgradeMainVersions = void 0;
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
        `@angular-eslint/builder@^17.0.0`,
        `@angular-eslint/eslint-plugin@^17.0.0`,
        `@angular-eslint/eslint-plugin-template@^17.0.0`,
        `@angular-eslint/schematics@^17.0.0`,
        `@angular-eslint/template-parser@^17.0.0`,
        `@typescript-eslint/eslint-plugin@^6.10.0`,
        `@typescript-eslint/parser@^6.10.0`,
        `eslint@^8.53.0`,
        `eslint-config-prettier@~9.0.0`,
        `eslint-plugin-import@~2.29.0`,
        `eslint-plugin-jsdoc@~46.5.1`,
        `eslint-plugin-prefer-arrow@~1.2.3`,
        `eslint-plugin-prettier@~5.0.1`,
        `eslint-plugin-deprecation@~2.0.0`,
        `prettier@^3.0.3`,
        `husky@^8.0.3`,
        `ng-alain@${version}`,
        `ng-alain-plugin-theme@^16.0.0`,
        `source-map-explorer@^2.5.3`,
        `@angular/language-service@^17.0.0`,
        `ngx-tinymce@^17.0.0`,
        `@ng-util/monaco-editor@^17.0.0`,
        `@delon/testing@${version}`
    ], 'devDependencies');
    (0, package_1.addPackage)(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^17.0.0-beta.0`]);
}
exports.UpgradeMainVersions = UpgradeMainVersions;
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
exports.addESLintRule = addESLintRule;
//# sourceMappingURL=versions.js.map