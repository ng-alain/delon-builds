"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@schematics/angular/utility/config");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const tslint_update_1 = require("./tslint-update");
function createUpdateRule(targetVersion) {
    return (tree, context) => {
        const tslintFixTasks = [];
        const allTsConfigPaths = getTsConfigPaths(tree);
        if (!allTsConfigPaths.length) {
            throw new Error('Could not find any tsconfig file. Please submit an issue on the Angular ' +
                'Material repository that includes the name of your TypeScript configuration.');
        }
        const tslintConfig = tslint_update_1.createTslintConfig(targetVersion);
        for (const tsconfig of allTsConfigPaths) {
            // Run the update tslint rules.
            tslintFixTasks.push(context.addTask(new tasks_1.TslintFixTask(tslintConfig, {
                silent: false,
                ignoreErrors: true,
                tsConfigPath: tsconfig,
            })));
        }
        context.addTask(new tasks_1.RunSchematicTask('ng-post-update', {}), tslintFixTasks);
    };
}
exports.createUpdateRule = createUpdateRule;
/**
 * Gets all tsconfig paths from a CLI project by reading the workspace configuration
 * and looking for common tsconfig locations.
 */
function getTsConfigPaths(tree) {
    // Start with some tsconfig paths that are generally used.
    const tsconfigPaths = [
        './tsconfig.json',
        './src/tsconfig.json',
        './src/tsconfig.app.json',
    ];
    // Add any tsconfig directly referenced in a build or test task of the angular.json workspace.
    const workspace = config_1.getWorkspace(tree);
    for (const project of Object.values(workspace.projects)) {
        if (project && (project.targets || project.architect)) {
            for (const taskName of ['build', 'test']) {
                const task = (project.targets || project.architect)[taskName];
                if (task && task.options && task.options.tsConfig) {
                    const tsConfigOption = task.options.tsConfig;
                    if (typeof tsConfigOption === 'string') {
                        tsconfigPaths.push(tsConfigOption);
                    }
                    else if (Array.isArray(tsConfigOption)) {
                        tsconfigPaths.push(...tsConfigOption);
                    }
                }
            }
        }
    }
    // Filter out tsconfig files that don't exist and remove any duplicates.
    return tsconfigPaths
        .filter(p => tree.exists(p))
        .filter((value, index, self) => self.indexOf(value) === index);
}
//# sourceMappingURL=update.js.map