import { Tree, Rule, SchematicContext } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { VERSION } from './lib-versions';
import { logInfo } from './log';
import { addPackage } from './package';
import { BUILD_TARGET_LINT } from './workspace';

/**
 * 修复主要依赖的版本号
 */
export function UpgradeMainVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`)
  );
  addPackage(
    tree,
    [
      `@angular-eslint/builder@~13.1.0`,
      `@angular-eslint/eslint-plugin@~13.1.0`,
      `@angular-eslint/eslint-plugin-template@~13.1.0`,
      `@angular-eslint/schematics@~13.1.0`,
      `@angular-eslint/template-parser@~13.1.0`,
      `@typescript-eslint/eslint-plugin@~5.14.0`,
      `@typescript-eslint/parser@~5.14.0`,
      `eslint@^8.10.0`,
      `eslint-config-prettier@^2.5.1`,
      `eslint-plugin-import@~2.25.4`,
      `eslint-plugin-jsdoc@~37.9.7`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@^2.5.1`,
      `prettier@^2.5.1`,
      `husky@^6.0.0`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^13.0.3`,
      `source-map-explorer@^2.5.2`,
      `@angular/language-service@~13.1.1`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [
    `ng-zorro-antd@^13.1.1`,
    'ajv@^8.8.2',
    'ajv-formats@^2.1.1'
  ]);
}

export function addESLintRule(context: SchematicContext, showLog: Boolean = true): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach(project => {
      if (project.targets.has(BUILD_TARGET_LINT)) {
        project.targets.delete(BUILD_TARGET_LINT);
      }
      project.targets.set(BUILD_TARGET_LINT, {
        builder: '@angular-eslint/builder:lint',
        options: {
          lintFilePatterns: ['src/**/*.ts', 'src/**/*.html']
        }
      });
    });
    if (showLog) {
      logInfo(context, `Update 'lint' node in angular.json`);
    }
  });
}
