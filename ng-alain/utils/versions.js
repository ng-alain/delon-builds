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
const log_1 = require("./log");
const package_1 = require("./package");
const workspace_2 = require("./workspace");
/**
 * 修复主要依赖的版本号
 */
function UpgradeMainVersions(tree, version = lib_versions_1.VERSION) {
    (0, package_1.addPackage)(tree, ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`));
    (0, package_1.addPackage)(tree, [
        `@angular-eslint/builder@~13.0.1`,
        `@angular-eslint/eslint-plugin@~13.0.1`,
        `@angular-eslint/eslint-plugin-template@~13.0.1`,
        `@angular-eslint/schematics@~13.0.1`,
        `@angular-eslint/template-parser@~13.0.1`,
        `@typescript-eslint/eslint-plugin@~5.8.1`,
        `@typescript-eslint/parser@~5.8.1`,
        `eslint@^8.5.0`,
        `eslint-config-prettier@^2.5.1`,
        `eslint-plugin-import@~2.25.3`,
        `eslint-plugin-jsdoc@~37.4.0`,
        `eslint-plugin-prefer-arrow@~1.2.3`,
        `eslint-plugin-prettier@^2.5.1`,
        `prettier@^2.5.1`,
        `husky@^6.0.0`,
        `ng-alain@${version}`,
        `ng-alain-plugin-theme@^13.0.1`,
        `source-map-explorer@^2.5.2`,
        `@angular/language-service@~13.1.1`,
        `@delon/testing@${version}`
    ], 'devDependencies');
    (0, package_1.addPackage)(tree, ['ajv@^8.8.2', 'ajv-formats@^2.1.1']);
}
exports.UpgradeMainVersions = UpgradeMainVersions;
function addESLintRule(context, showLog = true) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        workspace.projects.forEach(project => {
            if (project.targets.has(workspace_2.BUILD_TARGET_LINT)) {
                project.targets.delete(workspace_2.BUILD_TARGET_LINT);
            }
            project.targets.set(workspace_2.BUILD_TARGET_LINT, {
                builder: '@angular-eslint/builder:lint',
                options: {
                    lintFilePatterns: ['src/**/*.ts', 'src/**/*.html']
                }
            });
        });
        if (showLog) {
            (0, log_1.logInfo)(context, `Update 'lint' node in angular.json`);
        }
    }));
}
exports.addESLintRule = addESLintRule;
//# sourceMappingURL=versions.js.map