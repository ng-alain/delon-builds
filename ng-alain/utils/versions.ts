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
      `@angular-eslint/builder@~16.1.1`,
      `@angular-eslint/eslint-plugin@~16.1.1`,
      `@angular-eslint/eslint-plugin-template@~16.1.1`,
      `@angular-eslint/schematics@~16.1.1`,
      `@angular-eslint/template-parser@~16.1.1`,
      `@typescript-eslint/eslint-plugin@~6.4.1`,
      `@typescript-eslint/parser@~6.4.1`,
      `eslint@^8.48.0`,
      `eslint-config-prettier@~9.0.0`,
      `eslint-plugin-import@~2.28.1`,
      `eslint-plugin-jsdoc@~46.5.0`,
      `eslint-plugin-prefer-arrow@~1.2.3`,
      `eslint-plugin-prettier@~5.0.0`,
      `eslint-plugin-deprecation@~1.5.0`,
      `prettier@^3.0.2`,
      `husky@^8.0.3`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@^15.0.1`,
      `source-map-explorer@^2.5.3`,
      `@angular/language-service@^16.2.0`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@~7.8.0`, `ng-zorro-antd@^16.2.2`]);
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
