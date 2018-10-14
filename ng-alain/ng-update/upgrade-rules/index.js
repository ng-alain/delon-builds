"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const glob_1 = require("glob");
const project_tsconfig_paths_1 = require("./project-tsconfig-paths");
const tslint_config_1 = require("./tslint-config");
/** Creates a Angular schematic rule that runs the upgrade for the specified target version. */
function createUpgradeRule(targetVersion, upgradeConfig) {
    return (tree, context) => {
        const projectTsConfigPaths = project_tsconfig_paths_1.getProjectTsConfigPaths(tree);
        const tslintFixTasks = [];
        if (!projectTsConfigPaths.length) {
            throw new Error('Could not find any tsconfig file.');
        }
        const extraStyleFiles = glob_1.sync('!(node_modules|dist)/**/*.+(css|scss|less)', { absolute: true });
        const tslintConfig = tslint_config_1.createTslintConfig(targetVersion, Object.assign({ extraStyleFiles: extraStyleFiles }, upgradeConfig));
        for (const tsconfig of projectTsConfigPaths) {
            // Run the update tslint rules.
            tslintFixTasks.push(context.addTask(new tasks_1.TslintFixTask(tslintConfig, {
                silent: false,
                ignoreErrors: true,
                tsConfigPath: tsconfig,
            })));
        }
        // Delete the temporary schematics directory.
        context.addTask(new tasks_1.RunSchematicTask('ng-post-update', {}), tslintFixTasks);
    };
}
exports.createUpgradeRule = createUpgradeRule;
//# sourceMappingURL=index.js.map