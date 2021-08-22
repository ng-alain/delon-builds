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
      `@angular-eslint/builder@~12.3.1`,
      `@angular-eslint/eslint-plugin@~12.3.1`,
      `@angular-eslint/eslint-plugin-template@~12.3.1`,
      `@angular-eslint/schematics@~12.3.1`,
      `@angular-eslint/template-parser@~12.3.1`,
      `@typescript-eslint/eslint-plugin@~4.29.2`,
      `@typescript-eslint/parser@~4.29.2`,
      `eslint@^7.32.0`,
      `eslint-config-prettier@^2.2.1`,
      `eslint-plugin-import@~2.24.1`,
      `eslint-plugin-jsdoc@~36.0.7`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@^2.2.1`,
      `prettier@^2.2.1`,
      `husky@^6.0.0`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^12.0.0`,
      `source-map-explorer@^2.5.2`,
      `@angular/language-service@~12.2.0`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, ['ajv@^8.6.2', 'ajv-formats@^2.1.1']);
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
